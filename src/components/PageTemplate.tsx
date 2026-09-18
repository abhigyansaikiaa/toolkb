import CompressorApp from "@/components/CompressorApp";
import FAQSection from "@/components/FAQSection";
import Image from "next/image";
import Link from "next/link";

interface PageTemplateProps {
  h1: string;
  h2: string;
  defaultTargetKb: number;
}

export default function PageTemplate({ h1, h2, defaultTargetKb }: PageTemplateProps) {
  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.03)] pt-safe">
        <div className="h-14 px-margin flex items-center justify-between max-w-4xl mx-auto">
          <div className="flex items-center gap-space-sm">
            <Image src="/logo.svg" alt="ToolKB Brand Logo" width={160} height={44} className="h-8 w-auto object-contain" />
            <Link href="/" className="flex items-baseline tracking-tight">
              <span className="font-headline-sm text-headline-sm text-primary">Tool</span>
              <span className="font-headline-sm text-headline-sm text-secondary ml-0.5">KB</span>
            </Link>
            <span className="hidden xs:inline-block font-mono-spec text-mono-spec uppercase text-on-surface-variant bg-surface-container-high px-space-xs py-0.5 rounded">v2.4</span>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col relative w-full pt-14 pb-28 px-margin bg-surface max-w-4xl mx-auto">
        <div className="flex flex-col w-full space-y-space-xl">
          
          <section className="flex flex-col items-start gap-space-sm pt-space-xs">
            <div className="inline-flex items-center gap-space-xs px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-label-sm font-label-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
              <span className="font-mono-spec tracking-wider uppercase">SPEC // 01</span>
              <span className="text-on-secondary-fixed/40">•</span>
              <span className="tracking-wide">MAKE IT FIT</span>
            </div>
            <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight mt-1">
              {h1}
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              {h2}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface text-label-sm font-label-sm mt-1 shadow-sm">
              <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
              <span>Your photo stays on your device. Zero server uploads.</span>
            </div>
          </section>

          <section className="flex flex-col w-full">
            <CompressorApp defaultTargetKb={defaultTargetKb} />
          </section>

          <section className="flex flex-col gap-space-md">
            <div className="flex flex-col gap-1">
              <span className="font-mono-spec text-mono-spec uppercase text-secondary font-bold tracking-wider">PRACTICAL USE-CASES</span>
              <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                When a form says &ldquo;maximum {defaultTargetKb} KB.&rdquo;
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                You shouldn&apos;t have to open Photoshop, guess quality sliders, export three times, and check file properties. ToolKB handles the fiddly part instantly.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-[22px]">assignment</span>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-headline-sm text-headline-sm text-primary">Exam & Portal Forms</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    Keep your photo strictly within required limits for UPSC, NEET, SAT, or Civil Service portals without blurring your face.
                  </p>
                </div>
              </div>
              <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-[22px]">badge</span>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-headline-sm text-headline-sm text-primary">Job Applications & ATS</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    Quickly optimize headshots and handwritten signatures before uploading to recruitment pipelines and job boards.
                  </p>
                </div>
              </div>
              <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-[22px]">school</span>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-headline-sm text-headline-sm text-primary">College Admissions</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    Shrink heavy 12-megapixel phone snaps down to strict 20 KB or 100 KB limits required by legacy university registration systems.
                  </p>
                </div>
              </div>
              <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-[22px]">flight_takeoff</span>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-headline-sm text-headline-sm text-primary">Visa & Passport Portals</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    Submit passport documents with verified resolution constraints without installing third-party software on your phone.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="p-space-lg rounded-xl bg-surface-container flex flex-col gap-space-md relative overflow-hidden">
            <div className="flex flex-col gap-1 z-10">
              <div className="inline-flex items-center gap-1.5 font-mono-spec text-mono-spec text-secondary uppercase font-bold tracking-wider">
                <span className="material-symbols-outlined text-[16px]">lock</span>
                <span>PRIVACY // ZERO-SERVER</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                Your photo doesn&apos;t need a trip to our server.
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mt-1">
                Traditional online tools upload your sensitive personal photos to remote cloud servers. ToolKB executes codecs natively in your device&apos;s local memory sandbox.
              </p>
            </div>
            
            <div className="relative w-full h-36 rounded-lg overflow-hidden bg-surface-container-highest shadow-sm">
              <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                <span className="px-3 py-1.5 rounded-md bg-surface text-on-surface font-mono-spec text-mono-spec font-bold shadow-md">
                  LOCAL BROWSER PROCESSING
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 z-10">
              <div className="p-2.5 rounded-lg bg-surface-container-lowest shadow-sm flex flex-col">
                <span className="font-headline-sm text-headline-sm text-primary font-bold">100% Local</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Processed inside memory</span>
              </div>
              <div className="p-2.5 rounded-lg bg-surface-container-lowest shadow-sm flex flex-col">
                <span className="font-headline-sm text-headline-sm text-primary font-bold">No Storage</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Nothing saved or retained</span>
              </div>
              <div className="p-2.5 rounded-lg bg-surface-container-lowest shadow-sm flex flex-col">
                <span className="font-headline-sm text-headline-sm text-primary font-bold">No Account</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Open and use immediately</span>
              </div>
              <div className="p-2.5 rounded-lg bg-surface-container-lowest shadow-sm flex flex-col">
                <span className="font-headline-sm text-headline-sm text-primary font-bold">Zero Watermark</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Clean original pixels</span>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-space-md">
            <div className="flex flex-col gap-1">
              <span className="font-mono-spec text-mono-spec uppercase text-secondary font-bold tracking-wider">TOOLBOX</span>
              <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                More little tools for annoying file problems.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <Link href="/resize-image" className="p-3.5 rounded-xl bg-surface-container-lowest hover:bg-surface-container transition-colors shadow-sm flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[22px]">aspect_ratio</span>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">Image Resizer</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Change pixel width and height dimensions</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-0.5 transition-transform text-[20px]">chevron_right</span>
              </Link>
              <Link href="/signature-compressor" className="p-3.5 rounded-xl bg-surface-container-lowest hover:bg-surface-container transition-colors shadow-sm flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-high text-on-surface flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[22px]">draw</span>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">Signature Compressor</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Fit signatures into 10 KB limits</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-0.5 transition-transform text-[20px]">chevron_right</span>
              </Link>
            </div>
          </section>

          <FAQSection />
        </div>

        <footer className="mt-space-xl pt-space-lg pb-space-lg flex flex-col items-center text-center gap-space-md">
          <div className="flex items-center gap-space-xs">
            <Image src="/logo.svg" alt="ToolKB Brand Logo" width={90} height={25} className="h-6 w-auto object-contain opacity-70" />
            <span className="font-headline-sm text-headline-sm text-primary opacity-80">Tool</span>
            <span className="font-headline-sm text-headline-sm text-secondary opacity-80">KB</span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant italic">Make your files fit.</p>
          <div className="flex flex-wrap justify-center gap-x-space-md gap-y-space-xs max-w-xs font-label-sm text-label-sm text-on-surface-variant">
            <Link href="/compress-image" className="hover:text-primary transition-colors">Compress Image</Link>
            <Link href="/resize-image" className="hover:text-primary transition-colors">Resize Image</Link>
            <Link href="/signature-compressor" className="hover:text-primary transition-colors">Signature Compressor</Link>
            <Link href="/about" className="hover:text-primary transition-colors">About</Link>
          </div>
          <p className="font-mono-spec text-mono-spec text-on-surface-variant/80 mt-space-xs">© 2026 ToolKB • 🔒 Local browser processing</p>
        </footer>
      </main>

      <nav className="fixed bottom-0 inset-x-0 z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-1px_10px_rgba(0,0,0,0.04)] md:hidden">
        <div className="flex justify-around items-center h-16 px-space-xs">
          <Link href="/compress-image" className="flex flex-col items-center justify-center gap-0.5 min-w-[56px] min-h-[44px] transition-colors text-secondary">
            <span className="material-symbols-outlined text-[22px]">compress</span>
            <span className="font-label-sm text-label-sm">Compress</span>
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
