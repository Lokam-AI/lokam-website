import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CaseStudiesFilter from "../components/CaseStudiesFilter";

export const metadata: Metadata = {
  title: "Dealer Case Studies | Lokam Voice AI Results",
  description:
    "Real dealerships, real revenue. See how 200+ dealers use Lokam to recover revenue, protect CSI scores, and close more deals.",
  alternates: { canonical: "https://lokam-website.vercel.app/case-studies" },
  openGraph: {
    title: "Dealer Case Studies | Lokam Voice AI Results",
    description:
      "Real dealerships, real revenue. See how 200+ dealers use Lokam to recover revenue, protect CSI scores, and close more deals.",
    url: "https://lokam-website.vercel.app/case-studies",
    type: "website",
    siteName: "Lokam",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dealer Case Studies | Lokam Voice AI Results",
    description:
      "Real dealerships, real revenue. See how 200+ dealers use Lokam.",
  },
};

const heroStats = [
  { value: "200+",   label: "Dealers served" },
  { value: "$2.4M+", label: "Revenue recovered" },
  { value: "89%+",   label: "Avg. contact rate" },
];

const featuredStudy = {
  title: "How Metro Toyota Added $84,000/Month Using Lokam's AI CSI Follow-Up",
  excerpt:
    "Within 90 days of deployment, Metro Toyota recovered more than $84k in monthly revenue from improved CSI outcomes, Google review lifts, and repeat service visits.",
  date: "Jan 2026",
  readTime: "5 min read",
  href: "/case-studies/metro-toyota",
  stats: [
    { value: "91%",   label: "Contact Rate",           sub: "vs 28% industry avg" },
    { value: "$84k",  label: "Revenue/Month",           sub: "recovered" },
    { value: "38",    label: "Customers Saved (Mo. 1)", sub: "at-risk" },
    { value: "4.8★",  label: "Google Rating",           sub: "up from 4.0" },
  ],
};

