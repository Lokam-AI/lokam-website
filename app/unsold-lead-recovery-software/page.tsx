import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CalendlyButton from "../components/CalendlyButton";

const SITE_URL = "https://www.lokam.ai";

export const metadata: Metadata = {
  title: "Recover Unsold Showroom Leads Automatically | Lokam",
  description:
    "78% of buyers choose the first dealer to follow up. Lokam automates that call for every showroom visitor - within 24 hours, 70% contact rate.",
  alternates: { canonical: `${SITE_URL}/unsold-lead-recovery-software` },
  openGraph: {
    title: "Recover Unsold Showroom Leads Automatically | Lokam",
    description:
      "78% of buyers choose the first dealer to follow up. Lokam automates that call for every showroom visitor - within 24 hours, 70% contact rate.",
    url: `${SITE_URL}/unsold-lead-recovery-software`,
    type: "website",
    siteName: "Lokam",
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: "Unsold Lead Recovery Software | Lokam" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recover Unsold Showroom Leads Automatically | Lokam",
    description: "78% of buyers choose the first dealer to follow up. Lokam automates that call for every showroom visitor - 24 hours, 70% contact rate.",
    images: [`${SITE_URL}/opengraph-image`],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Unsold Lead Recovery Software", item: `${SITE_URL}/unsold-lead-recovery-software` },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${SITE_URL}/unsold-lead-recovery-software#service`,
  name: "Lokam Unsold Lead Recovery",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Automotive Dealership Software",
  operatingSystem: "Web",
  areaServed: "North America",
  url: `${SITE_URL}/unsold-lead-recovery-software`,
  description:
    "AI-powered unsold lead recovery software for automotive dealerships. Calls every unsold showroom customer within 24 hours of their visit, detects ready buyers, escalates hot leads to BDC in real time, and integrates natively with CDK, Dealertrack, and VinSolutions.",
  offers: {
    "@type": "Offer",
    description: "Book a demo - we'll model your ROI based on your monthly desklog volume.",
    url: "https://calendly.com/saleeq-lokam/30-minutes-meeting",
  },
  featureList: [
    "100% unsold desklog coverage within 24 hours",
    "70% average contact rate vs 15% manual BDC average",
    "Hot lead escalation to BDC team with full call transcript",
    "Branded caller ID for improved answer rates",
    "DMS-native - reads desklogs from CDK, Dealertrack, VinSolutions",
    "Multilingual outreach - English and Spanish",
    "Optimized retry cadence for voicemail drops",
  ],
  provider: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Lokam",
    url: SITE_URL,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is unsold lead recovery software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Unsold lead recovery software automatically follows up with customers who visited a dealership showroom but did not purchase. Instead of relying on BDC staff to manually call every desklog, AI-powered systems like Lokam contact every unsold customer within 24 hours - at scale, with consistent messaging, and at a contact rate manual teams cannot match.",
      },
    },
    {
      "@type": "Question",
      name: "How does Lokam recover unsold showroom traffic?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lokam reads your unsold desklog directly from your DMS within minutes of the customer leaving. An AI voice agent calls each customer within 24 hours using your branded caller ID. When Lokam detects a ready buyer - an objection overcome, new incentive interest, or trade-in readiness - it escalates to your BDC team instantly with the full conversation transcript.",
      },
    },
    {
      "@type": "Question",
      name: "What is a desklog in automotive sales?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A desklog is the record created in a dealership's DMS when a customer visits the showroom and has a pricing or deal discussion with a sales consultant - whether or not they purchase. Desklogs represent your highest-intent unsold prospects: people who came in, sat down, and didn't buy. Most dealerships follow up with fewer than 15% of desklogs manually.",
      },
    },
    {
      "@type": "Question",
      name: "How many times does Lokam follow up with unsold leads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lokam follows an optimized retry cadence - initial call within 24 hours, plus scheduled retries during peak pick-up windows if the first attempt goes to voicemail. Retries are scheduled based on when customers in your market are most likely to answer, not at random. Your team only gets involved when Lokam identifies a warm buyer.",
      },
    },
    {
      "@type": "Question",
      name: "Does Lokam replace BDC staff?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Lokam handles high-volume first-contact outreach so your BDC team focuses entirely on warm, escalated buyers. Most dealers see BDC productivity increase significantly - your team spends their time on ready buyers instead of cold-calling hundreds of desklogs and reaching a fraction of them.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if the customer already bought from another dealer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lokam handles this gracefully. When a customer indicates they've already purchased, the AI acknowledges it, wishes them well, and closes the record. The interaction is short, professional, and non-pushy. These calls are a small minority of the total volume - and the cost of making them is trivial compared to the revenue recovered from customers who are still in the market.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a desklog follow-up and an internet lead follow-up?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A desklog represents a customer who physically visited the showroom and had a deal discussion - the highest-intent unsold prospect you have. An internet lead is an online inquiry, which has lower average intent. Lokam is optimized for desklog follow-up because the buying signals are stronger and the 24-hour window is most critical. Internet lead follow-up is a separate workflow also supported by Lokam's BDC automation.",
      },
    },
    {
      "@type": "Question",
      name: "Which DMS systems does Lokam integrate with for desklog follow-up?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lokam integrates natively with CDK Global, Dealertrack, VinSolutions, DealerSocket, TEKION, Authenticom, and DealerVault. Lokam's team handles the integration configuration - your IT department does not need to be involved for the standard setup.",
      },
    },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Unsold Lead Recovery Software for Dealerships",
  url: `${SITE_URL}/unsold-lead-recovery-software`,
  datePublished: "2026-04-01",
  dateModified: "2026-05-12",
  author: {
    "@type": "Person",
    name: "Muhammed Saleeq",
    jobTitle: "Co-founder & CEO",
    url: `${SITE_URL}/about`,
    sameAs: ["https://www.linkedin.com/in/muhammed-saleeq/"],
    worksFor: { "@type": "Organization", name: "Lokam", url: SITE_URL },
  },
  publisher: {
    "@type": "Organization",
    name: "Lokam",
    url: SITE_URL,
    logo: { "@type": "ImageObject", url: `${SITE_URL}/assets/image-47.png` },
  },
};

