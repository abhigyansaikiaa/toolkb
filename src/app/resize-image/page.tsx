import PageTemplate from "@/components/PageTemplate";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resize Image Online Free",
  description:
    "Resize images to exact pixel dimensions online. Free, no sign-up. Coming soon — for now, use our compressor to reduce file size.",
  alternates: { canonical: "https://toolkb.in/resize-image" },
  openGraph: {
    title: "Resize Image Online Free",
    description: "Resize images to exact pixel dimensions. Free, no sign-up. Coming soon on ToolKB.",
    url: "https://toolkb.in/resize-image",
    siteName: "ToolKB",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Resize Image Free",
    description: "Resize images to exact pixel dimensions. Free, no sign-up. Coming soon.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://toolkb.in" },
    { "@type": "ListItem", position: 2, name: "Resize Image", item: "https://toolkb.in/resize-image" },
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
        h1="Resize Image."
        h2="Change the exact pixel width and height of your photo. Coming soon."
      >
        <div className="flex flex-col items-center justify-center p-space-xl bg-surface-container-lowest rounded-xl border border-surface-container shadow-sm w-full text-center py-20">
          <span
            className="material-symbols-outlined text-[48px] text-surface-container-high mb-4"
            aria-hidden="true"
          >
            aspect_ratio
          </span>
          <h2 className="font-headline-md text-headline-md text-primary mb-2">Coming Soon</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
            The image resizer is under development. In the meantime, you can use the compressor
            to reduce your photo&apos;s file size.
          </p>
          <Link
            href="/compress-image"
            className="mt-6 px-6 py-2.5 rounded-lg bg-primary text-on-primary font-label-md hover:opacity-90 transition-opacity"
          >
            Go to Image Compressor
          </Link>
        </div>

        <section className="flex flex-col gap-space-md mt-space-xl">
          <h2 className="font-headline-md text-headline-md text-primary">
            What the resize tool will do
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Many online portals specify both a file size limit <em>and</em> a pixel dimension
            requirement. For example, a portal might require a photo that is exactly 300×300
            pixels and under 50KB in size. Resizing to the correct dimensions is the first step;
            compressing to the correct file size is the second.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            The resize tool will let you set exact pixel dimensions while maintaining aspect ratio
            or cropping to a specific shape. Like all ToolKB tools, it will run entirely in your
            browser with no file uploads.
          </p>

          <div className="p-space-md rounded-xl bg-surface-container-low shadow-sm mt-2">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
              Available now — compress to a target size
            </h3>
            <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
              {[
                { href: "/compress-image-to-20kb", label: "Compress to 20KB" },
                { href: "/compress-image-to-50kb", label: "Compress to 50KB" },
                { href: "/compress-image-to-100kb", label: "Compress to 100KB" },
                { href: "/compress-image-to-200kb", label: "Compress to 200KB" },
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
          </div>
        </section>
      </PageTemplate>
    </>
  );
}
