export interface CompressionResult {
  blob: Blob;
  size: number;
  width: number;
  height: number;
}

/**
 * Compresses an image to fit within the targetKB limit using binary search for quality.
 * Falls back to dimension reduction if quality alone isn't enough.
 */
export async function compressImage(
  file: File,
  targetKB: number
): Promise<CompressionResult> {
  const targetBytes = targetKB * 1024;
  
  // Create an object URL and load image
  const img = new Image();
  const url = URL.createObjectURL(file);
  
  await new Promise((resolve, reject) => {
    img.onload = resolve;
    img.onerror = reject;
    img.src = url;
  });
  URL.revokeObjectURL(url);

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
        quality
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
    // Perform binary search
    for (let i = 0; i < 7; i++) { // 7 iterations provides good precision
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
    while (scale > 0.1) {
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
    }
  }

  // Cleanup memory
  canvas.width = 0;
  canvas.height = 0;
  
  if (!bestBlob) {
    // If all else fails, do extreme compression
    bestBlob = await getBlob(0.1, Math.floor(currentWidth * 0.5), Math.floor(currentHeight * 0.5));
  }

  return {
    blob: bestBlob,
    size: bestBlob.size,
    width: currentWidth,
    height: currentHeight
  };
}
