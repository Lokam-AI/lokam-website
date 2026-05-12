import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CalendlyButton from "../components/CalendlyButton";

const SITE_URL = "https://www.lokam.ai";

export const metadata: Metadata = {
  title: "Automotive BDC Software | AI-Powered Follow-Up | Lokam",
  description:
    "Lokam automates unsold showroom follow-up for automotive BDCs - reaching 100% of desklogs within 24 hours at a 70% contact rate. Works with CDK, Dealertrack, and VinSolutions.",
  alternates: { canonical: `${SITE_URL}/dealership-bdc-software` },
  openGraph: {
    title: "Automotive BDC Software | Lokam",
    description:
      "Lokam automates unsold showroom follow-up for automotive BDCs - 100% desklog coverage, 70% contact rate, hot lead escalation to your team.",
    url: `${SITE_URL}/dealership-bdc-software`,
    type: "website",
    siteName: "Lokam",
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: "Automotive BDC Software | Lokam" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Automotive BDC Software | Lokam",
    description: "Lokam automates unsold showroom follow-up - 100% desklog coverage, 70% contact rate.",
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
    description: "Book a demo - plans tailored to your BDC volume and DMS.",
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
        text: "Automotive BDC (Business Development Center) software helps dealerships manage and automate customer follow-up for unsold showroom traffic, internet leads, and service customers. AI-powered BDC software like Lokam replaces manual outreach with automated voice calls that reach every lead within 24 hours - at a 70% contact rate versus the 15% industry manual average.",
      },
    },
    {
      "@type": "Question",
      name: "How does Lokam improve BDC contact rate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lokam uses AI voice calls with branded caller ID, optimized retry scheduling during peak pick-up windows, and immediate outreach - typically within 12 to 24 hours of the showroom visit. This produces a 70% contact rate vs the industry manual average of 15%.",
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
        text: "Lokam integrates with CDK Global, Dealertrack, VinSolutions, DealerSocket, TEKION, Authenticom, and DealerVault. Lokam's team handles the integration setup end to end.",
      },
    },
    {
      "@type": "Question",
      name: "What happens when Lokam detects a ready buyer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When Lokam's AI detects buying signals - a specific objection overcome, renewed interest in a vehicle, or a request to speak with sales - it flags the lead as hot and sends an immediate alert to your BDC team with the full call transcript and conversation context. Your team picks up a warm conversation, not a cold dial.",
      },
    },
    {
      "@type": "Question",
      name: "What if the customer already bought from another dealership?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lokam detects this during the call and marks the lead as closed - no further retries. The outcome is logged in your dashboard. This is normal in BDC work; the goal is to reach the customers who haven't decided yet, and those typically represent the majority of your unsold log.",
      },
    },
    {
      "@type": "Question",
      name: "Will customers know they are talking to AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Lokam's AI agent introduces itself as an AI calling on behalf of your dealership. Most customers are comfortable with this because the call is quick, relevant, and personalized to their visit. Customers who prefer to speak with a human can request a callback - Lokam escalates those immediately.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can a dealership get started with Lokam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lokam's team handles the DMS integration, caller ID setup, and call script configuration. Your sales team does not need to be involved in the technical setup. After onboarding, the follow-up queue runs automatically.",
      },
    },
  ],
};

const stats = [
  { value: "70%", label: "Average contact rate", sub: "vs 15% manual BDC average" },
  { value: "100%", label: "Desklog coverage", sub: "every unsold lead called within 24 hrs" },
  { value: "78%", label: "Buy from first to call", sub: "NADA 2025 - first-mover advantage" },
  { value: "12-24h", label: "First call window", sub: "before leads go cold" },
];

const steps = [
  {
    n: "1",
    title: "Showroom visit logged in DMS",
    desc: "When a customer leaves without buying, your sales team logs the visit in CDK, Dealertrack, or VinSolutions - as they always have. No new step required.",
  },
  {
    n: "2",
    title: "Lokam reads the desklog automatically",
    desc: "Via secure DMS integration, Lokam pulls the customer's contact details and visit context within minutes of the record being created. Nothing manual.",
  },
  {
    n: "3",
    title: "AI follow-up call within 24 hours",
    desc: "Lokam dials from your branded caller ID in the customer's preferred language. The AI handles the full conversation - interest check, objection handling, appointment offer.",
  },
  {
    n: "4",
    title: "Hot leads escalated, cold leads retried",
    desc: "Ready buyers are flagged and routed to your BDC team in real time with the full transcript. Customers who didn't answer are retried at peak pick-up windows automatically.",
  },
];

