import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LEGAL_CONFIG } from "@/lib/legal-config";

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
          <Link href="/" aria-label="ToolKB — Home">
            <Image
              src="/logo.png"
              alt="ToolKB logo"
              width={160}
              height={46}
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>
        </div>
      </header>

      <main className="flex-1 flex flex-col relative w-full pt-14 pb-28 px-margin bg-surface max-w-4xl mx-auto">
        <div className="flex flex-col w-full space-y-space-xl">

          {/* Hero */}
          <section className="flex flex-col items-center text-center gap-space-sm pt-space-xl pb-space-sm">
            <h1 className="font-headline-lg text-4xl md:text-5xl text-primary tracking-tight font-bold">
              {h1}
            </h1>
            <p className="font-body-md text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              {h2}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mt-2 rounded-full bg-surface-container text-on-surface-variant text-label-sm font-label-sm">
              <span
                className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim"
                style={{ fontVariationSettings: "'FILL' 1" }}
                aria-hidden="true"
              >
                lock
              </span>
              <span>Your image is processed in your browser. No server upload.</span>
            </div>
          </section>

          {/* Page content (compressor + unique sections) */}
          <section className="flex flex-col w-full">
            {children}
          </section>

          {/* Tool Discovery */}
          <section
            className="flex flex-col gap-space-md pt-space-lg border-t border-surface-container-high mt-space-xl"
            aria-label="Browse all tools"
          >
            <h2 className="font-headline-md text-headline-md text-primary tracking-tight">
              More Tools
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
              <Link
                href="/compress-image"
                className="p-3 rounded-xl bg-surface-container-lowest hover:bg-surface-container transition-colors shadow-sm flex flex-col items-center justify-center text-center gap-2 group border border-outline-variant/30"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]" aria-hidden="true">image</span>
                </div>
                <span className="font-headline-sm text-sm text-primary group-hover:text-secondary transition-colors">Images</span>
              </Link>

              {[
                { icon: "picture_as_pdf", label: "PDF" },
                { icon: "folder", label: "Files" },
                { icon: "transform", label: "Convert" },
                { icon: "description", label: "Text" },
                { icon: "build", label: "Utilities" },
              ].map(({ icon, label }) => (
                <div
                  key={label}
                  className="p-3 rounded-xl bg-surface-container-lowest opacity-60 flex flex-col items-center justify-center text-center gap-2 border border-outline-variant/30 cursor-default select-none"
                  aria-label={`${label} tools — coming soon`}
                >
                  <div className="w-10 h-10 rounded-lg bg-surface-container-high text-on-surface-variant flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]" aria-hidden="true">{icon}</span>
                  </div>
                  <span className="font-headline-sm text-sm text-on-surface-variant">{label}</span>
                  <span className="text-[9px] font-mono-spec uppercase text-on-surface-variant/70 tracking-wider">Soon</span>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Footer */}
        <footer className="mt-space-xl pt-space-lg pb-space-lg flex flex-col items-center text-center gap-space-md border-t border-surface-container-high">
          <Image
            src="/logo.png"
            alt="ToolKB — free online file tools"
            width={120}
            height={34}
            className="h-6 w-auto object-contain opacity-80"
          />
          <p className="font-body-sm text-body-sm text-on-surface-variant italic">Make your files fit.</p>
          
          <nav aria-label="Footer main navigation">
            <ul className="flex flex-wrap justify-center gap-x-space-md gap-y-space-xs max-w-sm font-label-sm text-label-sm text-on-surface-variant list-none p-0 m-0">
              <li><Link href="/compress-image" className="hover:text-primary transition-colors">Compress Image</Link></li>
              <li><Link href="/compress-image-to-20kb" className="hover:text-primary transition-colors">To 20KB</Link></li>
              <li><Link href="/compress-image-to-50kb" className="hover:text-primary transition-colors">To 50KB</Link></li>
              <li><Link href="/compress-image-to-100kb" className="hover:text-primary transition-colors">To 100KB</Link></li>
              <li><Link href="/compress-image-to-200kb" className="hover:text-primary transition-colors">To 200KB</Link></li>
              <li><Link href="/signature-compressor" className="hover:text-primary transition-colors">Signature</Link></li>
              <li><Link href="/resize-image" className="hover:text-primary transition-colors">Resize</Link></li>
              <li><Link href="/india-photo-size-requirements" className="hover:text-primary transition-colors">India Guides</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
            </ul>
          </nav>
          
          <div className="w-16 h-px bg-outline-variant/30 my-2"></div>

          <nav aria-label="Legal & Trust navigation">
            <p className="font-label-sm font-bold text-on-surface mb-3">Legal & Trust</p>
            <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 max-w-md font-label-sm text-label-sm text-on-surface-variant list-none p-0 m-0">
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms</Link></li>
              <li><Link href="/cookie-policy" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
              <li><Link href="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link></li>
              <li><Link href="/acceptable-use" className="hover:text-primary transition-colors">Acceptable Use</Link></li>
              <li><Link href="/security" className="hover:text-primary transition-colors">Security</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </nav>

          <div className="mt-2 font-label-sm text-label-sm text-on-surface-variant flex flex-col items-center gap-1">
            <span>Contact Support: <a href={`mailto:${LEGAL_CONFIG.CONTACT_EMAIL}`} className="hover:text-primary transition-colors font-bold text-on-surface">{LEGAL_CONFIG.CONTACT_EMAIL}</a></span>
          </div>

          <p className="font-mono-spec text-[10px] text-on-surface-variant/80 mt-space-xs uppercase tracking-wider">© 2026 ToolKB</p>
        </footer>
      </main>

      {/* Mobile bottom nav */}
      <nav
        className="fixed bottom-0 inset-x-0 z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-1px_10px_rgba(0,0,0,0.04)] md:hidden"
        aria-label="Main navigation"
      >
        <div className="flex justify-around items-center h-16 px-space-xs">
          <Link href="/compress-image" className="flex flex-col items-center justify-center gap-0.5 min-w-[56px] min-h-[44px] transition-colors text-secondary">
            <span className="material-symbols-outlined text-[22px]" aria-hidden="true">image</span>
            <span className="font-label-sm text-label-sm">Image</span>
          </Link>
          <Link href="/resize-image" className="flex flex-col items-center justify-center gap-0.5 min-w-[56px] min-h-[44px] text-on-surface-variant transition-colors">
            <span className="material-symbols-outlined text-[22px]" aria-hidden="true">aspect_ratio</span>
            <span className="font-label-sm text-label-sm">Resize</span>
          </Link>
          <Link href="/signature-compressor" className="flex flex-col items-center justify-center gap-0.5 min-w-[56px] min-h-[44px] text-on-surface-variant transition-colors">
            <span className="material-symbols-outlined text-[22px]" aria-hidden="true">draw</span>
            <span className="font-label-sm text-label-sm">Signature</span>
          </Link>
        </div>
      </nav>
    </>
  );
}
