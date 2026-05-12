import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CalendlyButton from "../components/CalendlyButton";

const SITE_URL = "https://www.lokam.ai";

export const metadata: Metadata = {
  title: "AI Voice Agent for Automotive Dealerships | Lokam",
  description:
    "Lokam's AI voice agent handles outbound follow-up for automotive dealerships - calling every service customer and unsold lead at 70% contact rate, 24 hours a day.",
  alternates: { canonical: `${SITE_URL}/ai-voice-agent-dealership` },
  openGraph: {
    title: "AI Voice Agent for Dealerships | Lokam",
    description:
      "AI outbound voice agents for automotive dealerships. 70% contact rate, real-time sentiment detection, DMS-native. Handles CSI follow-up and unsold lead recovery.",
    url: `${SITE_URL}/ai-voice-agent-dealership`,
    type: "website",
    siteName: "Lokam",
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: "AI Voice Agent for Dealerships | Lokam" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Voice Agent for Dealerships | Lokam",
    description: "AI outbound voice agents for automotive dealerships. 70% contact rate. CSI + unsold lead follow-up.",
    images: [`${SITE_URL}/opengraph-image`],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "AI Voice Agent for Dealerships", item: `${SITE_URL}/ai-voice-agent-dealership` },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Lokam AI Voice Agent",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: `${SITE_URL}/ai-voice-agent-dealership`,
  description:
    "AI-powered outbound voice agent for automotive dealerships. Handles post-service CSI follow-up and unsold lead recovery at 70% contact rate. Detects customer sentiment in real time, escalates issues to managers, and generates Google reviews from satisfied customers.",
  offers: {
    "@type": "Offer",
    description: "Book a demo - see the AI voice agent working on your call volume.",
    url: "https://calendly.com/saleeq-lokam/30-minutes-meeting",
  },
  featureList: [
    "AI outbound voice calls for CSI and unsold lead follow-up",
    "70% contact rate vs 15–30% manual average",
    "Real-time customer sentiment detection",
    "Instant manager escalation with full call transcripts",
    "Branded caller ID - calls go out under your dealership name",
    "DMS-native integration with CDK, Dealertrack, VinSolutions",
    "Multilingual - English and Spanish",
    "Scales to any repair order or desklog volume",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an AI voice agent for dealerships?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI voice agent for dealerships is an automated system that conducts natural, human-sounding outbound phone calls on behalf of the dealership. Unlike chatbots or email automation, AI voice agents speak directly with customers, detect sentiment in real time, handle objections conversationally, and escalate issues to human staff when needed. Lokam's AI voice agent specializes in post-service CSI follow-up and unsold showroom lead recovery.",
      },
    },
    {
      "@type": "Question",
      name: "How is an AI voice agent different from a chatbot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A chatbot handles text-based interactions - website chat, SMS, or email. An AI voice agent conducts live phone calls with natural conversation. For dealership follow-up, phone contact is significantly more effective than text: Lokam achieves a 70% phone contact rate versus 20–35% for text or email-based follow-up alone.",
      },
    },
    {
      "@type": "Question",
      name: "Can an AI voice agent replace BDC staff?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Lokam's AI handles high-volume repetitive outreach - the initial call to every service customer and every unsold lead. When the AI detects a ready buyer or an unhappy customer, it escalates immediately to your BDC team or service manager with full context. Your team focuses on warm, qualified interactions instead of cold-calling hundreds of desklogs.",
      },
    },
    {
      "@type": "Question",
      name: "How does Lokam's AI voice agent handle unhappy customers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lokam listens for dissatisfaction signals during every call - complaints about repair quality, wait times, pricing, or advisor interactions. When a negative signal is detected, the AI flags the customer as a detractor and immediately sends your service manager an alert with the customer's name, concern, and full call transcript. This typically happens before the OEM survey arrives, giving your team a chance to resolve the issue privately.",
      },
    },
    {
      "@type": "Question",
      name: "Which DMS systems does Lokam integrate with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lokam integrates with CDK Global, Dealertrack, VinSolutions, DealerSocket, TEKION, Authenticom, and DealerVault. Most dealerships are live in under 4 hours with no IT involvement required.",
      },
    },
  ],
};

const stats = [
  { value: "70%", label: "Contact rate", sub: "vs 15–30% manual average" },
  { value: "24h", label: "First call window", sub: "after every RO or showroom visit" },
  { value: "100%", label: "Call coverage", sub: "no lead or RO missed" },
  { value: "24/7", label: "Availability", sub: "no staffing constraints" },
];

