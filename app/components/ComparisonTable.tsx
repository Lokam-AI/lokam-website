"use client";
import { Check, X } from "lucide-react";
import SmoothAnchor from "./SmoothAnchor";

const rows = [
  {
    feature: "Contact rate",
    lokam: "94%+",
    bdc: "28–35%",
    lokamWins: true,
  },
  {
    feature: "Response time",
    lokam: "< 24 hours post-service",
    bdc: "2–5 business days",
    lokamWins: true,
  },
  {
    feature: "After-hours availability",
    lokam: "24 / 7 / 365",
    bdc: "Business hours only",
    lokamWins: true,
  },
  {
    feature: "Script compliance",
    lokam: "100% — every call",
    bdc: "Variable — human error",
    lokamWins: true,
  },
  {
    feature: "Google review automation",
    lokam: "Automatic SMS link to promoters",
    bdc: "Manual, often forgotten",
    lokamWins: true,
  },
  {
    feature: "Detractor escalation",
    lokam: "Instant — with full transcript",
    bdc: "Delayed — no context",
    lokamWins: true,
  },
  {
    feature: "Walk-out re-engagement",
    lokam: "Same-day AI outreach",
    bdc: "Rarely prioritised",
    lokamWins: true,
  },
  {
    feature: "Cost per contact",
    lokam: "Predictable flat fee",
    bdc: "$40–80 per rep per hour",
    lokamWins: true,
  },
];

export default function ComparisonTable() {
  return (
    <section id="comparison" className="py-24 bg-[--color-ash]">
      <div className="max-w-[1188px] mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase text-[--color-teal]">
            Why Lokam
          </span>
          <h2 className="mt-3 font-sans text-4xl lg:text-5xl font-800 text-[--color-slate] leading-tight">
            How Lokam Beats Manual BDC Outreach
          </h2>
          <p className="mt-4 text-[--color-slate-2]">
            A human BDC team can&apos;t be everywhere at once. Lokam can.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl" style={{ boxShadow: "var(--shadow-card)", border: "1px solid var(--color-ash-2)" }}>
        <div className="min-w-[600px]">
          {/* Table header */}
          <div className="grid grid-cols-[1fr_1fr_1fr] bg-[--color-ink]">
            <div className="px-6 py-4 text-xs font-semibold uppercase tracking-widest text-[--color-mist]">
              Feature
            </div>
            <div className="px-6 py-4 flex items-center gap-2">
              <span className="w-5 h-5 rounded-md bg-[--color-teal] flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1L13 4V10L7 13L1 10V4L7 1Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M7 4L10 5.5V8.5L7 10L4 8.5V5.5L7 4Z" fill="white"/>
                </svg>
              </span>
              <span className="text-sm font-bold text-white">Lokam AI</span>
            </div>
            <div className="px-6 py-4">
              <span className="text-sm font-semibold text-[--color-mist]">Manual BDC</span>
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={row.feature}
              className="grid grid-cols-[1fr_1fr_1fr] border-t border-[--color-ash-2] bg-white hover:bg-[--color-ash] transition-colors"
            >
              <div className="px-6 py-4 text-sm font-medium text-[--color-slate]">
                {row.feature}
              </div>
              <div className="px-6 py-4 flex items-center gap-2">
                <Check size={15} className="text-[--color-teal] flex-shrink-0" />
                <span className="text-sm text-[--color-slate] font-medium">{row.lokam}</span>
              </div>
              <div className="px-6 py-4 flex items-center gap-2">
                <X size={15} className="text-red-400 flex-shrink-0" />
                <span className="text-sm text-[--color-slate-3]">{row.bdc}</span>
              </div>
            </div>
          ))}

          {/* Footer CTA row */}
          <div className="bg-[--color-ink] px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 min-w-[600px]">
            <p className="text-sm text-[--color-mist]">
              Ready to see the difference for your dealership?
            </p>
            <SmoothAnchor
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[--color-teal] text-[--color-ink] font-semibold text-sm hover:bg-[--color-teal-dim] transition-colors whitespace-nowrap"
              style={{ boxShadow: "0 0 20px rgba(0,200,180,0.30)" }}
            >
              Book a Free Demo
            </SmoothAnchor>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
