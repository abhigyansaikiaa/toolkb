import PageTemplate from "@/components/PageTemplate";
import CompressorApp from "@/components/CompressorApp";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Compress Image to 20KB Online Free",
  description:
    "Compress any image to 20KB free, no sign-up. Strict portal requirement? ToolKB finds the highest quality that still fits 20KB. JPG, PNG, WebP.",
  alternates: { canonical: "https://toolkb.in/compress-image-to-20kb" },
  openGraph: {
    title: "Compress Image to 20KB Online Free",
    description:
      "Free 20KB image compressor. No uploads, no sign-up. Works in your browser.",
    url: "https://toolkb.in/compress-image-to-20kb",
    siteName: "ToolKB",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Compress Image to 20KB Free",
    description:
      "Shrink any photo to exactly 20KB. Free, no sign-up, no uploads.",
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
        { "@type": "ListItem", position: 3, name: "Compress to 20KB", item: "https://toolkb.in/compress-image-to-20kb" },
      ],
    },
    {
      "@type": "SoftwareApplication",
      name: "ToolKB 20KB Image Compressor",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Any",
      url: "https://toolkb.in/compress-image-to-20kb",
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
        h1="Compress Image to 20KB."
        h2="Free and private — shrink any photo to 20KB directly in your browser. No sign-up, no upload."
      >
        <CompressorApp defaultTargetKb={20} />

        <section className="flex flex-col gap-space-md mt-space-xl">
          <h2 className="font-headline-md text-headline-md text-primary">
            When do you need a 20KB image?
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            A 20KB file limit is one of the strictest size constraints you&apos;ll encounter. It
            appears on older government portals and application systems that were designed when
            storage and bandwidth were expensive. Common scenarios include:
          </p>
          <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant list-disc pl-5">
            <li>Competitive exam and recruitment application portals</li>
            <li>Passport-style photo uploads on legacy registration systems</li>
            <li>Signature image uploads alongside a 20KB photo requirement</li>
            <li>Older municipal or district-level government web portals</li>
          </ul>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mt-2">
            Always check the official application instructions to confirm the current requirement.
            File size limits can change between application cycles.
          </p>

          <h2 className="font-headline-md text-headline-md text-primary mt-4">
            Will my photo still be clear at 20KB?
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            For a typical passport-style headshot (person, plain background), 20KB is enough
            to maintain a recognisable, acceptable image. The face will be clear. Very detailed
            backgrounds and fine patterns may show compression artefacts, but for a plain portrait
            the quality is generally acceptable for official submissions.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            If the portal also specifies pixel dimensions (e.g. 200×230 pixels), use our{" "}
            <Link href="/resize-image" className="text-secondary hover:underline">
              resize tool
            </Link>{" "}
            first, then compress.
          </p>
        </section>

        <section className="p-space-md rounded-xl bg-surface-container-low shadow-sm mt-space-md">
          <h2 className="font-headline-sm text-headline-sm text-primary mb-3">
            Other size targets
          </h2>
          <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
            {[
              { href: "/compress-image-to-50kb", label: "50KB" },
              { href: "/compress-image-to-100kb", label: "100KB" },
              { href: "/compress-image-to-200kb", label: "200KB" },
              { href: "/signature-to-20kb", label: "Signature to 20KB" },
              { href: "/india-photo-size-requirements", label: "India upload guide →" },
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
