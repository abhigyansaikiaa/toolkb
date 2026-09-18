import { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { LEGAL_CONFIG } from "@/lib/legal-config";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Learn about the technologies we use. ToolKB respects your privacy and currently operates without intentional tracking cookies.",
  alternates: {
    canonical: `${LEGAL_CONFIG.DOMAIN}/cookie-policy`,
  },
};

export default function CookiePolicy() {
  return (
    <LegalLayout title="Cookie Policy" lastUpdated={LEGAL_CONFIG.LAST_UPDATED}>
      <section className="space-y-4">
        <p>
          At {LEGAL_CONFIG.SITE_NAME}, we believe in a transparent and privacy-first approach to online utilities. This Cookie Policy explains our current practices regarding cookies, local storage, and similar technologies.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-title-lg font-bold text-on-surface">Our Intentional Practices</h2>
        <p>
          As of the last update to this policy, {LEGAL_CONFIG.SITE_NAME} operates with the following strict guidelines:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>No Analytics Cookies:</strong> We do not intentionally use cookies to track your behavior across our website for analytics.</li>
          <li><strong>No Advertising Cookies:</strong> We do not deploy third-party advertising scripts or tracking pixels that plant ad cookies on your device.</li>
          <li><strong>No Application Storage:</strong> Our core browser-based tools currently do not require persistent LocalStorage or SessionStorage to function.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-title-lg font-bold text-on-surface">Technically Necessary Infrastructure</h2>
        <p>
          {LEGAL_CONFIG.SITE_NAME} is hosted on Vercel. While our application code does not intentionally set tracking cookies, the underlying CDN (Content Delivery Network), security layers, or hosting infrastructure may occasionally set strictly necessary security tokens or caching identifiers to ensure the website loads quickly and safely. These are technically necessary for the website to function securely and are not controlled directly by our application logic.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-title-lg font-bold text-on-surface">Third-Party Cookies</h2>
        <p>
          We do not currently integrate third-party embeds (like social media widgets or external tracking platforms) that would introduce third-party cookies to your browser.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-title-lg font-bold text-on-surface">Changes to This Policy</h2>
        <p>
          If {LEGAL_CONFIG.SITE_NAME} introduces features in the future that require the use of cookies (such as user accounts, preferences, or advertising), we will update this policy to clearly identify those technologies and provide appropriate consent mechanisms.
        </p>
      </section>

      {LEGAL_CONFIG.CONTACT_EMAIL && (
        <section className="space-y-4">
          <h2 className="text-title-lg font-bold text-on-surface">Contact Us</h2>
          <p>
            If you have questions about our Cookie Policy, please contact us at: <a href={`mailto:${LEGAL_CONFIG.CONTACT_EMAIL}`} className="text-primary hover:underline">{LEGAL_CONFIG.CONTACT_EMAIL}</a>
          </p>
        </section>
      )}
    </LegalLayout>
  );
}
