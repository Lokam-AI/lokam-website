import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import CalendlyButton from "../../components/CalendlyButton";

const SITE_URL = "https://www.lokam.ai";

export const metadata: Metadata = {
  title: "CDK Global Integration for AI Follow-Up | Lokam",
  description:
    "Lokam integrates natively with CDK Global to automate post-service CSI follow-up and unsold lead recovery. Reads RO and desklog data directly - no manual exports required.",
  alternates: { canonical: `${SITE_URL}/integrations/cdk-global` },
  openGraph: {
    title: "CDK Global Integration | Lokam Voice AI",
    description: "Lokam reads CDK repair orders and desklogs to automate CSI follow-up and unsold lead recovery. No manual exports required.",
    url: `${SITE_URL}/integrations/cdk-global`,
    type: "website",
    siteName: "Lokam",
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: "CDK Global Integration | Lokam" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CDK Global Integration | Lokam Voice AI",
    description: "Automate CSI follow-up and unsold lead recovery from CDK Global. No manual exports required.",
    images: [`${SITE_URL}/opengraph-image`],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Integrations", item: `${SITE_URL}/integrations` },
    { "@type": "ListItem", position: 3, name: "CDK Global", item: `${SITE_URL}/integrations/cdk-global` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does Lokam integrate with CDK Global?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lokam connects to CDK Global via Authenticom's secure data feed. Once connected, Lokam automatically reads new repair orders and unsold desklogs from your CDK system within minutes of creation. No manual exports or uploads are required - the follow-up queue is built automatically from your CDK data.",
      },
    },
    {
      "@type": "Question",
      name: "What CDK data does Lokam access?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lokam reads customer contact information (name, phone number), repair order status and completion date, appointment records, and unsold desklog entries. Lokam does not access financial records, deal financials, employee data, or any data outside what is needed to place and log follow-up calls.",
      },
    },
    {
      "@type": "Question",
      name: "How long does the CDK Global integration take to set up?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lokam's team handles the integration configuration. Lokam's team handles the integration configuration - your IT team does not need to be involved for the standard CDK setup.",
      },
    },
    {
      "@type": "Question",
      name: "Does Lokam write data back to CDK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Currently Lokam is read-only from CDK. Call outcomes, transcripts, and escalation records are available in your Lokam dashboard. CDK write-back is on the product roadmap.",
      },
    },
  ],
};

const dataPoints = [
  { label: "Customer contact data", desc: "Name and phone number pulled directly from CDK customer records." },
  { label: "Repair order status", desc: "RO completion triggers the CSI follow-up queue within minutes." },
  { label: "Appointment records", desc: "Service appointment data used to confirm visit context during calls." },
  { label: "Unsold desklog entries", desc: "Showroom visit records feed the BDC follow-up queue automatically." },
];

const steps = [
  { n: "1", title: "RO or desklog created in CDK", desc: "When a service visit closes or a showroom interaction is logged, CDK creates the record automatically." },
  { n: "2", title: "Lokam reads the record", desc: "Via secure Authenticom data feed, Lokam pulls the customer's contact details and visit context within minutes - no manual step." },
  { n: "3", title: "AI follow-up call placed within 24 hours", desc: "Lokam dials the customer using your branded caller ID. The AI handles the conversation, detects sentiment, and logs the outcome." },
  { n: "4", title: "Escalations sent to your team", desc: "Detractors are flagged to your service manager instantly. Satisfied customers receive a Google review SMS. All call data is in your Lokam dashboard." },
];

