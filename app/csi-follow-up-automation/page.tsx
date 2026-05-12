import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CalendlyButton from "../components/CalendlyButton";

const SITE_URL = "https://www.lokam.ai";

export const metadata: Metadata = {
  title: "CSI Follow-Up Automation for Dealerships | Lokam",
  description:
    "Lokam automates post-service CSI follow-up calls for automotive dealerships — catching detractors before bad reviews, improving survey scores, and recovering at-risk customers at scale.",
  alternates: { canonical: `${SITE_URL}/csi-follow-up-automation` },
  openGraph: {
    title: "CSI Follow-Up Automation | Lokam",
    description:
      "Automate CSI follow-up calls for every repair order. Catch detractors before they write bad reviews. Improve your OEM survey scores.",
    url: `${SITE_URL}/csi-follow-up-automation`,
    type: "website",
    siteName: "Lokam",
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: "CSI Follow-Up Automation | Lokam" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CSI Follow-Up Automation | Lokam",
    description: "Automate CSI follow-up for every repair order. Catch detractors before bad reviews.",
    images: [`${SITE_URL}/opengraph-image`],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "CSI Follow-Up Automation", item: `${SITE_URL}/csi-follow-up-automation` },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Lokam CSI Follow-Up Automation",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: `${SITE_URL}/csi-follow-up-automation`,
  description:
    "AI-powered CSI follow-up automation for automotive dealerships. Calls every repair order customer within 24 hours, detects dissatisfaction in real time, escalates detractors to service managers, and generates Google reviews from satisfied customers.",
  offers: {
    "@type": "Offer",
    description: "Book a demo — we'll walk you through CSI impact at your volume.",
    url: "https://calendly.com/saleeq-lokam/30-minutes-meeting",
  },
  featureList: [
    "Automated post-service follow-up call for every RO",
    "Real-time detractor detection and service manager escalation",
    "Google review generation from satisfied customers",
    "70% contact rate vs 30% manual BDC average",
    "DMS integration — reads RO data from CDK, Dealertrack, and more",
    "Full call transcript delivered with every escalation",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is CSI follow-up automation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CSI (Customer Satisfaction Index) follow-up automation replaces manual post-service phone calls with an AI voice system that contacts every service customer after their repair order. It captures satisfaction feedback, detects unhappy customers in real time, and escalates issues to your service manager before the customer files a negative survey or leaves a bad review.",
      },
    },
    {
      "@type": "Question",
      name: "How does Lokam catch detractors before a bad review?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lokam's AI listens for dissatisfaction signals — complaints about repair quality, unexpected charges, wait times, or advisor interactions — during the follow-up call. The moment a negative signal is detected, your service manager receives an instant alert with the customer's name, concern, and full call transcript, so they can resolve it before the customer submits a survey or posts publicly.",
      },
    },
    {
      "@type": "Question",
      name: "How does Lokam improve CSI scores?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "By reaching every customer within 24 hours of service — something manual BDC teams rarely achieve — Lokam catches issues while they can still be resolved. Dealers using Lokam have seen CSI score improvements of 15–20 points within 90 days. World Hyundai Matteson went from a 4.0 to a 4.8 Google rating in 8 weeks.",
      },
    },
    {
      "@type": "Question",
      name: "Can Lokam generate Google reviews automatically?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. When Lokam identifies a satisfied customer during the follow-up call, it automatically sends them an SMS with your Google review link. This has helped dealerships move from 4.0 to 4.8★ ratings within 90 days.",
      },
    },
    {
      "@type": "Question",
      name: "How many repair orders can Lokam handle per month?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lokam scales to your full RO volume — whether you're running 500 or 5,000 repair orders per month. There's no limit on call volume, and the system runs 24/7 without staffing constraints.",
      },
    },
  ],
};

const stats = [
  { value: "70%", label: "Contact rate", sub: "vs 30% manual BDC average" },
  { value: "24h", label: "First call window", sub: "after every repair order" },
  { value: "4.0→4.8★", label: "Google rating", sub: "World Hyundai in 8 weeks" },
  { value: "+20 pts", label: "CSI score lift", sub: "average across active dealers" },
];

