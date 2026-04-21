"use client";
import React, { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, Download, Calendar } from "lucide-react";

interface CalcState {
  monthlyROs: number;
  defectRate: number;
  ltv: number;
}

function fmt(n: number) {
  return "$" + Math.round(n).toLocaleString();
}

function sliderBg(value: number, min: number, max: number) {
  const pct = ((value - min) / (max - min)) * 100;
  return `linear-gradient(to right, #05aa96 0%, #05aa96 ${pct}%, #e2e8e6 ${pct}%, #e2e8e6 100%)`;
}

export default function ServiceROICalculatorModal({
  open,
  onClose,
  initialROs = 0,
}: {
  open: boolean;
  onClose: () => void;
  initialROs?: number;
}) {
  const [inputs, setInputs] = useState<CalcState>({
    monthlyROs: initialROs,
    defectRate: 8,
    ltv: 2500,
  });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (open) setInputs((prev) => ({ ...prev, monthlyROs: initialROs }));
  }, [open, initialROs]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const set = useCallback(<K extends keyof CalcState>(key: K, val: CalcState[K]) => {
    setInputs((prev) => ({ ...prev, [key]: val }));
  }, []);

  function handlePrint() {
    window.print();
  }

  if (!open || typeof window === "undefined") return null;

  const { monthlyROs, defectRate, ltv } = inputs;
  const toolCost = monthlyROs > 600 ? 1500 : 1000;

  // Silent bleed
  const defectors = Math.round(monthlyROs * (defectRate / 100));
  const lostLTV = defectors * ltv;

  // With Lokam: 80% recovery
  const saved = Math.round(defectors * 0.8);
  const ltvSaved = saved * ltv;
  const grossProfit = ltvSaved * 0.5;
  const roi = toolCost > 0 ? grossProfit / toolCost : 0;
  const annualSaved = ltvSaved * 12;

  return createPortal(
    <div
      id="service-roi-print-target"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
      style={{ background: "rgba(1,22,30,0.85)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <style>{`
        @keyframes svcRoiPopIn { from { transform: scale(0.96); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .svc-roi-slider { -webkit-appearance: none; appearance: none; width: 100%; height: 6px; border-radius: 3px; outline: none; cursor: pointer; }
        .svc-roi-slider::-webkit-slider-thumb { -webkit-appearance: none; width: 20px; height: 20px; border-radius: 50%; background: #05aa96; border: 3px solid #fff; box-shadow: 0 2px 6px rgba(0,0,0,0.2); cursor: pointer; }
        .svc-roi-slider::-moz-range-thumb { width: 20px; height: 20px; border-radius: 50%; background: #05aa96; border: 3px solid #fff; box-shadow: 0 2px 6px rgba(0,0,0,0.2); cursor: pointer; }
        .svc-roi-input:focus { border-color: #05aa96 !important; box-shadow: 0 0 0 3px rgba(5,170,150,0.12); }
        @media print {
          body > *:not(#service-roi-print-target) { display: none !important; }
          #service-roi-print-target { position: static !important; background: none !important; padding: 0 !important; inset: auto !important; }
          #svc-roi-calculator-inner { position: static !important; width: 100% !important; height: auto !important; max-width: 100% !important; box-shadow: none !important; border-radius: 0 !important; overflow: visible !important; zoom: 0.72; }
          #svc-roi-calculator-inner * { overflow: visible !important; }
          #svc-roi-body-grid { grid-template-columns: 1fr 1fr !important; display: grid !important; height: auto !important; }
          @page { margin: 0.15in; size: landscape; }
        }
      `}</style>

      <div
        id="svc-roi-calculator-inner"
        className="bg-white w-full flex flex-col"
        style={{
          maxWidth: 1120,
          height: "90vh",
          borderRadius: 18,
          boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
          animation: "svcRoiPopIn 0.25s ease-out",
          overflow: "hidden",
        }}
      >
        {/* ── Header ─────────────────────────────────────────────── */}
        <div
          className="flex items-center justify-between px-8 py-4 flex-shrink-0"
          style={{
            background:
              "linear-gradient(135deg, #01161e 0%, #0a2e3d 50%, #114559 100%)",
          }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden"
              style={{
                background: "#01161e",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <Image
                src="/LOKAM_SECONDARY_LOGO_WHITE.svg"
                alt="Lokam"
                width={28}
                height={28}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="text-white font-bold text-[15px] tracking-tight">
                Service Recovery ROI Calculator
              </div>
              <div
                className="text-[10px] font-semibold mt-0.5"
                style={{ color: "#05aa96" }}
              >
                Powered by Lokam AI
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://calendly.com/saleeq-lokam/30-minutes-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-white text-xs font-semibold px-4 py-2 rounded-lg no-underline transition-colors hover:border-[#05aa96]"
              style={{ border: "1.5px solid rgba(255,255,255,0.22)" }}
            >
              <Calendar size={13} /> Book a Demo
            </a>
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 text-white text-xs font-semibold px-4 py-2 rounded-lg"
              style={{
                background: "#05aa96",
                border: "none",
                cursor: "pointer",
              }}
            >
              <Download size={13} /> Download PDF
            </button>
            <button
              onClick={onClose}
              className="ml-1 p-1.5 rounded-lg transition-colors hover:bg-white/10"
              style={{
                color: "rgba(255,255,255,0.6)",
                border: "none",
                cursor: "pointer",
                background: "transparent",
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* ── Body ───────────────────────────────────────────────── */}
        <div className="flex-1 overflow-y-auto" style={{ padding: "20px 28px 16px" }}>
          <div
            id="svc-roi-body-grid"
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:h-full"
          >
            {/* LEFT — Inputs */}
            <div className="flex flex-col justify-between md:h-full">
              <SvcLabel tag>Your Service Department</SvcLabel>

              {/* ROs per month */}
              <div className="flex flex-col gap-1">
                <label
                  className="text-[12px] font-semibold"
                  style={{ color: "#114559" }}
                >
                  Service ROs per Month
                </label>
                <input
                  type="number"
                  placeholder="e.g. 1500"
                  value={inputs.monthlyROs || ""}
                  onChange={(e) =>
                    set("monthlyROs", parseInt(e.target.value) || 0)
                  }
                  className="svc-roi-input w-full rounded-xl text-[15px] font-black outline-none transition-all"
                  style={{
                    padding: "8px 14px",
                    border: "1.5px solid #c8d5d0",
                    color: "#01161e",
                    fontFamily: "inherit",
                  }}
                />
              </div>

              {/* Defect rate slider */}
              <SvcSliderGroup
                label="Unhappy Customers Who Silently Defect"
                value={inputs.defectRate}
                min={1}
                max={40}
                onChange={(v) => set("defectRate", v)}
                minLabel="1%"
                maxLabel="40%"
                displaySuffix="%"
              />

              {/* LTV */}
              <div className="flex flex-col gap-1">
                <label
                  className="text-[12px] font-semibold flex items-center gap-1.5"
                  style={{ color: "#114559" }}
                >
                  Average Customer Lifetime Value
                  <SvcTooltip text="Total revenue a service customer generates over their relationship with your dealership — includes repeat ROs, tires, parts, and future vehicle purchases." />
                </label>
                <div
                  className="flex items-center rounded-xl overflow-hidden"
                  style={{ border: "1.5px solid #c8d5d0" }}
                >
                  <span
                    className="px-3 text-[15px] font-black flex-shrink-0"
                    style={{ color: "#7a8f89" }}
                  >
                    $
                  </span>
                  <input
                    type="number"
                    value={inputs.ltv || ""}
                    onChange={(e) =>
                      set("ltv", parseInt(e.target.value) || 0)
                    }
                    className="svc-roi-input flex-1 text-[15px] font-black outline-none"
                    style={{
                      padding: "8px 14px 8px 0",
                      border: "none",
                      color: "#01161e",
                      fontFamily: "inherit",
                      background: "transparent",
                    }}
                  />
                </div>
              </div>

              {/* Silent Bleed */}
              <SvcLabel tag>The Silent Bleed</SvcLabel>

              <div className="grid grid-cols-2 gap-2">
                <SvcSnapCard label="Customers Defecting / Mo" danger>
                  {defectors.toLocaleString()}
                </SvcSnapCard>
                <SvcSnapCard
                  label={<>Lifetime Value<br />Walking Out</>}
                  danger
                >
                  {fmt(lostLTV)}
                </SvcSnapCard>
              </div>
            </div>

            {/* RIGHT — Results */}
            <div
              className="flex flex-col rounded-2xl overflow-hidden md:h-full"
              style={{ border: "1.5px solid #e2e8e6" }}
            >
              {/* Right header */}
              <div
                className="flex items-center justify-between px-6 py-4"
                style={{
                  background:
                    "linear-gradient(135deg, #01161e 0%, #114559 100%)",
                }}
              >
                <span
                  className="text-[10px] font-bold uppercase tracking-[1.4px] flex items-center gap-2"
                  style={{ color: "#05aa96" }}
                >
                  With Lokam
                  <span
                    className="flex-1 h-px"
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      minWidth: 24,
                    }}
                  />
                </span>
                <span
                  className="text-[9px] font-bold tracking-wide px-3 py-1 rounded-full"
                  style={{ color: "#05aa96", background: "rgba(5,170,150,0.14)" }}
                >
                  PROACTIVE AI FOLLOW-UP
                </span>
              </div>

              {/* Right body */}
              <div className="flex flex-col gap-3 p-4 flex-1">
                {/* Recovery callout */}
                <div
                  className="flex items-center gap-3 rounded-xl p-4"
                  style={{
                    background: "#e8f7f5",
                    border: "1px solid rgba(5,170,150,0.15)",
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "#05aa96" }}
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span
                      className="text-[11px] font-bold uppercase tracking-[0.5px]"
                      style={{ color: "#7a8f89" }}
                    >
                      Customers Saved
                    </span>
                    <span
                      className="text-[28px] font-black leading-tight"
                      style={{ color: "#05aa96" }}
                    >
                      {saved.toLocaleString()}
                    </span>
                    <span
                      className="text-[10px] font-medium"
                      style={{ color: "#114559" }}
                    >
                      80% of defectors recovered with proactive follow-up
                    </span>
                  </div>
                </div>

                {/* Hero result */}
                <div
                  className="rounded-xl py-8 text-center"
                  style={{
                    background:
                      "linear-gradient(135deg, #05aa96 0%, #049383 100%)",
                  }}
                >
                  <div className="text-[48px] font-display font-bold text-white tracking-tight leading-none">
                    {fmt(ltvSaved)}
                  </div>
                  <div
                    className="text-[11px] mt-1 font-medium"
                    style={{ color: "rgba(255,255,255,0.85)" }}
                  >
                    Monthly LTV Saved
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    {
                      val: fmt(grossProfit),
                      label: (
                        <>
                          Gross Profit / Mo
                          <br />
                          (50% of LTV saved)
                        </>
                      ),
                    },
                    { val: roi.toFixed(1) + "x", label: "ROI" },
                    { val: fmt(annualSaved), label: "Annual LTV Saved" },
                  ].map((s, i) => (
                    <div
                      key={i}
                      className="rounded-xl py-3 px-2 text-center flex flex-col items-center justify-center"
                      style={{ background: "#f8faf9", border: "1px solid #e2e8e6" }}
                    >
                      <div
                        className="text-[18px] font-display font-bold"
                        style={{ color: "#114559" }}
                      >
                        {s.val}
                      </div>
                      <div
                        className="text-[9px] mt-1 font-medium leading-tight"
                        style={{ color: "#7a8f89" }}
                      >
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Cost row */}
                <div
                  className="flex items-center justify-between px-5 py-3 rounded-xl mt-auto"
                  style={{ background: "#f8faf9", border: "1px solid #e2e8e6" }}
                >
                  <span
                    className="text-[13px] font-bold"
                    style={{ color: "#114559" }}
                  >
                    Lokam Monthly Cost
                  </span>
                  <span
                    className="text-[18px] font-display font-bold"
                    style={{ color: "#05aa96" }}
                  >
                    ${toolCost.toLocaleString()}/mo
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Footer ─────────────────────────────────────────────── */}
        <div
          className="flex-shrink-0 flex justify-between items-center px-8 py-2.5 text-[10px]"
          style={{
            background: "#f8faf9",
            borderTop: "1px solid #e2e8e6",
            color: "#7a8f89",
          }}
        >
          <span>
            © 2026 Lokam AI ·{" "}
            <a
              href="https://lokam.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline font-bold"
              style={{ color: "#05aa96" }}
            >
              lokam.ai
            </a>
          </span>
          <span>Results based on your inputs &amp; industry benchmarks</span>
        </div>
      </div>
    </div>,
    document.body
  );
}

// ── Sub-components ─────────────────────────────────────────────────────────

function SvcLabel({
  children,
  tag,
}: {
  children: React.ReactNode;
  tag?: boolean;
}) {
  if (!tag) return <span>{children}</span>;
  return (
    <div
      className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[1.4px]"
      style={{ color: "#05aa96" }}
    >
      {children}
      <span className="flex-1 h-px" style={{ background: "#e2e8e6" }} />
    </div>
  );
}

function SvcSliderGroup({
  label,
  value,
  min,
  max,
  onChange,
  minLabel,
  maxLabel,
  displaySuffix = "%",
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (v: number) => void;
  minLabel?: string;
  maxLabel?: string;
  displaySuffix?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <div
        className="flex items-center justify-between gap-3 text-[12px] font-semibold"
        style={{ color: "#114559" }}
      >
        <span className="flex-1">{label}</span>
        <span
          className="text-[14px] font-black px-2.5 py-0.5 rounded-md flex-shrink-0"
          style={{ color: "#05aa96", background: "#e8f7f5" }}
        >
          {value}{displaySuffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        className="svc-roi-slider"
        style={{ background: sliderBg(value, min, max) }}
      />
      <div
        className="flex justify-between text-[10px]"
        style={{ color: "#7a8f89" }}
      >
        <span>{minLabel ?? `${min}${displaySuffix}`}</span>
        <span>{maxLabel ?? `${max}${displaySuffix}`}</span>
      </div>
    </div>
  );
}

function SvcSnapCard({
  label,
  children,
  danger,
}: {
  label: React.ReactNode;
  children: React.ReactNode;
  danger?: boolean;
}) {
  return (
    <div
      className="rounded-xl py-4 px-2 text-center"
      style={{
        background: danger ? "#fef2f2" : "#f8faf9",
        border: `1px solid ${danger ? "#fecaca" : "#e2e8e6"}`,
      }}
    >
      <div
        className="text-[22px] font-display font-bold leading-none break-all"
        style={{ color: danger ? "#dc4545" : "#01161e" }}
      >
        {children}
      </div>
      <div
        className="text-[9px] mt-1.5 font-medium leading-tight"
        style={{ color: "#7a8f89" }}
      >
        {label}
      </div>
    </div>
  );
}

function SvcTooltip({ text }: { text: string }) {
  const [show, setShow] = useState(false);
  return (
    <span
      className="relative inline-flex cursor-help"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#7a8f89"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
      {show && (
        <span
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 text-white text-[11px] leading-snug px-3 py-2 rounded-lg pointer-events-none z-10"
          style={{
            background: "#01161e",
            width: 240,
            boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
          }}
        >
          {text}
        </span>
      )}
    </span>
  );
}
