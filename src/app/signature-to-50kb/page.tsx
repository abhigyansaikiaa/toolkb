import PageTemplate from "@/components/PageTemplate";
import CompressorApp from "@/components/CompressorApp";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Compress Signature to 50KB Online Free",
  description:
    "Compress a signature photo to 50KB free, no sign-up. Common for KYC and banking portals. Runs in your browser — your signature is never uploaded.",
  alternates: { canonical: "https://toolkb.in/signature-to-50kb" },
  openGraph: {
    title: "Compress Signature to 50KB Free",
    description:
      "Shrink a signature photo to 50KB for KYC and banking portals. Free, no uploads, no sign-up.",
    url: "https://toolkb.in/signature-to-50kb",
    siteName: "ToolKB",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Compress Signature to 50KB Free",
    description: "Compress a signature image to 50KB. Free, no sign-up, no uploads.",
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
        { "@type": "ListItem", position: 3, name: "Signature to 50KB", item: "https://toolkb.in/signature-to-50kb" },
      ],
    },
    {
      "@type": "SoftwareApplication",
      name: "ToolKB 50KB Signature Compressor",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Any",
      url: "https://toolkb.in/signature-to-50kb",
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
        h1="Compress Signature to 50KB."
        h2="Free and private — reduce your signature photo to 50KB in your browser. No sign-up, no upload."
      >
        <CompressorApp defaultTargetKb={50} />

        <section className="flex flex-col gap-space-md mt-space-xl">
          <h2 className="font-headline-md text-headline-md text-primary">
            50KB for signatures
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            A 50KB signature limit gives you more flexibility than the stricter 20KB requirement.
            At 50KB, a well-photographed signature will look crisp and sharp — the ink is clearly
            defined against the white background, and there are no visible compression artefacts.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            This limit is common across banking KYC (Know Your Customer) portals, financial
            services onboarding forms, and corporate HR systems. Always verify the current
            requirement directly from the official portal instructions before submitting.
          </p>

          <h2 className="font-headline-md text-headline-md text-primary mt-4">
            Privacy
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            ToolKB compresses your signature entirely within your browser tab. No file is ever
            transmitted to a server. This makes it safe to use with sensitive documents such
            as financial and legal signatures.
          </p>
        </section>

        <section className="p-space-md rounded-xl bg-surface-container-low shadow-sm mt-space-md">
          <h2 className="font-headline-sm text-headline-sm text-primary mb-3">
            Related tools
          </h2>
          <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
            {[
              { href: "/signature-to-20kb", label: "Signature to 20KB" },
              { href: "/signature-compressor", label: "General signature compressor" },
              { href: "/compress-image-to-50kb", label: "Photo to 50KB" },
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