const stats = [
  { value: "85%", label: "Unsold leads ignored", sub: "never hear from the dealer again" },
  { value: "78%", label: "Buyers choose first dealer", sub: "to follow up (NADA, 2025)" },
  { value: "24h", label: "Follow-up window", sub: "before leads go cold" },
  { value: "70%", label: "Contact rate", sub: "vs 15% manual BDC average" },
];

const steps = [
  {
    n: "1",
    title: "Customer visits showroom, desklog created",
    desc: "When a customer has a pricing or deal discussion in your showroom - whether or not they purchase - a desklog record is created in your DMS. These are your highest-intent unsold prospects: people who came in, engaged with a consultant, and left without buying.",
  },
  {
    n: "2",
    title: "Lokam reads the desklog automatically",
    desc: "Within minutes of the record being created in CDK, Dealertrack, or VinSolutions, Lokam pulls the customer's contact details and visit context. No manual export, no BDC task creation, no spreadsheet. The follow-up queue builds itself.",
  },
  {
    n: "3",
    title: "AI outbound call placed within 24 hours",
    desc: "The call goes out under your dealership's name and number. Lokam references the specific visit, opens the conversation, and listens. It detects buying signals - objections reconsidered, new incentive interest, trade-in readiness - and handles the full conversation naturally.",
  },
  {
    n: "4",
    title: "Ready buyers escalated, cold leads retried",
    desc: "When Lokam detects a warm buyer, your BDC team gets an immediate hot lead notification with the customer's name, their current interest level, and the full call transcript. Leads that don't answer get retried on an optimized schedule during peak pick-up windows.",
  },
];

const outcomes = [
  {
    title: "Contact rate: 15% to 70% on the same desklog volume",
    desc: "The average dealership BDC manually contacts 15% of unsold desklogs via live conversation. Lokam averages 70% on the same population. At 400 desklogs per month, that's the difference between 60 conversations and 280 - with the same team, same inventory, same market.",
  },
  {
    title: "First-to-follow-up advantage on every desklog",
    desc: "NADA's 2025 data shows 78% of buyers choose the first dealership to follow up - not the one they originally preferred. A customer who visited you on Monday and doesn't hear back until Thursday has already been contacted by your competition. Lokam calls within 24 hours, every time, with no exceptions for staffing or volume.",
  },
  {
    title: "BDC team works exclusively warm leads",
    desc: "When Lokam handles first-contact outreach on all desklog volume, your BDC team's entire workload shifts to pre-qualified buyers. Close rate on BDC-handled leads improves because every call they take is a warm handoff. Reps stay engaged longer because the calls worth taking actually land.",
  },
  {
    title: "Revenue math from recovered volume",
    desc: "A dealership with 400 desklogs per month moving from 15% to 70% contact rate has 220 additional conversations per month. At a 15-20% re-engagement rate and 30% close rate on those appointments, that's 10-13 additional units per month from leads already in your DMS.",
  },
];

