export const metadata = {
  title: "Terms of Service — Lokam",
};

export default function TermsOfServicePage() {
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
        <h1 className="text-3xl font-semibold text-gray-900 mb-2">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: 25/08/2025</p>

        <p className="text-sm font-semibold text-gray-800 mb-6 leading-6 uppercase tracking-wide">
          THIS AGREEMENT CONTAINS IMPORTANT LEGAL TERMS THAT APPLY TO YOU AND US. PLEASE READ
          CAREFULLY.
        </p>

        <p className="text-gray-700 mb-4 leading-7">
          These Terms of Service ("Terms," "Agreement") are an agreement between Lokam.ai ("Lokam,"
          "we," "our") and the person or entity using our services ("you," "Customer").
        </p>
        <p className="text-gray-700 mb-4 leading-7">
          Your use of the Lokam.ai website, platform, and services (the "Services") is conditioned
          on your acceptance of these Terms and our Privacy Policy. By signing up, accessing, or
          using the Services, you agree to be bound by this Agreement.
        </p>
        <p className="text-gray-700 mb-10 leading-7 font-medium">
          If you do not agree, do not use the Services.
        </p>

        <Section title="1. Our Services">
          <ul className="space-y-3 text-gray-700 leading-7">
            <li>
              <strong>1.1 Cloud Service:</strong> Lokam.ai provides AI-powered agents for automobile
              service centers, including feedback calls, bookings, inquiries, and analytics
              dashboards.
            </li>
            <li>
              <strong>1.2 Features:</strong> Services include call handling, transcripts, reminders,
              reports, and integrations. Features may be updated, modified, or discontinued at any
              time.
            </li>
          </ul>
        </Section>

        <Section title="2. Accounts & Eligibility">
          <ul className="space-y-2 text-gray-700 leading-7 list-disc list-inside">
            <li>You must provide accurate, complete account information and keep it updated.</li>
            <li>You are responsible for maintaining the confidentiality of your credentials.</li>
            <li>
              If using on behalf of a business, you confirm you are authorized to bind it.
            </li>
          </ul>
        </Section>

        <Section title="3. Acceptable Use">
          <p className="text-gray-700 leading-7 mb-3">You agree not to:</p>
          <ul className="space-y-2 text-gray-700 leading-7 list-disc list-inside">
            <li>Use the Services for unlawful or fraudulent purposes.</li>
            <li>Share customer data without consent or legal rights.</li>
            <li>Reverse engineer, copy, or disrupt the platform.</li>
            <li>Interfere with security or system integrity.</li>
          </ul>
        </Section>

        <Section title="4. Data & Privacy">
          <ul className="space-y-2 text-gray-700 leading-7 list-disc list-inside">
            <li>
              Customers retain ownership of their data (e.g., feedback, transcripts, bookings).
            </li>
            <li>Lokam.ai processes data only to provide the Services.</li>
            <li>
              You are responsible for ensuring your use of the Services complies with data
              protection laws (e.g., obtaining consent for calls/recordings).
            </li>
          </ul>
          <p className="mt-4 text-gray-700 leading-7">
            For details, see our{" "}
            <a href="/privacy-policy" className="text-[#00866D] hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </Section>

        <Section title="5. Credits, Payments & Billing">
          <ul className="space-y-2 text-gray-700 leading-7 list-disc list-inside">
            <li>Some Services operate on a credit system (e.g., minutes per call).</li>
            <li>
              Accounts may include initial credits; additional credits or plans can be purchased.
            </li>
            <li>Payments are processed by third-party providers.</li>
            <li>Fees are non-refundable except where required by law.</li>
            <li>Non-payment may result in suspension or termination of Services.</li>
          </ul>
        </Section>

        <Section title="6. Intellectual Property">
          <ul className="space-y-2 text-gray-700 leading-7 list-disc list-inside">
            <li>Lokam.ai owns all rights in the platform, AI models, software, and branding.</li>
            <li>You retain rights to your uploaded data and results.</li>
            <li>
              Lokam.ai grants you a limited license to use the Services for business purposes.
            </li>
          </ul>
        </Section>

        <Section title="7. Service Availability">
          <ul className="space-y-2 text-gray-700 leading-7 list-disc list-inside">
            <li>Services are provided "as is" and "as available."</li>
            <li>We aim for reliability but do not guarantee uninterrupted access.</li>
            <li>
              We may suspend or limit Services for maintenance, updates, or technical reasons.
            </li>
          </ul>
        </Section>

        <Section title="8. Termination">
          <ul className="space-y-2 text-gray-700 leading-7 list-disc list-inside">
            <li>You may close your account at any time.</li>
            <li>
              Lokam.ai may suspend or terminate accounts for violations, non-payment, or misuse.
            </li>
            <li>
              Upon termination, data may be deleted or retained as required by law or our Privacy
              Policy.
            </li>
          </ul>
        </Section>

        <Section title="9. Liability & Disclaimers">
          <ul className="space-y-2 text-gray-700 leading-7 list-disc list-inside">
            <li>The Services are provided without warranties of any kind.</li>
            <li>
              Lokam.ai is not liable for indirect, incidental, or consequential damages, including
              lost profits or data.
            </li>
            <li>
              Our total liability under this Agreement will not exceed the fees paid by you in the
              12 months prior to the claim.
            </li>
          </ul>
        </Section>

        <Section title="10. Indemnification">
          <p className="text-gray-700 leading-7">
            You agree to indemnify and hold harmless Lokam.ai, its affiliates, and employees
            against any claims, damages, or liabilities arising from your use of the Services,
            violation of these Terms, or breach of laws or third-party rights.
          </p>
        </Section>

        <Section title="11. Governing Law">
          <p className="text-gray-700 leading-7">
            These Terms are governed by the laws of India, the United Arab Emirates (UAE), the
            United Kingdom (UK), and the United States (USA). Disputes will be resolved in the
            competent courts of these jurisdictions, subject to applicable local laws.
          </p>
        </Section>

        <Section title="12. Updates to Terms">
          <p className="text-gray-700 leading-7">
            We may update these Terms from time to time. Updates will be posted on our website with
            a revised "Last Updated" date. Continued use of the Services means acceptance of the
            updated Terms.
          </p>
        </Section>

        <Section title="13. Contact Us">
          <p className="text-gray-700 leading-7 mb-3">
            If you have any questions about these Terms, please contact us:
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
