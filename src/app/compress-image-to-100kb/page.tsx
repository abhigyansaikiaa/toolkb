import PageTemplate from "@/components/PageTemplate";
import CompressorApp from "@/components/CompressorApp";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Compress Image to 100KB Online Free | ToolKB",
  description:
    "Reduce any image to 100KB free, no sign-up. Ideal for document portals, ID photos, and college admissions. JPG, PNG, WebP. Processed in your browser.",
  alternates: { canonical: "https://toolkb.in/compress-image-to-100kb" },
  openGraph: {
    title: "Compress Image to 100KB Online Free | ToolKB",
    description:
      "Free 100KB image compressor. No sign-up. Your image is processed in your browser — safe for ID photos and sensitive documents.",
    url: "https://toolkb.in/compress-image-to-100kb",
    siteName: "ToolKB",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Compress Image to 100KB Free | ToolKB",
    description: "Reduce any photo to 100KB. Free, no sign-up, processed in your browser.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://toolkb.in" },
        { "@type": "ListItem", position: 2, name: "Compress Image", item: "https://toolkb.in/compress-image" },
        { "@type": "ListItem", position: 3, name: "Compress to 100KB", item: "https://toolkb.in/compress-image-to-100kb" },
      ],
    },
    {
      "@type": "SoftwareApplication",
      name: "ToolKB 100KB Image Compressor",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Any",
      url: "https://toolkb.in/compress-image-to-100kb",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageTemplate
        h1="Compress Image to 100KB."
        h2="Free and private — shrink any photo to 100KB in your browser. No sign-up, no upload."
      >
        <CompressorApp defaultTargetKb={100} />

        <section className="flex flex-col gap-space-md mt-space-xl">
          <h2 className="font-headline-md text-headline-md text-primary">
            When is 100KB the right target?
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            100KB is a practical middle ground — small enough to upload quickly and meet most
            portal requirements, but large enough to preserve excellent image quality. At 100KB,
            even a photo with fine detail (text, patterns, document scans) will look clear and
            sharp.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Typical situations where 100KB limits apply:
          </p>
          <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant list-disc pl-5">
            <li>University and college admission form portals</li>
            <li>Employee ID card generation systems</li>
            <li>Medical and healthcare facility portals</li>
            <li>Library card and institutional registration forms</li>
            <li>Online membership applications</li>
          </ul>

          <h2 className="font-headline-md text-headline-md text-primary mt-4">
            Is it safe to compress a sensitive photo here?
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Yes. ToolKB compresses images entirely within your browser. The photo is never
            transmitted to any server. If you are compressing an ID card photo, a medical image,
            or any other sensitive document, it stays on your device throughout the process.
          </p>
        </section>

        <section className="p-space-md rounded-xl bg-surface-container-low shadow-sm mt-space-md">
          <h2 className="font-headline-sm text-headline-sm text-primary mb-3">
            Other size targets
          </h2>
          <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
            {[
              { href: "/compress-image", label: "Any size (custom KB)" },
              { href: "/compress-image-to-20kb", label: "20KB" },
              { href: "/compress-image-to-50kb", label: "50KB" },
              { href: "/compress-image-to-200kb", label: "200KB" },
              { href: "/signature-compressor", label: "Compress Signature" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="inline-block px-3 py-1.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-secondary-container hover:text-on-secondary-container transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </PageTemplate>
    </>
  );
}
