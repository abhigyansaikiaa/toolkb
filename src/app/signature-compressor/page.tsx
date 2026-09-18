import PageTemplate from "@/components/PageTemplate";
import CompressorApp from "@/components/CompressorApp";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Compress Signature Image | ToolKB",
  description: "Easily compress a photo of your handwritten signature to fit into strict application forms.",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "ToolKB Signature Compressor",
            "operatingSystem": "Any",
            "applicationCategory": "UtilitiesApplication",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          })
        }}
      />
      <PageTemplate 
        h1="Compress Signature Image."
        h2="Shrink a photo of your handwritten signature to fit into strictly controlled application forms."
      >
        <CompressorApp defaultTargetKb={15} />

        <section className="flex flex-col gap-space-md mt-space-xl">
          <h2 className="font-headline-md text-headline-md text-primary">Why do I need a signature compressor?</h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Most government job applications, bank KYC portals, and academic entrance exams require you to upload a digital copy of your handwritten signature. Because signatures are small, these systems usually limit the file size to 10 KB, 20 KB, or 50 KB.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            If you take a photo of your signature with your phone, the file will be far too large. This tool is optimized to shrink the file size while keeping the ink strokes crisp and readable.
          </p>

          <h2 className="font-headline-md text-headline-md text-primary mt-4">Tips for a good signature upload</h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            For the best results, sign on a blank piece of white, unlined paper using a thick black or dark blue pen. Make sure you are in a well-lit room without casting a shadow over the paper when you take the photo.
          </p>

          <div className="p-space-md rounded-xl bg-surface-container-low shadow-sm mt-4">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Signature target sizes</h3>
            <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
              <li><Link href="/signature-to-20kb" className="text-secondary hover:underline">Compress signature to 20KB</Link></li>
              <li><Link href="/signature-to-50kb" className="text-secondary hover:underline">Compress signature to 50KB</Link></li>
            </ul>
          </div>
        </section>
      </PageTemplate>
    </>
  );
}