const features = [
  {
    title: "Outbound AI voice calls",
    desc: "Lokam places natural-sounding outbound calls to your service customers and unsold showroom visitors - at scale, within 24 hours of their visit or repair order.",
  },
  {
    title: "Real-time sentiment detection",
    desc: "The AI listens for satisfaction or dissatisfaction signals during every call. Unhappy customers trigger instant escalation before they write a review or file a negative OEM survey.",
  },
  {
    title: "Manager escalation with full transcripts",
    desc: "When Lokam flags a detractor or a hot lead, your manager receives the customer name, concern, and complete call transcript - so every resolution and follow-up starts informed.",
  },
  {
    title: "Branded caller ID",
    desc: "Every call goes out under your dealership's name and number. Customers recognize who's calling - answer rates are dramatically higher than unknown or 800-number outreach.",
  },
  {
    title: "DMS-native - zero manual work",
    desc: "Lokam reads repair order and desklog data directly from CDK, Dealertrack, and VinSolutions. No spreadsheets, no manual uploads - calls are triggered automatically.",
  },
  {
    title: "Multilingual - English and Spanish",
    desc: "Reaches customers in their preferred language automatically. High-Hispanic markets see significant improvement in contact rate and CSI response among previously unreachable customers.",
  },
];

const useCases = [
  {
    label: "CSI Follow-Up Automation",
    href: "/csi-follow-up-automation",
    desc: "Call every service customer within 24 hours of their repair order. Catch detractors before the OEM survey. Generate Google reviews from promoters.",
    stat: "+20 pts CSI average",
  },
  {
    label: "Unsold Lead Recovery",
    href: "/unsold-lead-recovery-software",
    desc: "Call every unsold showroom visitor within 24 hours. Escalate ready buyers to your BDC team instantly. Recover the 85% of leads your team never reaches.",
    stat: "45% close rate on re-engaged leads",
  },
  {
    label: "BDC Automation",
    href: "/dealership-bdc-software",
    desc: "Automate your entire BDC outreach workflow. 100% desklog coverage, 70% contact rate, hot lead alerts - without adding headcount.",
    stat: "100% desklog coverage",
  },
];

export default function AIVoiceAgentDealershipPage() {
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
            AI Voice Agent
          </div>
          <h1
            className="font-display font-bold text-[#0D1B2A] mb-5"
            style={{ fontSize: "clamp(28px, 4.5vw, 52px)", lineHeight: "1.08", letterSpacing: "-1.5px" }}
          >
            AI Voice Agent for Automotive Dealerships That Actually Reaches Customers
          </h1>
          <p className="font-sans text-base md:text-lg leading-8 text-[#4A6B68] mx-auto" style={{ maxWidth: 620 }}>
            Lokam's AI voice agent calls every service customer and unsold showroom visitor - at 70% contact rate, within 24 hours, from your branded caller ID. Unhappy customers are escalated before they post a review. Ready buyers are sent directly to your team.
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
            <p className="font-sans font-semibold text-[#0A2E2B] mb-1" style={{ fontSize: 15 }}>What is an AI voice agent for dealerships?</p>
            <p className="font-sans text-sm leading-6 text-[#4A6B68]">
              An AI voice agent for dealerships is an automated system that conducts natural, human-sounding outbound phone calls on behalf of the dealership. Unlike chatbots or email automation, AI voice agents speak directly with customers, detect sentiment in real time, and escalate issues to human staff when needed. Lokam specializes in post-service CSI follow-up and unsold showroom lead recovery.
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

        {/* ── Features ── */}
        <section className="max-w-[1100px] mx-auto px-4 md:px-8 pb-20">
          <h2
            className="font-sans font-bold text-[#0A2E2B] mb-8 text-center"
            style={{ fontSize: "clamp(18px, 2.2vw, 28px)", letterSpacing: "-0.4px" }}
          >
            What Lokam's AI Voice Agent Does
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

        {/* ── Use Cases ── */}
        <section className="max-w-[1100px] mx-auto px-4 md:px-8 pb-20">
          <h2
            className="font-sans font-bold text-[#0A2E2B] mb-8 text-center"
            style={{ fontSize: "clamp(18px, 2.2vw, 28px)", letterSpacing: "-0.4px" }}
          >
            What Dealerships Use Lokam For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {useCases.map((uc) => (
              <Link
                key={uc.label}
                href={uc.href}
                className="rounded-2xl p-6 no-underline group"
                style={{ background: "#fff", border: "1px solid #C8E8E0", boxShadow: "0 2px 12px rgba(12,176,162,0.06)" }}
              >
                <p className="font-sans font-semibold text-[#0A2E2B] mb-2 group-hover:text-[#0C8074] transition-colors" style={{ fontSize: 15 }}>
                  {uc.label} →
                </p>
                <p className="font-sans text-sm leading-6 text-[#4A6B68] mb-3">{uc.desc}</p>
                <span
                  className="inline-flex items-center px-3 py-1 rounded-full font-sans text-xs font-semibold"
                  style={{ background: "#E0F7F4", color: "#0C8074" }}
                >
                  {uc.stat}
                </span>
              </Link>
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
                See the AI voice agent working on your call volume
              </p>
              <p className="font-sans text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                Book a 30-minute demo - we'll show you contact rate and ROI at your volume.
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
