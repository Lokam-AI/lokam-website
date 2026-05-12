import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CalendlyButton from "../components/CalendlyButton";

const SITE_URL = "https://www.lokam.ai";

export const metadata: Metadata = {
  title: "Lokam vs Conversica for Dealers: Voice vs Email AI",
  description:
    "Lokam makes AI voice calls for CSI and unsold leads. Conversica sends AI email/SMS for lead nurturing. Compare fit for automotive dealerships.",
  alternates: { canonical: `${SITE_URL}/lokam-vs-conversica` },
  openGraph: {
    title: "Lokam vs Conversica for Dealers: Voice vs Email AI",
    description: "Lokam makes AI voice calls for CSI and unsold leads. Conversica sends AI email/SMS for lead nurturing. Compare fit for automotive dealerships.",
    url: `${SITE_URL}/lokam-vs-conversica`,
    type: "website",
    siteName: "Lokam",
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: "Lokam vs Conversica | Dealership AI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lokam vs Conversica for Dealers: Voice vs Email AI",
    description: "Lokam: AI voice calls for CSI and unsold leads. Conversica: email/SMS for lead nurturing. See which fits your dealership.",
    images: [`${SITE_URL}/opengraph-image`],
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/lokam-vs-conversica#webpage`,
  name: "Lokam vs Conversica for Dealers: Voice vs Email AI",
  url: `${SITE_URL}/lokam-vs-conversica`,
  about: [
    { "@type": "SoftwareApplication", "@id": `${SITE_URL}/#software`, name: "Lokam" },
    { "@type": "SoftwareApplication", name: "Conversica", url: "https://www.conversica.com" },
  ],
  publisher: { "@type": "Organization", "@id": `${SITE_URL}/#organization` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Lokam vs Conversica", item: `${SITE_URL}/lokam-vs-conversica` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the main difference between Lokam and Conversica?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lokam is an outbound voice AI platform built specifically for automotive dealerships, focused on post-visit follow-up: CSI calls after every repair order and unsold lead recovery after every showroom visit. Conversica is a Revenue Digital Assistant platform that automates email and SMS conversations for sales, marketing, and customer success teams across multiple industries. Lokam is phone-first and automotive-specific; Conversica is text-channel-first and industry-agnostic.",
      },
    },
    {
      "@type": "Question",
      name: "Does Conversica make phone calls?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Conversica primarily automates email and SMS conversations. It does not specialize in outbound AI voice calls. Lokam's core product is automated outbound phone calls - the channel with the highest contact rate for post-service and unsold lead follow-up in automotive.",
      },
    },
    {
      "@type": "Question",
      name: "Which is better for CSI follow-up - Lokam or Conversica?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lokam is purpose-built for CSI follow-up. It reads repair orders directly from your DMS, calls every service customer within 24 hours, detects dissatisfied customers in real time during the call, escalates to service managers with full transcripts, and generates Google review requests from promoters. CSI follow-up via phone is Lokam's primary use case. Conversica's automotive offering focuses more on sales lead nurturing via email and SMS.",
      },
    },
    {
      "@type": "Question",
      name: "Does Lokam integrate with the same systems as Conversica?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lokam integrates natively with automotive DMS platforms: CDK Global, Dealertrack, VinSolutions, Authenticom, and DealerVault. This means Lokam reads repair orders and desklogs directly - no CRM sync required for the follow-up trigger. Conversica integrates primarily with CRMs (Salesforce, HubSpot, Microsoft Dynamics) and requires lead data to flow through those systems first.",
      },
    },
  ],
};

const comparison = [
  { feature: "Primary channel", lokam: "Outbound AI voice calls", conversica: "Email and SMS automation" },
  { feature: "Primary focus", lokam: "Post-visit follow-up (CSI + unsold leads)", conversica: "Lead nurturing across sales funnel" },
  { feature: "Industry focus", lokam: "Automotive dealerships only", conversica: "Multiple industries" },
  { feature: "CSI follow-up calls", lokam: "Purpose-built - every RO within 24h", conversica: "Not a primary use case" },
  { feature: "Unsold lead recovery", lokam: "100% desklog coverage, 24h window", conversica: "Via email/SMS sequences" },
  { feature: "DMS integration", lokam: "CDK, Dealertrack, VinSolutions (native)", conversica: "CRM-dependent (Salesforce, HubSpot)" },
  { feature: "Contact rate (outbound)", lokam: "70% average on phone", conversica: "Email open rates ~20-35%" },
  { feature: "Detractor escalation", lokam: "Real-time during call with full transcript", conversica: "Not available" },
  { feature: "Google review generation", lokam: "Automatic SMS after positive call", conversica: "Not included" },
  { feature: "Setup time", lokam: "Fast to set up", conversica: "Weeks (CRM integration required)" },
  { feature: "Pricing model", lokam: "Dealership-focused packages", conversica: "Enterprise (typically $30k+/year)" },
];

