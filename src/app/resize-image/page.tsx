import PageTemplate from "@/components/PageTemplate";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resize Image Online | ToolKB",
  description: "Change the exact dimensions (width and height) of your image online. Private and secure browser-based tool.",
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
            "name": "ToolKB Image Resizer",
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
        h1="Resize Image."
        h2="Change the exact pixel width and height dimensions of your photo."
      >
        <div className="flex flex-col items-center justify-center p-space-xl bg-surface-container-lowest rounded-xl border border-surface-container shadow-sm max-w-xl mx-auto w-full text-center py-20">
          <span className="material-symbols-outlined text-[48px] text-surface-container-high mb-4">aspect_ratio</span>
          <h2 className="font-headline-md text-headline-md text-primary mb-2">Image Resizer Coming Soon</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
            We are currently building the fastest in-browser image resizer. For now, you can use our compressor to shrink file sizes.
          </p>
          <Link href="/compress-image" className="mt-6 px-6 py-2.5 rounded-lg bg-primary text-on-primary font-label-md hover:opacity-90 transition-opacity">
            Use Compressor Instead
          </Link>
        </div>

        <section className="flex flex-col gap-space-md mt-space-xl">
          <h2 className="font-headline-md text-headline-md text-primary">Image resizing made simple</h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Many online portals require photos to be a specific width and height (for example, 800x800 pixels for a profile picture, or 300x300 for a signature). This tool will allow you to precisely crop and scale your image without losing focus on the important details.
          </p>
        </section>
      </PageTemplate>
    </>
  );
}