const objections = [
  {
    q: "\"Our BDC already follows up on desklogs.\"",
    a: "The question is what percentage they're actually reaching via live conversation - not voicemail, not texts with no reply, not CRM notes that say 'called, no answer.' Industry data shows manual BDC teams average 15% live contact rate on desklog volume. If your team is near that number, 85% of your highest-intent unsold prospects are going cold with no touchpoint. Lokam covers the volume gap - your team handles the warm buyers it surfaces.",
  },
  {
    q: "\"What if the customer already signed somewhere else?\"",
    a: "Lokam handles this gracefully - when a customer says they've purchased elsewhere, the AI acknowledges it, wraps up the call professionally, and closes the record. These calls are a small percentage of total volume. The cost of making them is negligible. The revenue recovered from the customers who are still in market is not.",
  },
  {
    q: "\"Will the AI pressure customers who aren't ready?\"",
    a: "No. Lokam is designed to re-open a conversation, not close a deal on the phone. The first call asks where the customer is in their decision - not when they're coming back in. Customers who aren't ready aren't pushed; they're scheduled for a follow-up retry or handed off to a nurture cadence. Pressure tactics don't work on the phone and Lokam doesn't use them.",
  },
  {
    q: "\"We lose track of who's been called and who hasn't.\"",
    a: "That's exactly the problem Lokam solves. Every desklog record is tracked from the moment it's created in your DMS. Lokam logs every call attempt, outcome, and escalation against the original record. Your BDC manager has a clear view of what's been contacted, what's in retry, what's been escalated, and what closed - without a single manual spreadsheet.",
  },
];

export default function UnsoldLeadRecoverySoftwarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <Nav />
      <main style={{ background: "linear-gradient(to bottom, rgba(25,171,141,0.06) 0%, #ffffff 320px)" }}>

        {/* Hero */}
        <section className="max-w-[860px] mx-auto px-4 md:px-8 pt-16 pb-12 text-center">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 font-sans text-xs font-semibold tracking-widest uppercase"
            style={{ background: "#E0F7F4", color: "#0C8074" }}
          >
            Unsold Lead Recovery
          </div>
          <h1
            className="font-display font-bold text-[#0D1B2A] mb-5"
            style={{ fontSize: "clamp(28px, 4.5vw, 52px)", lineHeight: "1.08", letterSpacing: "-1.5px" }}
          >
            Recover the 85% of Unsold Showroom Customers Your BDC Never Calls
          </h1>
          <p className="font-sans text-base md:text-lg leading-8 text-[#4A6B68] mx-auto" style={{ maxWidth: 620 }}>
            78% of car buyers choose the first dealer to follow up. Lokam calls every unsold desklog within 24 hours - at 70% contact rate - so your team works warm buyers, not cold lists.
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
          <p className="font-sans text-xs text-[#8AADA8] mt-6">
            By <Link href="/about" className="underline underline-offset-2">Muhammed Saleeq</Link>, Co-founder &amp; CEO, Lokam
          </p>
        </section>

        {/* Quick Answer (GEO) */}
        <section className="max-w-[860px] mx-auto px-4 md:px-8 pb-10">
          <div className="rounded-2xl p-6" style={{ background: "#F0FBF9", border: "1px solid #C8E8E0" }}>
            <p className="font-sans font-semibold text-[#0C8074] mb-2 text-xs uppercase tracking-widest">Quick Answer</p>
            <p className="font-sans font-semibold text-[#0A2E2B] mb-1" style={{ fontSize: 15 }}>What is unsold lead recovery software?</p>
            <p className="font-sans text-sm leading-6 text-[#4A6B68]">
              Unsold lead recovery software automatically follows up with customers who visited a dealership showroom but did not purchase. Instead of relying on BDC staff to manually call every desklog, AI systems like Lokam contact every unsold customer within 24 hours - at scale, with consistent messaging, and at a contact rate manual teams cannot match.
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

        {/* Methodology note */}
        <div className="max-w-[1100px] mx-auto px-4 md:px-8 pb-4">
          <p className="font-sans text-xs text-[#8AADA8]">
            Contact rate benchmarks measured across Lokam&apos;s active dealer network as of Q1 2026. Manual BDC baselines from dealer account data at onboarding. The 78% first-to-follow-up figure is from NADA&apos;s 2025 car buyer research. Revenue estimates use observed re-engagement and appointment rates; individual results vary by market and inventory.
          </p>
        </div>

        {/* Problem / Fix */}
        <section className="max-w-[860px] mx-auto px-4 md:px-8 pb-16">
          <div className="rounded-2xl p-7 mb-5" style={{ background: "#FFF5F5", border: "1px solid #FECACA" }}>
            <p className="font-sans font-semibold text-[#991B1B] mb-2 text-xs uppercase tracking-widest">The Problem</p>
            <p className="font-sans text-sm leading-7 text-[#1F2937]">
              The average dealership manually follows up with fewer than 15% of unsold showroom customers. The other 85% - people who walked in, sat with a consultant, and didn&apos;t buy - never hear from you again. Meanwhile, 78% of buyers choose the first dealership to follow up (NADA, 2025). Your BDC isn&apos;t losing because of price or inventory. It&apos;s losing because there aren&apos;t enough hours to call everyone.
            </p>
          </div>
          <div className="rounded-2xl p-7" style={{ background: "#F0FBF9", border: "1px solid #C8E8E0" }}>
            <p className="font-sans font-semibold text-[#0C8074] mb-2 text-xs uppercase tracking-widest">How Lokam Fixes It</p>
            <p className="font-sans text-sm leading-7 text-[#1F2937]">
              Lokam reads your desklog directly from your DMS and calls every unsold customer within 24 hours - automatically, from your branded caller ID, in their preferred language. When it detects a ready buyer, it escalates to your BDC team instantly with the full conversation transcript. Your team gets warm leads. Lokam handles the volume.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="max-w-[860px] mx-auto px-4 md:px-8 pb-16">
          <h2 className="font-sans font-bold text-[#0A2E2B] mb-6" style={{ fontSize: "clamp(18px, 2.2vw, 26px)", letterSpacing: "-0.4px" }}>
            How Lokam Unsold Lead Recovery Works
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
            What Changes When You Cover 100% of Your Desklog
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

        {/* Related */}
        <section className="max-w-[860px] mx-auto px-4 md:px-8 pb-16">
          <h2 className="font-sans font-bold text-[#0A2E2B] mb-6" style={{ fontSize: "clamp(18px, 2.2vw, 26px)", letterSpacing: "-0.4px" }}>
            Related
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/ai-voice-agent-dealership" className="rounded-2xl p-5 no-underline group" style={{ background: "#F0FBF9", border: "1px solid #C8E8E0" }}>
              <p className="font-sans font-semibold text-[#0A2E2B] mb-1 group-hover:text-[#0C8074] transition-colors" style={{ fontSize: 14 }}>AI Voice Agent →</p>
              <p className="font-sans text-xs leading-5 text-[#4A6B68]">How the underlying voice technology works across CSI, BDC, and sales follow-up.</p>
            </Link>
            <Link href="/csi-follow-up-automation" className="rounded-2xl p-5 no-underline group" style={{ background: "#F0FBF9", border: "1px solid #C8E8E0" }}>
              <p className="font-sans font-semibold text-[#0A2E2B] mb-1 group-hover:text-[#0C8074] transition-colors" style={{ fontSize: 14 }}>CSI Follow-Up Automation →</p>
              <p className="font-sans text-xs leading-5 text-[#4A6B68]">Same AI applied to service customers - catch detractors before the OEM survey.</p>
            </Link>
            <Link href="/integrations" className="rounded-2xl p-5 no-underline group" style={{ background: "#F0FBF9", border: "1px solid #C8E8E0" }}>
              <p className="font-sans font-semibold text-[#0A2E2B] mb-1 group-hover:text-[#0C8074] transition-colors" style={{ fontSize: 14 }}>DMS Integrations →</p>
              <p className="font-sans text-xs leading-5 text-[#4A6B68]">CDK, Dealertrack, VinSolutions - how the desklog data connection works.</p>
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
                See how many leads you&apos;re leaving on the table
              </p>
              <p className="font-sans text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                Book a demo - we&apos;ll model your ROI based on your monthly desklog volume.
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
