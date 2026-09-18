import PageTemplate from "@/components/PageTemplate";
import CompressorApp from "@/components/CompressorApp";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Compress Image to 20KB Online | ToolKB",
  description: "Easily compress your image down to 20KB online for free. Perfect for government forms, exams, and strict document uploads.",
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
            "name": "ToolKB 20KB Image Compressor",
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
        h1="Compress Image to 20KB."
        h2="Quickly shrink your photo to 20 KB to fit into strict government portals and exam registration forms."
      >
        <CompressorApp defaultTargetKb={20} />

        <section className="flex flex-col gap-space-md mt-space-xl">
          <h2 className="font-headline-md text-headline-md text-primary">Why compress an image to 20KB?</h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Many older government portals, academic application systems, and standardized testing forms (like UPSC, NEET, and SSC in various regions) have extremely strict upload requirements. A common requirement is that your passport photo or signature must be under 20 KB in size.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Modern smartphones take photos that are often 3-5 Megabytes (MB). This tool automatically shrinks those large photos down to exactly 20 KB, while preserving as much visual clarity as possible so your face remains recognizable.
          </p>

          <h2 className="font-headline-md text-headline-md text-primary mt-4">Supported File Formats</h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            You can upload JPG, JPEG, PNG, or WebP files. The tool will process them in your browser and provide a highly compressed result that is ready for upload.
          </p>

          <div className="p-space-md rounded-xl bg-surface-container-low shadow-sm mt-4">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Need a different size?</h3>
            <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
              <li><Link href="/compress-image-to-50kb" className="text-secondary hover:underline">Compress image to 50KB</Link></li>
              <li><Link href="/compress-image-to-100kb" className="text-secondary hover:underline">Compress image to 100KB</Link></li>
              <li><Link href="/signature-to-20kb" className="text-secondary hover:underline">Compress signature to 20KB</Link></li>
            </ul>
          </div>
        </section>
      </PageTemplate>
    </>
  );
}
