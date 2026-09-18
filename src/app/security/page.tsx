import { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { LEGAL_CONFIG } from "@/lib/legal-config";

export const metadata: Metadata = {
  title: "Security",
  description: "Learn how ToolKB implements security and protects your files through local browser processing.",
  alternates: {
    canonical: `${LEGAL_CONFIG.DOMAIN}/security`,
  },
};

export default function SecurityPage() {
  return (
    <LegalLayout title="ToolKB Security" lastUpdated={LEGAL_CONFIG.LAST_UPDATED}>
      <section className="space-y-4">
        <p>
          At {LEGAL_CONFIG.SITE_NAME}, we take security seriously. We have designed our tools with a privacy-first, secure architecture intended to keep your files safe.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-title-lg font-bold text-on-surface">Local Image Processing</h2>
        <p className="font-bold text-primary">Your files stay private.</p>
        <p>
          The current {LEGAL_CONFIG.SITE_NAME} image compressor operates entirely within your web browser. When you select a file to compress or resize, the processing happens locally on your device. Your image files are not intentionally uploaded to our servers, ensuring your sensitive documents remain under your control.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-title-lg font-bold text-on-surface">Input Validation &amp; Restrictions</h2>
        <p>
          To protect both your browser and our infrastructure, we enforce strict validations on the files processed by our tools:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Format Restrictions:</strong> We only accept standard, safe image formats (JPG, PNG, WebP) and actively reject potentially malicious formats (such as SVG).</li>
          <li><strong>Resource Protections:</strong> Our application implements limits on file sizes and image dimensions to prevent browser crashes and resource exhaustion (such as decompression bombs).</li>
          <li><strong>Processing Limits:</strong> Compression operations are mathematically bounded to ensure they complete in a reasonable timeframe without freezing your device.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-title-lg font-bold text-on-surface">Infrastructure Security</h2>
        <p>
          We rely on modern, secure infrastructure (such as Vercel) to host our website. We monitor our dependencies for security updates and enforce strict Content Security Policies (CSP) and security headers to prevent cross-site scripting (XSS) and clickjacking.
        </p>
      </section>

      {LEGAL_CONFIG.CONTACT_EMAIL && (
        <section className="space-y-4">
          <h2 className="text-title-lg font-bold text-on-surface">Responsible Reporting</h2>
          <p>
            If you are a security researcher or user who has discovered a potential security vulnerability in {LEGAL_CONFIG.SITE_NAME}, we appreciate your help in disclosing it to us responsibly. 
          </p>
          <p>
            Please report any security issues directly to: <a href={`mailto:${LEGAL_CONFIG.CONTACT_EMAIL}`} className="text-primary hover:underline">{LEGAL_CONFIG.CONTACT_EMAIL}</a>
          </p>
          <p>
            We will review and respond to reports as quickly as possible.
          </p>
        </section>
      )}
    </LegalLayout>
  );
}
