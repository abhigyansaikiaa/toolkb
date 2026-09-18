import PageTemplate from "@/components/PageTemplate";
import CompressorApp from "@/components/CompressorApp";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Compress Image to 200KB Online | ToolKB",
  description: "Compress your high-resolution photos down to 200KB without losing visible quality. Fast, free, and private.",
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
            "name": "ToolKB 200KB Image Compressor",
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
        h1="Compress Image to 200KB."
        h2="Shrink high-resolution photos down to 200 KB while preserving excellent clarity and detail."
      >
        <CompressorApp defaultTargetKb={200} />

        <section className="flex flex-col gap-space-md mt-space-xl">
          <h2 className="font-headline-md text-headline-md text-primary">Why compress an image to 200KB?</h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            The 200 KB limit is commonly used for document uploads, scanned certificates, and high-quality profile photos. At 200 KB, you can easily read text on a scanned document (like an ID card, transcript, or medical record), making it the perfect size for official submissions.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Taking a photo of a document with your phone often results in a 4 MB file. This tool safely compresses that large photo into a compact 200 KB file without sending your sensitive document over the internet.
          </p>

          <h2 className="font-headline-md text-headline-md text-primary mt-4">What file formats are supported?</h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            You can drop any standard image file format here: JPG, PNG, or WebP. The tool will process it instantly and provide a compressed file ready to be attached to an email or uploaded to a form.
          </p>

          <div className="p-space-md rounded-xl bg-surface-container-low shadow-sm mt-4">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Need a different size?</h3>
            <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
              <li><Link href="/compress-image-to-100kb" className="text-secondary hover:underline">Compress image to 100KB</Link></li>
              <li><Link href="/compress-image-to-50kb" className="text-secondary hover:underline">Compress image to 50KB</Link></li>
              <li><Link href="/resize-image" className="text-secondary hover:underline">Resize image dimensions</Link></li>
            </ul>
          </div>
        </section>
      </PageTemplate>
    </>
  );
}