export default function CaseStudiesPage() {
  return (
    <>
      <Nav />
      <main style={{ background: "linear-gradient(to bottom right, #ffffff 80%, rgba(0, 211, 189, 0.3) 100%)" }}>

        {/* ── Hero ── */}
        <section className="pt-16 pb-12 text-center px-4">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 font-sans text-xs font-semibold tracking-widest uppercase"
            style={{ background: "#E0F7F4", color: "#0C8074" }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            Case Studies
          </div>

          <h1
            className="font-display font-bold mx-auto"
            style={{
              fontSize: "clamp(28px, 4.5vw, 56px)",
              lineHeight: "1.08",
              letterSpacing: "-1.5px",
              color: "#0D1B2A",
              maxWidth: 680,
            }}
          >
            Real Dealers.{" "}
            <span style={{ display: "inline", backgroundImage: "linear-gradient(to right, #00988B, #00D3BD)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", color: "transparent" }}>
              Real Revenue.
            </span>
          </h1>

          <p className="font-sans text-base md:text-lg text-[#4A6B68] mt-4 mx-auto" style={{ maxWidth: 520 }}>
            Measurable results from dealerships that replaced manual follow-up with Lokam's AI — across service, sales, and dealer groups.
          </p>

          {/* Hero stats */}
          <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg mx-auto">
            {heroStats.map((s) => (
              <div key={s.label} className="text-center">
                <p
                  className="font-display font-bold leading-none"
                  style={{ fontSize: "clamp(28px, 4vw, 44px)", color: "#00968B" }}
                >
                  {s.value}
                </p>
                <p className="font-sans text-sm text-[#4A6B68] mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="max-w-[1200px] mx-auto px-4 md:px-8 pb-20">

          {/* ── Featured Study ── */}
          <div
            className="rounded-3xl p-5 sm:p-7 md:p-10 mb-10"
            style={{ background: "linear-gradient(to bottom right, #00988B, #00D3BD)" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 lg:gap-12">
              <div className="flex flex-col justify-between gap-6 min-w-0">
                <div>
                  <div className="flex items-center gap-2 mb-5">
                    <span
                      className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full font-sans"
                      style={{ background: "#0CB4A7", color: "#fff" }}
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      Featured
                    </span>
                    <span
                      className="inline-block text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full font-sans"
                      style={{ background: "rgba(255,255,255,0.2)", color: "#fff" }}
                    >
                      Case Study
                    </span>
                  </div>
                  <h2
                    className="font-sans font-semibold text-white leading-tight"
                    style={{ fontSize: "clamp(20px, 2.8vw, 32px)", letterSpacing: "-0.5px" }}
                  >
                    {featuredStudy.title}
                  </h2>
                  <p className="font-sans text-sm leading-6 mt-3" style={{ color: "rgba(255,255,255,0.75)" }}>
                    {featuredStudy.excerpt}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href={featuredStudy.href}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-sans font-semibold text-sm whitespace-nowrap"
                    style={{ background: "#fff", color: "#0A3530" }}
                  >
                    Read Case Study →
                  </Link>
                  <span className="font-sans text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {featuredStudy.date} · {featuredStudy.readTime}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {featuredStudy.stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl p-4 flex flex-col gap-1"
                    style={{ background: "#49D2C2", border: "0.5px solid rgba(255,255,255,0.6)" }}
                  >
                    <span className="font-sans font-bold text-white" style={{ fontSize: "clamp(20px, 5vw, 30px)" }}>
                      {s.value}
                    </span>
                    <span className="font-sans text-xs leading-4 text-white font-medium">{s.label}</span>
                    <span className="font-sans text-xs leading-4" style={{ color: "rgba(255,255,255,0.7)" }}>{s.sub}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Filter + Grid (client) ── */}
          <CaseStudiesFilter />

          {/* ── Pagination ── */}
          <div className="overflow-x-auto mt-10 mb-16">
            <div className="flex flex-nowrap items-center justify-center gap-2">
              <button
                className="flex items-center justify-center rounded-lg w-9 h-9 transition-colors"
                style={{ border: "1px solid #C8E8E0", background: "#fff", color: "#4A6B68" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              {[1, 2, 3, 4].map((page) => (
                <button
                  key={page}
                  className="flex items-center justify-center rounded-lg w-9 h-9 font-sans font-medium text-sm transition-colors"
                  style={
                    page === 1
                      ? { background: "#009589", color: "#fff", border: "1px solid #009589" }
                      : { background: "#fff", color: "#4A6B68", border: "1px solid #C8E8E0" }
                  }
                >
                  {page}
                </button>
              ))}
              <button
                className="flex items-center justify-center rounded-lg w-9 h-9 transition-colors"
                style={{ border: "1px solid #C8E8E0", background: "#fff", color: "#4A6B68" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          {/* ── Bottom CTA ── */}
          <div
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 rounded-2xl bg-white px-5 sm:px-8 py-6 mb-12"
            style={{ marginTop: "34px", border: "1px solid #C8E8E0", boxShadow: "0 2px 16px rgba(12,176,162,0.07)" }}
          >
            <div className="flex flex-col gap-3">
              <h2
                className="font-sans font-bold text-[#0A2E2B]"
                style={{ fontSize: "clamp(18px, 2.5vw, 24px)", letterSpacing: "-0.4px" }}
              >
                Ready to write your own case study?
              </h2>
              <p className="font-sans text-sm text-[#4A6B68]" style={{ maxWidth: 440 }}>
                Join 200+ dealerships already using Lokam to recover revenue, protect CSI, and close more deals — with zero added headcount.
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-1">
                {["Plans for every use case", "Built for dealerships", "Book a demo"].map((item) => (
                  <span key={item} className="inline-flex items-center gap-1.5 font-sans text-xs text-[#0C8074]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0CB4A7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <a
              href="https://calendly.com/saleeq-lokam/30-minutes-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-sans font-semibold text-sm text-white whitespace-nowrap transition-all duration-200 hover:scale-[1.03] hover:brightness-110 active:scale-[0.98]"
              style={{ background: "#009589", color: "#fff", boxShadow: "0 8px 24px #D1FBF4" }}
            >
              Deploy Lokam Today →
            </a>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
