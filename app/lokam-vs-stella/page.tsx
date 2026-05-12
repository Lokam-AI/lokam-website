import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CalendlyButton from "../components/CalendlyButton";

const SITE_URL = "https://www.lokam.ai";

export const metadata: Metadata = {
  title: "Lokam vs STELLA Automotive AI: Outbound vs Inbound",
  description:
    "Lokam handles outbound: AI calls after service visits and unsold appointments. STELLA handles inbound: answering, routing, and booking. See which fits.",
  alternates: { canonical: `${SITE_URL}/lokam-vs-stella` },
  openGraph: {
    title: "Lokam vs STELLA Automotive AI: Outbound vs Inbound",
    description: "Lokam handles outbound: AI calls after service visits and unsold appointments. STELLA handles inbound: answering, routing, and booking. See which fits.",
    url: `${SITE_URL}/lokam-vs-stella`,
    type: "website",
    siteName: "Lokam",
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: "Lokam vs STELLA | Dealership Voice AI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lokam vs STELLA Automotive AI: Outbound vs Inbound",
    description: "Lokam: outbound AI calls after service visits. STELLA: inbound AI call answering and routing. See which fits your dealership.",
    images: [`${SITE_URL}/opengraph-image`],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Lokam vs STELLA", item: `${SITE_URL}/lokam-vs-stella` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between Lokam and STELLA Automotive AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lokam and STELLA both use AI voice technology for automotive dealerships, but they solve opposite problems. STELLA primarily handles inbound calls - answering the phones, routing callers, booking appointments, and providing 24/7 call coverage so no customer is left on hold. Lokam is outbound-first - it proactively calls every service customer after their repair order and every unsold showroom visitor within 24 hours, detecting dissatisfied customers before they post bad reviews.",
      },
    },
    {
      "@type": "Question",
      name: "Does STELLA handle outbound CSI follow-up like Lokam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "STELLA is primarily an inbound call handling platform. Lokam is purpose-built for outbound CSI follow-up: reading repair orders from your DMS, calling every service customer within 24 hours, detecting detractors in real time, and escalating to your service manager with full transcripts. If your priority is proactive post-service contact rather than inbound call answering, Lokam is the more focused tool.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use both Lokam and STELLA together?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Lokam and STELLA do not overlap: STELLA answers the calls coming in, Lokam places the calls going out. Some dealerships use STELLA to ensure every inbound call is answered and Lokam to ensure every post-service and post-visit customer is followed up with. The two platforms are complementary.",
      },
    },
    {
      "@type": "Question",
      name: "Which is better for improving CSI scores - Lokam or STELLA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lokam is specifically built to improve CSI scores through proactive outbound follow-up. It reaches every service customer within 24 hours, catches detractors before the OEM survey arrives, and generates Google review requests from promoters. Dealers using Lokam have seen CSI score improvements of 15-20 points within 90 days. STELLA's CSI impact is indirect - by improving inbound call handling, it reduces customer friction at the service lane.",
      },
    },
  ],
};

const comparison = [
  { feature: "Primary direction", lokam: "Outbound (Lokam calls customers)", stella: "Inbound (answers customer calls)" },
  { feature: "CSI follow-up", lokam: "Purpose-built - every RO within 24h", stella: "Not a primary use case" },
  { feature: "Unsold lead recovery", lokam: "100% desklog coverage, 24h window", stella: "Not included" },
  { feature: "Inbound call handling", lokam: "Not included", stella: "Core feature" },
  { feature: "Appointment booking", lokam: "Via escalation to BDC team", stella: "Direct booking via inbound AI" },
  { feature: "Detractor escalation", lokam: "Real-time during outbound call", stella: "Not available" },
  { feature: "Google review generation", lokam: "Automatic SMS after positive call", stella: "Not included" },
  { feature: "DMS integration", lokam: "CDK, Dealertrack, VinSolutions (native)", stella: "CDK, Reynolds, others" },
  { feature: "Contact rate", lokam: "70% outbound average", stella: "100% inbound answer rate" },
  { feature: "Industry focus", lokam: "Automotive only", stella: "Automotive only" },
  { feature: "Best for", lokam: "Improving CSI + recovering unsold leads", stella: "Answering every inbound call" },
];

export default function LokamVsStellaPage() {
  return (
    <>
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
            Lokam vs STELLA: Outbound Follow-Up vs Inbound Call Handling
          </h1>
          <p className="font-sans text-base md:text-lg leading-8 text-[#4A6B68] mx-auto" style={{ maxWidth: 620 }}>
            Both are voice AI platforms built for automotive dealerships. But Lokam calls customers after their visit. STELLA answers customers when they call in. They solve different halves of the same problem.
          </p>
        </section>

        {/* Quick Answer */}
        <section className="max-w-[860px] mx-auto px-4 md:px-8 pb-10">
          <div className="rounded-2xl p-6" style={{ background: "#F0FBF9", border: "1px solid #C8E8E0" }}>
            <p className="font-sans font-semibold text-[#0C8074] mb-2 text-xs uppercase tracking-widest">Quick Answer</p>
            <p className="font-sans font-semibold text-[#0A2E2B] mb-1" style={{ fontSize: 15 }}>Lokam vs STELLA - the short version</p>
            <p className="font-sans text-sm leading-6 text-[#4A6B68]">
              STELLA answers inbound calls so no customer goes to voicemail. Lokam places outbound calls so no service customer or unsold lead is forgotten. If your problem is missed inbound calls and appointment booking, STELLA is built for that. If your problem is CSI scores dropping and unsold showroom leads going cold, Lokam is the solution. Many dealerships use both.
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
              <div className="p-4 font-sans font-semibold text-sm text-white text-center" style={{ borderLeft: "1px solid rgba(255,255,255,0.1)" }}>STELLA</div>
            </div>
            {comparison.map((row, i) => (
              <div key={row.feature} className="grid grid-cols-3 gap-0" style={{ background: i % 2 === 0 ? "#fff" : "#F8FDFC", borderTop: "1px solid #E8F4F0" }}>
                <div className="p-4 font-sans text-sm font-semibold text-[#0A2E2B]">{row.feature}</div>
                <div className="p-4 font-sans text-sm text-[#1F2937] text-center" style={{ borderLeft: "1px solid #E8F4F0" }}>{row.lokam}</div>
                <div className="p-4 font-sans text-sm text-[#6B7280] text-center" style={{ borderLeft: "1px solid #E8F4F0" }}>{row.stella}</div>
              </div>
            ))}
          </div>
          <p className="font-sans text-xs text-[#8AADA8] mt-3 text-center">STELLA data sourced from public product pages. Lokam data from live deployments.</p>
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
                  "CSI scores are below target",
                  "Service detractors are reaching the OEM survey uncontacted",
                  "Unsold showroom leads aren't being followed up",
                  "Your BDC can't cover all desklog volume",
                  "Google rating needs improvement",
                  "You need DMS-native automation with zero manual work",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: "#0CB4A7" }} />
                    <span className="font-sans text-sm text-[#4A6B68]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl p-6" style={{ background: "#FAFAFA", border: "1px solid #E5E7EB" }}>
              <p className="font-sans font-bold text-[#374151] mb-3" style={{ fontSize: 15 }}>Choose STELLA if:</p>
              <ul className="flex flex-col gap-2">
                {[
                  "Inbound calls go unanswered or to voicemail",
                  "After-hours call coverage is a gap",
                  "Service lane appointment booking needs automation",
                  "You want 24/7 inbound call handling",
                  "Call routing and analytics are priorities",
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
