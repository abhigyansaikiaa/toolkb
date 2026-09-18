import PageTemplate from "@/components/PageTemplate";
import CompressorApp from "@/components/CompressorApp";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Compress Image Online | ToolKB",
  description: "Compress your images quickly and securely in your browser. Choose your exact file size target and download instantly.",
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
            "name": "ToolKB Image Compressor",
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
        h1="Compress an image."
        h2="Quickly shrink your photo to any exact file size you need. Private, fast, and completely free."
      >
        <CompressorApp defaultTargetKb={50} />

        <section className="flex flex-col gap-space-md mt-space-xl">
          <h2 className="font-headline-md text-headline-md text-primary">How does the image compressor work?</h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Most forms, email providers, and social platforms have strict limits on the size of the files you can upload. Rather than struggling with heavy desktop software, our Image Compressor allows you to drop a photo into your browser and shrink it to any exact file size you need (like 50 KB or 200 KB).
          </p>
          
          <h2 className="font-headline-md text-headline-md text-primary mt-4">Safe and secure processing</h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            When you use ToolKB, your files are never uploaded to the internet. We use modern web technologies to compress the image directly on your computer or smartphone. This makes it perfect for sensitive documents like IDs, passports, and medical records.
          </p>

          <div className="p-space-md rounded-xl bg-surface-container-low shadow-sm mt-4">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Common target sizes</h3>
            <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
              <li><Link href="/compress-image-to-20kb" className="text-secondary hover:underline">Compress image to 20KB</Link></li>
              <li><Link href="/compress-image-to-50kb" className="text-secondary hover:underline">Compress image to 50KB</Link></li>
              <li><Link href="/compress-image-to-100kb" className="text-secondary hover:underline">Compress image to 100KB</Link></li>
              <li><Link href="/compress-image-to-200kb" className="text-secondary hover:underline">Compress image to 200KB</Link></li>
            </ul>
          </div>
        </section>
      </PageTemplate>
    </>
  );
}
