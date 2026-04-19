"use client";
import { useState } from "react";
import Image from "next/image";
import ROICalculatorModal from "./ROICalculatorModal";

function ROICard({
  title,
  image,
  imageAlt,
  inputLabel,
  inputPlaceholder,
  buttonText,
  note,
  onCalculate,
  onValueChange,
}: {
  title: string;
  image: string;
  imageAlt: string;
  inputLabel: string;
  inputPlaceholder: string;
  buttonText: string;
  note: string;
  onCalculate?: () => void;
  onValueChange?: (v: number) => void;
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
      <div className="w-full overflow-hidden aspect-video lg:aspect-auto lg:h-[260px]">
        <Image src={image} alt={imageAlt} width={600} height={260} sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
      </div>

      {/* Body */}
      <div className="flex flex-col gap-4 px-6 py-5">
        <div>
          <p className="font-sans text-xs mb-2" style={{ color: "#444" }}>
            {inputLabel}
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="number"
              placeholder={inputPlaceholder}
              value={value}
              onChange={(e) => { setValue(e.target.value); onValueChange?.(parseInt(e.target.value) || 0); }}
              className="flex-1 border rounded-lg px-3 py-2 text-sm outline-none font-sans"
              style={{ borderColor: "#d1d5db", color: "#111" }}
            />
            <button
              onClick={onCalculate}
              className="flex items-center justify-center gap-1.5 text-white text-sm font-medium whitespace-nowrap font-sans px-4 h-[51px] w-full sm:w-[189px]"
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
  const [calcOpen, setCalcOpen] = useState(false);
  const [salesUps, setSalesUps] = useState(0);

  return (
    <section id="roi" className="bg-white pt-12 pb-20">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        {/* Heading */}
        <h2
          className="font-sans font-medium text-center mb-12"
          style={{ color: "#095857", fontSize: "clamp(26px, 4vw, 50px)", lineHeight: "1.12", letterSpacing: "-1px" }}
        >
          Calculate your ROI
        </h2>

        {/* Outer bordered container */}
        <div
          className="rounded-3xl grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 md:p-[35px]"
          style={{
            border: "1px solid #b2d8e4",
            boxShadow: "0 16px 60px rgba(17,112,98,0.55), 0 4px 24px rgba(0,0,0,0.22), 0 1px 4px rgba(0,0,0,0.15)",
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
            onValueChange={(v) => setSalesUps(v)}
            onCalculate={() => setCalcOpen(true)}
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
      <ROICalculatorModal open={calcOpen} onClose={() => setCalcOpen(false)} initialUps={salesUps} />
    </section>
  );
}
