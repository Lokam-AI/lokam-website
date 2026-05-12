import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CalendlyButton from "../components/CalendlyButton";

const SITE_URL = "https://www.lokam.ai";

export const metadata: Metadata = {
  title: "Lokam vs Numa - Dealership AI Follow-Up Compared | Lokam",
  description:
    "Comparing Lokam and Numa for automotive dealership AI follow-up. Lokam specializes in outbound CSI and unsold lead recovery. Numa focuses on broad communication management.",
  alternates: { canonical: `${SITE_URL}/lokam-vs-numa` },
  openGraph: {
    title: "Lokam vs Numa | Dealership AI Compared",
    description:
      "Lokam vs Numa: outbound CSI follow-up specialist vs broad dealership communication platform. See which fits your use case.",
    url: `${SITE_URL}/lokam-vs-numa`,
    type: "website",
    siteName: "Lokam",
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: "Lokam vs Numa | Dealership AI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lokam vs Numa | Dealership AI Compared",
    description: "Lokam specializes in outbound CSI + unsold lead follow-up. Numa handles broad dealership communication.",
    images: [`${SITE_URL}/opengraph-image`],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Lokam vs Numa", item: `${SITE_URL}/lokam-vs-numa` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the main difference between Lokam and Numa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lokam is an outbound-first AI voice specialist focused on post-visit follow-up: CSI calls after every repair order and unsold lead recovery after every showroom visit. Numa is a broader dealership communication platform covering inbound call handling, texts, emails, webchat, and appointment booking. Dealers who need to improve CSI scores and recover unsold leads typically find Lokam more focused; dealers who want to unify all communication channels in one platform tend to use Numa.",
      },
    },
    {
      "@type": "Question",
      name: "Which is better for CSI follow-up - Lokam or Numa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lokam is purpose-built for CSI follow-up. It reads repair orders directly from your DMS, calls every service customer within 24 hours, detects dissatisfied customers in real time, escalates to service managers with full transcripts, and generates Google review requests from promoters. Numa includes CSI follow-up as part of a broader platform, but it is not the primary focus of the product.",
      },
    },
    {
      "@type": "Question",
      name: "Does Lokam handle inbound calls like Numa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Lokam is an outbound-only platform, focused on proactive follow-up after service visits and showroom interactions. Numa handles inbound call answering, routing, and scheduling. If your primary need is answering every inbound call, Numa is the better fit. If your priority is making sure every customer who visits or gets serviced hears from you, Lokam is the better fit.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use both Lokam and Numa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Some dealerships use Numa for inbound call management and Lokam for outbound follow-up. The two platforms do not overlap - Numa handles the calls coming in, Lokam handles the calls going out.",
      },
    },
  ],
};

const comparison = [
  { feature: "Primary focus", lokam: "Outbound post-visit follow-up", numa: "Unified dealership communication" },
  { feature: "CSI follow-up calls", lokam: "Purpose-built - every RO within 24h", numa: "Included, not primary focus" },
  { feature: "Unsold lead recovery", lokam: "100% desklog coverage, 24h window", numa: "Available via outreach campaigns" },
  { feature: "Inbound call handling", lokam: "Not included", numa: "Core feature" },
  { feature: "Contact rate (outbound)", lokam: "70% average", numa: "Not publicly stated" },
  { feature: "Detractor escalation", lokam: "Real-time - name, concern, full transcript", numa: "Available via CSI workflows" },
  { feature: "Google review generation", lokam: "Automatic SMS after positive call", numa: "Available via review management" },
  { feature: "DMS integration", lokam: "CDK, Dealertrack, VinSolutions, Authenticom", numa: "CDK, Reynolds, major DMS platforms" },
  { feature: "Setup time", lokam: "Fast to set up", numa: "Varies by feature scope" },
  { feature: "Multilingual", lokam: "English + Spanish", numa: "Yes" },
  { feature: "Dealerships using it", lokam: "Growing", numa: "1,200+" },
];

