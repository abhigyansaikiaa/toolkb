import PageTemplate from "@/components/PageTemplate";
import CompressorApp from "@/components/CompressorApp";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Compress Image to 50KB Online Free | ToolKB",
  description:
    "Shrink any image to 50KB free, no sign-up. Great for job applications, profiles, and document portals. JPG, PNG, WebP. Processed in your browser.",
  alternates: { canonical: "https://toolkb.in/compress-image-to-50kb" },
  openGraph: {
    title: "Compress Image to 50KB Online Free | ToolKB",
    description:
      "Free 50KB image compressor. No sign-up. Your photo is processed in your browser — it never leaves your device.",
    url: "https://toolkb.in/compress-image-to-50kb",
    siteName: "ToolKB",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Compress Image to 50KB Free | ToolKB",
    description: "Shrink any photo to 50KB. Free, no sign-up, processed in your browser.",
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
        { "@type": "ListItem", position: 3, name: "Compress to 50KB", item: "https://toolkb.in/compress-image-to-50kb" },
      ],
    },
    {
      "@type": "SoftwareApplication",
      name: "ToolKB 50KB Image Compressor",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Any",
      url: "https://toolkb.in/compress-image-to-50kb",
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
        h1="Compress Image to 50KB."
        h2="Free and private — shrink any photo to 50KB in your browser. No sign-up, no upload."
      >
        <CompressorApp defaultTargetKb={50} />

        <section className="flex flex-col gap-space-md mt-space-xl">
          <h2 className="font-headline-md text-headline-md text-primary">
            Why 50KB?
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            50KB is one of the most common upload limits for photographs in online forms. At this
            size, a portrait photo retains very good quality — faces stay sharp, colours stay
            accurate — while the file is small enough for almost any server or email attachment.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Common situations where 50KB is required or preferred:
          </p>
          <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant list-disc pl-5">
            <li>Job application portals and HR systems</li>
            <li>Online recruitment platforms</li>
            <li>Government employee onboarding forms</li>
            <li>Educational institution admission portals</li>
            <li>Profile photos on professional networks</li>
          </ul>

          <h2 className="font-headline-md text-headline-md text-primary mt-4">
            What to expect from a 50KB photo
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            A standard passport-style headshot compressed to 50KB looks essentially identical to
            the original at normal viewing sizes. The reduction in file size comes from removing
            redundant data in the image, not from visible quality loss.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            If you are compressing a high-detail scene (e.g. a landscape or a scanned document
            with fine text), some detail may be lost. For portraits and headshots, 50KB is ample.
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
              { href: "/compress-image-to-100kb", label: "100KB" },
              { href: "/compress-image-to-200kb", label: "200KB" },
              { href: "/signature-to-50kb", label: "Signature to 50KB" },
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
