import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

export default function LegalLayout({ title, lastUpdated, children }: { title: string, lastUpdated: string, children: ReactNode }) {
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

      <main className="flex-1 flex flex-col relative w-full pt-20 pb-28 px-margin bg-surface max-w-3xl mx-auto">
        <div className="space-y-8 text-on-surface">
          <header className="space-y-4 pt-8">
            <h1 className="text-display-md sm:text-display-lg font-bold text-primary tracking-tight">{title}</h1>
            <p className="font-mono-spec text-sm text-on-surface-variant">Last updated: {lastUpdated}</p>
          </header>
          <div className="space-y-8 font-body-md text-lg text-on-surface-variant leading-relaxed">
            {children}
          </div>
        </div>

        <footer className="mt-20 pt-10 pb-10 flex flex-col items-center text-center gap-6 border-t border-surface-container-high">
          <Image
            src="/logo.png"
            alt="ToolKB — free online file tools"
            width={120}
            height={34}
            className="h-6 w-auto object-contain opacity-80"
          />
          <p className="font-body-sm text-body-sm text-on-surface-variant italic">Make your files fit.</p>
          
          <nav aria-label="Footer main navigation">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 max-w-sm font-label-sm text-label-sm text-on-surface-variant list-none p-0 m-0">
              <li><Link href="/compress-image" className="hover:text-primary transition-colors">Compress Image</Link></li>
              <li><Link href="/resize-image" className="hover:text-primary transition-colors">Resize</Link></li>
              <li><Link href="/signature-compressor" className="hover:text-primary transition-colors">Signature</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
            </ul>
          </nav>
          
          <div className="w-16 h-px bg-outline-variant/30"></div>

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

          <p className="font-mono-spec text-xs text-on-surface-variant/80 mt-2">© 2026 ToolKB</p>
        </footer>
      </main>

      {/* Mobile bottom nav */}
      <nav
        className="fixed bottom-0 inset-x-0 z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-1px_10px_rgba(0,0,0,0.04)] md:hidden"
        aria-label="Main navigation"
      >
        <div className="flex justify-around items-center h-16 px-4">
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
