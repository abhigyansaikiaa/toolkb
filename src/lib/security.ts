/**
 * Centralized security constraints for ToolKB.
 */

// File input limits
export const MAX_IMAGE_SIZE_BYTES = 10 * 1024 * 1024; // 10 MB
export const ALLOWED_MIME_TYPES = ["image/jpeg", "image/png", "image/webp"];

// Decompression bomb / huge dimension limits
export const MAX_IMAGE_WIDTH = 10000;
export const MAX_IMAGE_HEIGHT = 10000;
export const MAX_IMAGE_PIXELS = 50000000; // 50 MP

// Target size limits (KB)
export const MIN_TARGET_KB = 1;
export const MAX_TARGET_KB = 10240; // 10 MB

// Processing bounds (for documentation / explicit checks)
export const MAX_COMPRESSION_ITERATIONS = 12;
export const MAX_RESIZE_ITERATIONS = 8;
export const MAX_TOTAL_PROCESSING_ATTEMPTS = 20;
