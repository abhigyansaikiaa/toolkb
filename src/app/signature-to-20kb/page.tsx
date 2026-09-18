import PageTemplate from "@/components/PageTemplate";
import CompressorApp from "@/components/CompressorApp";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Compress Signature to 20KB Online Free",
  description:
    "Compress a signature photo to exactly 20KB free. No sign-up. Many exam and job application portals require signatures under 20KB — this tool handles it.",
  alternates: { canonical: "https://toolkb.in/signature-to-20kb" },
  openGraph: {
    title: "Compress Signature to 20KB Free",
    description:
      "Signature too large? Compress it to 20KB for free, right in your browser. No uploads, no sign-up.",
    url: "https://toolkb.in/signature-to-20kb",
    siteName: "ToolKB",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Compress Signature to 20KB Free",
    description: "Shrink a signature photo to 20KB. Free, no sign-up, no uploads.",
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
        { "@type": "ListItem", position: 3, name: "Signature to 20KB", item: "https://toolkb.in/signature-to-20kb" },
      ],
    },
    {
      "@type": "SoftwareApplication",
      name: "ToolKB 20KB Signature Compressor",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Any",
      url: "https://toolkb.in/signature-to-20kb",
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
        h1="Compress Signature to 20KB."
        h2="Free and private — reduce your signature photo to 20KB in your browser. No sign-up, no upload."
      >
        <CompressorApp defaultTargetKb={20} />

        <section className="flex flex-col gap-space-md mt-space-xl">
          <h2 className="font-headline-md text-headline-md text-primary">
            Why 20KB for a signature?
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            A 20KB limit for a signature upload is stricter than usual, but it is workable because
            a signature — dark ink on white paper — contains relatively simple image data. At 20KB,
            the ink strokes remain sharp and the signature is easily legible, as long as the
            original photo was taken well (good light, no shadows, plain white background).
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Many application portals specify a 20KB limit for signatures alongside a separate,
            slightly larger limit for passport photos. Always check the specific instructions
            for the form you are filling in, as requirements can change between application cycles.
          </p>

          <h2 className="font-headline-md text-headline-md text-primary mt-4">
            Your signature stays on your device
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Signatures are legal identifiers. ToolKB never uploads your file to any server — the
            entire compression process runs inside your browser. You can confirm this by opening
            the Network tab in your browser&apos;s developer tools (F12) during compression.
          </p>
        </section>

        <section className="p-space-md rounded-xl bg-surface-container-low shadow-sm mt-space-md">
          <h2 className="font-headline-sm text-headline-sm text-primary mb-3">
            Related tools
          </h2>
          <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
            {[
              { href: "/signature-to-50kb", label: "Signature to 50KB" },
              { href: "/signature-compressor", label: "General signature compressor" },
              { href: "/compress-image-to-20kb", label: "Photo to 20KB" },
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
