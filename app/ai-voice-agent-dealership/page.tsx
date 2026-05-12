import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CalendlyButton from "../components/CalendlyButton";

const SITE_URL = "https://www.lokam.ai";

export const metadata: Metadata = {
  title: "AI Voice Agent for Automotive Dealerships | Lokam",
  description:
    "Lokam's AI voice agent calls every service customer and unsold lead within 24 hours - 70% contact rate, branded caller ID, DMS-native. No manual exports required.",
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
    "AI-powered outbound voice agent for automotive dealerships. Handles post-service CSI follow-up and unsold lead recovery at 70% contact rate. Detects customer sentiment in real time, escalates issues to managers instantly, and generates Google reviews from satisfied customers.",
  offers: {
    "@type": "Offer",
    description: "Book a demo - see contact rate and ROI at your exact desklog and repair order volume.",
    url: "https://calendly.com/saleeq-lokam/30-minutes-meeting",
  },
  featureList: [
    "AI outbound voice calls for CSI and unsold lead follow-up",
    "70% contact rate vs 15-30% manual average",
    "Real-time customer sentiment detection",
    "Instant manager escalation with full call transcripts",
    "Branded caller ID - calls display dealership name",
    "DMS-native integration with CDK, Dealertrack, VinSolutions",
    "Multilingual - English and Spanish",
    "100% repair order and desklog coverage",
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
        text: "An AI voice agent for dealerships is an automated system that conducts natural outbound phone calls on behalf of the dealership. Unlike chatbots or email automation, AI voice agents speak directly with customers, detect sentiment in real time, and route escalations to human staff when needed. Lokam specializes in post-service CSI follow-up and unsold showroom lead recovery.",
      },
    },
    {
      "@type": "Question",
      name: "How is an AI voice agent different from a chatbot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A chatbot handles text-based interactions - website chat, SMS, or email. An AI voice agent conducts live phone calls with natural two-way conversation. For dealership follow-up, phone contact is significantly more effective: Lokam achieves 70% phone contact rate versus 20-35% for text or email-based follow-up alone.",
      },
    },
    {
      "@type": "Question",
      name: "Can an AI voice agent replace BDC staff?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Lokam handles high-volume first-contact outreach - the initial call to every service customer and every unsold lead. When the AI detects a ready buyer or an unhappy customer, it escalates immediately to your BDC team or service manager with full context and transcript. Your team focuses on warm, qualified interactions instead of cold-calling hundreds of desklogs.",
      },
    },
    {
      "@type": "Question",
      name: "Will customers know they are talking to AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Lokam introduces itself as an AI assistant calling on behalf of your dealership. This is both a legal best practice and consistent with industry norms. Dealers report that disclosure has no measurable negative effect on response rates or satisfaction outcomes - customers care whether their concern is heard, not what technology handled the call.",
      },
    },
    {
      "@type": "Question",
      name: "How does Lokam handle unhappy customers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lokam listens for dissatisfaction signals during every call - complaints about repair quality, wait times, pricing, or advisor interactions. When a negative signal is detected, the AI flags the customer as a detractor and sends your service manager an alert with the customer's name, their specific concern, and a full call transcript. This typically happens before the OEM survey arrives, giving your team a window to resolve the issue privately.",
      },
    },
    {
      "@type": "Question",
      name: "Which DMS systems does Lokam integrate with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lokam integrates with CDK Global, Dealertrack, VinSolutions, DealerSocket, TEKION, Authenticom, and DealerVault. Lokam's team manages the integration configuration - your IT department does not need to be involved for the standard setup.",
      },
    },
    {
      "@type": "Question",
      name: "Does Lokam work for both service and sales follow-up?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Lokam handles CSI follow-up for service (reading repair orders from your DMS) and unsold lead recovery for sales (reading desklog entries). Both workflows run automatically from the same platform.",
      },
    },
    {
      "@type": "Question",
      name: "What if the AI says something inaccurate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lokam operates within a constrained conversation scope - post-service follow-up and lead qualification. It does not quote pricing, make promises about repairs, or negotiate deals. Any question outside its scope is flagged for human follow-up. The AI is purpose-built for the conversations it handles, not a general-purpose assistant.",
      },
    },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "AI Voice Agent for Automotive Dealerships",
  url: `${SITE_URL}/ai-voice-agent-dealership`,
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

