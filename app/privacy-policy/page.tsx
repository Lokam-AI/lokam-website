export const metadata = {
  title: "Privacy Policy — Lokam",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-16 sm:py-24">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors mb-10"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Back to home
        </a>
        <h1 className="text-3xl font-semibold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: 25/08/2025</p>

        <p className="text-gray-700 mb-8 leading-7">
          Lokam.ai ("Lokam," "we," "our") values your privacy. This Privacy Policy explains how we
          collect, use, and protect your information when you use our website, platform, and
          services (the "Services").
        </p>
        <p className="text-gray-700 mb-10 leading-7">
          By using our Services, you agree to this Privacy Policy. If you do not agree, please do
          not use the Services.
        </p>

        <Section title="1. Information We Collect">
          <ul className="space-y-3 text-gray-700 leading-7 list-none">
            <li><strong>1.1 Account Information:</strong> Name, email, password, organization details, billing information.</li>
            <li><strong>1.2 Customer Data:</strong> End-customer details provided by service centers (e.g., names, phone numbers, vehicles, service info, call recordings, transcripts, feedback).</li>
            <li><strong>1.3 Booking &amp; Inquiry Data:</strong> Appointment details, reminders, inquiry logs.</li>
            <li><strong>1.4 Technical Data:</strong> IP address, browser, device info, usage logs, cookies.</li>
            <li><strong>1.5 Payment Data:</strong> Billing email, payment method, transaction history.</li>
          </ul>
        </Section>

        <Section title="2. How We Use Information">
          <ul className="space-y-2 text-gray-700 leading-7 list-disc list-inside">
            <li>To provide and operate our Services (feedback calls, bookings, inquiries).</li>
            <li>To improve service quality and AI accuracy.</li>
            <li>To process billing and payments.</li>
            <li>To generate dashboards, analytics, and reports.</li>
            <li>To comply with legal obligations and prevent fraud.</li>
            <li>To communicate with you about updates, security, or support.</li>
          </ul>
        </Section>

        <Section title="3. Information Sharing">
          <ul className="space-y-2 text-gray-700 leading-7 list-disc list-inside">
            <li><strong>With Customers (Service Centers):</strong> Feedback results, transcripts, bookings.</li>
            <li><strong>With Third Parties:</strong> Cloud hosting (AWS), payment processors, SMS/email providers, calendar integrations.</li>
            <li><strong>For Legal Compliance:</strong> If required by law, regulation, or valid request.</li>
            <li><strong>Business Transfers:</strong> In mergers, acquisitions, or sale of assets.</li>
          </ul>
          <p className="mt-4 text-gray-700 leading-7">We do not sell personal data.</p>
        </Section>

        <Section title="4. Data Security">
          <ul className="space-y-2 text-gray-700 leading-7 list-disc list-inside">
            <li>Data is encrypted in transit and at rest.</li>
            <li>Access is restricted to authorized personnel.</li>
            <li>We use monitoring, logging, and safeguards to protect data.</li>
            <li>No system is 100% secure; we encourage strong password use.</li>
          </ul>
        </Section>

        <Section title="5. Data Retention">
          <ul className="space-y-2 text-gray-700 leading-7 list-disc list-inside">
            <li>Account data is retained while the account is active.</li>
            <li>Call and booking data may be retained per organization settings or legal needs.</li>
            <li>Certain data (e.g., billing) may be kept longer for compliance.</li>
          </ul>
        </Section>

        <Section title="6. Your Rights">
          <p className="text-gray-700 leading-7 mb-3">Depending on your location, you may have the right to:</p>
          <ul className="space-y-2 text-gray-700 leading-7 list-disc list-inside">
            <li>Access and obtain a copy of your data.</li>
            <li>Request correction or deletion.</li>
            <li>Request data portability.</li>
            <li>Restrict or object to processing.</li>
            <li>Opt out of marketing communications.</li>
          </ul>
          <p className="mt-4 text-gray-700 leading-7">
            Contact{" "}
            <a href="mailto:office@lokam.ai" className="text-[#00866D] hover:underline">
              office@lokam.ai
            </a>{" "}
            to exercise your rights.
          </p>
        </Section>

        <Section title="7. Compliance">
          <ul className="space-y-2 text-gray-700 leading-7 list-disc list-inside">
            <li><strong>GDPR (EU):</strong> Rights of access, deletion, portability, objection.</li>
            <li><strong>CCPA (California):</strong> Right to know, delete, and opt-out of data sale (we do not sell).</li>
            <li><strong>HIPAA/PCI:</strong> Supported when enabled in customer compliance settings.</li>
          </ul>
        </Section>

        <Section title="8. Cookies &amp; Tracking">
          <ul className="space-y-2 text-gray-700 leading-7 list-disc list-inside">
            <li>We use cookies to manage sessions, analyze usage, and personalize the platform.</li>
            <li>You can disable cookies in your browser, but some features may not work properly.</li>
          </ul>
        </Section>

        <Section title="9. Children's Privacy">
          <p className="text-gray-700 leading-7">
            Our Services are not directed to individuals under 18. We do not knowingly collect
            personal data from minors. If discovered, we will delete it promptly.
          </p>
        </Section>

        <Section title="10. International Transfers">
          <p className="text-gray-700 leading-7">
            Data may be processed and stored in multiple regions, including India, UAE, UK, and USA,
            where our cloud providers and partners operate. Transfers comply with applicable laws.
          </p>
        </Section>

        <Section title="11. Updates to Policy">
          <p className="text-gray-700 leading-7">
            We may update this Privacy Policy from time to time. The latest version will be posted
            here with a revised "Last Updated" date.
          </p>
        </Section>

        <Section title="12. Contact Us">
          <p className="text-gray-700 leading-7 mb-3">
            If you have questions about this Privacy Policy, contact us at:
          </p>
          <ul className="space-y-1 text-gray-700 leading-7">
            <li>
              Email:{" "}
              <a href="mailto:business@lokam.ai" className="text-[#00866D] hover:underline">
                business@lokam.ai
              </a>
            </li>
            <li>
              Website:{" "}
              <a href="https://www.lokam.ai" className="text-[#00866D] hover:underline">
                https://www.lokam.ai
              </a>
            </li>
          </ul>
        </Section>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">{title}</h2>
      {children}
    </section>
  );
}
