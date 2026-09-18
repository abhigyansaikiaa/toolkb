import PageTemplate from "@/components/PageTemplate";
import CompressorApp from "@/components/CompressorApp";
import FAQSection from "@/components/FAQSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ToolKB — Free Online Tools for Files, Images & More",
  description: "Free online tools for compressing, resizing, converting and working with images, PDFs and files directly in your browser.",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "ToolKB",
            "url": "https://toolkb.in",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://toolkb.in/?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
      <PageTemplate 
        h1="Tools for the little things."
        h2="Compress, resize, convert and prepare your files in seconds."
      >
        <CompressorApp defaultTargetKb={50} />
        
        <section className="flex flex-col gap-space-md mt-space-xl">
          <div className="flex flex-col gap-1">
            <span className="font-mono-spec text-mono-spec uppercase text-secondary font-bold tracking-wider">WHY TOOLKB</span>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
              Get the file right.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              You shouldn&apos;t have to open heavy software or guess quality sliders just to submit a form. ToolKB handles the fiddly parts instantly, directly in your browser.
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
                  Keep your photo strictly within required limits for UPSC, NEET, SAT, or Civil Service portals.
                </p>
              </div>
            </div>
            <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-[22px]">badge</span>
              </div>
              <div className="flex flex-col">
                <h3 className="font-headline-sm text-headline-sm text-primary">Job Applications</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                  Quickly optimize headshots and handwritten signatures before uploading to recruitment pipelines.
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
                  Shrink heavy phone snaps down to strict limits required by legacy university registration systems.
                </p>
              </div>
            </div>
            <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-[22px]">flight_takeoff</span>
              </div>
              <div className="flex flex-col">
                <h3 className="font-headline-sm text-headline-sm text-primary">Visa & Passports</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                  Submit passport documents with verified resolution constraints quickly and easily.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-space-xl">
          <FAQSection />
        </div>
      </PageTemplate>
    </>
  );
}
