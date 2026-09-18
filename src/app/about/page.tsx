import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About ToolKB — Privacy-First File Tools",
  description:
    "ToolKB is a free collection of file tools that run entirely in your browser. No uploads, no servers, no account required.",
  alternates: { canonical: "https://toolkb.in/about" },
  openGraph: {
    title: "About ToolKB — Privacy-First File Tools",
    description:
      "Learn how ToolKB compresses images entirely in your browser — no server, no uploads, no account required.",
    url: "https://toolkb.in/about",
    siteName: "ToolKB",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "About ToolKB",
    description: "Free file tools that run entirely in your browser. No uploads, no sign-up.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://toolkb.in" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://toolkb.in/about" },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="fixed top-0 inset-x-0 z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.03)] pt-safe">
        <div className="h-14 px-margin flex items-center max-w-4xl mx-auto">
          <Link href="/" aria-label="ToolKB — Home">
            <Image
              src="/logo.png"
              alt="ToolKB logo"
              width={160}
              height={46}
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>
        </div>
      </header>

      <main className="flex-1 flex flex-col relative w-full pt-24 pb-28 px-margin bg-surface max-w-2xl mx-auto">
        <div className="flex flex-col gap-space-lg">

          <section className="flex flex-col gap-space-sm">
            <div className="inline-flex items-center gap-space-xs px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-label-sm font-label-sm w-fit">
              <span className="font-mono-spec tracking-wider uppercase">About</span>
            </div>
            <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">
              Why we built ToolKB.
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Compressing a photo for a government form or job application should not require
              uploading your personal documents to a random server. We built ToolKB so that
              it doesn&apos;t have to.
            </p>
          </section>

          <section className="flex flex-col gap-space-sm">
            <h2 className="font-headline-md text-headline-md text-primary">
              How it works
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              When you drop a photo into ToolKB, it is loaded directly into your browser tab.
              The compression algorithm runs on your device using standard browser APIs —
              the same technology used by games, video editors, and creative tools that run
              entirely in the browser.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              The compressed file is saved directly to your downloads folder. At no point is
              the image transmitted over the network.
            </p>
            <div className="p-space-md rounded-xl bg-surface-container-low border border-outline-variant/30 mt-2">
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                Private by design
              </h3>
              <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant list-disc pl-4">
                <li>Your files are not uploaded to any server.</li>
                <li>Your files are not stored or logged.</li>
                <li>Processing happens entirely on your device.</li>
                <li>ToolKB works offline once the page has loaded.</li>
              </ul>
            </div>
          </section>

          <section className="flex flex-col gap-space-sm">
            <h2 className="font-headline-md text-headline-md text-primary">
              Verify it yourself
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Open your browser&apos;s developer tools (F12 or right-click → Inspect), go to
              the <strong>Network</strong> tab, and compress an image. You will see that no
              network requests are made with your file data.
            </p>
          </section>

          <section className="flex flex-col gap-space-sm">
            <h2 className="font-headline-md text-headline-md text-primary">
              What ToolKB is
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              ToolKB is a growing collection of small, focused tools for common file tasks.
              The current focus is image compression. Future tools will cover resizing, format
              conversion, PDF handling, and more.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              All tools follow the same principle: they run in your browser, they are free to
              use, and they require no account.
            </p>
          </section>

          <div className="p-space-md rounded-xl bg-surface-container-low shadow-sm">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Current tools</h3>
            <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
              {[
                { href: "/compress-image", label: "Image Compressor" },
                { href: "/signature-compressor", label: "Signature Compressor" },
                { href: "/compress-image-to-20kb", label: "Compress to 20KB" },
                { href: "/compress-image-to-50kb", label: "Compress to 50KB" },
                { href: "/compress-image-to-100kb", label: "Compress to 100KB" },
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

        </div>
      </main>
    </>
  );
}
