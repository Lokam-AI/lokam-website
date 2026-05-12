import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import CalendlyButton from "../../components/CalendlyButton";

const SITE_URL = "https://www.lokam.ai";

export const metadata: Metadata = {
  title: "VinSolutions Integration for AI Follow-Up | Lokam",
  description:
    "Lokam integrates with VinSolutions CRM to automate unsold lead follow-up and CSI outreach. Reads lead profiles and customer data directly - no manual exports required.",
  alternates: { canonical: `${SITE_URL}/integrations/vinsolutions` },
  openGraph: {
    title: "VinSolutions Integration | Lokam Voice AI",
    description: "Lokam reads VinSolutions lead and customer data to automate BDC follow-up. No manual exports required.",
    url: `${SITE_URL}/integrations/vinsolutions`,
    type: "website",
    siteName: "Lokam",
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: "VinSolutions Integration | Lokam" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VinSolutions Integration | Lokam Voice AI",
    description: "Automate unsold lead follow-up from VinSolutions. No manual exports required.",
    images: [`${SITE_URL}/opengraph-image`],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Integrations", item: `${SITE_URL}/integrations` },
    { "@type": "ListItem", position: 3, name: "VinSolutions", item: `${SITE_URL}/integrations/vinsolutions` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does Lokam integrate with VinSolutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lokam connects to VinSolutions CRM to read lead management data, customer profiles, and activity history. New leads and unsold customer records automatically populate Lokam's follow-up queue - no manual exports or uploads required.",
      },
    },
    {
      "@type": "Question",
      name: "What VinSolutions data does Lokam use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lokam reads lead management data, customer profiles, and activity history from VinSolutions. This is used to build the follow-up call queue and personalize outreach with visit context. Lokam does not access financial records or deal financials.",
      },
    },
    {
      "@type": "Question",
      name: "How long does VinSolutions integration setup take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lokam's team handles the integration configuration. Lokam handles the integration configuration - no IT involvement required for the standard setup.",
      },
    },
    {
      "@type": "Question",
      name: "Does Lokam write lead outcomes back to VinSolutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Currently Lokam is read-only from VinSolutions. Call outcomes, transcripts, and hot lead escalations are available in the Lokam dashboard. VinSolutions write-back is on the product roadmap.",
      },
    },
  ],
};

const dataPoints = [
  { label: "Lead management data", desc: "Unsold leads from VinSolutions trigger BDC follow-up automatically." },
  { label: "Customer profiles", desc: "Customer name, contact details, and visit context pulled directly." },
  { label: "Activity history", desc: "Prior interactions used to personalize the follow-up call." },
  { label: "Vehicle interest records", desc: "Vehicle interest data referenced during the outreach conversation." },
];

const steps = [
  { n: "1", title: "Lead or customer record in VinSolutions", desc: "Unsold lead or returning customer record exists in your VinSolutions CRM." },
  { n: "2", title: "Lokam reads the record", desc: "Integration pulls contact details and visit context automatically - no manual step required." },
  { n: "3", title: "AI outbound call placed within 24 hours", desc: "Lokam calls the customer from your branded caller ID, handles the conversation, and logs the result." },
  { n: "4", title: "Hot leads escalated to your BDC team", desc: "Ready buyers are flagged instantly with full transcript. Cold leads are retried on optimized schedules." },
];