const outcomes = [
  {
    title: "Contact rate goes from 15% to 70%",
    desc: "If your BDC is manually dialing, a realistic contact rate is 10-15% of your monthly desklog. Lokam's combination of branded caller ID, optimized timing, and 100% coverage consistently reaches 70% of the same list. For a store with 300 unsold visits per month, that's the difference between 45 conversations and 210.",
  },
  {
    title: "First-mover advantage on every lead",
    desc: "NADA's 2025 data shows 78% of car buyers purchase from the first dealership to follow up. With manual BDC follow-up happening days after the visit - if at all - competitors who call first win the deal. Lokam calls within 24 hours, before competitors have a chance.",
  },
  {
    title: "Your BDC team works warm leads only",
    desc: "Without automation, BDC reps spend most of their day dialing cold leads who never pick up. With Lokam handling initial outreach, your team receives escalations for customers who just expressed interest. Same headcount, dramatically higher conversations-to-appointment ratio.",
  },
  {
    title: "Revenue from leads you were already losing",
    desc: "A 400-desklog month at 70% contact rate creates 280 AI conversations. Even a modest 4-5% escalation rate surfaces 11-14 buyers who were already in your store. That's additional units from an audience you already paid to attract.",
  },
];

const objections = [
  {
    q: "Our BDC team already follows up on desklogs.",
    a: "Most BDC teams cover 10-20% of unsold leads before the trail goes cold. Lokam doesn't compete with your team - it handles the volume your team physically can't reach, and hands off the customers who are ready to talk.",
  },
  {
    q: "What if the customer already bought somewhere else?",
    a: "Lokam detects this during the call and marks the lead closed. No further outreach is sent. This is a normal outcome in BDC work - the goal is to reach the undecided majority before a competitor does.",
  },
  {
    q: "Will the AI come across as aggressive or scripted?",
    a: "Lokam's AI is designed to feel like a courtesy call, not a pressure call. It confirms the customer's visit, checks whether they found what they needed, and offers help - it doesn't push or script objection-handling the way old robocalls did. Customers who want to be removed can opt out instantly.",
  },
  {
    q: "How do we track which leads Lokam called?",
    a: "Every call is logged in your Lokam dashboard with outcome, transcript, and escalation status. You can filter by date, vehicle, outcome, and follow-up stage. Nothing falls through the cracks.",
  },
];