const features = [
  {
    title: "Every RO gets a follow-up call",
    desc: "Your service advisors handle 100+ ROs a week — they can't call everyone. Lokam calls every customer within 24 hours of pickup, without any manual input from your team.",
  },
  {
    title: "Detractors caught before the survey",
    desc: "Lokam detects negative sentiment in real time during the call. Service managers get an instant alert — name, issue, full transcript — so they can resolve it before the survey arrives or the review goes live.",
  },
  {
    title: "Google review generation built in",
    desc: "Satisfied customers get an SMS with your Google review link at the end of the call. Dealers consistently see Google ratings improve from 4.0 to 4.7+ within 60–90 days.",
  },
  {
    title: "OEM survey score protection",
    desc: "A 1-point CSI drop can cost $15,000–$40,000 in annual OEM bonus payments. Lokam's proactive follow-up prevents the surprise detractor submissions that drag scores down.",
  },
  {
    title: "DMS-integrated, zero manual work",
    desc: "Lokam reads your repair order data directly from CDK Global, Dealertrack, and other DMS platforms. No spreadsheets, no manual uploads — ROs feed the follow-up queue automatically.",
  },
  {
    title: "Full call transcripts on every escalation",
    desc: "When Lokam escalates an at-risk customer, your manager gets everything they need: customer name, vehicle, concern, and the full AI call transcript — so the resolution call starts informed.",
  },
];

export default function CSIFollowUpAutomationPage() {
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
            CSI Automation
          </div>
          <h1
            className="font-display font-bold text-[#0D1B2A] mb-5"
            style={{ fontSize: "clamp(28px, 4.5vw, 52px)", lineHeight: "1.08", letterSpacing: "-1.5px" }}
          >
            CSI Follow-Up Automation That Catches Detractors Before They Cost You
          </h1>
          <p className="font-sans text-base md:text-lg leading-8 text-[#4A6B68] mx-auto" style={{ maxWidth: 620 }}>
            Lokam calls every service customer within 24 hours of their repair order — at 70% contact rate. Detractors are escalated to your service manager before the survey arrives. Promoters get a Google review request automatically.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 items-center justify-center">
            <CalendlyButton className="flex items-center justify-center px-6 h-[50px] bg-brand-mid rounded-lg font-sans font-medium text-[15.6px] text-white">
              Book a Demo
            </CalendlyButton>
            <Link
              href="/case-studies/world-hyundai"
              className="flex items-center justify-center px-6 h-[50px] rounded-lg font-sans font-medium text-[15.6px] no-underline"
              style={{ background: "#F0FBF9", color: "#0C8074", border: "1px solid #C8E8E0" }}
            >
              See case study →
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
            <p className="font-sans font-semibold text-[#0A2E2B] mb-1" style={{ fontSize: 15 }}>What is CSI follow-up automation?</p>
            <p className="font-sans text-sm leading-6 text-[#4A6B68]">
              CSI follow-up automation replaces manual post-service phone calls with an AI voice system that contacts every service customer after their repair order. It captures satisfaction feedback, detects unhappy customers in real time, and escalates issues to your service manager before the customer files a negative survey or leaves a bad review.
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
                <p className="font-display font-extrabold leading-none mb-1" style={{ fontSize: "clamp(24px, 3vw, 36px)", color: "#00968B" }}>
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
              Only 23% of dealerships achieve a 90%+ CSI contact rate using manual follow-up. The other 77% are letting dissatisfied customers leave without resolution — and those customers post the reviews, file the surveys, and defect to a competitor. A 1-point CSI drop can cost $15,000–$40,000 in annual OEM bonuses.
            </p>
          </div>
          <div
            className="rounded-2xl p-8"
            style={{ background: "#F0FBF9", border: "1px solid #C8E8E0" }}
          >
            <p className="font-sans font-semibold text-[#0C8074] mb-2 text-sm uppercase tracking-widest">The Lokam Fix</p>
            <p className="font-sans text-[#1F2937] leading-7">
              Lokam calls every repair order customer within 24 hours — automatically. Unhappy customers are escalated to your service manager with the full context before the survey ever arrives. Happy customers get a Google review request. Your CSI score reflects what actually happened, not who happened to get a call that week.
            </p>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="max-w-[1100px] mx-auto px-4 md:px-8 pb-20">
          <h2
            className="font-sans font-bold text-[#0A2E2B] mb-8 text-center"
            style={{ fontSize: "clamp(18px, 2.2vw, 28px)", letterSpacing: "-0.4px" }}
          >
            How Lokam CSI Automation Works
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
                Ready to protect your CSI score and Google rating?
              </p>
              <p className="font-sans text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                Book a demo — we'll show you the impact at your repair order volume.
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
