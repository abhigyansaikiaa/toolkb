import { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { LEGAL_CONFIG } from "@/lib/legal-config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read the Terms of Service for using ToolKB's free online tools.",
  alternates: {
    canonical: `${LEGAL_CONFIG.DOMAIN}/terms`,
  },
};

export default function TermsOfService() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated={LEGAL_CONFIG.LAST_UPDATED}>
      <section className="space-y-4">
        <h2 className="text-title-lg font-bold text-on-surface">1. Acceptance</h2>
        <p>
          By accessing and using {LEGAL_CONFIG.SITE_NAME}, you agree to comply with and be bound by these Terms of Service. If you do not agree with these terms, you should not use our services.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-title-lg font-bold text-on-surface">2. Description of Service</h2>
        <p>
          {LEGAL_CONFIG.SITE_NAME} provides online utilities for files, images, and related tasks. Currently, our primary offering is a browser-based image compressor designed to help you reduce image file sizes directly on your device.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-title-lg font-bold text-on-surface">3. Free Tools</h2>
        <p>
          Our tools are currently provided free of charge. We reserve the right to modify, suspend, or discontinue any part of our service at any time without prior notice.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-title-lg font-bold text-on-surface">4. User Responsibility</h2>
        <p>
          When you use {LEGAL_CONFIG.SITE_NAME}, you are solely responsible for:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>The files and content you process using our tools.</li>
          <li>Ensuring you have the legal right or permission to use, process, and distribute the submitted content.</li>
          <li>Complying with all applicable local, national, and international laws.</li>
          <li>Verifying that the generated output meets the requirements of any third-party system, employer, or portal before you submit important documents.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-title-lg font-bold text-on-surface">5. Prohibited Use</h2>
        <p>
          You must not use {LEGAL_CONFIG.SITE_NAME} to:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Distribute malware, viruses, or any malicious code.</li>
          <li>Attack our systems or interfere with service availability.</li>
          <li>Bypass or attempt to exploit our security controls.</li>
          <li>Process unlawful or prohibited content.</li>
          <li>Automate abusive traffic or scrape the service in a way that harms our infrastructure.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-title-lg font-bold text-on-surface">6. Availability</h2>
        <p>
          We strive to keep {LEGAL_CONFIG.SITE_NAME} accessible, but we make no guarantee of uninterrupted, timely, or error-free availability. Maintenance, updates, or infrastructure outages may cause temporary downtime.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-title-lg font-bold text-on-surface">7. Accuracy</h2>
        <p>
          While our image compressor attempts to accurately hit targeted file sizes, {LEGAL_CONFIG.SITE_NAME} output should be checked manually by you, especially in scenarios where exact file-size, dimensions, or format requirements are strictly enforced by third parties.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-title-lg font-bold text-on-surface">8. Third-Party Services</h2>
        <p>
          {LEGAL_CONFIG.SITE_NAME} depends on third-party infrastructure (such as Vercel for hosting) to deliver the service. Your connection to our service relies on this underlying architecture.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-title-lg font-bold text-on-surface">9. Intellectual Property</h2>
        <p>
          All {LEGAL_CONFIG.SITE_NAME} branding, website design, original code, logos, and content are the intellectual property of {LEGAL_CONFIG.COMPANY_NAME || LEGAL_CONFIG.SITE_NAME}. You may not copy or reuse our branding or code without permission. However, you retain full rights and ownership over your own files and content that you process using our tools.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-title-lg font-bold text-on-surface">10. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by applicable law, {LEGAL_CONFIG.SITE_NAME} and its owners shall not be liable for any indirect, incidental, special, or consequential damages resulting from your use of or inability to use the service. Our tools are provided &quot;as is&quot; without warranty of any kind.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-title-lg font-bold text-on-surface">11. Changes</h2>
        <p>
          We may update these Terms from time to time. Your continued use of the website following any modifications constitutes your acceptance of the new terms.
        </p>
      </section>

      {LEGAL_CONFIG.JURISDICTION && (
        <section className="space-y-4">
          <h2 className="text-title-lg font-bold text-on-surface">12. Governing Law</h2>
          <p>
            These Terms of Service are governed by the laws of {LEGAL_CONFIG.JURISDICTION}, without regard to its conflict of law provisions.
          </p>
        </section>
      )}

      {LEGAL_CONFIG.CONTACT_EMAIL && (
        <section className="space-y-4">
          <h2 className="text-title-lg font-bold text-on-surface">Contact Us</h2>
          <p>
            If you have any questions regarding these Terms, contact us at: <a href={`mailto:${LEGAL_CONFIG.CONTACT_EMAIL}`} className="text-primary hover:underline">{LEGAL_CONFIG.CONTACT_EMAIL}</a>
          </p>
        </section>
      )}
    </LegalLayout>
  );
}