export default function LokamVsNumaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Nav />
      <main style={{ background: "linear-gradient(to bottom, rgba(25,171,141,0.06) 0%, #ffffff 320px)" }}>

        {/* ── Hero ── */}
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
            Lokam vs Numa: Which Dealership AI Is Right for You?
          </h1>
          <p className="font-sans text-base md:text-lg leading-8 text-[#4A6B68] mx-auto" style={{ maxWidth: 620 }}>
            Lokam specializes in outbound CSI follow-up and unsold lead recovery. Numa covers inbound call handling, texts, emails, and webchat. They solve different problems - here's how to choose.
          </p>
        </section>

        {/* ── Quick Answer (GEO) ── */}
        <section className="max-w-[860px] mx-auto px-4 md:px-8 pb-10">
          <div
            className="rounded-2xl p-6"
            style={{ background: "#F0FBF9", border: "1px solid #C8E8E0" }}
          >
            <p className="font-sans font-semibold text-[#0C8074] mb-2 text-xs uppercase tracking-widest">Quick Answer</p>
            <p className="font-sans font-semibold text-[#0A2E2B] mb-1" style={{ fontSize: 15 }}>Lokam vs Numa - the short version</p>
            <p className="font-sans text-sm leading-6 text-[#4A6B68]">
              Lokam is purpose-built for outbound follow-up: it calls every service customer and every unsold showroom visitor, detects dissatisfied customers in real time, and escalates to managers before bad reviews happen. Numa is a broader communication platform that also handles inbound calls, appointments, and multi-channel messaging. If CSI scores and unsold lead recovery are your priority, Lokam is the more focused tool. If you want to unify all dealership communication in one place, Numa is built for that.
            </p>
          </div>
        </section>

        {/* ── Comparison Table ── */}
        <section className="max-w-[1000px] mx-auto px-4 md:px-8 pb-16">
          <h2
            className="font-sans font-bold text-[#0A2E2B] mb-6 text-center"
            style={{ fontSize: "clamp(18px, 2.2vw, 26px)", letterSpacing: "-0.4px" }}
          >
            Feature Comparison
          </h2>
          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid #C8E8E0" }}>
            {/* Header */}
            <div className="grid grid-cols-3 gap-0" style={{ background: "#0A3530" }}>
              <div className="p-4 font-sans font-semibold text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>Feature</div>
              <div className="p-4 font-sans font-semibold text-sm text-white text-center" style={{ borderLeft: "1px solid rgba(255,255,255,0.1)" }}>Lokam</div>
              <div className="p-4 font-sans font-semibold text-sm text-white text-center" style={{ borderLeft: "1px solid rgba(255,255,255,0.1)" }}>Numa</div>
            </div>
            {/* Rows */}
            {comparison.map((row, i) => (
              <div
                key={row.feature}
                className="grid grid-cols-3 gap-0"
                style={{ background: i % 2 === 0 ? "#fff" : "#F8FDFC", borderTop: "1px solid #E8F4F0" }}
              >
                <div className="p-4 font-sans text-sm font-semibold text-[#0A2E2B]">{row.feature}</div>
                <div className="p-4 font-sans text-sm text-[#1F2937] text-center" style={{ borderLeft: "1px solid #E8F4F0" }}>{row.lokam}</div>
                <div className="p-4 font-sans text-sm text-[#6B7280] text-center" style={{ borderLeft: "1px solid #E8F4F0" }}>{row.numa}</div>
              </div>
            ))}
          </div>
          <p className="font-sans text-xs text-[#8AADA8] mt-3 text-center">
            Numa data sourced from public product pages and press releases. Lokam data from live deployments.
          </p>
        </section>

        {/* ── When to choose ── */}
        <section className="max-w-[860px] mx-auto px-4 md:px-8 pb-16">
          <h2
            className="font-sans font-bold text-[#0A2E2B] mb-6 text-center"
            style={{ fontSize: "clamp(18px, 2.2vw, 26px)", letterSpacing: "-0.4px" }}
          >
            When to choose each
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div
              className="rounded-2xl p-6"
              style={{ background: "#F0FBF9", border: "2px solid #0C8074" }}
            >
              <p className="font-sans font-bold text-[#0A2E2B] mb-3" style={{ fontSize: 15 }}>Choose Lokam if:</p>
              <ul className="flex flex-col gap-2">
                {[
                  "Your CSI scores need improvement",
                  "Unsold showroom customers aren't hearing from you",
                  "Your service team misses detractors before the OEM survey",
                  "Your BDC can't keep up with desklog volume",
                  "You want to improve your Google rating",
                  "You need DMS-native automation with no manual work",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: "#0CB4A7" }} />
                    <span className="font-sans text-sm text-[#4A6B68]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="rounded-2xl p-6"
              style={{ background: "#FAFAFA", border: "1px solid #E5E7EB" }}
            >
              <p className="font-sans font-bold text-[#374151] mb-3" style={{ fontSize: 15 }}>Choose Numa if:</p>
              <ul className="flex flex-col gap-2">
                {[
                  "You need inbound call answering and routing",
                  "You want unified SMS, email, phone, and chat",
                  "Appointment booking automation is a priority",
                  "You want a single platform for all customer communication",
                  "You have 100+ rooftops and need enterprise scale",
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
                See Lokam working on your dealership data
              </p>
              <p className="font-sans text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                30-minute demo - we'll show CSI and desklog impact at your volume before you commit to anything.
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
