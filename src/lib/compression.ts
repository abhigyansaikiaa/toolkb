export interface CompressionResult {
  blob: Blob;
  size: number;
  width: number;
  height: number;
}

import {
  MAX_IMAGE_WIDTH,
  MAX_IMAGE_HEIGHT,
  MAX_IMAGE_PIXELS,
  ALLOWED_MIME_TYPES,
  MAX_IMAGE_SIZE_BYTES,
  MIN_TARGET_KB,
  MAX_TARGET_KB,
  MAX_COMPRESSION_ITERATIONS,
  MAX_RESIZE_ITERATIONS
} from "./security";

/**
 * Compresses an image to fit within the targetKB limit using binary search for quality.
 * Falls back to dimension reduction if quality alone isn't enough.
 *
 * This function runs on the MAIN THREAD using HTMLCanvasElement.
 * It is used as a fallback for browsers that do not support OffscreenCanvas.
 * Prefer `compressImageSmart` for new call sites.
 */
export async function compressImage(
  file: File,
  targetKB: number,
): Promise<CompressionResult> {
  if (file.size > MAX_IMAGE_SIZE_BYTES) {
    throw new Error(`File is too large. Maximum allowed size is ${MAX_IMAGE_SIZE_BYTES / (1024 * 1024)} MB.`);
  }
  if (!ALLOWED_MIME_TYPES.includes(file.type)) {
    throw new Error("Unsupported file type.");
  }
  if (targetKB < MIN_TARGET_KB || targetKB > MAX_TARGET_KB) {
    throw new Error(`Target KB must be between ${MIN_TARGET_KB} and ${MAX_TARGET_KB}.`);
  }

  const targetBytes = targetKB * 1024;

  // Create an object URL and load image
  let img = new Image();
  const url = URL.createObjectURL(file);

  try {
    await new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = reject;
      img.src = url;
    });

    if (img.width > MAX_IMAGE_WIDTH || img.height > MAX_IMAGE_HEIGHT || (img.width * img.height) > MAX_IMAGE_PIXELS) {
      throw new Error("Image dimensions exceed the maximum allowed limits (Decompression bomb protection).");
    }
  } finally {
    URL.revokeObjectURL(url);
  }

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    throw new Error("Canvas 2D context not supported");
  }

  // Initial dimensions
  let currentWidth = img.width;
  let currentHeight = img.height;

  // Set canvas size
  canvas.width = currentWidth;
  canvas.height = currentHeight;
  ctx.drawImage(img, 0, 0, currentWidth, currentHeight);

  // Helper to get Blob size
  const getBlob = (quality: number, width: number, height: number): Promise<Blob> => {
    return new Promise((resolve, reject) => {
      // Re-draw if dimensions changed
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        ctx!.drawImage(img, 0, 0, width, height);
      }

      canvas.toBlob(
        (blob) => {
          if (blob) resolve(blob);
          else reject(new Error("Blob creation failed"));
        },
        "image/jpeg",
        quality,
      );
    });
  };

  // 1. Binary search on quality first (without dimension scaling)
  let low = 0.1;
  let high = 0.95;
  let bestBlob: Blob | null = null;

  // First check if high quality works immediately
  let blob = await getBlob(high, currentWidth, currentHeight);
  if (blob.size <= targetBytes) {
    bestBlob = blob;
  } else {
    // Perform binary search. Bounded to MAX_COMPRESSION_ITERATIONS (e.g. 7).
    const iterations = Math.min(7, MAX_COMPRESSION_ITERATIONS);
    for (let i = 0; i < iterations; i++) {
      // 7 iterations provides good precision
      const mid = (low + high) / 2;
      blob = await getBlob(mid, currentWidth, currentHeight);

      if (blob.size <= targetBytes) {
        bestBlob = blob;
        low = mid; // Try for higher quality that still fits
      } else {
        high = mid; // Need lower quality
      }
    }
  }

  // 2. Fallback: Reduce dimensions if quality drop wasn't enough
  if (!bestBlob || bestBlob.size > targetBytes) {
    let scale = 0.9;
    let resizeCount = 0;
    while (scale > 0.1 && resizeCount < MAX_RESIZE_ITERATIONS) {
      const w = Math.floor(currentWidth * scale);
      const h = Math.floor(currentHeight * scale);

      // Try with a modest quality at the new dimensions
      blob = await getBlob(0.7, w, h);

      if (blob.size <= targetBytes) {
        // We found a fitting scale. Let's do a quick binary search on quality here to maximize
        let qLow = 0.5;
        let qHigh = 0.95;
        for (let i = 0; i < 4; i++) {
          const qMid = (qLow + qHigh) / 2;
          const candidateBlob = await getBlob(qMid, w, h);
          if (candidateBlob.size <= targetBytes) {
            blob = candidateBlob;
            qLow = qMid;
          } else {
            qHigh = qMid;
          }
        }
        bestBlob = blob;
        currentWidth = w;
        currentHeight = h;
        break;
      }
      scale -= 0.1;
      resizeCount++;
    }
  }

  // Cleanup memory
  canvas.width = 0;
  canvas.height = 0;
  img.src = "";
  // @ts-expect-error - Help GC
  img = null;

  if (!bestBlob) {
    // If all else fails, do extreme compression
    bestBlob = await getBlob(
      0.1,
      Math.floor(currentWidth * 0.5),
      Math.floor(currentHeight * 0.5),
    );
  }

  return {
    blob: bestBlob,
    size: bestBlob.size,
    width: currentWidth,
    height: currentHeight,
  };
}

