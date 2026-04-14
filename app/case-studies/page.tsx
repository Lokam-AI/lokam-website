"use client";
import { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

// ─── Data ────────────────────────────────────────────────────────────────────

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
  href: "#",
  stats: [
    { value: "91%",   label: "Contact Rate",          sub: "vs 28% industry avg" },
    { value: "$84k",  label: "Revenue/Month",          sub: "recovered" },
    { value: "38",    label: "Customers Saved (Mo. 1)", sub: "at-risk" },
    { value: "4.8★",  label: "Google Rating",          sub: "up from 4.0" },
  ],
};

type Study = {
  metric: string;
  metricLabel: string;
  category: string;
  dealership: string;
  location: string;
  miniStats: [{ value: string; label: string }, { value: string; label: string }];
  excerpt: string;
  href: string;
};

const studies: Study[] = [
  {
    metric: "+$17k/mo",
    metricLabel: "Recovered gross profit",
    category: "SERVICE & CSI",
    dealership: "Riverside Honda",
    location: "Riverside, CA",
    miniStats: [
      { value: "94%", label: "Contact rate" },
      { value: "+11 pts", label: "CSI score lift" },
    ],
    excerpt: "Riverside Honda's service team was missing at-risk customers daily. Lokam's AI follow-up caught detractors within 24 hours and turned them into repeat buyers.",
    href: "#",
  },
  {
    metric: "$4 CSI",
    metricLabel: "Cost per survey contact",
    category: "SERVICE & CSI",
    dealership: "Valley Ford",
    location: "Phoenix, AZ",
    miniStats: [
      { value: "90%", label: "Cost reduction" },
      { value: "2×", label: "Survey response rate" },
    ],
    excerpt: "Replacing a manual BDC process with Lokam cut Valley Ford's cost-per-CSI-contact from $40 to $4 while doubling survey response rates in 60 days.",
    href: "#",
  },
  {
    metric: "+$61k/mo",
    metricLabel: "Recovered gross profit",
    category: "SALES FOLLOW-UP",
    dealership: "Sunrise Ford",
    location: "Dallas, TX",
    miniStats: [
      { value: "31", label: "Walk-outs closed" },
      { value: "68%", label: "Contact rate" },
    ],
    excerpt: "Sunrise Ford's sales team was losing 60–70 unsold showroom visitors per month to competitors. Lokam's AI follow-up turned 31 of them into sold deals in the first 30 days.",
    href: "#",
  },
  {
    metric: "$31k ROI",
    metricLabel: "In first 90 days",
    category: "SALES & BDC",
    dealership: "Capital Auto Group",
    location: "Atlanta, GA",
    miniStats: [
      { value: "3×", label: "Stores rolled out" },
      { value: "0", label: "BDC headcount added" },
    ],
    excerpt: "A multi-rooftop rollout across 3 stores delivered measurable ROI within the first quarter — with zero additional BDC headcount added.",
    href: "#",
  },
  {
    metric: "+12 pts",
    metricLabel: "NPS increase",
    category: "SERVICE & CSI",
    dealership: "Pacific Subaru",
    location: "Portland, OR",
    miniStats: [
      { value: "54→66", label: "NPS score" },
      { value: "#1", label: "In 12-store group" },
    ],
    excerpt: "Structured post-service follow-up with branded caller ID drove Pacific Subaru's NPS from 54 to 66 — the highest across their entire 12-store group.",
    href: "#",
  },
  {
    metric: "$180k/mo",
    metricLabel: "Revenue recovered",
    category: "SALES & BDC",
    dealership: "World Auto Group",
    location: "Chicago, IL",
    miniStats: [
      { value: "4", label: "Rooftops" },
      { value: "15–20", label: "Extra cars/mo" },
    ],
    excerpt: "Scott Falcone scaled Lokam across 4 rooftops, turning unsold desklog and service detractors into a predictable $180k monthly revenue engine.",
    href: "#",
  },
];

const CATEGORIES = ["All", "Service & CSI", "Sales & BDC", "AI Automations", "Multi-Store"];

const CHIP_STYLES: Record<string, { bg: string; color: string }> = {
  "SERVICE & CSI":   { bg: "#D6F5EF", color: "#0C8074" },
  "SALES & BDC":     { bg: "#D6EBF5", color: "#1B6A8A" },
  "SALES FOLLOW-UP": { bg: "#D6EBF5", color: "#1B6A8A" },
  "AI AUTOMATIONS":  { bg: "#E8E4FA", color: "#5A4FC0" },
  "MULTI-STORE":     { bg: "#FFF0D4", color: "#9A6200" },
};

// ─── Components ──────────────────────────────────────────────────────────────

function CategoryChip({ label }: { label: string }) {
  const s = CHIP_STYLES[label] ?? { bg: "#E8F5F2", color: "#0C8074" };
  return (
    <span
      className="inline-block text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full font-sans"
      style={{ background: s.bg, color: s.color }}
    >
      {label}
    </span>
  );
}

