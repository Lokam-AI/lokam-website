import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata = {
  title: "Terms of Service — Lokam",
  robots: { index: false, follow: false },
};

export default function TermsOfServicePage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-10">
        <h1
          className="font-display font-bold text-[#0A2E2B] mb-2"
          style={{ fontSize: "clamp(28px, 4vw, 42px)", letterSpacing: "-1px" }}
        >
          Terms of Service
        </h1>
        <p className="text-sm text-[#8AADA8] mb-10">Last Updated: May 2026</p>

        <div className="font-sans text-[#1A2E2B] leading-7 text-[15px] flex flex-col gap-8">

          <div className="rounded-xl px-5 py-4" style={{ background: "#FFF8F0", border: "1px solid #FDDCB0" }}>
            <p className="font-semibold text-[#7A4800] text-sm">
              THIS AGREEMENT CONTAINS IMPORTANT LEGAL TERMS THAT APPLY TO YOU AND US. PLEASE READ CAREFULLY.
            </p>
          </div>

          <p>
            These Terms of Service (&ldquo;Terms,&rdquo; &ldquo;Agreement&rdquo;) are an agreement between Lokam.ai (&ldquo;Lokam,&rdquo; &ldquo;we,&rdquo; &ldquo;our&rdquo;) and the person or entity using our services (&ldquo;you,&rdquo; &ldquo;Customer&rdquo;).
          </p>
          <p>
            Your use of the Lokam.ai website, platform, and services (the &ldquo;Services&rdquo;) is conditioned on your acceptance of these Terms and our Privacy Policy. By signing up, accessing, or using the Services, you agree to be bound by this Agreement.
          </p>
          <p className="font-semibold">If you do not agree, do not use the Services.</p>

          <Section title="1. Our Services">
            <SubSection title="1.1 Platform Description">
              <p>Lokam.ai provides an AI-powered voice platform to automotive dealerships and businesses, enabling outbound AI-generated voice calls for:</p>
              <ul className="mt-3 flex flex-col gap-2 pl-5 list-disc text-[#4A6B68]">
                <li><span className="font-semibold text-[#1A2E2B]">Service Feedback:</span> Collecting feedback from customers following a service center visit.</li>
                <li><span className="font-semibold text-[#1A2E2B]">Sales Feedback:</span> Collecting feedback from customers following a showroom or sales interaction.</li>
              </ul>
            </SubSection>
            <SubSection title="1.2 Features">
              <p>Services include AI-generated outbound calling, call transcripts, call recordings, booking management, reminders, analytics dashboards, and integrations with third-party Dealer Management Systems (&ldquo;DMS&rdquo;) and Customer Relationship Management systems (&ldquo;CRM&rdquo;). Features may be updated, modified, or discontinued at any time.</p>
            </SubSection>
            <SubSection title="1.3 Nature of the Platform — Technical Facilitator Only">
              <p>Lokam.ai is a technology platform and technical service provider. Lokam does not initiate calls on its own behalf, does not independently select the consumers to be called, and does not control or verify the consent obtained by Dealers from consumers. All outbound calls placed through the platform are initiated at the direction of and on behalf of the Dealer. Lokam is responsible for the technical compliance of the calling system, including required disclosures, opt-out mechanisms, recording notices, and AI voice disclosures under the TCPA and FCC regulations. The Dealer&rsquo;s compliance responsibility is limited to ensuring that every consumer contact submitted to the platform has provided valid prior express consent to be called, as described in Section 5.</p>
            </SubSection>
          </Section>

          <Section title="2. Accounts & Eligibility">
            <ul className="flex flex-col gap-2 pl-5 list-disc text-[#4A6B68]">
              <li>You must provide accurate, complete account information and keep it updated.</li>
              <li>You are responsible for maintaining the confidentiality of your credentials.</li>
              <li>If using on behalf of a business, you confirm you are authorized to bind it.</li>
            </ul>
          </Section>

          <Section title="3. Acceptable Use">
            <p>You agree not to:</p>
            <ul className="mt-3 flex flex-col gap-2 pl-5 list-disc text-[#4A6B68]">
              <li>Use the Services for unlawful or fraudulent purposes.</li>
              <li>Share customer data without consent or legal rights.</li>
              <li>Reverse engineer, copy, or disrupt the platform.</li>
              <li>Interfere with security or system integrity.</li>
            </ul>
          </Section>

          <Section title="4. Data & Privacy">
            <ul className="flex flex-col gap-2 pl-5 list-disc text-[#4A6B68]">
              <li>Customers retain ownership of their data (e.g., feedback, transcripts, bookings).</li>
              <li>Lokam.ai processes data only to provide the Services.</li>
              <li>You are responsible for ensuring your use of the Services complies with data protection laws (e.g., TCPA).</li>
              <li>For details, see our Privacy Policy.</li>
            </ul>
          </Section>

          <Section title="5. TCPA Compliance Obligations">
            <p>Lokam is a platform that provides voice AI capability for dealerships to contact customers for collecting feedback. The platform&rsquo;s sole responsibility is to contact customers on behalf of the dealership. It will be the dealership&rsquo;s obligation that the customers that are called from the application strictly follow all TCPA and FCC regulated requirements before contacting a customer through our platform.</p>
            <SubSection title="5.1 Prior Express Consent — Core Dealer Obligation">
              <p>You must have obtained valid prior express consent from each consumer before submitting their contact information to Lokam for calling. This is your primary and non-delegable compliance obligation under this Agreement.</p>
            </SubSection>
            <SubSection title="5.2 Data Validation — Uploaded Lists and Third-Party Integrations">
              <p>This obligation applies to all consumer data submitted to Lokam, whether uploaded manually or accessed through a connected DMS, CRM, or other third-party data source.</p>
              <ul className="mt-3 flex flex-col gap-3 pl-5 list-disc text-[#4A6B68]">
                <li><span className="font-semibold text-[#1A2E2B]">Manual Uploads.</span> Before uploading a contact list, you must confirm that prior express consent has been obtained for each consumer on the list.</li>
                <li>
                  <span className="font-semibold text-[#1A2E2B]">Third-Party DMS and CRM Integrations.</span> Where you connect a DMS, CRM, or any other external data source to the Lokam platform to supply consumer contact data, you are solely responsible for:
                  <ul className="mt-2 flex flex-col gap-2 pl-5 list-disc">
                    <li>Ensuring that consumer data obtained from that system meets the consent requirements in Section 5.1;</li>
                    <li>Ensuring your use of that third-party data through Lokam&rsquo;s platform is authorized under the terms and privacy policies of the third-party system; and</li>
                    <li>Validating, before any call is placed using data from a third-party integration, that consumers in that dataset have valid consent and have not revoked it.</li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold text-[#1A2E2B]">Certification on Submission.</span> Each time you upload a contact list or activate a data integration that results in calls being placed through the platform, you certify that:
                  <ul className="mt-2 flex flex-col gap-2 pl-5 list-disc">
                    <li>Prior express consent has been obtained for all consumers in that dataset;</li>
                    <li>To your knowledge, no consumer in the dataset has revoked consent or requested not to be contacted;</li>
                    <li>You accept full legal responsibility for any TCPA violations arising from calls placed using data you provided.</li>
                  </ul>
                </li>
              </ul>
              <p className="mt-4">Lokam does not audit or verify the consent status of data you submit or that is accessed through your integrations. Connecting a third-party system to the Lokam platform does not constitute any validation by Lokam of that data&rsquo;s compliance other than our internal DNC list.</p>
            </SubSection>
            <SubSection title="5.3 Revoked Consent and DNC">
              <p>If at any point, a consumer wishes to revoke their consent or opts out of the calls, we will add that customer to our internal DNC list for your dealership. After that, we are not supposed to contact the concerned customer. Every week, Lokam will update the newly added customers to the DNC list of your organization through an email and you are responsible for updating your DNC list with this information for any downstream use cases that fall under the TCPA guidelines.</p>
            </SubSection>
          </Section>

          <Section title="6. Credits, Payments & Billing">
            <ul className="flex flex-col gap-2 pl-5 list-disc text-[#4A6B68]">
              <li>Some Services operate on a credit system (e.g., minutes per call).</li>
              <li>Accounts may include initial credits; additional credits or plans can be purchased.</li>
              <li>Payments are processed by third-party providers.</li>
              <li>Fees are non-refundable except where required by law.</li>
              <li>Non-payment may result in suspension or termination of Services.</li>
            </ul>
          </Section>

          <Section title="7. Intellectual Property">
            <ul className="flex flex-col gap-2 pl-5 list-disc text-[#4A6B68]">
              <li>Lokam.ai owns all rights in the platform, AI models, software, and branding.</li>
              <li>You retain rights to your uploaded data and results.</li>
              <li>Lokam.ai grants you a limited license to use the Services for business purposes.</li>
            </ul>
          </Section>

          <Section title="8. Service Availability">
            <ul className="flex flex-col gap-2 pl-5 list-disc text-[#4A6B68]">
              <li>Services are provided &ldquo;as is&rdquo; and &ldquo;as available.&rdquo;</li>
              <li>We aim for reliability but do not guarantee uninterrupted access.</li>
              <li>We may suspend or limit Services for maintenance, updates, or technical reasons.</li>
            </ul>
          </Section>

          <Section title="9. Termination">
            <ul className="flex flex-col gap-2 pl-5 list-disc text-[#4A6B68]">
              <li>You may close your account at any time.</li>
              <li>Lokam.ai may suspend or terminate accounts for violations, non-payment, or misuse.</li>
              <li>Upon termination, data may be deleted or retained as required by law or our Privacy Policy.</li>
            </ul>
          </Section>

          <Section title="10. Liability & Disclaimers">
            <ul className="flex flex-col gap-2 pl-5 list-disc text-[#4A6B68]">
              <li>The Services are provided without warranties of any kind.</li>
              <li>Lokam.ai is not liable for indirect, incidental, or consequential damages, including lost profits or data.</li>
              <li>Our total liability under this Agreement will not exceed the fees paid by you in the 12 months prior to the claim.</li>
            </ul>
          </Section>

          <Section title="11. Indemnification">
            <p>You agree to indemnify and hold harmless Lokam.ai, its affiliates, and employees against any claims, damages, or liabilities arising from your use of the Services, violation of these Terms, or breach of laws or third-party rights.</p>
          </Section>

          <Section title="12. Governing Law">
            <p>These Terms are governed by the laws of United States of America. Disputes will be resolved in the competent courts of these jurisdictions, subject to applicable local laws.</p>
          </Section>

          <Section title="13. Updates to Terms">
            <p>We may update these Terms from time to time. Updates will be posted on our website with a revised &ldquo;Last Updated&rdquo; date. Continued use of the Services means acceptance of the updated Terms.</p>
          </Section>

          <Section title="14. Contact Us">
            <p>If you have any questions about these Terms, please contact us:</p>
            <ul className="mt-3 flex flex-col gap-2 pl-5 list-disc text-[#4A6B68]">
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

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3 pl-4" style={{ borderLeft: "2px solid #C8E8E0" }}>
      <h3 className="font-sans font-semibold text-[#0A2E2B]" style={{ fontSize: 14 }}>{title}</h3>
      <div className="flex flex-col gap-3 text-[#4A6B68]">{children}</div>
    </div>
  );
}
