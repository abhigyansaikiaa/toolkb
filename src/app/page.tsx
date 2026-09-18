import PageTemplate from "@/components/PageTemplate";
import CompressorApp from "@/components/CompressorApp";
import FAQSection from "@/components/FAQSection";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Photo Compressor — Compress to Any KB Online",
  description:
    "Compress JPG, PNG, or WebP images to any target size — 20KB, 50KB, 100KB, 200KB or custom. Free, no sign-up. Runs entirely in your browser.",
  alternates: { canonical: "https://toolkb.in" },
  openGraph: {
    title: "Free Photo Compressor — Compress to Any KB Online",
    description:
      "Free image compressor that runs in your browser. Set any file size target. No uploads, no sign-up.",
    url: "https://toolkb.in",
    siteName: "ToolKB",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Free Photo Compressor",
    description: "Compress images to any KB target. Free, no sign-up, fully in-browser.",
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
      "@type": "Organization",
      "name": "ToolKB",
      "url": "https://toolkb.in",
      "logo": {
        "@type": "ImageObject",
        "url": "https://toolkb.in/logo.png",
      },
    },
    {
      "@type": "SoftwareApplication",
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
        "Client-side processing — no file upload",
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
        h1="Tools for the little things."
        h2="Compress, resize, and prepare your files in seconds. Free, and completely private."
      >
        <CompressorApp defaultTargetKb={50} />

        {/* Why ToolKB */}
        <section className="flex flex-col gap-space-md mt-space-xl">
          <div className="flex flex-col gap-1">
            <span className="font-mono-spec text-mono-spec uppercase text-secondary font-bold tracking-wider">
              WHY TOOLKB
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
              Get the file right.
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
                body: "Strict upload portals for competitive exams and government applications often set hard limits between 20KB and 100KB.",
              },
              {
                icon: "badge",
                title: "Job Applications",
                body: "HR portals and recruitment systems typically require a headshot and signature under a combined 150KB.",
              },
              {
                icon: "school",
                title: "College Admissions",
                body: "University admission portals frequently cap document uploads at 100KB or 200KB per file.",
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
              { href: "/compress-image-to-20kb", label: "20KB" },
              { href: "/compress-image-to-50kb", label: "50KB" },
              { href: "/compress-image-to-100kb", label: "100KB" },
              { href: "/compress-image-to-200kb", label: "200KB" },
              { href: "/signature-compressor", label: "Signature" },
              { href: "/india-photo-size-requirements", label: "India upload requirements →" },
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
