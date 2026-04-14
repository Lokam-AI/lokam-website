"use client";
import { useState } from "react";
import Image from "next/image";

function ROICard({
  title,
  image,
  imageAlt,
  inputLabel,
  inputPlaceholder,
  buttonText,
  note,
}: {
  title: string;
  image: string;
  imageAlt: string;
  inputLabel: string;
  inputPlaceholder: string;
  buttonText: string;
  note: string;
}) {
  const [value, setValue] = useState("");

  return (
    <div
      className="bg-white rounded-2xl flex flex-col overflow-hidden"
      style={{ boxShadow: "1px 4px 14px rgba(17,112,98,0.25)", border: "1px solid #b2ead8" }}
    >
      {/* Title */}
      <h3
        className="font-sans font-semibold text-center py-4 px-6"
        style={{ fontSize: 18, color: "#0a3d3d" }}
      >
        {title}
      </h3>

      {/* Image */}
      <div className="w-full overflow-hidden aspect-[16/7] lg:aspect-auto lg:h-[260px]">
        <Image src={image} alt={imageAlt} width={600} height={260} className="w-full h-full object-cover" />
      </div>

      {/* Body */}
      <div className="flex flex-col gap-4 px-6 py-5">
        <div>
          <p className="font-sans text-xs mb-2" style={{ color: "#444" }}>
            {inputLabel}
          </p>
          <div className="flex gap-2">
            <input
              type="number"
              placeholder={inputPlaceholder}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="flex-1 border rounded-lg px-3 py-2 text-sm outline-none font-sans"
              style={{ borderColor: "#d1d5db", color: "#111" }}
            />
            <button
              className="flex items-center justify-center gap-1.5 text-white text-sm font-medium whitespace-nowrap font-sans flex-shrink-0 px-4 h-[51px] sm:w-[189px]"
              style={{ backgroundColor: "#307D93", borderRadius: 8.08 }}
            >
              {buttonText}
              <span style={{ fontSize: 12 }}>›</span>
            </button>
          </div>
        </div>

        <p className="font-sans text-xs" style={{ color: "#9ca3af" }}>
          {note}
        </p>
      </div>
    </div>
  );
}

export default function ROI() {
  return (
    <section id="roi" className="bg-white pt-12 pb-20">
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Heading */}
        <h2
          className="font-sans font-medium text-center mb-12"
          style={{ color: "#095857", fontSize: 50, lineHeight: "56px", letterSpacing: "-1px" }}
        >
          Calculate your ROI
        </h2>

        {/* Outer bordered container */}
        <div
          className="rounded-3xl grid grid-cols-1 lg:grid-cols-2 gap-6"
          style={{
            border: "1px solid #b2d8e4",
            boxShadow: "0 16px 60px rgba(17,112,98,0.55), 0 4px 24px rgba(0,0,0,0.22), 0 1px 4px rgba(0,0,0,0.15)",
            padding: "35px 35px 35px",
          }}
        >
          <ROICard
            title="ROI Calculator - Sales"
            image="/assets/sales.png"
            imageAlt="ROI Calculator Sales"

            inputLabel="Unsold desktops per month"
            inputPlaceholder="e.g. 120"
            buttonText="Calculate Sales ROI"
            note="Based on conservative 15% close rate on follow-up and $2,800 average front/back gross."
          />
          <ROICard
            title="ROI Calculator - Service"
            image="/assets/service.png"
            imageAlt="ROI Calculator Service"

            inputLabel="Repair Orders (ROs) per month"
            inputPlaceholder="e.g. 120"
            buttonText="Calculate Service ROI"
            note="Based on industry average 8% at-risk rate and $450 average RO."
          />
        </div>
      </div>
    </section>
  );
}