const comparisonRows = [
  { metric: "Contact rate",        lokam: "70% average",           manual: "15-20%",          emailOnly: "20-35% open rate" },
  { metric: "Lead coverage",       lokam: "100% of desklogs/ROs",  manual: "Top priority only", emailOnly: "All (low conversion)" },
  { metric: "First contact timing",lokam: "Within 24 hours",       manual: "3-5 days average", emailOnly: "Immediate" },
  { metric: "Sentiment detection", lokam: "Real-time, every call", manual: "Manual notes",     emailOnly: "Not available" },
  { metric: "Escalation",          lokam: "Instant with transcript",manual: "Manual CRM entry", emailOnly: "Not applicable" },
  { metric: "DMS integration",     lokam: "Native, automatic",     manual: "Manual exports",   emailOnly: "Manual exports" },
  { metric: "Hours",               lokam: "24/7",                  manual: "Business hours",   emailOnly: "24/7" },
];

const stats = [
  { value: "70%", label: "Contact rate", sub: "vs 15-30% manual average" },
  { value: "24h", label: "First call window", sub: "after every RO or showroom visit" },
  { value: "100%", label: "Call coverage", sub: "no lead or RO missed" },
  { value: "24/7", label: "Availability", sub: "no staffing constraints" },
];

const steps = [
  {
    n: "1",
    title: "Reads your DMS automatically",
    desc: "Lokam connects directly to CDK Global, Dealertrack, or VinSolutions. When a repair order closes or a showroom visit is logged, Lokam pulls the customer's contact details and visit context automatically. No spreadsheet upload, no manual trigger, no BDC task creation.",
  },
  {
    n: "2",
    title: "Places a branded outbound call within 24 hours",
    desc: "The call goes out under your dealership's name and number - not an 800 number, not an unknown caller. Customers see a name they recognize. Branded caller ID accounts for most of the gap between a 20% and a 70% answer rate.",
  },
  {
    n: "3",
    title: "Detects sentiment in real time",
    desc: "Lokam listens for dissatisfaction signals during every call: wait times, repair quality, pricing, advisor interactions. It also listens for buying signals on unsold leads - customers still in the market, asking about inventory or financing.",
  },
  {
    n: "4",
    title: "Escalates the right customers immediately",
    desc: "When Lokam flags a detractor, your service manager gets an alert within minutes - customer name, specific complaint, and full call transcript. When a ready buyer is identified, your BDC team gets a hot lead notification with full context.",
  },
];

const capabilities = [
  {
    title: "Sentiment detection on every call",
    desc: "Every call is scored for satisfaction in real time. Lokam identifies promoters (for Google review requests), passives (for nurture), and detractors (for immediate escalation) - applied to 100% of your service and sales volume.",
  },
  {
    title: "Manager escalation with full transcripts",
    desc: "Detractor alerts include the customer's name, their specific concern verbatim, and the complete call transcript. Service managers receive this before the OEM survey arrives - giving a window to resolve the issue privately.",
  },
  {
    title: "Branded caller ID on every outbound call",
    desc: "Unknown numbers are answered less than 20% of the time nationally (Hiya, 2025). Branded caller ID - displaying your dealership name - is the single largest driver of contact rate improvement for dealers switching from manual BDC outreach.",
  },
  {
    title: "DMS-native data pipeline",
    desc: "Lokam reads repair order status, completion date, customer contact details, and visit context directly from your DMS. Automation begins the moment the record is created in your system.",
  },
  {
    title: "Multilingual - English and Spanish",
    desc: "Lokam detects customer language preference and conducts the call accordingly. High-Hispanic markets see measurable improvement in contact rate and CSI response among customers who previously received English-only follow-up.",
  },
  {
    title: "Google review generation",
    desc: "Promoters are automatically sent a Google review request via SMS after a positive call. Satisfied customers who would have said nothing become published reviews - without requiring manual follow-up from your team.",
  },
];

