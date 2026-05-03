"use client";
import { useState } from "react";

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
    href: "/case-studies/riverside-honda",
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
    href: "/case-studies/valley-ford",
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
    href: "/case-studies/sunrise-ford",
  },
  {
    metric: "$31k ROI",
    metricLabel: "In first 90 days",
    category: "SALES & BDC",
    dealership: "Capital Auto Group",
    location: "Atlanta, GA",
    miniStats: [
      { value: "3×", label: "Dealerships rolled out" },
      { value: "0", label: "BDC headcount added" },
    ],
    excerpt: "A multi-rooftop rollout across 3 dealerships delivered measurable, compounding ROI within the first quarter, with zero additional BDC headcount added at any dealership.",
    href: "/case-studies/capital-auto-group",
  },
  {
    metric: "+12 pts",
    metricLabel: "NPS increase",
    category: "SERVICE & CSI",
    dealership: "Pacific Subaru",
    location: "Portland, OR",
    miniStats: [
      { value: "54→66", label: "NPS score" },
      { value: "#1", label: "In 12-dealership group" },
    ],
    excerpt: "Structured post-service follow-up with branded caller ID drove Pacific Subaru's NPS from 54 to 66, the highest across their entire 12-dealership group.",
    href: "/case-studies/pacific-subaru",
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
    href: "/case-studies/world-auto-group",
  },
];

const CATEGORIES = ["All", "Service & CSI", "Sales & BDC", "AI Automations", "Multi-Store"];
const MULTI_STORE_DEALERS = ["Capital Auto Group", "World Auto Group"];

const CHIP_STYLES: Record<string, { bg: string; color: string }> = {
  "SERVICE & CSI":   { bg: "#D6F5EF", color: "#0C8074" },
  "SALES & BDC":     { bg: "#D6EBF5", color: "#1B6A8A" },
  "SALES FOLLOW-UP": { bg: "#D6EBF5", color: "#1B6A8A" },
  "AI AUTOMATIONS":  { bg: "#E8E4FA", color: "#5A4FC0" },
  "MULTI-STORE":     { bg: "#FFF0D4", color: "#9A6200" },
};

function matchesCategory(study: Study, category: string): boolean {
  if (category === "All") return true;
  if (category === "Service & CSI") return study.category === "SERVICE & CSI";
  if (category === "Sales & BDC") return study.category === "SALES & BDC" || study.category === "SALES FOLLOW-UP";
  if (category === "Multi-Store") return MULTI_STORE_DEALERS.includes(study.dealership);
  return false;
}

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
      <div className="h-2 w-full" style={{ background: "linear-gradient(to right, #00988B, #00D3BD)" }} />
      <div className="flex flex-col gap-4 p-5">
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
              <path d="M10 6h4" /><path d="M10 10h4" /><path d="M10 14h4" /><path d="M10 18h4" />
            </svg>
          </div>
        </div>
        <div>
          <p className="font-sans font-bold text-[#0A2E2B]" style={{ fontSize: 18 }}>{study.dealership}</p>
          <p className="font-sans text-sm text-[#8AADA8] mt-0.5">{study.location}</p>
        </div>
        <div>
          <p
            className="font-display leading-none"
            style={{ fontSize: "clamp(28px, 4vw, 38px)", color: "#007970", fontWeight: 950 }}
          >
            {study.metric}
          </p>
          <p className="font-sans text-sm text-[#8AADA8] mt-1">{study.metricLabel}</p>
        </div>
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
        <p className="font-sans text-sm leading-6 text-[#4A6B68] flex-1">{study.excerpt}</p>
        <div className="border-t border-[#E2F0EE] pt-4">
          <a
            href={study.href}
            className="inline-flex items-center gap-1 font-sans font-semibold text-sm"
            style={{ color: "#0CB4A7" }}
          >
            Read case study <span>›</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default function CaseStudiesFilter() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredStudies = studies.filter((s) => matchesCategory(s, activeCategory));

  return (
    <>
      {/* Category Tabs */}
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

      {/* Case Study Grid */}
      {filteredStudies.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredStudies.map((study) => (
            <StudyCard key={study.dealership} study={study} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 gap-3">
          <p className="font-sans font-semibold text-[#0A2E2B]" style={{ fontSize: 16 }}>
            More case studies coming soon.
          </p>
          <p className="font-sans text-sm text-[#8AADA8]">
            Check back or{" "}
            <a href="https://calendly.com/saleeq-lokam/30-minutes-meeting" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#0CB4A7" }}>
              book a demo
            </a>{" "}
            to see Lokam in action.
          </p>
        </div>
      )}
    </>
  );
}
