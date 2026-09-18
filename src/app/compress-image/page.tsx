import PageTemplate from "@/components/PageTemplate";
import CompressorApp from "@/components/CompressorApp";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Compress Image Online Free — Any File Size",
  description:
    "Free image compressor. Set any KB target — 20KB, 50KB, 100KB, 200KB or custom. No sign-up. Runs in your browser. JPG, PNG, WebP supported.",
  alternates: { canonical: "https://toolkb.in/compress-image" },
  openGraph: {
    title: "Compress Image Online Free",
    description:
      "Compress images to any target file size for free. No uploads, no sign-up, works on any device.",
    url: "https://toolkb.in/compress-image",
    siteName: "ToolKB",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Compress Image Online Free",
    description:
      "Set your target KB — ToolKB compresses the image to fit. Free, no sign-up, no uploads.",
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
      ],
    },
    {
      "@type": "SoftwareApplication",
      name: "ToolKB Image Compressor",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Any",
      url: "https://toolkb.in/compress-image",
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
        h1="Compress an image."
        h2="Pick a target file size, drop your photo, download the result. Free and completely private."
      >
        <CompressorApp defaultTargetKb={50} />

        <section className="flex flex-col gap-space-md mt-space-xl">
          <h2 className="font-headline-md text-headline-md text-primary">
            How it works
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Most image compressors ask you to set a quality percentage — which means you have to
            guess-and-check until the output is small enough. ToolKB works the other way around:
            you tell it the target size (e.g. 50KB), and it automatically finds the highest quality
            that fits within that limit.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            When quality adjustment alone isn&apos;t enough to reach a very small target, the tool
            also reduces image dimensions proportionally to hit the target, then optimises quality
            at the new size.
          </p>

          <h2 className="font-headline-md text-headline-md text-primary mt-4">
            Supported formats
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            You can upload <strong>JPG</strong>, <strong>PNG</strong>, and <strong>WebP</strong>{" "}
            images. The output is always a JPEG, which achieves the best compression ratios for
            photographs while keeping the file readable by any application or portal.
          </p>

          <h2 className="font-headline-md text-headline-md text-primary mt-4">
            Privacy
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Your image is never uploaded anywhere. The entire compression process runs inside your
            browser tab using standard web technologies. You can verify this by opening your
            browser&apos;s Network tab (F12) while compressing — you will see zero outgoing file
            transfers.
          </p>
        </section>

        <section className="p-space-md rounded-xl bg-surface-container-low shadow-sm mt-space-md">
          <h2 className="font-headline-sm text-headline-sm text-primary mb-3">
            Common target sizes
          </h2>
          <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
            {[
              { href: "/compress-image-to-20kb", label: "Compress to 20KB" },
              { href: "/compress-image-to-50kb", label: "Compress to 50KB" },
              { href: "/compress-image-to-100kb", label: "Compress to 100KB" },
              { href: "/compress-image-to-200kb", label: "Compress to 200KB" },
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
