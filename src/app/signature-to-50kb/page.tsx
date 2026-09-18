import PageTemplate from "@/components/PageTemplate";
import CompressorApp from "@/components/CompressorApp";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Compress Signature Image to 50KB | ToolKB",
  description: "Compress your digital signature to exactly 50KB for job applications and KYC portals. Fast and totally private.",
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
            "name": "ToolKB 50KB Signature Compressor",
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
        h1="Compress Signature to 50KB."
        h2="Shrink a photo of your signature down to 50 KB for KYC forms and job application portals."
      >
        <CompressorApp defaultTargetKb={50} />

        <section className="flex flex-col gap-space-md mt-space-xl">
          <h2 className="font-headline-md text-headline-md text-primary">Why compress a signature to 50KB?</h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Many financial institutions, banking KYC portals, and corporate job applications require a digital copy of your signature to be uploaded, and they often enforce a strict 50 KB file size limit.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            This tool takes your high-resolution phone photo and safely compresses it down to 50 KB, ensuring it will be accepted by the portal while remaining crisp and easy to read.
          </p>

          <h2 className="font-headline-md text-headline-md text-primary mt-4">Safe and secure processing</h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            We understand that your signature is sensitive information. That&apos;s why ToolKB processes your image locally in your web browser. Your signature is never uploaded to the internet, keeping your data entirely in your control.
          </p>

          <div className="p-space-md rounded-xl bg-surface-container-low shadow-sm mt-4">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Other signature targets</h3>
            <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
              <li><Link href="/signature-to-20kb" className="text-secondary hover:underline">Compress signature to 20KB</Link></li>
              <li><Link href="/compress-image-to-50kb" className="text-secondary hover:underline">Compress passport photo to 50KB</Link></li>
            </ul>
          </div>
        </section>
      </PageTemplate>
    </>
  );
}
