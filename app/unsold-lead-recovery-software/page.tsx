import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CalendlyButton from "../components/CalendlyButton";

const SITE_URL = "https://www.lokam.ai";

export const metadata: Metadata = {
  title: "Unsold Lead Recovery Software for Dealerships | Lokam",
  description:
    "Lokam recovers unsold showroom traffic for automotive dealerships - calling every desklog within 24 hours at 70% contact rate before leads go cold and sign with a competitor.",
  alternates: { canonical: `${SITE_URL}/unsold-lead-recovery-software` },
  openGraph: {
    title: "Unsold Lead Recovery Software | Lokam",
    description:
      "Recover unsold showroom traffic automatically. Lokam calls every desklog within 24 hours - 70% contact rate, hot lead escalation, DMS-native.",
    url: `${SITE_URL}/unsold-lead-recovery-software`,
    type: "website",
    siteName: "Lokam",
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: "Unsold Lead Recovery Software | Lokam" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Unsold Lead Recovery Software | Lokam",
    description: "Recover unsold showroom traffic before leads go cold. 70% contact rate, 24-hour follow-up window.",
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
  name: "Lokam Unsold Lead Recovery",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
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
    "DMS integration - reads desklogs from CDK, Dealertrack, VinSolutions",
    "Multilingual outreach - English and Spanish",
  ],
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
        text: "Unsold lead recovery software automatically follows up with customers who visited a dealership showroom but did not purchase. Instead of relying on BDC staff to manually call every desklog, AI-powered systems like Lokam contact every unsold customer within 24 hours of their visit - at scale, with consistent messaging, and at a contact rate manual teams cannot match.",
      },
    },
    {
      "@type": "Question",
      name: "How does Lokam recover unsold showroom traffic?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lokam reads your unsold desklog directly from your DMS (CDK, Dealertrack, VinSolutions) within minutes of the customer leaving. An AI voice agent calls each customer within 24 hours using your branded caller ID. When Lokam detects a ready buyer - an objection overcome, new incentive interest, or trade-in readiness - it escalates to your BDC team instantly with the full conversation transcript.",
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
        text: "Lokam follows an optimized retry cadence - initial call within 24 hours, plus scheduled retries during peak pick-up windows if the first attempt goes to voicemail. Retries are not random; they're scheduled based on when customers in your market are most likely to answer. Your team only gets involved when Lokam identifies a warm buyer.",
      },
    },
    {
      "@type": "Question",
      name: "Does Lokam replace BDC staff?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Lokam handles high-volume repetitive outreach so your BDC team focuses entirely on warm, escalated buyers. Most dealers see BDC productivity increase significantly - your team spends their time on hot leads instead of cold calling 500 desklogs and reaching 75 people.",
      },
    },
  ],
};

const stats = [
  { value: "85%", label: "Unsold leads ignored", sub: "never hear from the dealer again" },
  { value: "78%", label: "Buyers choose the first dealer", sub: "to follow up (NADA, 2025)" },
  { value: "24h", label: "Follow-up window", sub: "before leads go cold" },
  { value: "45%", label: "Close rate", sub: "on re-engaged leads" },
];

const features = [
  {
    title: "Calls every desklog automatically",
    desc: "Your BDC team can't manually reach 500 unsold customers a month. Lokam can - automatically, within 24 hours of the showroom visit, before the customer signs with a competitor.",
  },
  {
    title: "Branded caller ID",
    desc: "Calls go out under your dealership's name and number - not an unknown 800 number. Answer rates jump because customers recognize who's calling.",
  },
  {
    title: "Hot lead escalation",
    desc: "When Lokam detects a ready buyer - an objection overcome, new incentive interest, or trade-in readiness - it alerts your BDC team in real time with the full call transcript.",
  },
  {
    title: "Multilingual outreach",
    desc: "Reaches customers in English and Spanish automatically based on their preferred language. No manual routing required.",
  },
  {
    title: "Optimized retry windows",
    desc: "Retries are scheduled for peak pick-up windows - not randomly. Lokam knows when your market's customers answer their phones.",
  },
  {
    title: "DMS-native integration",
    desc: "Pulls directly from CDK Global, Dealertrack, and VinSolutions. No manual exports, no new logins - your unsold desklog feeds Lokam automatically.",
  },
];

