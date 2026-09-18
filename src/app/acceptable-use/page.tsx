import { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { LEGAL_CONFIG } from "@/lib/legal-config";

export const metadata: Metadata = {
  title: "Acceptable Use Policy",
  description: "Guidelines and prohibited activities for using ToolKB.",
  alternates: {
    canonical: `${LEGAL_CONFIG.DOMAIN}/acceptable-use`,
  },
};

export default function AcceptableUse() {
  return (
    <LegalLayout title="Acceptable Use Policy" lastUpdated={LEGAL_CONFIG.LAST_UPDATED}>
      <section className="space-y-4">
        <p>
          This Acceptable Use Policy establishes the rules and guidelines for using {LEGAL_CONFIG.SITE_NAME}. By accessing or using our services, you agree to abide by this policy.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-title-lg font-bold text-on-surface">Prohibited Activities</h2>
        <p>
          You must not use {LEGAL_CONFIG.SITE_NAME} to engage in, facilitate, or encourage any of the following activities:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Malicious Files &amp; Malware:</strong> Uploading, processing, or distributing viruses, trojans, worms, logic bombs, or any other material which is malicious or technologically harmful.</li>
          <li><strong>Attacks Against {LEGAL_CONFIG.SITE_NAME}:</strong> Attempting to gain unauthorized access to our servers, infrastructure, or network, or conducting vulnerability scans and penetration tests without our explicit permission.</li>
          <li><strong>Infrastructure Abuse:</strong> Engaging in denial-of-service (DoS) attempts, distributed denial-of-service (DDoS) attacks, or any activity that imposes an unreasonable or disproportionately large load on our infrastructure.</li>
          <li><strong>Automated Abuse &amp; Scraping:</strong> Using bots, scrapers, or other automated systems to access our tools in a way that materially harms our infrastructure, degrades service for other users, or attempts to bypass technical restrictions.</li>
          <li><strong>Exploitation of Vulnerabilities:</strong> Attempting to exploit bugs, logic flaws, or security vulnerabilities within our application.</li>
          <li><strong>Illegal Use:</strong> Using our tools to process, generate, or distribute content that is illegal, defamatory, obscene, highly offensive, or violates the intellectual property rights of others.</li>
          <li><strong>Interference:</strong> Interfering with, disrupting, or attempting to compromise the experience of other {LEGAL_CONFIG.SITE_NAME} users.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-title-lg font-bold text-on-surface">Enforcement</h2>
        <p>
          We reserve the right, but do not assume the obligation, to investigate any violation of this policy. {LEGAL_CONFIG.SITE_NAME} may restrict, suspend, or permanently block access (such as IP blocking at the CDN level) for any user or automated system that engages in abusive activity, where reasonably necessary to protect the service and our infrastructure.
        </p>
      </section>

      {LEGAL_CONFIG.CONTACT_EMAIL && (
        <section className="space-y-4">
          <h2 className="text-title-lg font-bold text-on-surface">Reporting Abuse</h2>
          <p>
            If you suspect a violation of this Acceptable Use Policy, please report it to: <a href={`mailto:${LEGAL_CONFIG.CONTACT_EMAIL}`} className="text-primary hover:underline">{LEGAL_CONFIG.CONTACT_EMAIL}</a>
          </p>
        </section>
      )}
    </LegalLayout>
  );
}
