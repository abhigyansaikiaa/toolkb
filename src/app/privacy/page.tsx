import { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { LEGAL_CONFIG } from "@/lib/legal-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how ToolKB protects your privacy. We process images directly in your browser, keeping your files safe and private.",
  alternates: {
    canonical: `${LEGAL_CONFIG.DOMAIN}/privacy`,
  },
};

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated={LEGAL_CONFIG.LAST_UPDATED}>
      <section className="space-y-4">
        <h2 className="text-title-lg font-bold text-on-surface">What ToolKB Currently Does</h2>
        <p>
          {LEGAL_CONFIG.SITE_NAME} provides browser-based online tools for files and images. The current image compressor utility processes selected images locally in your web browser.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-title-lg font-bold text-on-surface">File Privacy</h2>
        <p className="font-bold text-primary">Your files stay private.</p>
        <p>
          Image compression is performed entirely within your browser, so the image does not need to be uploaded to {LEGAL_CONFIG.SITE_NAME}&apos;s servers. {LEGAL_CONFIG.SITE_NAME} does not store the uploaded image to perform the compression task, and the generated output is downloaded directly to your device.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-title-lg font-bold text-on-surface">Information We May Collect</h2>
        <p>
          While {LEGAL_CONFIG.SITE_NAME} does not collect your uploaded files, we do automatically collect basic technical information necessary for providing and securing the service. This may include:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Basic technical information from our hosting and CDN infrastructure (such as IP addresses and browser user-agent strings).</li>
          <li>Server logs necessary to ensure service availability and security.</li>
          <li>Contact information, but only if you voluntarily communicate with us (e.g., via a support email).</li>
        </ul>
        <p>
          Currently, {LEGAL_CONFIG.SITE_NAME} does not have user accounts, analytics trackers, or contact forms installed. We only collect the minimal infrastructure data required to keep the website online.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-title-lg font-bold text-on-surface">Cookies</h2>
        <p>
          We do not use cookies or local storage for analytics, advertising, or tracking. The only data processed is strictly necessary for basic infrastructure functionality provided by our CDN/hosting provider. For more precise details, please read our <a href="/cookie-policy" className="text-primary hover:underline">Cookie Policy</a>.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-title-lg font-bold text-on-surface">Third Parties</h2>
        <p>
          To host and operate {LEGAL_CONFIG.SITE_NAME}, we use external infrastructure providers such as Vercel (our hosting provider). These providers process requests in order to deliver the website to your browser and may generate standard access logs. We currently do not use third-party advertising or analytics services.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-title-lg font-bold text-on-surface">Data Retention</h2>
        <p>
          Because we do not upload or collect your images, we do not retain your file data. Standard hosting server logs and infrastructure metadata are retained for short operational periods determined by our hosting providers to ensure security and performance.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-title-lg font-bold text-on-surface">Your Rights</h2>
        <p>
          Depending on your location, you may have rights under applicable privacy laws (such as the GDPR or CCPA) to access, delete, or correct your personal information. Because {LEGAL_CONFIG.SITE_NAME} does not currently collect identifiable user information beyond basic hosting logs, there is generally no personal profile or account data to provide or delete.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-title-lg font-bold text-on-surface">Children</h2>
        <p>
          Our services are not intended for or directed at children. If we become aware that a child has provided us with personal information in violation of applicable law, we will take steps to delete such information.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-title-lg font-bold text-on-surface">Policy Changes</h2>
        <p>
          We may update this Privacy Policy as we add new features or as legal requirements change. The &quot;Last updated&quot; date at the top of this page indicates when the latest modifications were made.
        </p>
      </section>

      {LEGAL_CONFIG.CONTACT_EMAIL && (
        <section className="space-y-4">
          <h2 className="text-title-lg font-bold text-on-surface">Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at: <a href={`mailto:${LEGAL_CONFIG.CONTACT_EMAIL}`} className="text-primary hover:underline">{LEGAL_CONFIG.CONTACT_EMAIL}</a>
          </p>
        </section>
      )}
    </LegalLayout>
  );
}