const useCases = [
  {
    label: "CSI Follow-Up Automation",
    href: "/csi-follow-up-automation",
    desc: "Call every service customer within 24 hours of their repair order. Catch detractors before the OEM survey. Generate Google reviews from promoters automatically.",
    stat: "+20 pts CSI average",
  },
  {
    label: "Unsold Lead Recovery",
    href: "/unsold-lead-recovery-software",
    desc: "Call every unsold showroom visitor within 24 hours. Escalate ready buyers to your BDC team instantly. Recover revenue from the 80% of leads your team never reaches.",
    stat: "45% close rate on re-engaged leads",
  },
  {
    label: "BDC Automation",
    href: "/dealership-bdc-software",
    desc: "Automate your entire BDC outreach workflow. 100% desklog coverage, 70% contact rate, hot lead alerts - without adding headcount.",
    stat: "100% desklog coverage",
  },
];

const objections = [
  {
    q: "\"Will customers know they're talking to AI?\"",
    a: "Yes - Lokam discloses this at the start of every call. This is both a legal best practice and, in practice, a non-issue. Customers care whether their concern is heard and resolved, not what technology handled the call. Dealers report disclosure has no measurable negative effect on response rates.",
  },
  {
    q: "\"What if the AI says something wrong?\"",
    a: "Lokam operates within a constrained scope: post-service follow-up and lead qualification. It does not quote pricing, promise repairs, or negotiate deals. Any question outside its scope is flagged for human follow-up. It's purpose-built for the conversations it handles.",
  },
  {
    q: "\"Does this replace my BDC team?\"",
    a: "No. Lokam handles the volume work - the first call to every lead and service customer. When it detects a ready buyer or an unhappy customer, it routes to your BDC or service manager immediately with full context. Your team works warm handoffs, not cold lists.",
  },
  {
    q: "\"How is this different from a robo-dialer?\"",
    a: "A robo-dialer plays a recorded message. Lokam conducts a two-way conversation - it listens, responds to what customers say, handles objections, detects sentiment, and escalates based on what it hears. Customers can ask questions, raise concerns, and change the direction of the conversation.",
  },
];

