import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ROI from "../components/ROI";
import CalendlyButton from "../components/CalendlyButton";

export const metadata: Metadata = {
  title: "Dealership AI ROI Calculator - See Your Revenue Estimate",
  description:
    "Calculate how much revenue your dealership can recover with AI-powered follow-up. Enter your monthly repair orders or unsold desklogs to see your ROI estimate.",
  alternates: { canonical: "https://www.lokam.ai/roi-calculator" },
  openGraph: {
    title: "Dealership AI ROI Calculator - See Your Revenue Estimate",
    description:
      "Calculate how much revenue your dealership can recover with AI-powered follow-up. Enter your monthly repair orders or unsold desklogs to see your ROI estimate.",
    url: "https://www.lokam.ai/roi-calculator",
    type: "website",
    siteName: "Lokam",
    images: [
      {
        url: "https://www.lokam.ai/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dealership AI ROI Calculator | Lokam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dealership AI ROI Calculator - See Your Revenue Estimate",
    description:
      "Calculate the revenue your dealership can recover with AI follow-up. Enter your monthly repair orders or unsold desklogs and see your estimate.",
    images: ["https://www.lokam.ai/opengraph-image"],
  },
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "@id": "https://www.lokam.ai/roi-calculator#app",
  name: "Dealership AI ROI Calculator",
  url: "https://www.lokam.ai/roi-calculator",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Calculator",
  operatingSystem: "Web",
  description:
    "Calculate the revenue your dealership can recover with AI-powered follow-up. Enter your monthly repair orders or unsold desklogs to see your ROI estimate.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free to use",
  },
  provider: {
    "@type": "Organization",
    "@id": "https://www.lokam.ai/#organization",
    name: "Lokam",
    url: "https://www.lokam.ai",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.lokam.ai" },
    { "@type": "ListItem", position: 2, name: "ROI Calculator", item: "https://www.lokam.ai/roi-calculator" },
  ],
};

const methodology = [
  {
    label: "Sales ROI",
    points: [
      "Based on your monthly unsold desklogs",
      "15% industry-average manual follow-up rate - Lokam reaches every one",
      "45% close rate on re-engaged leads",
      "$2,800 average front/back gross per deal",
    ],
  },
  {
    label: "Service ROI",
    points: [
      "Based on your monthly repair orders",
      "8% industry-average at-risk customer rate",
      "$2,500 average customer lifetime value",
      "Lokam contacts every RO within 24 hours - vs 30% with manual BDC",
    ],
  },
];

export default function ROICalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Nav />
      <main style={{ background: "linear-gradient(to bottom, rgba(25,171,141,0.06) 0%, #ffffff 320px)" }}>

        {/* ── Hero ── */}
        <section className="max-w-[860px] mx-auto px-4 md:px-8 pt-16 pb-10 text-center">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 font-sans text-xs font-semibold tracking-widest uppercase"
            style={{ background: "#E0F7F4", color: "#0C8074" }}
          >
            ROI Calculator
          </div>
          <h1
            className="font-display font-bold text-[#0D1B2A] mb-5"
            style={{ fontSize: "clamp(28px, 4.5vw, 52px)", lineHeight: "1.08", letterSpacing: "-1.5px" }}
          >
            How much revenue is your dealership leaving on the table?
          </h1>
          <p className="font-sans text-base md:text-lg leading-8 text-[#4A6B68] mx-auto" style={{ maxWidth: 620 }}>
            Enter your monthly repair orders or unsold desklogs. We'll show you exactly what Lokam can recover - based on your real numbers, not industry averages.
          </p>
        </section>

        {/* ── Calculator ── */}
        <ROI />

        {/* ── Methodology ── */}
        <section className="max-w-[1100px] mx-auto px-4 md:px-8 pb-16">
          <h2
            className="font-sans font-bold text-[#0A2E2B] mb-2"
            style={{ fontSize: "clamp(18px, 2.2vw, 24px)", letterSpacing: "-0.4px" }}
          >
            How the estimate is calculated
          </h2>
          <p className="font-sans text-sm text-[#4A6B68] mb-8">
            These are conservative assumptions based on NADA industry benchmarks and Lokam's live dealer data.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {methodology.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl p-6"
                style={{ background: "#fff", border: "1px solid #C8E8E0", boxShadow: "0 2px 12px rgba(12,176,162,0.06)" }}
              >
                <p className="font-sans font-semibold text-[#0A2E2B] mb-4" style={{ fontSize: 15 }}>
                  {m.label}
                </p>
                <ul className="flex flex-col gap-3">
                  {m.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5">
                      <span
                        className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                        style={{ background: "#0CB4A7" }}
                      />
                      <span className="font-sans text-sm leading-6 text-[#4A6B68]">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── Results from real dealers ── */}
        <section className="max-w-[1100px] mx-auto px-4 md:px-8 pb-20">
          <h2
            className="font-sans font-bold text-[#0A2E2B] mb-8"
            style={{ fontSize: "clamp(18px, 2.2vw, 24px)", letterSpacing: "-0.4px" }}
          >
            Real results from live dealers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { stat: "$410K", label: "lifetime revenue recovered", dealer: "World Hyundai Service", href: "/case-studies/world-hyundai" },
              { stat: "+20 pts", label: "CSI score increase", dealer: "World Hyundai Service", href: "/case-studies/world-hyundai" },
              { stat: "91%", label: "contact rate achieved", dealer: "World Kia Service", href: "/case-studies/world-kia" },
            ].map((r) => (
              <a
                key={r.stat}
                href={r.href}
                className="rounded-2xl p-6 flex flex-col gap-1 no-underline group"
                style={{ background: "#fff", border: "1px solid #C8E8E0", boxShadow: "0 2px 12px rgba(12,176,162,0.06)" }}
              >
                <span
                  className="font-display font-bold"
                  style={{ fontSize: "clamp(28px, 3.5vw, 40px)", color: "#00796B", lineHeight: 1 }}
                >
                  {r.stat}
                </span>
                <span className="font-sans text-sm font-semibold text-[#0A2E2B]">{r.label}</span>
                <span className="font-sans text-xs mt-1 group-hover:underline" style={{ color: "#0CB4A7" }}>
                  {r.dealer} →
                </span>
              </a>
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
                Ready to see a custom model built for your rooftop?
              </p>
              <p className="font-sans text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                We'll build a full ROI breakdown before you commit to anything.
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