export default function VinSolutionsIntegrationPage() {
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
              <span className="font-sans font-bold text-[#0A2E2B]" style={{ fontSize: 18 }}>VinSolutions</span>
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
            VinSolutions + Lokam: Automate BDC Follow-Up From Your CRM
          </h1>
          <p className="font-sans text-base md:text-lg leading-8 text-[#4A6B68] mx-auto" style={{ maxWidth: 600 }}>
            Lokam reads your VinSolutions lead and customer data to build the follow-up queue automatically. Every unsold lead gets an AI outbound call within 24 hours - no manual work from your BDC team.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 items-center justify-center">
            <CalendlyButton className="flex items-center justify-center px-6 h-[50px] bg-brand-mid rounded-lg font-sans font-medium text-[15.6px] text-white">
              Book a Demo
            </CalendlyButton>
            <Link href="/integrations" className="flex items-center justify-center px-6 h-[50px] rounded-lg font-sans font-medium text-[15.6px] no-underline" style={{ background: "#F0FBF9", color: "#0C8074", border: "1px solid #C8E8E0" }}>
              View all integrations →
            </Link>
          </div>
        </section>

        <section className="max-w-[860px] mx-auto px-4 md:px-8 pb-16">
          <h2 className="font-sans font-bold text-[#0A2E2B] mb-6" style={{ fontSize: "clamp(18px, 2.2vw, 24px)", letterSpacing: "-0.4px" }}>What Lokam reads from VinSolutions</h2>
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

        <section className="max-w-[860px] mx-auto px-4 md:px-8 pb-16">
          <h2 className="font-sans font-bold text-[#0A2E2B] mb-6" style={{ fontSize: "clamp(18px, 2.2vw, 24px)", letterSpacing: "-0.4px" }}>How VinSolutions data flows through Lokam</h2>
          <div className="flex flex-col gap-4">
            {steps.map((s) => (
              <div key={s.n} className="flex gap-5 rounded-2xl p-6" style={{ background: "#fff", border: "1px solid #C8E8E0" }}>
                <div className="flex-shrink-0 flex items-center justify-center rounded-full font-display font-bold text-white" style={{ width: 36, height: 36, background: "linear-gradient(135deg, #00988B, #00D3BD)", fontSize: 14 }}>{s.n}</div>
                <div>
                  <p className="font-sans font-semibold text-[#0A2E2B] mb-1" style={{ fontSize: 15 }}>{s.title}</p>
                  <p className="font-sans text-sm leading-6 text-[#4A6B68]">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-[860px] mx-auto px-4 md:px-8 pb-16">
          <h2 className="font-sans font-bold text-[#0A2E2B] mb-6" style={{ fontSize: "clamp(18px, 2.2vw, 24px)", letterSpacing: "-0.4px" }}>What VinSolutions dealers use Lokam for</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/dealership-bdc-software" className="rounded-2xl p-5 no-underline group" style={{ background: "#F0FBF9", border: "1px solid #C8E8E0" }}>
              <p className="font-sans font-semibold text-[#0A2E2B] mb-1 group-hover:text-[#0C8074] transition-colors" style={{ fontSize: 14 }}>BDC Automation →</p>
              <p className="font-sans text-sm leading-5 text-[#4A6B68]">100% of VinSolutions leads followed up within 24 hours at 70% contact rate.</p>
            </Link>
            <Link href="/unsold-lead-recovery-software" className="rounded-2xl p-5 no-underline group" style={{ background: "#F0FBF9", border: "1px solid #C8E8E0" }}>
              <p className="font-sans font-semibold text-[#0A2E2B] mb-1 group-hover:text-[#0C8074] transition-colors" style={{ fontSize: 14 }}>Unsold Lead Recovery →</p>
              <p className="font-sans text-sm leading-5 text-[#4A6B68]">Re-engages unsold customers from VinSolutions before they sign with a competitor.</p>
            </Link>
          </div>
        </section>

        <section className="max-w-[860px] mx-auto px-4 md:px-8 pb-20">
          <h2 className="font-sans font-bold text-[#0A2E2B] mb-8" style={{ fontSize: "clamp(18px, 2.2vw, 24px)", letterSpacing: "-0.4px" }}>VinSolutions integration questions</h2>
          <div className="flex flex-col gap-4">
            {faqSchema.mainEntity.map((item) => (
              <div key={item.name} className="rounded-2xl p-6" style={{ background: "#fff", border: "1px solid #C8E8E0" }}>
                <p className="font-sans font-semibold text-[#0A2E2B] mb-2" style={{ fontSize: 15 }}>{item.name}</p>
                <p className="font-sans text-sm leading-6 text-[#4A6B68]">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-4 md:px-8 pb-16">
          <div className="max-w-[1100px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 rounded-2xl px-5 sm:px-8 py-6" style={{ background: "#0A3530" }}>
            <div>
              <p className="font-sans font-bold text-white" style={{ fontSize: "clamp(15px, 2vw, 18px)" }}>Ready to automate follow-up from VinSolutions?</p>
              <p className="font-sans text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>Book a demo - most VinSolutions dealerships are Lokam's team handles the setup end to end.</p>
            </div>
            <CalendlyButton className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full font-sans font-semibold text-sm text-white whitespace-nowrap transition-all duration-200 hover:scale-[1.03] hover:brightness-110 active:scale-[0.98]" style={{ background: "#009589", boxShadow: "0 0 20px 6px rgba(0,149,137,0.45)" }}>
              Book a Demo →
            </CalendlyButton>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
