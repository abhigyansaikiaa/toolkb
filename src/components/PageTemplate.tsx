import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PageTemplateProps {
  h1: string;
  h2: string;
  children: React.ReactNode;
}

export default function PageTemplate({ h1, h2, children }: PageTemplateProps) {
  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.03)] pt-safe">
        <div className="h-14 px-margin flex items-center justify-between max-w-4xl mx-auto">
          <div className="flex items-center gap-space-sm">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="ToolKB Brand Logo" width={160} height={44} className="h-8 w-auto object-contain" />
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col relative w-full pt-14 pb-28 px-margin bg-surface max-w-4xl mx-auto">
        <div className="flex flex-col w-full space-y-space-xl">
          
          <section className="flex flex-col items-center text-center gap-space-sm pt-space-xl pb-space-sm">
            <h1 className="font-headline-lg text-4xl md:text-5xl text-primary tracking-tight font-bold">
              {h1}
            </h1>
            <p className="font-body-md text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              {h2}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mt-2 rounded-full bg-surface-container text-on-surface-variant text-label-sm font-label-sm">
              <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
              <span>Private by design. Your files stay on your device.</span>
            </div>
          </section>

          <section className="flex flex-col w-full">
            {children}
          </section>

          <section className="flex flex-col gap-space-md pt-space-lg border-t border-surface-container-high mt-space-xl">
            <div className="flex items-center justify-between">
              <h2 className="font-headline-md text-headline-md text-primary tracking-tight">
                Tool Discovery
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
              <Link href="/compress-image" className="p-3 rounded-xl bg-surface-container-lowest hover:bg-surface-container transition-colors shadow-sm flex flex-col items-center justify-center text-center gap-2 group border border-outline-variant/30">
                <div className="w-10 h-10 rounded-lg bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">image</span>
                </div>
                <span className="font-headline-sm text-sm text-primary group-hover:text-secondary transition-colors">Images</span>
              </Link>
              
              <div className="p-3 rounded-xl bg-surface-container-lowest opacity-60 flex flex-col items-center justify-center text-center gap-2 border border-outline-variant/30 cursor-default select-none">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high text-on-surface-variant flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">picture_as_pdf</span>
                </div>
                <span className="font-headline-sm text-sm text-on-surface-variant">PDF</span>
                <span className="text-[9px] font-mono-spec uppercase text-on-surface-variant/70 tracking-wider">Soon</span>
              </div>
              
              <div className="p-3 rounded-xl bg-surface-container-lowest opacity-60 flex flex-col items-center justify-center text-center gap-2 border border-outline-variant/30 cursor-default select-none">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high text-on-surface-variant flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">folder</span>
                </div>
                <span className="font-headline-sm text-sm text-on-surface-variant">Files</span>
                <span className="text-[9px] font-mono-spec uppercase text-on-surface-variant/70 tracking-wider">Soon</span>
              </div>
              
              <div className="p-3 rounded-xl bg-surface-container-lowest opacity-60 flex flex-col items-center justify-center text-center gap-2 border border-outline-variant/30 cursor-default select-none">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high text-on-surface-variant flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">transform</span>
                </div>
                <span className="font-headline-sm text-sm text-on-surface-variant">Convert</span>
                <span className="text-[9px] font-mono-spec uppercase text-on-surface-variant/70 tracking-wider">Soon</span>
              </div>
              
              <div className="p-3 rounded-xl bg-surface-container-lowest opacity-60 flex flex-col items-center justify-center text-center gap-2 border border-outline-variant/30 cursor-default select-none">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high text-on-surface-variant flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">description</span>
                </div>
                <span className="font-headline-sm text-sm text-on-surface-variant">Text</span>
                <span className="text-[9px] font-mono-spec uppercase text-on-surface-variant/70 tracking-wider">Soon</span>
              </div>
              
              <div className="p-3 rounded-xl bg-surface-container-lowest opacity-60 flex flex-col items-center justify-center text-center gap-2 border border-outline-variant/30 cursor-default select-none">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high text-on-surface-variant flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">build</span>
                </div>
                <span className="font-headline-sm text-sm text-on-surface-variant">Utilities</span>
                <span className="text-[9px] font-mono-spec uppercase text-on-surface-variant/70 tracking-wider">Soon</span>
              </div>
            </div>
          </section>

        </div>

        <footer className="mt-space-xl pt-space-lg pb-space-lg flex flex-col items-center text-center gap-space-md">
          <div className="flex items-center justify-center">
            <Image src="/logo.png" alt="ToolKB Brand Logo" width={120} height={32} className="h-6 w-auto object-contain opacity-80" />
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant italic">Make your files fit.</p>
          <div className="flex flex-wrap justify-center gap-x-space-md gap-y-space-xs max-w-xs font-label-sm text-label-sm text-on-surface-variant">
            <Link href="/compress-image" className="hover:text-primary transition-colors">Compress Image</Link>
            <Link href="/resize-image" className="hover:text-primary transition-colors">Resize Image</Link>
            <Link href="/signature-compressor" className="hover:text-primary transition-colors">Signature</Link>
            <Link href="/about" className="hover:text-primary transition-colors">About</Link>
          </div>
          <p className="font-mono-spec text-mono-spec text-on-surface-variant/80 mt-space-xs">© 2026 ToolKB • Private by design</p>
        </footer>
      </main>

      <nav className="fixed bottom-0 inset-x-0 z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-1px_10px_rgba(0,0,0,0.04)] md:hidden">
        <div className="flex justify-around items-center h-16 px-space-xs">
          <Link href="/compress-image" className="flex flex-col items-center justify-center gap-0.5 min-w-[56px] min-h-[44px] transition-colors text-secondary">
            <span className="material-symbols-outlined text-[22px]">image</span>
            <span className="font-label-sm text-label-sm">Image</span>
          </Link>
          <Link href="/resize-image" className="flex flex-col items-center justify-center gap-0.5 min-w-[56px] min-h-[44px] text-on-surface-variant transition-colors">
            <span className="material-symbols-outlined text-[22px]">aspect_ratio</span>
            <span className="font-label-sm text-label-sm">Resize</span>
          </Link>
          <Link href="/signature-compressor" className="flex flex-col items-center justify-center gap-0.5 min-w-[56px] min-h-[44px] text-on-surface-variant transition-colors">
            <span className="material-symbols-outlined text-[22px]">draw</span>
            <span className="font-label-sm text-label-sm">Signature</span>
          </Link>
        </div>
      </nav>
    </>
  );
}
