import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata = {
  title: "Privacy Policy - Lokam",
  robots: { index: false, follow: false },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-6 py-10">

          <h1
            className="font-display font-bold text-[#0A2E2B] mb-2"
            style={{ fontSize: "clamp(28px, 4vw, 42px)", letterSpacing: "-1px" }}
          >
            Privacy Policy
          </h1>
          <p className="text-sm text-[#8AADA8] mb-10">Last Updated: May 2026</p>

          <div className="font-sans text-[#1A2E2B] leading-7 text-[15px] flex flex-col gap-8">

            <p>
              Lokam.ai (&ldquo;Lokam,&rdquo; &ldquo;we,&rdquo; &ldquo;our&rdquo;) values your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our website, platform, and services (the &ldquo;Services&rdquo;).
            </p>
            <p>
              By using our Services, you agree to this Privacy Policy. If you do not agree, please do not use the Services.
            </p>

            <Section title="1. Information We Collect">
              <ul className="flex flex-col gap-2 pl-5 list-disc text-[#4A6B68]">
                <li><span className="font-semibold text-[#1A2E2B]">Account Information:</span> Name, email, password, organization details, billing information.</li>
                <li><span className="font-semibold text-[#1A2E2B]">Customer Data:</span> End-customer details provided by service centers (e.g., names, phone numbers, vehicles, service info, call recordings, transcripts, feedback).</li>
                <li><span className="font-semibold text-[#1A2E2B]">Booking & Inquiry Data:</span> Appointment details, reminders, inquiry logs.</li>
                <li><span className="font-semibold text-[#1A2E2B]">Technical Data:</span> IP address, browser, device info, usage logs, cookies.</li>
                <li><span className="font-semibold text-[#1A2E2B]">Payment Data:</span> Billing email, payment method, transaction history.</li>
              </ul>
            </Section>

            <Section title="2. How We Use Information">
              <ul className="flex flex-col gap-2 pl-5 list-disc text-[#4A6B68]">
                <li>To provide and operate our Services (feedback calls, bookings, inquiries).</li>
                <li>To improve service quality and AI accuracy.</li>
                <li>To process billing and payments.</li>
                <li>To generate dashboards, analytics, and reports.</li>
                <li>To comply with legal obligations and prevent fraud.</li>
                <li>To communicate with you about updates, security, or support.</li>
              </ul>
            </Section>

            <Section title="3. Information Sharing">
              <ul className="flex flex-col gap-2 pl-5 list-disc text-[#4A6B68]">
                <li><span className="font-semibold text-[#1A2E2B]">With Customers (Service Centers):</span> Feedback results, transcripts, bookings.</li>
                <li><span className="font-semibold text-[#1A2E2B]">With Third Parties:</span> Cloud hosting (AWS), payment processors, SMS/email providers, calendar integrations.</li>
                <li><span className="font-semibold text-[#1A2E2B]">For Legal Compliance:</span> If required by law, regulation, or valid request.</li>
                <li><span className="font-semibold text-[#1A2E2B]">Business Transfers:</span> In mergers, acquisitions, or sale of assets.</li>
              </ul>
              <p className="mt-3 text-[#4A6B68]">We do not sell personal data.</p>
            </Section>

            <Section title="4. Data Security">
              <ul className="flex flex-col gap-2 pl-5 list-disc text-[#4A6B68]">
                <li>Data is encrypted in transit and at rest.</li>
                <li>Access is restricted to authorized personnel.</li>
                <li>We use monitoring, logging, and safeguards to protect data.</li>
                <li>No system is 100% secure; we encourage strong password use.</li>
              </ul>
            </Section>

            <Section title="5. Data Retention">
              <ul className="flex flex-col gap-2 pl-5 list-disc text-[#4A6B68]">
                <li>Account data is retained while the account is active.</li>
                <li>Call and booking data may be retained per organization settings or legal needs.</li>
                <li>Certain data (e.g., billing) may be kept longer for compliance.</li>
              </ul>
            </Section>

            <Section title="6. Your Rights">
              <p className="text-[#4A6B68]">Depending on your location, you may have the right to:</p>
              <ul className="flex flex-col gap-2 pl-5 list-disc text-[#4A6B68] mt-3">
                <li>Access and obtain a copy of your data.</li>
                <li>Request correction or deletion.</li>
                <li>Request data portability.</li>
                <li>Restrict or object to processing.</li>
                <li>Opt out of marketing communications.</li>
              </ul>
              <p className="mt-3 text-[#4A6B68]">
                Contact <a href="mailto:business@lokam.ai" className="underline" style={{ color: "#0CB4A7" }}>business@lokam.ai</a> to exercise your rights.
              </p>
            </Section>

            <Section title="7. Compliance">
              <ul className="flex flex-col gap-3 pl-5 list-disc text-[#4A6B68]">
                <li>
                  <span className="font-semibold text-[#1A2E2B]">TCPA (USA):</span> Lokam maintains technical TCPA compliance for all outbound AI calls, including required AI voice disclosures, opt-out mechanisms, and call recording notices. Dealers are responsible for ensuring prior express consent has been obtained for each consumer contacted through the platform. See our Terms of Service Section 5 for full obligations.
                </li>
                <li><span className="font-semibold text-[#1A2E2B]">GDPR (EU):</span> Rights of access, deletion, portability, objection.</li>
                <li><span className="font-semibold text-[#1A2E2B]">CCPA (California):</span> Right to know, delete, and opt-out of data sale (we do not sell).</li>
                <li><span className="font-semibold text-[#1A2E2B]">HIPAA/PCI:</span> Supported when enabled in customer compliance settings.</li>
              </ul>
            </Section>

            <Section title="7a. Do Not Call (DNC) Data">
              <p className="text-[#4A6B68]">
                When a consumer opts out of calls or revokes consent, Lokam adds them to an internal DNC list specific to your dealership. We will never contact that consumer again through our platform on your behalf.
              </p>
              <ul className="flex flex-col gap-2 pl-5 list-disc text-[#4A6B68] mt-3">
                <li>DNC list additions are processed in real time upon opt-out.</li>
                <li>Dealers receive a weekly email update listing newly added consumers so they can sync their own DNC records for any downstream use cases.</li>
                <li>Dealers are responsible for applying this information to any contact systems outside the Lokam platform.</li>
                <li>DNC data is retained for the lifetime of the dealer account to ensure suppression is maintained.</li>
              </ul>
            </Section>

            <Section title="8. Cookies & Tracking">
              <ul className="flex flex-col gap-2 pl-5 list-disc text-[#4A6B68]">
                <li>We use cookies to manage sessions, analyze usage, and personalize the platform.</li>
                <li>You can disable cookies in your browser, but some features may not work properly.</li>
              </ul>
            </Section>

            <Section title="9. Children&rsquo;s Privacy">
              <p className="text-[#4A6B68]">
                Our Services are not directed to individuals under 18. We do not knowingly collect personal data from minors. If discovered, we will delete it promptly.
              </p>
            </Section>

            <Section title="10. International Transfers">
              <p className="text-[#4A6B68]">
                Our primary operations and customers are based in the United States, and our Services are governed by US law. Data is processed and stored on US-based cloud infrastructure. Where data is accessed by team members or sub-processors in other regions, transfers are conducted in compliance with applicable laws and appropriate safeguards.
              </p>
            </Section>

            <Section title="11. Updates to Policy">
              <p className="text-[#4A6B68]">
                We may update this Privacy Policy from time to time. The latest version will be posted here with a revised &ldquo;Last Updated&rdquo; date. Continued use of the Services means acceptance of the updated Policy.
              </p>
            </Section>

            <Section title="12. Contact Us">
              <p className="text-[#4A6B68]">If you have questions about this Privacy Policy, contact us:</p>
              <ul className="flex flex-col gap-2 pl-5 list-disc text-[#4A6B68] mt-3">
                <li>📧 <a href="mailto:business@lokam.ai" className="underline" style={{ color: "#0CB4A7" }}>business@lokam.ai</a></li>
                <li>🌐 <a href="https://www.lokam.ai" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#0CB4A7" }}>https://www.lokam.ai</a></li>
              </ul>
            </Section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <h2
        className="font-sans font-bold text-[#0A2E2B]"
        style={{ fontSize: "clamp(16px, 2vw, 19px)", letterSpacing: "-0.3px" }}
      >
        {title}
      </h2>
      <div className="flex flex-col gap-4">{children}</div>
    </div>
  );
}
