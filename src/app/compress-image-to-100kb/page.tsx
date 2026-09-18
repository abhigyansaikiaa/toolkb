import PageTemplate from "@/components/PageTemplate";
import CompressorApp from "@/components/CompressorApp";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Compress Image to 100KB Online | ToolKB",
  description: "Reduce your image size to 100KB quickly and privately. Ideal for college admissions, ID cards, and web uploads.",
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
            "name": "ToolKB 100KB Image Compressor",
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
        h1="Compress Image to 100KB."
        h2="Shrink your photo to 100 KB for university admissions, ID card generation, and general web forms."
      >
        <CompressorApp defaultTargetKb={100} />

        <section className="flex flex-col gap-space-md mt-space-xl">
          <h2 className="font-headline-md text-headline-md text-primary">Why compress an image to 100KB?</h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            A 100 KB limit is widely used by university admission portals, employee ID card systems, and forum profile pictures. It provides an excellent balance—the file size is small enough to load instantly, but large enough to retain excellent visual quality.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Instead of manually exporting your photos through desktop software and guessing the quality slider until it hits 100 KB, you can use this tool to automatically hit the target size in one click.
          </p>

          <h2 className="font-headline-md text-headline-md text-primary mt-4">Is it safe to upload my ID photo here?</h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Absolutely. We built ToolKB so that your files never have to leave your device. The entire compression process happens right here in your browser tab. There are no servers, no uploads, and no privacy risks.
          </p>

          <div className="p-space-md rounded-xl bg-surface-container-low shadow-sm mt-4">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Need a different size?</h3>
            <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
              <li><Link href="/compress-image-to-50kb" className="text-secondary hover:underline">Compress image to 50KB</Link></li>
              <li><Link href="/compress-image-to-200kb" className="text-secondary hover:underline">Compress image to 200KB</Link></li>
              <li><Link href="/resize-image" className="text-secondary hover:underline">Resize image dimensions</Link></li>
            </ul>
          </div>
        </section>
      </PageTemplate>
    </>
  );
}