export default function CDKGlobalIntegrationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Nav />
      <main style={{ background: "linear-gradient(to bottom, rgba(25,171,141,0.06) 0%, #ffffff 320px)" }}>

        <section className="max-w-[860px] mx-auto px-4 md:px-8 pt-16 pb-12 text-center">
          <Link href="/integrations" className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-[#0C8074] no-underline mb-6 hover:underline">
            ← All integrations
          </Link>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="rounded-2xl px-5 py-2" style={{ background: "#fff", border: "1px solid #C8E8E0" }}>
              <span className="font-sans font-bold text-[#0A2E2B]" style={{ fontSize: 18 }}>CDK Global</span>
            </div>
            <span className="font-sans text-[#8AADA8] text-lg">+</span>
            <div className="rounded-2xl px-5 py-2" style={{ background: "#E0F7F4", border: "1px solid #C8E8E0" }}>
              <span className="font-sans font-bold text-[#0C8074]" style={{ fontSize: 18 }}>Lokam</span>
            </div>
          </div>
          <h1
            className="font-display font-bold text-[#0D1B2A] mb-5"
            style={{ fontSize: "clamp(26px, 4vw, 48px)", lineHeight: "1.1", letterSpacing: "-1.5px" }}
          >
            CDK Global + Lokam: Automate Follow-Up Directly From Your DMS
          </h1>
          <p className="font-sans text-base md:text-lg leading-8 text-[#4A6B68] mx-auto" style={{ maxWidth: 600 }}>
            Lokam reads your CDK repair orders and desklogs automatically. Every service customer gets a CSI follow-up call within 24 hours. Every unsold showroom visit triggers BDC outreach. No manual exports, no spreadsheets.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 items-center justify-center">
            <CalendlyButton className="flex items-center justify-center px-6 h-[50px] bg-brand-mid rounded-lg font-sans font-medium text-[15.6px] text-white">
              Book a Demo
            </CalendlyButton>
            <Link
              href="/integrations"
              className="flex items-center justify-center px-6 h-[50px] rounded-lg font-sans font-medium text-[15.6px] no-underline"
              style={{ background: "#F0FBF9", color: "#0C8074", border: "1px solid #C8E8E0" }}
            >
              View all integrations →
            </Link>
          </div>
        </section>

        {/* What data is synced */}
        <section className="max-w-[860px] mx-auto px-4 md:px-8 pb-16">
          <h2 className="font-sans font-bold text-[#0A2E2B] mb-6" style={{ fontSize: "clamp(18px, 2.2vw, 24px)", letterSpacing: "-0.4px" }}>
            What Lokam reads from CDK Global
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {dataPoints.map((d) => (
              <div key={d.label} className="rounded-2xl p-5" style={{ background: "#fff", border: "1px solid #C8E8E0" }}>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#0CB4A7" }} />
                  <p className="font-sans font-semibold text-[#0A2E2B]" style={{ fontSize: 14 }}>{d.label}</p>
                </div>
                <p className="font-sans text-sm leading-6 text-[#4A6B68] pl-4">{d.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="max-w-[860px] mx-auto px-4 md:px-8 pb-16">
          <h2 className="font-sans font-bold text-[#0A2E2B] mb-6" style={{ fontSize: "clamp(18px, 2.2vw, 24px)", letterSpacing: "-0.4px" }}>
            How CDK data flows through Lokam
          </h2>
          <div className="flex flex-col gap-4">
            {steps.map((s) => (
              <div key={s.n} className="flex gap-5 rounded-2xl p-6" style={{ background: "#fff", border: "1px solid #C8E8E0" }}>
                <div className="flex-shrink-0 flex items-center justify-center rounded-full font-display font-bold text-white" style={{ width: 36, height: 36, background: "linear-gradient(135deg, #00988B, #00D3BD)", fontSize: 14 }}>
                  {s.n}
                </div>
                <div>
                  <p className="font-sans font-semibold text-[#0A2E2B] mb-1" style={{ fontSize: 15 }}>{s.title}</p>
                  <p className="font-sans text-sm leading-6 text-[#4A6B68]">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Use cases */}
        <section className="max-w-[860px] mx-auto px-4 md:px-8 pb-16">
          <h2 className="font-sans font-bold text-[#0A2E2B] mb-6" style={{ fontSize: "clamp(18px, 2.2vw, 24px)", letterSpacing: "-0.4px" }}>
            What CDK dealerships use Lokam for
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/csi-follow-up-automation" className="rounded-2xl p-5 no-underline group" style={{ background: "#F0FBF9", border: "1px solid #C8E8E0" }}>
              <p className="font-sans font-semibold text-[#0A2E2B] mb-1 group-hover:text-[#0C8074] transition-colors" style={{ fontSize: 14 }}>CSI Follow-Up Automation →</p>
              <p className="font-sans text-sm leading-5 text-[#4A6B68]">Calls every CDK repair order customer within 24 hours. Catches detractors before the OEM survey.</p>
            </Link>
            <Link href="/unsold-lead-recovery-software" className="rounded-2xl p-5 no-underline group" style={{ background: "#F0FBF9", border: "1px solid #C8E8E0" }}>
              <p className="font-sans font-semibold text-[#0A2E2B] mb-1 group-hover:text-[#0C8074] transition-colors" style={{ fontSize: 14 }}>Unsold Lead Recovery →</p>
              <p className="font-sans text-sm leading-5 text-[#4A6B68]">Reads CDK desklogs and calls every unsold showroom customer within 24 hours.</p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-[860px] mx-auto px-4 md:px-8 pb-20">
          <h2 className="font-sans font-bold text-[#0A2E2B] mb-8" style={{ fontSize: "clamp(18px, 2.2vw, 24px)", letterSpacing: "-0.4px" }}>
            CDK integration questions
          </h2>
          <div className="flex flex-col gap-4">
            {faqSchema.mainEntity.map((item) => (
              <div key={item.name} className="rounded-2xl p-6" style={{ background: "#fff", border: "1px solid #C8E8E0" }}>
                <p className="font-sans font-semibold text-[#0A2E2B] mb-2" style={{ fontSize: 15 }}>{item.name}</p>
                <p className="font-sans text-sm leading-6 text-[#4A6B68]">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 md:px-8 pb-16">
          <div
            className="max-w-[1100px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 rounded-2xl px-5 sm:px-8 py-6"
            style={{ background: "#0A3530" }}
          >
            <div>
              <p className="font-sans font-bold text-white" style={{ fontSize: "clamp(15px, 2vw, 18px)" }}>Ready to automate follow-up from your CDK data?</p>
              <p className="font-sans text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>Book a demo - most CDK dealerships are Lokam's team handles the setup end to end.</p>
            </div>
            <CalendlyButton
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full font-sans font-semibold text-sm text-white whitespace-nowrap transition-all duration-200 hover:scale-[1.03] hover:brightness-110 active:scale-[0.98]"
              style={{ background: "#009589", boxShadow: "0 0 20px 6px rgba(0,149,137,0.45)" }}
            >
              Book a Demo →
            </CalendlyButton>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
