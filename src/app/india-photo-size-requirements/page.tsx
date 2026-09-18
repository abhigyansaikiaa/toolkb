import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photo & Signature Size Requirements for Indian Applications",
  description:
    "Practical guide to photo and signature file size requirements for Indian government exams, job applications, and university admissions. Always verify with the official portal.",
  alternates: { canonical: "https://toolkb.in/india-photo-size-requirements" },
  openGraph: {
    title: "Photo & Signature Size Requirements for Indian Applications",
    description:
      "Practical guidance on photo and signature KB limits for Indian applications. Tips to prepare compliant uploads.",
    url: "https://toolkb.in/india-photo-size-requirements",
    siteName: "ToolKB",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Photo Size Requirements for Indian Applications",
    description: "A practical guide to preparing photos and signatures for Indian government and exam portals.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://toolkb.in" },
        { "@type": "ListItem", position: 2, name: "India Photo Size Requirements", item: "https://toolkb.in/india-photo-size-requirements" },
      ],
    },
    {
      "@type": "Article",
      headline: "Photo & Signature Size Requirements for Indian Applications",
      description:
        "Practical guide to photo and signature file size requirements for Indian government exams, job applications, and university admissions.",
      url: "https://toolkb.in/india-photo-size-requirements",
      publisher: {
        "@type": "Organization",
        name: "ToolKB",
        url: "https://toolkb.in",
      },
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

      {/* Shared header */}
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
        <article className="flex flex-col gap-space-lg">

          <header className="flex flex-col gap-space-sm">
            <div className="inline-flex items-center gap-space-xs px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-label-sm font-label-sm w-fit">
              <span className="font-mono-spec tracking-wider uppercase">Guide</span>
            </div>
            <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">
              Photo &amp; Signature Size Requirements for Indian Applications
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              A practical guide to preparing compliant photo and signature uploads for Indian
              government exams, job portals, and university admissions.
            </p>
            <div className="p-3 rounded-lg bg-surface-container border border-outline-variant/40 mt-2">
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                <strong>Important:</strong> File size and dimension requirements are set by each
                individual portal and change regularly. Always check the official application
                instructions before submitting. The information on this page is general guidance
                only — not portal-specific official requirements.
              </p>
            </div>
          </header>

          {/* Why requirements exist */}
          <section className="flex flex-col gap-space-sm">
            <h2 className="font-headline-md text-headline-md text-primary">
              Why do portals have strict file size limits?
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Most Indian government exam and recruitment portals were built over a long period, and
              many of their infrastructure decisions — including file size limits — date back to when
              internet speeds and server storage were significantly more constrained. As a result,
              limits that feel extremely tight today (such as 10KB or 20KB for a photo) are often
              legacy requirements that haven&apos;t been updated.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              More recently built portals tend to have more generous limits (100KB–300KB), which
              makes it easier to upload a clear photo without losing quality.
            </p>
          </section>

          {/* What to look for */}
          <section className="flex flex-col gap-space-sm">
            <h2 className="font-headline-md text-headline-md text-primary">
              What to check in the official instructions
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Before preparing your photo or signature, locate the &quot;Upload Documents&quot; or
              &quot;Photo and Signature Guidelines&quot; section in the official notification or
              application instructions. Look for:
            </p>
            <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant list-disc pl-5">
              <li><strong>File size limit</strong> — typically expressed in KB (kilobytes)</li>
              <li><strong>Image dimensions</strong> — width × height in pixels (e.g. 200×230)</li>
              <li><strong>File format</strong> — usually JPEG/JPG; occasionally PNG</li>
              <li><strong>Background colour</strong> — many portals require a plain white or off-white background</li>
              <li><strong>Separate limits for photo and signature</strong> — these are almost always different</li>
            </ul>
          </section>

          {/* General size ranges */}
          <section className="flex flex-col gap-space-sm">
            <h2 className="font-headline-md text-headline-md text-primary">
              Typical size ranges (general guidance)
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              While specific requirements vary, these general ranges are common across Indian
              government and academic portals:
            </p>
            <div className="overflow-x-auto mt-2">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface-container text-on-surface font-label-md text-left">
                    <th className="px-3 py-2 border border-outline-variant/40 rounded-tl-lg">Document type</th>
                    <th className="px-3 py-2 border border-outline-variant/40">Typical size range</th>
                    <th className="px-3 py-2 border border-outline-variant/40 rounded-tr-lg">Common format</th>
                  </tr>
                </thead>
                <tbody className="text-on-surface-variant">
                  {[
                    ["Passport-style photo", "10KB – 100KB", "JPEG"],
                    ["Handwritten signature", "5KB – 50KB", "JPEG"],
                    ["Scanned certificate", "50KB – 500KB", "JPEG or PDF"],
                    ["ID card copy", "50KB – 300KB", "JPEG or PDF"],
                  ].map(([type, range, format], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-surface" : "bg-surface-container-lowest"}>
                      <td className="px-3 py-2 border border-outline-variant/40">{type}</td>
                      <td className="px-3 py-2 border border-outline-variant/40">{range}</td>
                      <td className="px-3 py-2 border border-outline-variant/40">{format}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant italic mt-1">
              These are illustrative ranges based on commonly observed requirements. They are not
              the official specifications for any particular portal.
            </p>
          </section>

          {/* How to prepare */}
          <section className="flex flex-col gap-space-sm">
            <h2 className="font-headline-md text-headline-md text-primary">
              How to prepare a compliant photo
            </h2>
            <ol className="flex flex-col gap-3 font-body-sm text-body-sm text-on-surface-variant list-decimal pl-5">
              <li>
                <strong>Take a clear photo.</strong> Use good natural light. Stand or sit in front
                of a plain white or off-white wall. Keep your face centred and fully visible. Avoid
                shadows on your face or background.
              </li>
              <li>
                <strong>Crop if needed.</strong> Most passport-style photos show the face and
                shoulders. If the portal specifies dimensions, try to match the aspect ratio
                before compressing.
              </li>
              <li>
                <strong>Check the pixel dimensions.</strong> If the portal requires a specific
                pixel size (e.g. 200×230), resize first. Our{" "}
                <Link href="/resize-image" className="text-secondary hover:underline">
                  resize tool
                </Link>{" "}
                is coming soon.
              </li>
              <li>
                <strong>Compress the file.</strong> Use the target size listed in the portal
                instructions. ToolKB compresses your photo directly in the browser — nothing is
                uploaded.
              </li>
              <li>
                <strong>Verify before uploading.</strong> Check the final file size matches the
                limit. Check the image looks clear. Some portals display a preview after upload —
                use it to confirm.
              </li>
            </ol>
          </section>

          {/* Signature section */}
          <section className="flex flex-col gap-space-sm">
            <h2 className="font-headline-md text-headline-md text-primary">
              How to prepare a signature upload
            </h2>
            <ol className="flex flex-col gap-3 font-body-sm text-body-sm text-on-surface-variant list-decimal pl-5">
              <li>Sign your name on a blank white, unlined piece of paper using a black or dark blue pen.</li>
              <li>Place the paper on a flat surface and photograph it from directly above using your phone camera.</li>
              <li>Ensure there are no shadows across the signature and the ink is clearly visible.</li>
              <li>Upload the photo to the{" "}
                <Link href="/signature-compressor" className="text-secondary hover:underline">
                  ToolKB Signature Compressor
                </Link>{" "}
                and set the target KB to match the portal requirement.
              </li>
            </ol>
          </section>

          {/* Tools */}
          <section className="p-space-md rounded-xl bg-surface-container-low shadow-sm">
            <h2 className="font-headline-sm text-headline-sm text-primary mb-3">
              Compress your photo or signature
            </h2>
            <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
              {[
                { href: "/compress-image-to-20kb", label: "Photo to 20KB" },
                { href: "/compress-image-to-50kb", label: "Photo to 50KB" },
                { href: "/compress-image-to-100kb", label: "Photo to 100KB" },
                { href: "/signature-to-20kb", label: "Signature to 20KB" },
                { href: "/signature-to-50kb", label: "Signature to 50KB" },
                { href: "/compress-image", label: "Custom KB target" },
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

        </article>
      </main>
    </>
  );
}