export default function AIVoiceAgentDealershipPage() {
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
            AI Voice Agent
          </div>
          <h1
            className="font-display font-bold text-[#0D1B2A] mb-5"
            style={{ fontSize: "clamp(28px, 4.5vw, 52px)", lineHeight: "1.08", letterSpacing: "-1.5px" }}
          >
            AI Voice Agent for Automotive Dealerships - Every Lead Followed Up Within 24 Hours
          </h1>
          <p className="font-sans text-base md:text-lg leading-8 text-[#4A6B68] mx-auto" style={{ maxWidth: 640 }}>
            Lokam reads your DMS, calls every service customer and unsold showroom visitor within 24 hours, and routes live buyers and detractors directly to your team. Manual BDC teams average 15-20% contact rate. Lokam averages 70%.
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
          <p className="font-sans text-xs text-[#8AADA8] mt-6">
            By <Link href="/about" className="underline underline-offset-2">Muhammed Saleeq</Link>, Co-founder &amp; CEO, Lokam
          </p>
        </section>

        {/* Quick Answer (GEO) */}
        <section className="max-w-[860px] mx-auto px-4 md:px-8 pb-10">
          <div className="rounded-2xl p-6" style={{ background: "#F0FBF9", border: "1px solid #C8E8E0" }}>
            <p className="font-sans font-semibold text-[#0C8074] mb-2 text-xs uppercase tracking-widest">Quick Answer</p>
            <p className="font-sans font-semibold text-[#0A2E2B] mb-1" style={{ fontSize: 15 }}>What is an AI voice agent for dealerships?</p>
            <p className="font-sans text-sm leading-6 text-[#4A6B68]">
              An AI voice agent for dealerships is an automated system that conducts natural outbound phone calls on behalf of the dealership. Unlike chatbots or email automation, AI voice agents speak directly with customers, detect sentiment in real time, and escalate issues to human staff when needed. Lokam specializes in post-service CSI follow-up and unsold showroom lead recovery.
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

        {/* The Problem */}
        <section className="max-w-[860px] mx-auto px-4 md:px-8 pb-16">
          <h2 className="font-sans font-bold text-[#0A2E2B] mb-5" style={{ fontSize: "clamp(18px, 2.2vw, 26px)", letterSpacing: "-0.4px" }}>
            Why Dealership BDCs Miss 80% of Follow-Up Opportunities
          </h2>
          <div className="flex flex-col gap-4 font-sans text-sm leading-7 text-[#4A6B68]">
            <p>
              A mid-volume dealership logs 400-600 desklogs per month. Your BDC team - 3 to 5 people - also handles inbound calls, service appointment booking, and internet leads. There are not enough hours to make a first-call attempt on every desklog entry within 24 hours.
            </p>
            <p>
              What happens instead: the freshest leads get worked. Visits from 3 days ago slide. Visits from last week get marked cold. NADA&apos;s 2025 data shows 78% of buyers go with the first dealership to follow up - not the one they preferred. Every desklog that doesn&apos;t get a same-day call is a lead actively available to your nearest competitor.
            </p>
            <p>
              The same dynamic plays out in service. OEM surveys go out 3-7 days after a repair order. A dissatisfied customer who doesn&apos;t hear from you before that survey files it as-is. The same customer, reached within 24 hours, resolves their concern before it becomes a 1-star review or a negative OEM response.
            </p>
            <div
              className="rounded-2xl px-5 py-4 mt-2"
              style={{ background: "#F0FBF9", border: "1px solid #C8E8E0" }}
            >
              <p className="font-sans font-semibold text-[#0A2E2B]" style={{ fontSize: 14 }}>
                Lokam closes the gap by removing the volume ceiling entirely.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section className="max-w-[860px] mx-auto px-4 md:px-8 pb-16">
          <h2 className="font-sans font-bold text-[#0A2E2B] mb-6" style={{ fontSize: "clamp(18px, 2.2vw, 26px)", letterSpacing: "-0.4px" }}>
            How Lokam Compares to Manual BDC and Email-Only Follow-Up
          </h2>
          <div className="overflow-x-auto rounded-2xl" style={{ border: "1px solid #C8E8E0" }}>
            <table className="w-full text-sm font-sans border-collapse">
              <thead>
                <tr style={{ background: "#F0FBF9" }}>
                  <th className="text-left px-4 py-3 font-semibold text-[#0A2E2B]" style={{ borderBottom: "1px solid #C8E8E0" }}>Metric</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#0C8074]" style={{ borderBottom: "1px solid #C8E8E0" }}>Lokam AI</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#4A6B68]" style={{ borderBottom: "1px solid #C8E8E0" }}>Manual BDC</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#4A6B68]" style={{ borderBottom: "1px solid #C8E8E0" }}>Email / Text Only</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.metric} style={{ background: i % 2 === 0 ? "#fff" : "#F8FFFE" }}>
                    <td className="px-4 py-3 font-medium text-[#0A2E2B]" style={{ borderBottom: "1px solid #E2F0EE" }}>{row.metric}</td>
                    <td className="px-4 py-3 text-[#0C8074] font-medium" style={{ borderBottom: "1px solid #E2F0EE" }}>{row.lokam}</td>
                    <td className="px-4 py-3 text-[#4A6B68]" style={{ borderBottom: "1px solid #E2F0EE" }}>{row.manual}</td>
                    <td className="px-4 py-3 text-[#4A6B68]" style={{ borderBottom: "1px solid #E2F0EE" }}>{row.emailOnly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="font-sans text-xs text-[#8AADA8] mt-3">
            Contact rate data measured across Lokam&apos;s active dealer network (200+ rooftops) as of Q1 2026. Manual BDC benchmarks from Lokam&apos;s analysis of dealer accounts at onboarding. Rates vary by market, DMS configuration, and dealer volume.
          </p>
        </section>

        {/* How It Works */}
        <section className="max-w-[860px] mx-auto px-4 md:px-8 pb-16">
          <h2 className="font-sans font-bold text-[#0A2E2B] mb-6" style={{ fontSize: "clamp(18px, 2.2vw, 26px)", letterSpacing: "-0.4px" }}>
            How Lokam&apos;s AI Voice Agent Works
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

        {/* Capabilities */}
        <section className="max-w-[1100px] mx-auto px-4 md:px-8 pb-16">
          <h2
            className="font-sans font-bold text-[#0A2E2B] mb-8 text-center"
            style={{ fontSize: "clamp(18px, 2.2vw, 26px)", letterSpacing: "-0.4px" }}
          >
            What Lokam Measures and Acts on During Every Call
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {capabilities.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl p-6"
                style={{ background: "#fff", border: "1px solid #C8E8E0", boxShadow: "0 2px 12px rgba(12,176,162,0.06)" }}
              >
                <p className="font-sans font-semibold text-[#0A2E2B] mb-2" style={{ fontSize: 15 }}>{c.title}</p>
                <p className="font-sans text-sm leading-6 text-[#4A6B68]">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Results */}
        <section className="max-w-[860px] mx-auto px-4 md:px-8 pb-16">
          <h2 className="font-sans font-bold text-[#0A2E2B] mb-6" style={{ fontSize: "clamp(18px, 2.2vw, 26px)", letterSpacing: "-0.4px" }}>
            Results Lokam Dealerships See Within 90 Days
          </h2>
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl p-6" style={{ background: "#fff", border: "1px solid #C8E8E0" }}>
              <p className="font-sans font-semibold text-[#0A2E2B] mb-2" style={{ fontSize: 15 }}>Contact rate: 15-20% to 65-75%</p>
              <p className="font-sans text-sm leading-6 text-[#4A6B68]">
                Manual BDC teams averaging 15-20% live contact rate on desklog volume reach 65-75% after deploying Lokam. The improvement is driven by three factors: timing (first call within 24 hours rather than day 3-5), volume (every lead called, not just the freshest), and caller ID (customers answer a name they recognize).
              </p>
            </div>
            <div className="rounded-2xl p-6" style={{ background: "#fff", border: "1px solid #C8E8E0" }}>
              <p className="font-sans font-semibold text-[#0A2E2B] mb-2" style={{ fontSize: 15 }}>CSI score: +15-20 points within 90 days</p>
              <p className="font-sans text-sm leading-6 text-[#4A6B68]">
                Dealers using automated post-service follow-up consistently see CSI score improvements of 15-20 points within 90 days. World Hyundai Matteson moved from a 4.0 to a 4.8 Google rating in 8 weeks - driven by catching detractors before the OEM survey and generating review requests from satisfied customers automatically.
              </p>
            </div>
            <div className="rounded-2xl p-6" style={{ background: "#fff", border: "1px solid #C8E8E0" }}>
              <p className="font-sans font-semibold text-[#0A2E2B] mb-2" style={{ fontSize: 15 }}>BDC team performance improves, not declines</p>
              <p className="font-sans text-sm leading-6 text-[#4A6B68]">
                When Lokam handles first-contact outreach on all volume, your BDC team works exclusively with pre-qualified customers. Close rate on BDC-handled leads goes up because your team takes warm handoffs, not cold lists. Churn drops for the same reason - the job becomes more engaging when the calls that land are worth taking.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="max-w-[1100px] mx-auto px-4 md:px-8 pb-16">
          <h2
            className="font-sans font-bold text-[#0A2E2B] mb-8 text-center"
            style={{ fontSize: "clamp(18px, 2.2vw, 26px)", letterSpacing: "-0.4px" }}
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

        {/* DMS Integrations */}
        <section className="max-w-[860px] mx-auto px-4 md:px-8 pb-16">
          <h2 className="font-sans font-bold text-[#0A2E2B] mb-4" style={{ fontSize: "clamp(18px, 2.2vw, 26px)", letterSpacing: "-0.4px" }}>
            DMS Integrations
          </h2>
          <p className="font-sans text-sm leading-7 text-[#4A6B68] mb-6">
            Lokam connects natively to CDK Global, Dealertrack, VinSolutions, DealerSocket, TEKION, Authenticom, and DealerVault. Lokam&apos;s team manages the integration configuration - your IT department does not need to be involved for the standard setup.
          </p>
          <p className="font-sans text-sm leading-7 text-[#4A6B68] mb-6">
            Lokam reads: customer contact details, repair order status and completion date, desklog entries, vehicle interest records, and appointment history. Lokam does not access financial records, deal financials, or employee data.
          </p>
          <Link
            href="/integrations"
            className="inline-flex items-center font-sans text-sm font-semibold text-[#0C8074] no-underline hover:underline"
          >
            View all DMS integrations →
          </Link>
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

        {/* FAQ */}
        <section className="max-w-[860px] mx-auto px-4 md:px-8 pb-20">
          <h2 className="font-sans font-bold text-[#0A2E2B] mb-8" style={{ fontSize: "clamp(18px, 2.2vw, 26px)", letterSpacing: "-0.4px" }}>
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
                See the AI voice agent working on your call volume
              </p>
              <p className="font-sans text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                30-minute demo - we&apos;ll show you contact rate and ROI at your exact desklog numbers.
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