export default function LokamVsConversicaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Nav />
      <main style={{ background: "linear-gradient(to bottom, rgba(25,171,141,0.06) 0%, #ffffff 320px)" }}>

        <section className="max-w-[860px] mx-auto px-4 md:px-8 pt-16 pb-12 text-center">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 font-sans text-xs font-semibold tracking-widest uppercase"
            style={{ background: "#E0F7F4", color: "#0C8074" }}
          >
            Comparison
          </div>
          <h1
            className="font-display font-bold text-[#0D1B2A] mb-5"
            style={{ fontSize: "clamp(28px, 4.5vw, 52px)", lineHeight: "1.08", letterSpacing: "-1.5px" }}
          >
            Lokam vs Conversica: Voice AI vs Email AI for Dealerships
          </h1>
          <p className="font-sans text-base md:text-lg leading-8 text-[#4A6B68] mx-auto" style={{ maxWidth: 620 }}>
            Lokam is an outbound voice specialist for post-visit follow-up. Conversica automates email and SMS nurturing. They use different channels, serve different stages of the funnel, and solve different problems.
          </p>
        </section>

        {/* Quick Answer */}
        <section className="max-w-[860px] mx-auto px-4 md:px-8 pb-10">
          <div className="rounded-2xl p-6" style={{ background: "#F0FBF9", border: "1px solid #C8E8E0" }}>
            <p className="font-sans font-semibold text-[#0C8074] mb-2 text-xs uppercase tracking-widest">Quick Answer</p>
            <p className="font-sans font-semibold text-[#0A2E2B] mb-1" style={{ fontSize: 15 }}>Lokam vs Conversica - the short version</p>
            <p className="font-sans text-sm leading-6 text-[#4A6B68]">
              Lokam makes phone calls. Conversica sends emails and texts. For automotive dealerships trying to improve CSI scores, catch detractors before bad reviews, and recover unsold showroom traffic - phone is the higher-contact channel and Lokam is purpose-built for it. For teams that want to automate long email nurture sequences for internet leads across a sales CRM, Conversica is the better fit.
            </p>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="max-w-[1000px] mx-auto px-4 md:px-8 pb-16">
          <h2 className="font-sans font-bold text-[#0A2E2B] mb-6 text-center" style={{ fontSize: "clamp(18px, 2.2vw, 26px)", letterSpacing: "-0.4px" }}>
            Feature Comparison
          </h2>
          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid #C8E8E0" }}>
            <div className="grid grid-cols-3 gap-0" style={{ background: "#0A3530" }}>
              <div className="p-4 font-sans font-semibold text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>Feature</div>
              <div className="p-4 font-sans font-semibold text-sm text-white text-center" style={{ borderLeft: "1px solid rgba(255,255,255,0.1)" }}>Lokam</div>
              <div className="p-4 font-sans font-semibold text-sm text-white text-center" style={{ borderLeft: "1px solid rgba(255,255,255,0.1)" }}>Conversica</div>
            </div>
            {comparison.map((row, i) => (
              <div key={row.feature} className="grid grid-cols-3 gap-0" style={{ background: i % 2 === 0 ? "#fff" : "#F8FDFC", borderTop: "1px solid #E8F4F0" }}>
                <div className="p-4 font-sans text-sm font-semibold text-[#0A2E2B]">{row.feature}</div>
                <div className="p-4 font-sans text-sm text-[#1F2937] text-center" style={{ borderLeft: "1px solid #E8F4F0" }}>{row.lokam}</div>
                <div className="p-4 font-sans text-sm text-[#6B7280] text-center" style={{ borderLeft: "1px solid #E8F4F0" }}>{row.conversica}</div>
              </div>
            ))}
          </div>
          <p className="font-sans text-xs text-[#8AADA8] mt-3 text-center">Conversica data sourced from public product pages. Lokam data from live deployments.</p>
        </section>

        {/* When to choose */}
        <section className="max-w-[860px] mx-auto px-4 md:px-8 pb-16">
          <h2 className="font-sans font-bold text-[#0A2E2B] mb-6 text-center" style={{ fontSize: "clamp(18px, 2.2vw, 26px)", letterSpacing: "-0.4px" }}>
            When to choose each
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="rounded-2xl p-6" style={{ background: "#F0FBF9", border: "2px solid #0C8074" }}>
              <p className="font-sans font-bold text-[#0A2E2B] mb-3" style={{ fontSize: 15 }}>Choose Lokam if:</p>
              <ul className="flex flex-col gap-2">
                {[
                  "CSI scores need improving",
                  "Service customers leave without hearing from you",
                  "Unsold showroom leads go cold before follow-up",
                  "Your BDC can't keep up with desklog volume",
                  "You want proactive phone-based outreach",
                  "DMS-native automation is a requirement",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: "#0CB4A7" }} />
                    <span className="font-sans text-sm text-[#4A6B68]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl p-6" style={{ background: "#FAFAFA", border: "1px solid #E5E7EB" }}>
              <p className="font-sans font-bold text-[#374151] mb-3" style={{ fontSize: 15 }}>Choose Conversica if:</p>
              <ul className="flex flex-col gap-2">
                {[
                  "You want email/SMS lead nurture sequences",
                  "Your team uses Salesforce or HubSpot as the hub",
                  "You need multi-stage sales funnel automation",
                  "Internet lead follow-up (not showroom) is the priority",
                  "You serve multiple industries beyond automotive",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#D1D5DB]" />
                    <span className="font-sans text-sm text-[#6B7280]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-[860px] mx-auto px-4 md:px-8 pb-20">
          <h2 className="font-sans font-bold text-[#0A2E2B] mb-8" style={{ fontSize: "clamp(18px, 2.2vw, 24px)", letterSpacing: "-0.4px" }}>
            Common questions
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
              <p className="font-sans font-bold text-white" style={{ fontSize: "clamp(15px, 2vw, 18px)" }}>See Lokam working on your dealership data</p>
              <p className="font-sans text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>30-minute demo - CSI and desklog impact at your volume before you commit to anything.</p>
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
