import PageTemplate from "@/components/PageTemplate";
import CompressorApp from "@/components/CompressorApp";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Compress Image to 200KB Online Free | ToolKB",
  description:
    "Compress any image to 200KB free, no sign-up. Excellent quality retained at 200KB — suitable for high-quality profiles and document uploads. JPG, PNG, WebP.",
  alternates: { canonical: "https://toolkb.in/compress-image-to-200kb" },
  openGraph: {
    title: "Compress Image to 200KB Online Free | ToolKB",
    description:
      "Free 200KB image compressor. No sign-up. Excellent quality retained at 200KB. Your image is processed in your browser.",
    url: "https://toolkb.in/compress-image-to-200kb",
    siteName: "ToolKB",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Compress Image to 200KB Free | ToolKB",
    description: "Reduce any photo to 200KB. Free, no sign-up, processed in your browser.",
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
        { "@type": "ListItem", position: 3, name: "Compress to 200KB", item: "https://toolkb.in/compress-image-to-200kb" },
      ],
    },
    {
      "@type": "SoftwareApplication",
      name: "ToolKB 200KB Image Compressor",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Any",
      url: "https://toolkb.in/compress-image-to-200kb",
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
        h1="Compress Image to 200KB."
        h2="Free and private — reduce any photo to 200KB in your browser. No sign-up, no upload."
      >
        <CompressorApp defaultTargetKb={200} />

        <section className="flex flex-col gap-space-md mt-space-xl">
          <h2 className="font-headline-md text-headline-md text-primary">
            200KB — a high-quality target
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            At 200KB, images retain excellent visual quality. Even scanned documents, certificates,
            and photos with text remain sharp and fully readable. This makes 200KB a common
            requirement for:
          </p>
          <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant list-disc pl-5">
            <li>Bank KYC (Know Your Customer) document submissions</li>
            <li>High-resolution profile photos for professional portals</li>
            <li>Scanned certificates and transcripts attached to applications</li>
            <li>Medical and health-related document portals</li>
            <li>Real estate and legal document management systems</li>
          </ul>

          <h2 className="font-headline-md text-headline-md text-primary mt-4">
            Compressing scanned documents
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            If you have photographed a document with your phone, the resulting file is typically
            3–8MB. This tool will compress it to 200KB while keeping text readable and details
            visible. For best results, ensure the original photo is well-lit and not blurry before
            compressing — compression cannot recover a blurry source image.
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
              { href: "/compress-image-to-100kb", label: "100KB" },
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