/**
 * Detects whether this browser supports running compression off-thread.
 * Requires: OffscreenCanvas + Web Workers.
 * Coverage: Chrome 69+, Firefox 105+, Safari 16.4+ (94%+ global as of 2024).
 */
function supportsOffscreenCanvas(): boolean {
  return (
    typeof Worker !== "undefined" &&
    typeof OffscreenCanvas !== "undefined" &&
    typeof createImageBitmap !== "undefined"
  );
}

/**
 * Compresses an image to the targetKB limit.
 *
 * Uses a Web Worker (OffscreenCanvas) when available so the main thread
 * stays responsive during heavy compression. Falls back to the main-thread
 * compressImage() in older browsers.
 */
export async function compressImageSmart(
  file: File,
  targetKB: number,
): Promise<CompressionResult> {
  if (file.size > MAX_IMAGE_SIZE_BYTES) {
    throw new Error(`File is too large. Maximum allowed size is ${MAX_IMAGE_SIZE_BYTES / (1024 * 1024)} MB.`);
  }
  if (!ALLOWED_MIME_TYPES.includes(file.type)) {
    throw new Error("Unsupported file type.");
  }
  if (targetKB < MIN_TARGET_KB || targetKB > MAX_TARGET_KB) {
    throw new Error(`Target KB must be between ${MIN_TARGET_KB} and ${MAX_TARGET_KB}.`);
  }

  if (!supportsOffscreenCanvas()) {
    // Graceful fallback for older browsers (main-thread, same algorithm)
    return compressImage(file, targetKB);
  }

  return new Promise<CompressionResult>((resolve, reject) => {
    // Read the file as an ArrayBuffer so we can transfer it (zero-copy) to the worker.
    const reader = new FileReader();

    reader.onload = () => {
      const buffer = reader.result as ArrayBuffer;

      // Instantiate a fresh worker for each job.
      // Workers are terminated immediately after the job completes to free memory.
      const worker = new Worker(
        new URL("./compression.worker.ts", import.meta.url),
      );

      const id = crypto.randomUUID();
      let settled = false;

      const cleanup = () => {
        worker.terminate();
      };

      worker.onmessage = (event) => {
        if (settled) return;
        settled = true;
        cleanup();

        if (event.data.success) {
          resolve({
            blob: event.data.blob,
            size: event.data.size,
            width: event.data.width,
            height: event.data.height,
          });
        } else {
          reject(new Error(event.data.error ?? "Worker compression failed"));
        }
      };

      worker.onerror = (err) => {
        if (settled) return;
        settled = true;
        cleanup();
        reject(new Error(err.message ?? "Worker error"));
      };

      // Transfer the ArrayBuffer to the worker (zero-copy, buffer is neutered here).
      worker.postMessage({ id, buffer, mimeType: file.type, targetKB }, [buffer]);
    };

    reader.onerror = () => {
      reject(new Error("Failed to read file as ArrayBuffer"));
    };

    reader.readAsArrayBuffer(file);
  });
}
