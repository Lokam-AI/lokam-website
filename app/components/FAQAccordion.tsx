"use client";
import { useState } from "react";

const faqs = [
  {
    q: "What DMS and CRM systems does Lokam integrate with?",
    a: "Lokam works with CDK Global, Reynolds & Reynolds, DealerSocket, VinSolutions, and TEKION. If you use a different system, contact us — we add new integrations regularly.",
  },
  {
    q: "Does Lokam replace my BDC team?",
    a: "No. Lokam handles the high-volume, repetitive outreach (CSI follow-up, unsold showroom follow-up) so your BDC team can focus on warm escalations and inbound opportunities. Most dealers see BDC productivity increase, not headcount decrease.",
  },
  {
    q: "How does the AI know when to escalate to a human?",
    a: "Lokam's AI detects dissatisfaction signals (negative sentiment, complaints, specific objections) in real time and instantly notifies your service manager or sales team with the full call transcript and context — so they can step in with everything they need to resolve it.",
  },
  {
    q: "Will customers know they're talking to an AI?",
    a: "Lokam calls with your dealership's branded caller ID and is transparent when asked. Most customers simply experience it as a fast, attentive follow-up call. Our contact rates average 89%+ because the calls feel relevant and timely, not robotic.",
  },
  {
    q: "How does Lokam improve CSI scores?",
    a: "By reaching every customer within 24 hours of service — something manual BDC teams can rarely achieve — Lokam catches detractors before they submit a negative survey or leave a bad review. Escalations go directly to your service manager with full context, so issues get resolved fast.",
  },
  {
    q: "How does the Google review generation work?",
    a: "When Lokam identifies a satisfied customer (promoter) during the CSI call, it automatically sends them an SMS with your Google review link. This has helped dealerships move from 4.0 to 4.8★ ratings within 90 days.",
  },
  {
    q: "What's the pricing model?",
    a: "We offer different plans tailored to each use case. Book a demo or contact us — we'll walk you through the right plan and build a custom ROI model for your dealership before you commit to anything.",
  },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="flex flex-col divide-y divide-[#E2F0EE]" style={{ border: "1px solid #E2F0EE", borderRadius: 16, overflow: "hidden" }}>
      {faqs.map((faq, i) => (
        <div key={i} className="bg-white">
          <button
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="font-sans font-semibold text-[#0A2E2B]" style={{ fontSize: 15, lineHeight: "1.4" }}>
              {faq.q}
            </span>
            <span
              className="flex-shrink-0 flex items-center justify-center rounded-full transition-transform duration-200"
              style={{
                width: 28,
                height: 28,
                background: open === i ? "#0CB4A7" : "#F0FBF9",
                border: "1px solid #C8E8E0",
                transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
              }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 1v10M1 6h10" stroke={open === i ? "#fff" : "#0CB4A7"} strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </span>
          </button>
          <div className={`px-6 pb-5 overflow-hidden transition-all duration-200 ${open === i ? "block" : "hidden"}`}>
            <p className="font-sans text-sm leading-7" style={{ color: "#4A6B68" }}>
              {faq.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
