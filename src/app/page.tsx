import PageTemplate from "@/components/PageTemplate";
import CompressorApp from "@/components/CompressorApp";
import FAQSection from "@/components/FAQSection";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ToolKB — Free Online Image Compressor & File Tools",
  description:
    "Compress images to an exact KB target — 20KB, 50KB, 100KB, 200KB or any custom size. Free, no sign-up. Your image is processed in your browser.",
  alternates: { canonical: "https://toolkb.in" },
  openGraph: {
    title: "ToolKB — Free Online Image Compressor & File Tools",
    description:
      "Set any KB target and compress your image instantly. Free, no sign-up. Your image is processed in your browser.",
    url: "https://toolkb.in",
    siteName: "ToolKB",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "ToolKB — Free Image Compressor",
    description: "Compress images to any KB target. Free, no sign-up, processed in your browser.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "name": "ToolKB",
      "url": "https://toolkb.in",
    },
    {
      "@type": "WebApplication",
      "name": "ToolKB Image Compressor",
      "applicationCategory": "MultimediaApplication",
      "operatingSystem": "Any",
      "url": "https://toolkb.in/compress-image",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
      },
      "featureList": [
        "Compress images to a specific file size",
        "Preset targets: 20KB, 50KB, 100KB, 200KB",
        "Custom KB input",
        "Supports JPG, PNG, WebP",
        "Client-side processing — image stays in your browser",
        "Free, no sign-up required",
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageTemplate
        h1="Compress images to any size."
        h2="Set an exact KB target. Drop your photo. Download a file that meets the limit."
      >
        <CompressorApp defaultTargetKb={50} />

        {/* Why ToolKB */}
        <section className="flex flex-col gap-space-md mt-space-xl">
          <div className="flex flex-col gap-1">
            <span className="font-mono-spec text-mono-spec uppercase text-secondary font-bold tracking-wider">
              WHY TOOLKB
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
              Get the file right, the first time.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Upload forms have file size limits. Email attachments have limits. Most tools make you
              wrestle with quality sliders. ToolKB lets you set the exact output size — and handles
              the compression for you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {[
              {
                icon: "assignment",
                title: "Exam & Portal Forms",
                body: "Some online application portals set hard file size limits between 20KB and 100KB for photo and signature uploads.",
              },
              {
                icon: "badge",
                title: "Job Applications",
                body: "HR portals and recruitment systems commonly ask for a photo and signature under specific KB limits.",
              },
              {
                icon: "school",
                title: "College Admissions",
                body: "University and college admission portals frequently cap document uploads at 100KB or 200KB per file.",
              },
              {
                icon: "flight_takeoff",
                title: "Visa & Travel Documents",
                body: "Passport photo uploads for visa applications often specify both file size and exact pixel dimensions.",
              },
            ].map(({ icon, title, body }) => (
              <div
                key={title}
                className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-start gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-[22px]" aria-hidden="true">{icon}</span>
                </div>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-primary">{title}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Internal links to size presets */}
        <section className="flex flex-col gap-space-sm mt-space-xl p-space-md rounded-xl bg-surface-container-low shadow-sm">
          <h2 className="font-headline-sm text-headline-sm text-primary">Compress to a specific size</h2>
          <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
            {[
              { href: "/compress-image", label: "Any size (custom KB)" },
              { href: "/compress-image-to-20kb", label: "Compress to 20KB" },
              { href: "/compress-image-to-50kb", label: "Compress to 50KB" },
              { href: "/compress-image-to-100kb", label: "Compress to 100KB" },
              { href: "/compress-image-to-200kb", label: "Compress to 200KB" },
              { href: "/resize-image", label: "Resize image" },
              { href: "/signature-to-20kb", label: "Signature to 20KB" },
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

        <div className="mt-space-xl">
          <FAQSection />
        </div>
      </PageTemplate>
    </>
  );
}
