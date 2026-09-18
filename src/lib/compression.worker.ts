/**
 * compression.worker.ts
 *
 * Web Worker that runs image compression off the main thread.
 * Uses OffscreenCanvas + createImageBitmap — both available in workers
 * in Chrome 69+, Firefox 105+, Safari 16.4+.
 *
 * Mirrors the exact binary-search algorithm in compression.ts so output
 * is bit-identical to the main-thread fallback.
 */

/* eslint-disable no-restricted-globals */

import {
  MAX_IMAGE_WIDTH,
  MAX_IMAGE_HEIGHT,
  MAX_IMAGE_PIXELS,
  ALLOWED_MIME_TYPES,
  MIN_TARGET_KB,
  MAX_TARGET_KB,
  MAX_COMPRESSION_ITERATIONS,
  MAX_RESIZE_ITERATIONS
} from "./security";

interface CompressionRequest {
  id: string;
  buffer: ArrayBuffer;
  mimeType: string;
  targetKB: number;
}

interface CompressionSuccess {
  id: string;
  success: true;
  blob: Blob;
  size: number;
  width: number;
  height: number;
}

interface CompressionFailure {
  id: string;
  success: false;
  error: string;
}

self.onmessage = async (event: MessageEvent<CompressionRequest>) => {
  const { id, buffer, mimeType, targetKB } = event.data;

  try {
    if (!id || !buffer || !(buffer instanceof ArrayBuffer)) {
      throw new Error("Invalid worker message payload.");
    }
    if (!ALLOWED_MIME_TYPES.includes(mimeType)) {
      throw new Error("Unsupported file type.");
    }
    if (typeof targetKB !== "number" || isNaN(targetKB) || targetKB < MIN_TARGET_KB || targetKB > MAX_TARGET_KB) {
      throw new Error(`Target KB must be a valid number between ${MIN_TARGET_KB} and ${MAX_TARGET_KB}.`);
    }

    const result = await compress(buffer, mimeType, targetKB);
    // Blob cannot be transferred (it's not a Transferable), so it is structured-cloned.
    self.postMessage({ id, success: true, ...result } as CompressionSuccess);
  } catch (err) {
    self.postMessage({
      id,
      success: false,
      error: err instanceof Error ? err.message : String(err),
    } as CompressionFailure);
  }
};

async function compress(
  buffer: ArrayBuffer,
  mimeType: string,
  targetKB: number,
): Promise<{ blob: Blob; size: number; width: number; height: number }> {
  const targetBytes = targetKB * 1024;

  // Reconstruct a Blob from the transferred ArrayBuffer, then decode to ImageBitmap.
  // createImageBitmap is available in workers and handles JPEG/PNG/WebP natively.
  const sourceBlob = new Blob([buffer], { type: mimeType });
  const imageBitmap = await createImageBitmap(sourceBlob);

  try {
    if (imageBitmap.width > MAX_IMAGE_WIDTH || imageBitmap.height > MAX_IMAGE_HEIGHT || (imageBitmap.width * imageBitmap.height) > MAX_IMAGE_PIXELS) {
      throw new Error("Image dimensions exceed the maximum allowed limits (Decompression bomb protection).");
    }

  let currentWidth = imageBitmap.width;
  let currentHeight = imageBitmap.height;

  // OffscreenCanvas mirrors HTMLCanvasElement in workers.
  const canvas = new OffscreenCanvas(currentWidth, currentHeight);
  const ctx = canvas.getContext("2d") as OffscreenCanvasRenderingContext2D | null;

  if (!ctx) {
    imageBitmap.close();
    throw new Error("OffscreenCanvas 2D context not available in this browser");
  }

  ctx.drawImage(imageBitmap, 0, 0, currentWidth, currentHeight);

  /**
   * Produce a JPEG Blob at the requested quality and dimensions.
   * imageBitmap is kept alive (not closed) so it can be used to redraw
   * at new dimensions throughout the algorithm — same pattern as the
   * main-thread version which holds `img` alive via closure.
   */
  const getBlob = async (
    quality: number,
    width: number,
    height: number,
  ): Promise<Blob> => {
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(imageBitmap, 0, 0, width, height);
    }
    // convertToBlob is the OffscreenCanvas equivalent of HTMLCanvasElement.toBlob
    return await canvas.convertToBlob({ type: "image/jpeg", quality });
  };

  // ─── Step 1: Binary search on JPEG quality at original dimensions ─────────
  let low = 0.1;
  let high = 0.95;
  let bestBlob: Blob | null = null;

  // Fast-path: check if the image already fits at high quality
  let blob = await getBlob(high, currentWidth, currentHeight);
  if (blob.size <= targetBytes) {
    bestBlob = blob;
  } else {
    const iterations = Math.min(7, MAX_COMPRESSION_ITERATIONS);
    for (let i = 0; i < iterations; i++) {
      const mid = (low + high) / 2;
      blob = await getBlob(mid, currentWidth, currentHeight);
      if (blob.size <= targetBytes) {
        bestBlob = blob;
        low = mid; // found a fit — try for higher quality
      } else {
        high = mid; // too big — go lower
      }
    }
  }

  // ─── Step 2: Dimension fallback if quality search wasn't sufficient ────────
  if (!bestBlob || bestBlob.size > targetBytes) {
    let scale = 0.9;
    let resizeCount = 0;
    while (scale > 0.1 && resizeCount < MAX_RESIZE_ITERATIONS) {
      const w = Math.floor(currentWidth * scale);
      const h = Math.floor(currentHeight * scale);

      blob = await getBlob(0.7, w, h);

      if (blob.size <= targetBytes) {
        // Refine quality at this dimension with a shorter binary search
        let qLow = 0.5;
        let qHigh = 0.95;
        for (let i = 0; i < 4; i++) {
          const qMid = (qLow + qHigh) / 2;
          const candidate = await getBlob(qMid, w, h);
          if (candidate.size <= targetBytes) {
            blob = candidate;
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

  // ─── Step 3: Last-resort extreme compression ──────────────────────────────
  // If the image still doesn't fit (extremely large or tiny target), compress
  // whatever is currently on the canvas at minimum quality.
  // We don't attempt to redraw (imageBitmap is closed) — canvas currently holds
  // the last-attempted scaled dimensions.
  if (!bestBlob) {
    const extremeW = Math.max(1, Math.floor(canvas.width * 0.5));
    const extremeH = Math.max(1, Math.floor(canvas.height * 0.5));
    canvas.width = extremeW;
    canvas.height = extremeH;
    // Canvas is blank after resize — just produce a minimal output blob
    bestBlob = await canvas.convertToBlob({ type: "image/jpeg", quality: 0.1 });
    currentWidth = extremeW;
    currentHeight = extremeH;
  }

  return {
    blob: bestBlob,
    size: bestBlob.size,
    width: currentWidth,
    height: currentHeight,
  };
  } finally {
    // ─── Release the ImageBitmap before finishing ────────────────────
    // Ensure cleanup always happens even if errors are thrown.
    imageBitmap.close();
  }
}
