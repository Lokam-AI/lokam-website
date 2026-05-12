import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CalendlyButton from "../components/CalendlyButton";

const SITE_URL = "https://www.lokam.ai";

export const metadata: Metadata = {
  title: "Automotive BDC Software | AI-Powered Follow-Up | Lokam",
  description:
    "Lokam automates unsold showroom follow-up for automotive BDCs — reaching 100% of desklogs within 24 hours, at 70% contact rate. Works with CDK, Dealertrack, and more.",
  alternates: { canonical: `${SITE_URL}/dealership-bdc-software` },
  openGraph: {
    title: "Automotive BDC Software | Lokam",
    description:
      "Lokam automates unsold showroom follow-up for automotive BDCs — reaching 100% of desklogs within 24 hours, at 70% contact rate.",
    url: `${SITE_URL}/dealership-bdc-software`,
    type: "website",
    siteName: "Lokam",
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: "Automotive BDC Software | Lokam" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Automotive BDC Software | Lokam",
    description: "Lokam automates unsold showroom follow-up for automotive BDCs — 100% desklog coverage, 70% contact rate.",
    images: [`${SITE_URL}/opengraph-image`],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Automotive BDC Software", item: `${SITE_URL}/dealership-bdc-software` },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Lokam BDC Automation",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: `${SITE_URL}/dealership-bdc-software`,
  description:
    "AI-powered BDC automation software for automotive dealerships. Automates unsold showroom follow-up calls, improves contact rate to 70%, and re-engages desklogs within 24 hours.",
  offers: {
    "@type": "Offer",
    description: "Book a demo — plans tailored to your BDC volume and DMS.",
    url: "https://calendly.com/saleeq-lokam/30-minutes-meeting",
  },
  featureList: [
    "100% desklog follow-up coverage within 24 hours",
    "70% average contact rate vs 15% industry manual average",
    "Branded caller ID for improved answer rates",
    "Hot lead escalation to BDC team in real time",
    "DMS integration with CDK Global, Dealertrack, VinSolutions",
    "Multilingual AI outreach",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is automotive BDC software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Automotive BDC (Business Development Center) software helps dealerships manage and automate customer follow-up for unsold showroom traffic, internet leads, and service customers. AI-powered BDC software like Lokam replaces manual outreach with automated voice calls that reach every lead within 24 hours.",
      },
    },
    {
      "@type": "Question",
      name: "How does Lokam improve BDC contact rate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lokam uses AI voice calls with branded caller ID, optimized retry scheduling during peak pick-up windows, and immediate outreach — typically within 12–24 hours of the showroom visit. This produces a 70% contact rate vs the industry manual average of 15%.",
      },
    },
    {
      "@type": "Question",
      name: "Does Lokam replace BDC staff?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Lokam handles high-volume repetitive outreach so your BDC team focuses on warm escalations and inbound opportunities. Most dealers see BDC productivity increase, not headcount decrease.",
      },
    },
    {
      "@type": "Question",
      name: "Which DMS systems does Lokam integrate with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lokam integrates with CDK Global, Dealertrack, VinSolutions, DealerSocket, TEKION, Authenticom, and DealerVault. Most dealerships are Lokam's team handles the setup end to end.",
      },
    },
  ],
};

const stats = [
  { value: "70%", label: "Average contact rate", sub: "vs 15% manual BDC average" },
  { value: "100%", label: "Desklog coverage", sub: "every unsold lead called within 24 hrs" },
  { value: "12–24h", label: "First call window", sub: "before leads go cold" },
  { value: "45%", label: "Close rate", sub: "on re-engaged leads" },
];

const features = [
  {
    title: "Reaches every unsold lead",
    desc: "Your BDC team can't call 500 desklogs a month. Lokam can — automatically, within 24 hours of the showroom visit, before the customer signs elsewhere.",
  },
  {
    title: "Branded caller ID",
    desc: "Calls go out under your dealership's name and number — not an unknown 800 number. Answer rates jump because customers recognize who's calling.",
  },
  {
    title: "Hot lead escalation",
    desc: "When Lokam detects a ready buyer — specific objection overcome, new incentive interest, trade-in ready — it alerts your BDC team in real time with the full call transcript.",
  },
  {
    title: "Multilingual outreach",
    desc: "Reaches customers in English and Spanish automatically, based on their preferred language. No manual routing required.",
  },
  {
    title: "Optimized retry windows",
    desc: "Retries are scheduled for peak pick-up windows — not randomly. Lokam knows when your market's customers answer their phones.",
  },
  {
    title: "DMS-native integration",
    desc: "Pulls directly from CDK Global, Dealertrack, VinSolutions, and others. No manual exports, no new logins — your unsold log feeds Lokam automatically.",
  },
];

