import { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { LEGAL_CONFIG } from "@/lib/legal-config";

export const metadata: Metadata = {
  title: "Contact ToolKB | Support & Security",
  description: "Get in touch with ToolKB for support, security reports, or privacy inquiries.",
  alternates: {
    canonical: `${LEGAL_CONFIG.DOMAIN}/contact`,
  },
};

export default function Contact() {
  return (
    <LegalLayout title="Contact ToolKB" lastUpdated={LEGAL_CONFIG.LAST_UPDATED}>
      <section className="space-y-4">
        <p>
          We are here to help. Whether you have questions about our tools, need to report a security issue, or want to inquire about privacy, you can reach us through the channels below.
        </p>
      </section>

      {LEGAL_CONFIG.CONTACT_EMAIL ? (
        <>
          <section className="space-y-4">
            <h2 className="text-title-lg font-bold text-on-surface">General Support</h2>
            <p>
              For problems using our tools, bug reports, feature requests, or general inquiries:
            </p>
            <p>
              <a href={`mailto:${LEGAL_CONFIG.CONTACT_EMAIL}`} className="text-primary hover:underline font-bold">
                {LEGAL_CONFIG.CONTACT_EMAIL}
              </a>
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-title-lg font-bold text-on-surface">Security</h2>
            <p>
              For responsible security reports and vulnerability disclosures:
            </p>
            <p>
              <a href={`mailto:${LEGAL_CONFIG.CONTACT_EMAIL}`} className="text-primary hover:underline font-bold">
                {LEGAL_CONFIG.CONTACT_EMAIL}
              </a>
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-title-lg font-bold text-on-surface">Privacy</h2>
            <p>
              For questions regarding our Privacy Policy or your data:
            </p>
            <p>
              <a href={`mailto:${LEGAL_CONFIG.CONTACT_EMAIL}`} className="text-primary hover:underline font-bold">
                {LEGAL_CONFIG.CONTACT_EMAIL}
              </a>
            </p>
          </section>
        </>
      ) : (
        <section className="space-y-4 p-6 bg-surface-container rounded-3xl border border-outline-variant">
          <p className="text-on-surface-variant italic">
            Contact information will be published here once an official public support channel is established.
          </p>
        </section>
      )}
    </LegalLayout>
  );
}
