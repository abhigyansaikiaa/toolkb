import PageTemplate from "@/components/PageTemplate";
import CompressorApp from "@/components/CompressorApp";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Compress Signature Image Online Free",
  description:
    "Compress a photo of your handwritten signature to meet strict KB limits. Free, no sign-up. Works in your browser — your signature never leaves your device.",
  alternates: { canonical: "https://toolkb.in/signature-compressor" },
  openGraph: {
    title: "Compress Signature Image Online Free",
    description:
      "Signature too large for the upload form? Compress it for free, right in your browser. No uploads, no sign-up.",
    url: "https://toolkb.in/signature-compressor",
    siteName: "ToolKB",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Compress Signature Image Free",
    description: "Shrink a signature photo to any KB limit. Free, no sign-up, no uploads.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://toolkb.in" },
        { "@type": "ListItem", position: 2, name: "Signature Compressor", item: "https://toolkb.in/signature-compressor" },
      ],
    },
    {
      "@type": "SoftwareApplication",
      name: "ToolKB Signature Compressor",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Any",
      url: "https://toolkb.in/signature-compressor",
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
        h1="Compress Signature Image."
        h2="Shrink a photo of your handwritten signature to meet strict upload limits. Free, private, and instant."
      >
        <CompressorApp defaultTargetKb={15} />

        <section className="flex flex-col gap-space-md mt-space-xl">
          <h2 className="font-headline-md text-headline-md text-primary">
            Why is the signature size limit so strict?
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Application portals often set very tight limits on signature uploads — sometimes as
            low as 10KB to 30KB. This is because a signature is conceptually simple: dark ink on
            a white background. At that simplicity, very little data is needed to represent it
            faithfully.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            A photo taken with a modern smartphone, however, is typically several megabytes. This
            tool compresses it down to whatever the portal requires, while keeping the ink strokes
            clear and legible.
          </p>

          <h2 className="font-headline-md text-headline-md text-primary mt-4">
            Tips for a good signature photo
          </h2>
          <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant list-disc pl-5">
            <li>Sign on <strong>plain white, unlined paper</strong> with a black or dark blue pen</li>
            <li>Place the paper on a flat surface in <strong>good natural light</strong></li>
            <li>Photograph from directly above — avoid shadows and angles</li>
            <li>Crop out the margins if possible before uploading here</li>
            <li>A clear, high-contrast source image will compress to a smaller file with better quality</li>
          </ul>

          <h2 className="font-headline-md text-headline-md text-primary mt-4">
            Privacy
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Your signature is sensitive personal data. ToolKB compresses it entirely inside your
            browser — it is never sent to any server. You can verify this in your browser&apos;s
            Network tab (F12) during compression: there will be no outgoing file transfers.
          </p>
        </section>

        <section className="p-space-md rounded-xl bg-surface-container-low shadow-sm mt-space-md">
          <h2 className="font-headline-sm text-headline-sm text-primary mb-3">
            Specific signature size targets
          </h2>
          <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
            {[
              { href: "/signature-to-20kb", label: "Signature to 20KB" },
              { href: "/signature-to-50kb", label: "Signature to 50KB" },
              { href: "/compress-image-to-20kb", label: "Photo to 20KB" },
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