export default function DealershipBDCSoftwarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Nav />
      <main style={{ background: "linear-gradient(to bottom, rgba(25,171,141,0.06) 0%, #ffffff 320px)" }}>

        {/* ── Hero ── */}
        <section className="max-w-[860px] mx-auto px-4 md:px-8 pt-16 pb-12 text-center">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 font-sans text-xs font-semibold tracking-widest uppercase"
            style={{ background: "#E0F7F4", color: "#0C8074" }}
          >
            BDC Automation
          </div>
          <h1
            className="font-display font-bold text-[#0D1B2A] mb-5"
            style={{ fontSize: "clamp(28px, 4.5vw, 52px)", lineHeight: "1.08", letterSpacing: "-1.5px" }}
          >
            Automotive BDC Software That Follows Up With Every Unsold Lead
          </h1>
          <p className="font-sans text-base md:text-lg leading-8 text-[#4A6B68] mx-auto" style={{ maxWidth: 620 }}>
            Your BDC team misses 85% of unsold showroom traffic. Lokam's AI calls every desklog within 24 hours — at a 70% contact rate — so your team only works warm, ready buyers.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 items-center justify-center">
            <CalendlyButton className="flex items-center justify-center px-6 h-[50px] bg-brand-mid rounded-lg font-sans font-medium text-[15.6px] text-white">
              Book a Demo
            </CalendlyButton>
            <Link
              href="/roi-calculator"
              className="flex items-center justify-center px-6 h-[50px] rounded-lg font-sans font-medium text-[15.6px] no-underline"
              style={{ background: "#F0FBF9", color: "#0C8074", border: "1px solid #C8E8E0" }}
            >
              Calculate your ROI →
            </Link>
          </div>
        </section>

        {/* ── Quick Answer (GEO) ── */}
        <section className="max-w-[860px] mx-auto px-4 md:px-8 pb-10">
          <div
            className="rounded-2xl p-6"
            style={{ background: "#F0FBF9", border: "1px solid #C8E8E0" }}
          >
            <p className="font-sans font-semibold text-[#0C8074] mb-2 text-xs uppercase tracking-widest">Quick Answer</p>
            <p className="font-sans font-semibold text-[#0A2E2B] mb-1" style={{ fontSize: 15 }}>What is automotive BDC software?</p>
            <p className="font-sans text-sm leading-6 text-[#4A6B68]">
              Automotive BDC (Business Development Center) software helps dealerships manage and automate customer follow-up for unsold showroom traffic, internet leads, and service customers. AI-powered BDC software like Lokam replaces manual outreach with automated voice calls that reach every lead within 24 hours — at a 70% contact rate versus the 15% industry manual average.
            </p>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="max-w-[1100px] mx-auto px-4 md:px-8 pb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div
                key={s.value}
                className="rounded-2xl p-6 text-center"
                style={{ background: "#fff", border: "1px solid #C8E8E0", boxShadow: "0 2px 12px rgba(12,176,162,0.06)" }}
              >
                <p className="font-display font-extrabold leading-none mb-1" style={{ fontSize: "clamp(28px, 3.5vw, 40px)", color: "#00968B" }}>
                  {s.value}
                </p>
                <p className="font-sans font-semibold text-[#0A2E2B] text-sm mb-1">{s.label}</p>
                <p className="font-sans text-xs text-[#8AADA8]">{s.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Problem / Solution ── */}
        <section className="max-w-[860px] mx-auto px-4 md:px-8 pb-16">
          <div
            className="rounded-2xl p-8 mb-6"
            style={{ background: "#FFF5F5", border: "1px solid #FECACA" }}
          >
            <p className="font-sans font-semibold text-[#991B1B] mb-2 text-sm uppercase tracking-widest">The Problem</p>
            <p className="font-sans text-[#1F2937] leading-7">
              The average dealership BDC manually follows up with fewer than 15% of unsold showroom customers. The rest — 85% of people who walked in, sat with a sales consultant, and didn't buy — never hear from you again. Meanwhile, 78% of customers buy from the first dealership to follow up (NADA, 2025).
            </p>
          </div>
          <div
            className="rounded-2xl p-8"
            style={{ background: "#F0FBF9", border: "1px solid #C8E8E0" }}
          >
            <p className="font-sans font-semibold text-[#0C8074] mb-2 text-sm uppercase tracking-widest">The Lokam Fix</p>
            <p className="font-sans text-[#1F2937] leading-7">
              Lokam's AI voice agent calls every unsold customer within 24 hours of their showroom visit — automatically, from your branded caller ID, in their preferred language. When it detects a ready buyer, it escalates to your BDC team instantly with the full conversation context.
            </p>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="max-w-[1100px] mx-auto px-4 md:px-8 pb-20">
          <h2
            className="font-sans font-bold text-[#0A2E2B] mb-8 text-center"
            style={{ fontSize: "clamp(18px, 2.2vw, 28px)", letterSpacing: "-0.4px" }}
          >
            What Lokam BDC Automation Does
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl p-6"
                style={{ background: "#fff", border: "1px solid #C8E8E0", boxShadow: "0 2px 12px rgba(12,176,162,0.06)" }}
              >
                <p className="font-sans font-semibold text-[#0A2E2B] mb-2" style={{ fontSize: 15 }}>{f.title}</p>
                <p className="font-sans text-sm leading-6 text-[#4A6B68]">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="max-w-[860px] mx-auto px-4 md:px-8 pb-20">
          <h2
            className="font-sans font-bold text-[#0A2E2B] mb-8"
            style={{ fontSize: "clamp(18px, 2.2vw, 24px)", letterSpacing: "-0.4px" }}
          >
            Common questions
          </h2>
          <div className="flex flex-col gap-4">
            {faqSchema.mainEntity.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl p-6"
                style={{ background: "#fff", border: "1px solid #C8E8E0" }}
              >
                <p className="font-sans font-semibold text-[#0A2E2B] mb-2" style={{ fontSize: 15 }}>{item.name}</p>
                <p className="font-sans text-sm leading-6 text-[#4A6B68]">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="px-4 md:px-8 pb-16">
          <div
            className="max-w-[1100px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 rounded-2xl px-5 sm:px-8 py-6"
            style={{ background: "#0A3530" }}
          >
            <div>
              <p className="font-sans font-bold text-white" style={{ fontSize: "clamp(15px, 2vw, 18px)" }}>
                See Lokam working on your desklog numbers
              </p>
              <p className="font-sans text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                Book a 30-minute demo — we'll model your ROI before you commit to anything.
              </p>
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
