import PageTemplate from "@/components/PageTemplate";
import CompressorApp from "@/components/CompressorApp";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Compress Signature Image to 20KB | ToolKB",
  description: "Compress your digital signature to exactly 20KB for government portals and official applications. Private and secure.",
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
            "name": "ToolKB 20KB Signature Compressor",
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
        h1="Compress Signature to 20KB."
        h2="Quickly compress your signature photo to 20 KB to fit into strict government and exam portals."
      >
        <CompressorApp defaultTargetKb={20} />

        <section className="flex flex-col gap-space-md mt-space-xl">
          <h2 className="font-headline-md text-headline-md text-primary">Why a 20KB limit for signatures?</h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            A 20 KB limit is an extremely common requirement for uploading signatures to government recruitment portals, university admission forms, and standardized testing systems (like UPSC or SSC). Because a signature is just ink on a white background, it doesn&apos;t require much data to store.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Our tool automatically compresses your signature photo so that it falls under the 20 KB maximum limit, while keeping the ink lines sharp and clearly legible.
          </p>

          <h2 className="font-headline-md text-headline-md text-primary mt-4">Is my signature kept private?</h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Yes. Your signature is a highly sensitive piece of personal data. ToolKB processes your image entirely inside your web browser. It is never uploaded to any cloud server, ensuring your signature cannot be intercepted or stored by a third party.
          </p>

          <div className="p-space-md rounded-xl bg-surface-container-low shadow-sm mt-4">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Other signature targets</h3>
            <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
              <li><Link href="/signature-to-50kb" className="text-secondary hover:underline">Compress signature to 50KB</Link></li>
              <li><Link href="/compress-image-to-20kb" className="text-secondary hover:underline">Compress passport photo to 20KB</Link></li>
            </ul>
          </div>
        </section>
      </PageTemplate>
    </>
  );
}