export default function UnsoldLeadRecoverySoftwarePage() {
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
        </section>

        {/* ── Quick Answer (GEO) ── */}
        <section className="max-w-[860px] mx-auto px-4 md:px-8 pb-10">
          <div
            className="rounded-2xl p-6"
            style={{ background: "#F0FBF9", border: "1px solid #C8E8E0" }}
          >
            <p className="font-sans font-semibold text-[#0C8074] mb-2 text-xs uppercase tracking-widest">Quick Answer</p>
            <p className="font-sans font-semibold text-[#0A2E2B] mb-1" style={{ fontSize: 15 }}>What is unsold lead recovery software?</p>
            <p className="font-sans text-sm leading-6 text-[#4A6B68]">
              Unsold lead recovery software automatically follows up with customers who visited a dealership showroom but did not purchase. Instead of relying on BDC staff to manually call every desklog, AI systems like Lokam contact every unsold customer within 24 hours - at scale, with consistent messaging, and at a contact rate manual teams cannot match.
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
              The average dealership manually follows up with fewer than 15% of unsold showroom customers. The other 85% - people who walked in, sat with a consultant, didn't buy - never hear from you again. Meanwhile, 78% of buyers choose the first dealership to follow up (NADA, 2025). Your BDC isn't losing because of price or inventory. It's losing because it doesn't have enough hours to call everyone.
            </p>
          </div>
          <div
            className="rounded-2xl p-8"
            style={{ background: "#F0FBF9", border: "1px solid #C8E8E0" }}
          >
            <p className="font-sans font-semibold text-[#0C8074] mb-2 text-sm uppercase tracking-widest">The Lokam Fix</p>
            <p className="font-sans text-[#1F2937] leading-7">
              Lokam's AI voice agent reads your desklog directly from your DMS and calls every unsold customer within 24 hours - automatically, from your branded caller ID, in their preferred language. When it detects a ready buyer, it escalates to your BDC team instantly with the full conversation transcript. Your team gets warm leads. Lokam handles the volume.
            </p>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="max-w-[1100px] mx-auto px-4 md:px-8 pb-20">
          <h2
            className="font-sans font-bold text-[#0A2E2B] mb-8 text-center"
            style={{ fontSize: "clamp(18px, 2.2vw, 28px)", letterSpacing: "-0.4px" }}
          >
            How Lokam Unsold Lead Recovery Works
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

        {/* ── Related use cases ── */}
        <section className="max-w-[860px] mx-auto px-4 md:px-8 pb-16">
          <h2
            className="font-sans font-bold text-[#0A2E2B] mb-6"
            style={{ fontSize: "clamp(16px, 2vw, 22px)", letterSpacing: "-0.4px" }}
          >
            Also automate with Lokam
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/csi-follow-up-automation"
              className="rounded-2xl p-5 no-underline group"
              style={{ background: "#fff", border: "1px solid #C8E8E0" }}
            >
              <p className="font-sans font-semibold text-[#0A2E2B] mb-1 group-hover:text-[#0C8074] transition-colors" style={{ fontSize: 14 }}>CSI Follow-Up Automation →</p>
              <p className="font-sans text-xs leading-5 text-[#4A6B68]">Automate post-service follow-up for every repair order. Catch detractors before bad reviews.</p>
            </Link>
            <Link
              href="/dealership-bdc-software"
              className="rounded-2xl p-5 no-underline group"
              style={{ background: "#fff", border: "1px solid #C8E8E0" }}
            >
              <p className="font-sans font-semibold text-[#0A2E2B] mb-1 group-hover:text-[#0C8074] transition-colors" style={{ fontSize: 14 }}>Automotive BDC Software →</p>
              <p className="font-sans text-xs leading-5 text-[#4A6B68]">AI-powered BDC automation that reaches 100% of desklogs at 70% contact rate.</p>
            </Link>
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
                See how many leads you're leaving on the table
              </p>
              <p className="font-sans text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                Book a demo - we'll model your ROI based on your monthly desklog volume.
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