const related = [
  {
    href: "/unsold-lead-recovery-software",
    title: "Unsold Lead Recovery Software",
    desc: "The full picture on how Lokam recovers unsold showroom traffic - contact rates, revenue math, and DMS integration.",
  },
  {
    href: "/ai-voice-agent-dealership",
    title: "AI Voice Agents for Dealerships",
    desc: "How Lokam's AI handles outbound conversations end to end - sentiment detection, escalation logic, and call outcomes.",
  },
  {
    href: "/integrations",
    title: "DMS Integrations",
    desc: "CDK Global, Dealertrack, VinSolutions and more. How the desklog data flows into Lokam automatically.",
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

        {/* Hero */}
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
            Your BDC team misses 85% of unsold showroom traffic. Lokam's AI calls every desklog within 24 hours - at a 70% contact rate - so your team only works warm, ready buyers.
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

        {/* GEO Quick Answer */}
        <section className="max-w-[860px] mx-auto px-4 md:px-8 pb-10">
          <div className="rounded-2xl p-6" style={{ background: "#F0FBF9", border: "1px solid #C8E8E0" }}>
            <p className="font-sans font-semibold text-[#0C8074] mb-2 text-xs uppercase tracking-widest">Quick Answer</p>
            <p className="font-sans font-semibold text-[#0A2E2B] mb-1" style={{ fontSize: 15 }}>What is automotive BDC software?</p>
            <p className="font-sans text-sm leading-6 text-[#4A6B68]">
              Automotive BDC software helps dealerships manage and automate customer follow-up for unsold showroom traffic, internet leads, and service customers. AI-powered BDC software like Lokam replaces manual outreach with automated voice calls that reach every desklog within 24 hours - at a 70% contact rate versus the 15% industry manual average.
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
                <p className="font-display font-extrabold leading-none mb-1" style={{ fontSize: "clamp(28px, 3.5vw, 40px)", color: "#00968B" }}>
                  {s.value}
                </p>
                <p className="font-sans font-semibold text-[#0A2E2B] text-sm mb-1">{s.label}</p>
                <p className="font-sans text-xs text-[#8AADA8]">{s.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Problem / Solution */}
        <section className="max-w-[860px] mx-auto px-4 md:px-8 pb-16">
          <div className="rounded-2xl p-8 mb-6" style={{ background: "#FFF5F5", border: "1px solid #FECACA" }}>
            <p className="font-sans font-semibold text-[#991B1B] mb-2 text-sm uppercase tracking-widest">The Problem</p>
            <p className="font-sans text-[#1F2937] leading-7">
              The average dealership BDC manually follows up with fewer than 15% of unsold showroom customers. The rest - 85% of people who walked in, sat with a sales consultant, and didn't buy - never hear from you again. Meanwhile, 78% of customers buy from the first dealership to follow up (NADA, 2025).
            </p>
          </div>
          <div className="rounded-2xl p-8" style={{ background: "#F0FBF9", border: "1px solid #C8E8E0" }}>
            <p className="font-sans font-semibold text-[#0C8074] mb-2 text-sm uppercase tracking-widest">The Lokam Fix</p>
            <p className="font-sans text-[#1F2937] leading-7">
              Lokam's AI voice agent calls every unsold customer within 24 hours of their showroom visit - automatically, from your branded caller ID, in their preferred language. When it detects a ready buyer, it escalates to your BDC team instantly with the full conversation context.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="max-w-[860px] mx-auto px-4 md:px-8 pb-16">
          <h2 className="font-sans font-bold text-[#0A2E2B] mb-6" style={{ fontSize: "clamp(18px, 2.2vw, 28px)", letterSpacing: "-0.4px" }}>
            How Lokam BDC Automation Works
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
        </section>

        {/* Outcomes */}
        <section className="max-w-[860px] mx-auto px-4 md:px-8 pb-16">
          <h2 className="font-sans font-bold text-[#0A2E2B] mb-6" style={{ fontSize: "clamp(18px, 2.2vw, 28px)", letterSpacing: "-0.4px" }}>
            What changes when BDC follow-up is automated
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
          <h2 className="font-sans font-bold text-[#0A2E2B] mb-6" style={{ fontSize: "clamp(18px, 2.2vw, 28px)", letterSpacing: "-0.4px" }}>
            Common concerns from BDC managers
          </h2>
          <div className="flex flex-col gap-4">
            {objections.map((o) => (
              <div key={o.q} className="rounded-2xl p-6" style={{ background: "#F8FFFE", border: "1px solid #C8E8E0" }}>
                <p className="font-sans font-semibold text-[#0A2E2B] mb-2" style={{ fontSize: 14 }}>"{o.q}"</p>
                <p className="font-sans text-sm leading-6 text-[#4A6B68]">{o.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related pages */}
        <section className="max-w-[860px] mx-auto px-4 md:px-8 pb-16">
          <h2 className="font-sans font-bold text-[#0A2E2B] mb-6" style={{ fontSize: "clamp(18px, 2.2vw, 28px)", letterSpacing: "-0.4px" }}>
            Related resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {related.map((r) => (
              <Link key={r.href} href={r.href} className="rounded-2xl p-5 no-underline group" style={{ background: "#F0FBF9", border: "1px solid #C8E8E0" }}>
                <p className="font-sans font-semibold text-[#0A2E2B] mb-1 group-hover:text-[#0C8074] transition-colors" style={{ fontSize: 14 }}>{r.title} →</p>
                <p className="font-sans text-xs leading-5 text-[#4A6B68]">{r.desc}</p>
              </Link>
            ))}
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
                See Lokam working on your desklog numbers
              </p>
              <p className="font-sans text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                Book a 30-minute demo - we'll model your ROI before you commit to anything.
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
