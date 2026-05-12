import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CalendlyButton from "../components/CalendlyButton";

const SITE_URL = "https://www.lokam.ai";

export const metadata: Metadata = {
  title: "CSI Follow-Up Automation for Dealerships | Lokam",
  description:
    "Lokam automates post-service CSI follow-up for every repair order - catching detractors before bad reviews, protecting OEM survey scores, and generating Google reviews at scale.",
  alternates: { canonical: `${SITE_URL}/csi-follow-up-automation` },
  openGraph: {
    title: "CSI Follow-Up Automation | Lokam",
    description:
      "Automate CSI follow-up calls for every repair order. Catch detractors before the OEM survey. Improve your Google rating automatically.",
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
    "AI-powered CSI follow-up automation for automotive dealerships. Calls every repair order customer within 24 hours, detects dissatisfaction in real time, escalates detractors to service managers before the OEM survey arrives, and generates Google reviews from satisfied customers.",
  offers: {
    "@type": "Offer",
    description: "Book a demo - we'll walk you through CSI impact at your repair order volume.",
    url: "https://calendly.com/saleeq-lokam/30-minutes-meeting",
  },
  featureList: [
    "Automated post-service follow-up call for every repair order",
    "Real-time detractor detection and service manager escalation",
    "Google review generation from satisfied customers via SMS",
    "70% contact rate vs 30% manual BDC average",
    "DMS-native - reads RO data from CDK, Dealertrack, VinSolutions",
    "Full call transcript delivered with every escalation",
    "Multilingual - English and Spanish",
    "OEM survey score protection",
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
        text: "CSI follow-up automation replaces manual post-service phone calls with an AI voice system that contacts every service customer after their repair order. It captures satisfaction feedback, detects unhappy customers in real time, and escalates issues to your service manager before the customer files a negative survey or leaves a bad review.",
      },
    },
    {
      "@type": "Question",
      name: "How does Lokam catch detractors before a bad review?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lokam's AI listens for dissatisfaction signals during every call - complaints about repair quality, unexpected charges, wait times, or advisor interactions. The moment a negative signal is detected, your service manager receives an alert with the customer's name, concern, and full call transcript, so they can resolve it before the OEM survey arrives or a public review is posted.",
      },
    },
    {
      "@type": "Question",
      name: "How does Lokam improve CSI scores?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "By reaching every customer within 24 hours of service - something manual BDC teams rarely achieve at scale - Lokam catches dissatisfied customers while issues can still be resolved. Dealers using Lokam have seen CSI score improvements of 15-20 points within 90 days. World Hyundai Matteson went from a 4.0 to a 4.8 Google rating in 8 weeks.",
      },
    },
    {
      "@type": "Question",
      name: "Can Lokam generate Google reviews automatically?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. When Lokam identifies a satisfied customer during the follow-up call, it automatically sends them an SMS with your Google review link. This consistent volume of review requests - applied to every positive call - is what moves dealership Google ratings from the 4.0-4.3 range to 4.6-4.8.",
      },
    },
    {
      "@type": "Question",
      name: "How many repair orders can Lokam handle per month?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lokam scales to your full RO volume - whether you're running 500 or 5,000 repair orders per month. There's no limit on call volume, and the system runs continuously without staffing constraints.",
      },
    },
    {
      "@type": "Question",
      name: "Which DMS systems does Lokam integrate with for CSI follow-up?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lokam integrates natively with CDK Global, Dealertrack, VinSolutions, DealerSocket, TEKION, Authenticom, and DealerVault. Lokam's team handles the integration setup - your IT team does not need to be involved for the standard configuration.",
      },
    },
    {
      "@type": "Question",
      name: "Does Lokam replace my BDC team for CSI follow-up?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Lokam handles the volume work - calling every repair order customer, detecting sentiment, and routing escalations. When it identifies a detractor, your service manager takes over with the full context already in hand. Your BDC team focuses on resolution conversations, not cold call lists.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if the OEM survey arrives before Lokam calls?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "OEM surveys typically go out 3-7 days after a repair order. Lokam places the first call within 24 hours of RO completion, giving you a 2-6 day window to identify and resolve dissatisfied customers before the survey lands in their inbox. The contact window is specifically designed around this timing.",
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

const steps = [
  {
    n: "1",
    title: "Repair order closes in your DMS",
    desc: "When a service visit completes and the RO is closed in CDK, Dealertrack, or VinSolutions, Lokam reads the record automatically. Customer contact details and visit context are pulled within minutes - no manual trigger from your service team.",
  },
  {
    n: "2",
    title: "AI follow-up call placed within 24 hours",
    desc: "Lokam calls the customer from your branded caller ID - your dealership's name appears on their phone. The AI introduces itself, references the specific service visit, and opens the conversation: how did everything go with your visit?",
  },
  {
    n: "3",
    title: "Sentiment detected in real time",
    desc: "Lokam listens for satisfaction signals throughout the call. Complaints about wait times, repair quality, unexpected charges, or advisor interactions trigger detractor classification. Positive feedback triggers promoter classification. The AI handles the full conversation - objections, follow-up questions, expressions of concern.",
  },
  {
    n: "4",
    title: "Detractors escalated, promoters sent review requests",
    desc: "Dissatisfied customers: your service manager gets an immediate alert with the customer's name, the specific issue, and the full call transcript - typically 2-6 days before the OEM survey arrives. Satisfied customers: an automatic SMS goes out with your Google review link.",
  },
];

const outcomes = [
  {
    title: "CSI score: +15-20 points within 90 days",
    desc: "The mechanism is contact rate. Manual BDC teams average 15-30% live contact on RO volume. Lokam averages 70%. Every detractor you reach before the OEM survey is a score that doesn't drop. At 70% contact rate, most dealers see 15-20 point CSI improvement within 90 days.",
  },
  {
    title: "Google rating: 4.0 to 4.8 in 8 weeks",
    desc: "World Hyundai Matteson is the reference case. Starting from a 4.0 Google rating, 8 weeks of consistent post-service follow-up - catching detractors privately and requesting reviews from promoters - moved them to 4.8. The same pattern repeats across dealers because the inputs are the same: every customer called, every promoter asked.",
  },
  {
    title: "OEM bonus protection: $15,000-$40,000 per year",
    desc: "A 1-point CSI ranking drop - moving from the 75th percentile to the 50th - costs $15,000-$40,000 in annual OEM bonus payments depending on brand and volume. For high-volume stores, the impact is higher. Lokam's cost is a fraction of a single bonus tier loss. The math is straightforward.",
  },
  {
    title: "Service retention: detractors resolved, not lost",
    desc: "A customer who had a frustrating service experience and got a call within 24 hours is dramatically more likely to return than one who never heard from the dealership. Retention math at $300-$500 average RO value compounds fast. Dealers report that resolved detractors become some of their most loyal returning customers.",
  },
];

const objections = [
  {
    q: "\"What if the AI makes an unhappy customer angrier?\"",
    a: "Lokam is designed to listen and acknowledge, not to defend. When a customer expresses frustration, the AI validates their concern and escalates to a human immediately with the full context. It does not argue, make excuses, or attempt to resolve complex complaints itself. The goal of the AI in a detractor conversation is to identify the issue and get a human on it - not to close the loop on the call.",
  },
  {
    q: "\"We already have a BDC team doing follow-up.\"",
    a: "The question is what percentage of your repair order volume your BDC is actually reaching via live conversation - not voicemail, not texts. Industry benchmarks show manual follow-up averages 15-30% live contact rate. If your team is at that number, 70-85% of your service customers are going to the OEM survey with no touchpoint from you. Lokam covers the volume gap; your team handles the escalations.",
  },
  {
    q: "\"Won't customers be put off by an AI calling them?\"",
    a: "Lokam discloses upfront that it's an AI assistant calling on behalf of your dealership. In practice, customers respond based on whether the call feels relevant and respectful - not whether it's AI or human. A call that references their specific visit and asks genuinely how it went gets answered. A generic follow-up from a number they don't recognize doesn't - regardless of who made it.",
  },
  {
    q: "\"We don't want to change our current process.\"",
    a: "Lokam doesn't require your team to change anything. It plugs into your DMS, runs automatically, and routes escalations to whoever your service manager is. Your team's process stays the same - except the escalations they get now come with full call transcripts instead of a CRM note that says 'called, no answer.'",
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

        {/* Hero */}
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
            Lokam calls every service customer within 24 hours of their repair order at 70% contact rate. Detractors are escalated to your service manager before the OEM survey arrives. Promoters get a Google review request automatically.
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

        {/* Quick Answer (GEO) */}
        <section className="max-w-[860px] mx-auto px-4 md:px-8 pb-10">
          <div className="rounded-2xl p-6" style={{ background: "#F0FBF9", border: "1px solid #C8E8E0" }}>
            <p className="font-sans font-semibold text-[#0C8074] mb-2 text-xs uppercase tracking-widest">Quick Answer</p>
            <p className="font-sans font-semibold text-[#0A2E2B] mb-1" style={{ fontSize: 15 }}>What is CSI follow-up automation?</p>
            <p className="font-sans text-sm leading-6 text-[#4A6B68]">
              CSI follow-up automation replaces manual post-service phone calls with an AI voice system that contacts every service customer after their repair order. It captures satisfaction feedback, detects unhappy customers in real time, and escalates issues to your service manager before the customer files a negative survey or leaves a bad review.
            </p>
          </div>
        </section>

        {/* Stats */}
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

        {/* Problem / Fix */}
        <section className="max-w-[860px] mx-auto px-4 md:px-8 pb-16">
          <div className="rounded-2xl p-7 mb-5" style={{ background: "#FFF5F5", border: "1px solid #FECACA" }}>
            <p className="font-sans font-semibold text-[#991B1B] mb-2 text-xs uppercase tracking-widest">The Problem</p>
            <p className="font-sans text-sm leading-7 text-[#1F2937]">
              OEM surveys go out 3-7 days after a repair order. A dissatisfied customer who doesn&apos;t hear from you in that window files the survey as-is. Most dealership BDC teams average 15-30% live contact rate on RO volume - meaning 70-85% of your service customers reach the survey without ever speaking to someone from your store. A 1-point CSI ranking drop can cost $15,000-$40,000 in annual OEM bonus payments.
            </p>
          </div>
          <div className="rounded-2xl p-7" style={{ background: "#F0FBF9", border: "1px solid #C8E8E0" }}>
            <p className="font-sans font-semibold text-[#0C8074] mb-2 text-xs uppercase tracking-widest">How Lokam Fixes It</p>
            <p className="font-sans text-sm leading-7 text-[#1F2937]">
              Lokam calls every repair order customer within 24 hours - automatically, from your branded caller ID. Unhappy customers are escalated to your service manager with full context before the survey arrives. Happy customers get a Google review request. Your CSI score reflects what actually happened, not who happened to get a call that week.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="max-w-[860px] mx-auto px-4 md:px-8 pb-16">
          <h2 className="font-sans font-bold text-[#0A2E2B] mb-6" style={{ fontSize: "clamp(18px, 2.2vw, 26px)", letterSpacing: "-0.4px" }}>
            How Lokam CSI Automation Works
          </h2>
          <div className="flex flex-col gap-4">
            {steps.map((s) => (
              <div key={s.n} className="flex gap-5 rounded-2xl p-6" style={{ background: "#fff", border: "1px solid #C8E8E0" }}>
                <div
                  className="flex-shrink-0 flex items-center justify-center rounded-full font-display font-bold text-white"
                  style={{ width: 36, height: 36, background: "linear-gradient(135deg, #00988B, #00D3BD)", fontSize: 14 }}
                >
                  {s.n}
                </div>
                <div>
                  <p className="font-sans font-semibold text-[#0A2E2B] mb-1" style={{ fontSize: 15 }}>{s.title}</p>
                  <p className="font-sans text-sm leading-6 text-[#4A6B68]">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <CalendlyButton className="flex items-center justify-center px-6 h-[50px] bg-brand-mid rounded-lg font-sans font-medium text-[15.6px] text-white">
              Book a Demo
            </CalendlyButton>
          </div>
        </section>

        {/* Outcomes */}
        <section className="max-w-[860px] mx-auto px-4 md:px-8 pb-16">
          <h2 className="font-sans font-bold text-[#0A2E2B] mb-6" style={{ fontSize: "clamp(18px, 2.2vw, 26px)", letterSpacing: "-0.4px" }}>
            What Dealerships See Within 90 Days
          </h2>
          <div className="flex flex-col gap-4">
            {outcomes.map((o) => (
              <div key={o.title} className="rounded-2xl p-6" style={{ background: "#fff", border: "1px solid #C8E8E0" }}>
                <p className="font-sans font-semibold text-[#0A2E2B] mb-2" style={{ fontSize: 15 }}>{o.title}</p>
                <p className="font-sans text-sm leading-6 text-[#4A6B68]">{o.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Objections */}
        <section className="max-w-[860px] mx-auto px-4 md:px-8 pb-16">
          <h2 className="font-sans font-bold text-[#0A2E2B] mb-6" style={{ fontSize: "clamp(18px, 2.2vw, 26px)", letterSpacing: "-0.4px" }}>
            Common Concerns
          </h2>
          <div className="flex flex-col gap-4">
            {objections.map((o) => (
              <div key={o.q} className="rounded-2xl p-6" style={{ background: "#fff", border: "1px solid #C8E8E0" }}>
                <p className="font-sans font-semibold text-[#0A2E2B] mb-2" style={{ fontSize: 15 }}>{o.q}</p>
                <p className="font-sans text-sm leading-6 text-[#4A6B68]">{o.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related pages */}
        <section className="max-w-[860px] mx-auto px-4 md:px-8 pb-16">
          <h2 className="font-sans font-bold text-[#0A2E2B] mb-6" style={{ fontSize: "clamp(18px, 2.2vw, 26px)", letterSpacing: "-0.4px" }}>
            Related
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/ai-voice-agent-dealership" className="rounded-2xl p-5 no-underline group" style={{ background: "#F0FBF9", border: "1px solid #C8E8E0" }}>
              <p className="font-sans font-semibold text-[#0A2E2B] mb-1 group-hover:text-[#0C8074] transition-colors" style={{ fontSize: 14 }}>AI Voice Agent →</p>
              <p className="font-sans text-xs leading-5 text-[#4A6B68]">How the underlying voice technology works across all use cases.</p>
            </Link>
            <Link href="/unsold-lead-recovery-software" className="rounded-2xl p-5 no-underline group" style={{ background: "#F0FBF9", border: "1px solid #C8E8E0" }}>
              <p className="font-sans font-semibold text-[#0A2E2B] mb-1 group-hover:text-[#0C8074] transition-colors" style={{ fontSize: 14 }}>Unsold Lead Recovery →</p>
              <p className="font-sans text-xs leading-5 text-[#4A6B68]">Same AI, applied to unsold showroom visitors instead of service customers.</p>
            </Link>
            <Link href="/integrations" className="rounded-2xl p-5 no-underline group" style={{ background: "#F0FBF9", border: "1px solid #C8E8E0" }}>
              <p className="font-sans font-semibold text-[#0A2E2B] mb-1 group-hover:text-[#0C8074] transition-colors" style={{ fontSize: 14 }}>DMS Integrations →</p>
              <p className="font-sans text-xs leading-5 text-[#4A6B68]">CDK, Dealertrack, VinSolutions, and more - how the data connection works.</p>
            </Link>
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
              <p className="font-sans font-bold text-white" style={{ fontSize: "clamp(15px, 2vw, 18px)" }}>
                Ready to protect your CSI score and Google rating?
              </p>
              <p className="font-sans text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                Book a demo - we&apos;ll show you the impact at your repair order volume.
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
