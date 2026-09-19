"use client";

import { useState, useRef, useEffect } from "react";
import { compressImageSmart, CompressionResult } from "@/lib/compression";
import { MAX_IMAGE_SIZE_BYTES, ALLOWED_MIME_TYPES, MIN_TARGET_KB, MAX_TARGET_KB } from "@/lib/security";

export default function CompressorApp({ defaultTargetKb = 50 }: { defaultTargetKb?: number }) {
  const [targetKb, setTargetKb] = useState(defaultTargetKb);
  const [customKb, setCustomKb] = useState(defaultTargetKb.toString());
  const [file, setFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [status, setStatus] = useState<"default" | "loaded" | "compressing" | "ready" | "error">("default");
  const [errorMessage, setErrorMessage] = useState("");
  const [result, setResult] = useState<CompressionResult | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    if (!ALLOWED_MIME_TYPES.includes(selectedFile.type)) {
      setErrorMessage("That file format isn't supported here. Please choose a JPG, PNG, or WebP photo.");
      setStatus("error");
      return;
    }

    if (selectedFile.size > MAX_IMAGE_SIZE_BYTES) {
      setErrorMessage(`File is too large. Maximum allowed size is ${MAX_IMAGE_SIZE_BYTES / (1024 * 1024)} MB.`);
      setStatus("error");
      return;
    }

    // Cleanup previous object URL if one exists
    if (filePreview) {
      URL.revokeObjectURL(filePreview);
    }

    setFile(selectedFile);
    setFilePreview(URL.createObjectURL(selectedFile));
    setStatus("loaded");
    setResult(null);
  };

  // Safe object URL lifecycle management (cleanup on unmount)
  useEffect(() => {
    return () => {
      if (filePreview) {
        URL.revokeObjectURL(filePreview);
      }
    };
  }, [filePreview]);

  const startCompression = async () => {
    if (!file) return;
    
    // Final sanity check before passing to processing
    const safeTargetKb = targetKb;
    if (isNaN(safeTargetKb) || safeTargetKb < MIN_TARGET_KB || safeTargetKb > MAX_TARGET_KB) {
      setErrorMessage(`Target size must be between ${MIN_TARGET_KB} KB and ${MAX_TARGET_KB} KB.`);
      setStatus("error");
      return;
    }

    setStatus("compressing");
    
    try {
      // Small timeout to allow UI to update to "compressing" state before thread blocks
      await new Promise(resolve => setTimeout(resolve, 50));
      
      const compResult = await compressImageSmart(file, targetKb);
      setResult(compResult);
      setStatus("ready");
    } catch (err) {
      console.error(err);
      setErrorMessage("An error occurred during compression.");
      setStatus("error");
    }
  };

  const handleDownload = () => {
    if (!result || !file) return;
    const url = URL.createObjectURL(result.blob);
    const a = document.createElement("a");
    a.href = url;

    // Output is always JPEG regardless of input format.
    // Strip any existing extension and append .jpg.
    const baseName = file.name.replace(/\.[^.]+$/, "");
    a.download = `${baseName}-compressed.jpg`;

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handlePresetSelect = (kb: number) => {
    setTargetKb(kb);
    setCustomKb(""); // Clear custom input when preset is selected
  };

  const handleCustomKbChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setCustomKb(val);
    const parsed = parseInt(val, 10);
    // Only update active targetKb if it's a valid number within bounds
    if (!isNaN(parsed) && parsed >= MIN_TARGET_KB && parsed <= MAX_TARGET_KB) {
      setTargetKb(parsed);
    }
  };

  const adjustCustomKb = (delta: number) => {
    let parsed = parseInt(customKb, 10) || targetKb;
    parsed = Math.max(MIN_TARGET_KB, Math.min(MAX_TARGET_KB, parsed + delta));
    setCustomKb(parsed.toString());
    setTargetKb(parsed);
  };

  return (
    <div className="relative w-full bg-surface-container-lowest rounded-xl p-space-md shadow-md flex flex-col gap-space-md max-w-xl mx-auto">
      {/* Target Size Configuration Rail */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">TARGET FILE SIZE</span>
          <span className="font-mono-spec text-mono-spec text-secondary-container bg-surface-container px-1.5 py-0.5 rounded">KB / REQ</span>
        </div>
        <div className="grid grid-cols-4 gap-1.5">
          {[20, 50, 100, 200].map((preset) => (
            <button
              key={preset}
              type="button"
              onClick={() => handlePresetSelect(preset)}
              className={`py-2 px-1 rounded-lg text-center font-label-md transition-all active:scale-95 ${
                targetKb === preset 
                  ? "bg-secondary-container text-on-secondary-container font-headline-sm shadow-sm" 
                  : "bg-surface-container text-on-surface"
              }`}
            >
              {preset} KB
            </button>
          ))}
        </div>
        
        {/* Custom size numeric stepper */}
        <div className={`flex items-center justify-between px-3 py-2 rounded-lg mt-0.5 transition-colors ${customKb !== "" && ![20, 50, 100, 200].includes(targetKb) ? "bg-secondary-container/20 border border-secondary/30" : "bg-surface-container-low"}`}>
          <label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="custom-kb-input">Custom Target:</label>
          <div className="flex items-center gap-1.5">
            <button 
              type="button" 
              onClick={() => adjustCustomKb(-5)}
              className="w-6 h-6 rounded bg-surface-container-high flex items-center justify-center text-on-surface hover:bg-surface-dim active:scale-90"
            >
              <span className="material-symbols-outlined text-[14px]">remove</span>
            </button>
            <div className="flex items-center gap-1 bg-surface-container-lowest px-2 py-0.5 rounded shadow-sm">
              <input 
                id="custom-kb-input"
                type="number" 
                className="w-10 text-center font-mono-spec text-mono-spec font-bold text-on-surface bg-transparent focus:outline-none" 
                value={customKb}
                onChange={handleCustomKbChange}
                placeholder={targetKb.toString()}
                min={MIN_TARGET_KB} 
                max={MAX_TARGET_KB} 
              />
              <span className="font-mono-spec text-mono-spec text-on-surface-variant">KB</span>
            </div>
            <button 
              type="button" 
              onClick={() => adjustCustomKb(5)}
              className="w-6 h-6 rounded bg-surface-container-high flex items-center justify-center text-on-surface hover:bg-surface-dim active:scale-90"
            >
              <span className="material-symbols-outlined text-[14px]">add</span>
            </button>
          </div>
        </div>
      </div>

      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileSelect} 
        accept="image/jpeg,image/png,image/webp" 
        className="hidden" 
      />

      {status === "default" && (
        <div 
          onClick={() => fileInputRef.current?.click()}
          className="flex flex-col items-center justify-center py-8 px-4 bg-surface-container-low rounded-xl text-center cursor-pointer transition-colors hover:bg-surface-container border-2 border-dashed border-transparent hover:border-outline-variant/50"
        >
          <div className="w-14 h-14 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed mb-space-sm shadow-sm">
            <span className="material-symbols-outlined text-[28px]">drive_folder_upload</span>
          </div>
          <p className="font-headline-sm text-headline-sm text-primary mb-1">Drop your photo here</p>
          <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">or tap anywhere to choose a file</p>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface text-label-sm font-label-sm mb-2">
            <span className="material-symbols-outlined text-[14px] text-secondary">image</span>
            <span>JPG · PNG · WEBP</span>
          </div>
          <span className="font-mono-spec text-[10px] text-on-surface-variant/80 tracking-wider">
            NO SIGN-IN • NO WATERMARK • PRIVATE
          </span>
        </div>
      )}

      {status === "loaded" && file && filePreview && (
        <div className="flex flex-col gap-space-sm">
          <div className="relative bg-surface-container-low p-2.5 rounded-xl flex items-center gap-3">
            <div className="relative w-16 h-20 rounded-lg overflow-hidden shrink-0 shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={filePreview} alt="Preview" className="w-full h-full object-cover" />
              <span className="absolute bottom-1 right-1 font-mono-spec text-[9px] px-1 py-0.5 rounded bg-primary/80 text-on-primary">
                {file.type.split('/')[1].toUpperCase()}
              </span>
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <span className="font-label-md text-label-md text-primary font-bold truncate">{file.name}</span>
                <button 
                  onClick={() => setStatus("default")}
                  className="text-on-surface-variant hover:text-error p-1"
                >
                  <span className="material-symbols-outlined text-[16px]">close</span>
                </button>
              </div>
              <p className="font-mono-spec text-[11px] text-on-surface-variant mt-0.5">
                {(file.size / (1024 * 1024)).toFixed(2)} MB
              </p>
              <div className="inline-flex items-center gap-1 text-[11px] text-on-tertiary-container font-label-sm mt-1">
                <span className="material-symbols-outlined text-[13px] text-on-tertiary-container">check_circle</span>
                <span>Ready to shrink</span>
              </div>
            </div>
          </div>
          
          <button 
            type="button" 
            onClick={startCompression}
            className="w-full py-3 px-4 rounded-xl bg-primary text-on-primary font-headline-sm text-headline-sm flex items-center justify-center gap-2 shadow-md active:scale-98 transition-all"
          >
            <span className="material-symbols-outlined text-[20px] text-secondary-container">tune</span>
            <span>Compress to {targetKb} KB</span>
          </button>
        </div>
      )}

      {status === "compressing" && (
        <div className="flex flex-col items-center justify-center py-7 px-4 bg-surface-container-low rounded-xl text-center">
          <div className="relative w-14 h-14 flex items-center justify-center mb-3">
            <svg className="animate-spin w-full h-full text-secondary" viewBox="0 0 48 48">
              <circle className="opacity-20" cx="24" cy="24" fill="none" r="20" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-90" d="M4 24a20 20 0 0120-20V0C10.745 0 0 10.745 0 24h4zm2 5.291A7.962 7.962 0 014 24H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor"></path>
            </svg>
          </div>
          <p className="font-headline-sm text-headline-sm text-primary mb-0.5">Compressing image...</p>
          <p className="font-body-sm text-body-sm text-on-surface-variant">Preparing your file</p>
        </div>
      )}

      {status === "ready" && result && file && (
        <div className="flex flex-col gap-space-sm">
          <div className="bg-surface-container p-3 rounded-xl flex flex-col gap-2.5">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[14px]">check_circle</span>
                <span className="font-bold">Ready</span>
              </div>
              <span className="font-mono-spec text-[11px] text-on-surface-variant">READY FOR UPLOAD</span>
            </div>
            
            <div className="flex items-baseline justify-between pt-1">
              <div>
                <span className="font-headline-lg text-headline-lg text-primary font-bold">{(result.size / 1024).toFixed(1)}</span>
                <span className="font-headline-sm text-headline-sm text-primary font-bold ml-1">KB</span>
                <span className="text-body-sm text-on-surface-variant line-through ml-1.5">{(file.size / 1024).toFixed(1)} KB</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed-dim text-on-tertiary-container font-mono-spec text-mono-spec font-bold">
                -{((1 - result.size / file.size) * 100).toFixed(1)}%
              </span>
            </div>
            
            <div className="w-full flex flex-col gap-1">
              <div className="flex justify-between text-[10px] font-mono-spec text-on-surface-variant">
                <span>ORIGINAL: {(file.size / (1024 * 1024)).toFixed(2)} MB</span>
                <span className="text-tertiary-fixed-dim font-bold">RESULT: {(result.size / 1024).toFixed(1)} KB</span>
              </div>
              <div className="w-full h-3 bg-surface-container-highest rounded-full overflow-hidden flex">
                <div className="h-full bg-secondary-container" style={{ width: `${(result.size / file.size) * 100}%` }}></div>
                <div className="h-full bg-outline-variant/30 flex-1"></div>
              </div>
            </div>
            
            <p className="font-label-sm text-label-sm text-on-surface-variant/90 italic">
              Output file size: {(result.size / 1024).toFixed(1)} KB {result.size <= targetKb * 1024 ? '(safely below the selected limit)' : '(lowest possible size reached)'}
            </p>
          </div>
          
          <div className="flex flex-col gap-2">
            <button 
              type="button" 
              onClick={handleDownload}
              className="w-full py-3 px-4 rounded-xl bg-secondary-container text-on-secondary-container font-headline-sm text-headline-sm flex items-center justify-center gap-2 shadow-md active:scale-98 transition-all"
            >
              <span className="material-symbols-outlined text-[20px]">download</span>
              <span>Download Image</span>
            </button>
            <div className="grid grid-cols-2 gap-2">
              <button 
                type="button"
                onClick={() => setStatus("loaded")}
                className="py-2.5 px-2 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md flex items-center justify-center gap-1 hover:bg-surface-container-high transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]">compare</span>
                <span>Compare (1:1)</span>
              </button>
              <button 
                type="button"
                onClick={() => setStatus("default")}
                className="py-2.5 px-2 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md flex items-center justify-center gap-1 hover:bg-surface-container-high transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]">replay</span>
                <span>Compress Another</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="flex flex-col items-center justify-center py-6 px-4 bg-error-container rounded-xl text-center">
          <div className="w-10 h-10 rounded-full bg-error text-on-error flex items-center justify-center mb-2 shadow-sm">
            <span className="material-symbols-outlined text-[22px]">warning</span>
          </div>
          <p className="font-headline-sm text-headline-sm text-on-error-container font-bold mb-1">
            Error
          </p>
          <p className="font-body-sm text-body-sm text-on-error-container/90 mb-space-sm max-w-xs">
            {errorMessage}
          </p>
          <button 
            type="button" 
            onClick={() => setStatus("default")}
            className="py-2 px-4 rounded-lg bg-on-error-container text-on-error font-label-md text-label-md shadow-sm active:scale-95 transition-all"
          >
            Try another photo
          </button>
        </div>
      )}
    </div>
  );
}