function StudyCard({ study }: { study: Study }) {
  return (
    <article
      className="flex flex-col rounded-2xl bg-white overflow-hidden"
      style={{ border: "1px solid #C8E8E0", boxShadow: "0 2px 16px rgba(12,176,162,0.08)" }}
    >
      {/* Top accent bar */}
      <div className="h-2 w-full" style={{ background: "linear-gradient(to right, #00988B, #00D3BD)" }} />

      <div className="flex flex-col gap-4 p-5">
      {/* Row 1: chip + icon */}
      <div className="flex items-center justify-between">
        <CategoryChip label={study.category} />
        <div
          className="flex items-center justify-center rounded-xl flex-shrink-0"
          style={{ width: 36, height: 36, background: "#F0FBF9", border: "1px solid #C8E8E0" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0CB4A7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
            <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
            <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
            <path d="M10 6h4" />
            <path d="M10 10h4" />
            <path d="M10 14h4" />
            <path d="M10 18h4" />
          </svg>
        </div>
      </div>

      {/* Row 2: dealership + location */}
      <div>
        <p className="font-sans font-bold text-[#0A2E2B]" style={{ fontSize: 18 }}>{study.dealership}</p>
        <p className="font-sans text-sm text-[#8AADA8] mt-0.5">{study.location}</p>
      </div>

      {/* Row 3: big metric */}
      <div>
        <p
          className="font-display leading-none"
          style={{ fontSize: "clamp(28px, 4vw, 38px)", color: "#007970", fontWeight: 950 }}
        >
          {study.metric}
        </p>
        <p className="font-sans text-sm text-[#8AADA8] mt-1">{study.metricLabel}</p>
      </div>

      {/* Row 4: two mini stat boxes */}
      <div className="grid grid-cols-2 gap-2">
        {study.miniStats.map((ms) => (
          <div
            key={ms.label}
            className="rounded-xl px-3 py-2.5 flex flex-col gap-0.5"
            style={{ background: "#F4FBF9", border: "1px solid #D6EFE9" }}
          >
            <p className="font-sans font-semibold text-[#0A2E2B]" style={{ fontSize: 16 }}>{ms.value}</p>
            <p className="font-sans text-xs text-[#8AADA8]">{ms.label}</p>
          </div>
        ))}
      </div>

      {/* Row 5: excerpt */}
      <p className="font-sans text-sm leading-6 text-[#4A6B68] flex-1">
        {study.excerpt}
      </p>

      {/* Row 6: read link */}
      <a
        href={study.href}
        className="inline-flex items-center gap-1 font-sans font-semibold text-sm"
        style={{ color: "#0CB4A7" }}
      >
        Read case study <span>›</span>
      </a>
      </div>
    </article>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function CaseStudiesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <>
      <Nav />
      <main className="bg-white">

        {/* ── Hero ── */}
        <section className="pt-16 pb-12 text-center px-4">
          {/* Badge */}
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
            Measurable results from dealerships that replaced manual follow-up with Lokam's AI — across service, sales, and multi-store groups.
          </p>

          {/* Hero stats */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-12">
            {heroStats.map((s, i) => (
              <div key={s.label} className="flex items-center gap-6">
                <div className="text-center">
                  <p
                    className="font-display font-bold leading-none"
                    style={{ fontSize: "clamp(28px, 4vw, 44px)", color: "#0CB4A7" }}
                  >
                    {s.value}
                  </p>
                  <p className="font-sans text-sm text-[#4A6B68] mt-1">{s.label}</p>
                </div>
                {i < heroStats.length - 1 && (
                  <div className="hidden sm:block w-px h-10 bg-[#C8E8E0]" />
                )}
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
              {/* Left */}
              <div className="flex flex-col justify-between gap-6">
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
                  <a
                    href={featuredStudy.href}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-sans font-semibold text-sm whitespace-nowrap"
                    style={{ background: "#fff", color: "#0A3530" }}
                  >
                    Read Case Study →
                  </a>
                  <span className="font-sans text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {featuredStudy.date} · {featuredStudy.readTime}
                  </span>
                </div>
              </div>

              {/* Stats — 2×2 grid */}
              <div className="grid grid-cols-2 gap-3">
                {featuredStudy.stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl p-4 flex flex-col gap-1"
                    style={{ background: "#49D2C2" }}
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

          {/* ── Category Tabs ── */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 mb-8">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="flex-shrink-0 px-4 py-2 rounded-full font-sans font-medium text-sm transition-colors"
                style={
                  activeCategory === cat
                    ? { background: "#0A3530", color: "#fff" }
                    : { background: "#F0F9F7", color: "#4A6B68", border: "1px solid #C8E8E0" }
                }
              >
                {cat}
              </button>
            ))}
          </div>

          {/* ── Case Study Grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {studies.map((study) => (
              <StudyCard key={study.dealership} study={study} />
            ))}
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <section
          className="py-16 px-4"
          style={{ background: "linear-gradient(to bottom right, #00988B, #00D3BD)" }}
        >
          <div className="max-w-[680px] mx-auto text-center">
            <h2
              className="font-display font-bold text-white mb-4"
              style={{ fontSize: "clamp(24px, 3.5vw, 42px)", letterSpacing: "-1px", lineHeight: "1.1" }}
            >
              Ready to write your own case study?
            </h2>
            <p className="font-sans text-base text-white mb-8" style={{ opacity: 0.8 }}>
              Join 200+ dealerships already using Lokam to recover lost revenue from service and sales follow-up.
            </p>
            <a
              href="https://calendly.com/saleeq-lokam/30-minutes-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-sans font-semibold text-sm"
              style={{ background: "#fff", color: "#0A3530" }}
            >
              Book a Free Demo →
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
