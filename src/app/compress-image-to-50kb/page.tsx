import PageTemplate from "@/components/PageTemplate";
import CompressorApp from "@/components/CompressorApp";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Compress Image to 50KB Online | ToolKB",
  description: "Shrink your photo down to 50KB instantly. Perfect for job applications, passports, and online portals that require small file sizes.",
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
            "name": "ToolKB 50KB Image Compressor",
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
        h1="Compress Image to 50KB."
        h2="Quickly shrink your photo to 50 KB for job portals, recruitment systems, and online applications."
      >
        <CompressorApp defaultTargetKb={50} />

        <section className="flex flex-col gap-space-md mt-space-xl">
          <h2 className="font-headline-md text-headline-md text-primary">Why compress an image to 50KB?</h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            The 50 KB file limit is one of the most common requirements for online forms. Applicant Tracking Systems (ATS), corporate job portals, and online visa applications typically require your profile photo to be under 50 KB to save storage space on their end.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            If you try to upload a standard photo taken from your phone, it will likely be rejected for being too large. This tool solves that problem instantly by compressing your file locally in your browser.
          </p>

          <h2 className="font-headline-md text-headline-md text-primary mt-4">Will my photo still look good?</h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Yes. A 50 KB target provides plenty of data to retain a high-quality, clear passport photo or headshot. Your face will remain perfectly recognizable, and the file will be accepted by the portal.
          </p>

          <div className="p-space-md rounded-xl bg-surface-container-low shadow-sm mt-4">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Need a different size?</h3>
            <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
              <li><Link href="/compress-image-to-20kb" className="text-secondary hover:underline">Compress image to 20KB</Link></li>
              <li><Link href="/compress-image-to-100kb" className="text-secondary hover:underline">Compress image to 100KB</Link></li>
              <li><Link href="/signature-to-50kb" className="text-secondary hover:underline">Compress signature to 50KB</Link></li>
            </ul>
          </div>
        </section>
      </PageTemplate>
    </>
  );
}
