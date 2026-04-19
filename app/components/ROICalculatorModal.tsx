"use client";
import React, { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { X, Download, Calendar } from "lucide-react";

interface CalcState {
  monthlyUps: number;
  followUpPercent: number;
  closeRate: number;
  grossProfit: number;
}

function fmt(n: number) {
  return "$" + Math.round(n).toLocaleString();
}

function sliderBg(value: number) {
  const pct = (value / 100) * 100;
  return `linear-gradient(to right, #05aa96 0%, #05aa96 ${pct}%, #e2e8e6 ${pct}%, #e2e8e6 100%)`;
}

export default function ROICalculatorModal({ open, onClose, initialUps = 0 }: { open: boolean; onClose: () => void; initialUps?: number }) {
  const [inputs, setInputs] = useState<CalcState>({
    monthlyUps: initialUps,
    followUpPercent: 15,
    closeRate: 45,
    grossProfit: 3000,
  });

  useEffect(() => {
    if (open) setInputs(prev => ({ ...prev, monthlyUps: initialUps }));
  }, [open, initialUps]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const set = useCallback((key: keyof CalcState, val: number) => {
    setInputs(prev => ({ ...prev, [key]: val }));
  }, []);

  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  function handlePrint() { window.print(); }

  if (!open || !mounted) return null;

  const { monthlyUps, followUpPercent, closeRate, grossProfit } = inputs;
  const toolCost    = monthlyUps > 400 ? 1500 : 1250;
  const neverCalled = monthlyUps - Math.round(monthlyUps * (followUpPercent / 100));
  const lostGross   = Math.round(neverCalled * (closeRate / 100)) * grossProfit;
  const aiReached   = Math.round(monthlyUps * 0.75);
  const qualified   = Math.round(aiReached * 0.20);
  const showed      = Math.round(qualified * 0.40);
  const closed      = Math.round(showed * (closeRate / 100));
  const recovered   = closed * grossProfit;
  const netMonthly  = recovered - toolCost;
  const roi         = toolCost > 0 ? (recovered / toolCost) : 0;
  const annual      = netMonthly * 12;

  return createPortal(
    <div
      id="roi-print-target"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
      style={{ background: "rgba(1,22,30,0.85)" }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <style>{`
        @keyframes roiPopIn { from { transform: scale(0.96); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .roi-slider { -webkit-appearance: none; appearance: none; width: 100%; height: 6px; border-radius: 3px; outline: none; cursor: pointer; }
        .roi-slider::-webkit-slider-thumb { -webkit-appearance: none; width: 20px; height: 20px; border-radius: 50%; background: #05aa96; border: 3px solid #fff; box-shadow: 0 2px 6px rgba(0,0,0,0.2); cursor: pointer; }
        .roi-slider::-moz-range-thumb { width: 20px; height: 20px; border-radius: 50%; background: #05aa96; border: 3px solid #fff; box-shadow: 0 2px 6px rgba(0,0,0,0.2); cursor: pointer; border: none; }
        .roi-input:focus { border-color: #05aa96 !important; box-shadow: 0 0 0 3px rgba(5,170,150,0.12); }
        @media print {
          body > *:not(#roi-print-target) { display: none !important; }
          #roi-print-target { position: static !important; background: none !important; padding: 0 !important; inset: auto !important; }
          #roi-calculator-inner { position: static !important; width: 100% !important; height: auto !important; max-width: 100% !important; box-shadow: none !important; border-radius: 0 !important; overflow: visible !important; zoom: 0.72; }
          #roi-calculator-inner * { overflow: visible !important; }
          #roi-body-grid { grid-template-columns: 1fr 1fr !important; display: grid !important; height: auto !important; }
          @page { margin: 0.15in; size: landscape; }
        }
      `}</style>

      <div
        id="roi-calculator-inner"
        className="bg-white w-full flex flex-col"
        style={{
          maxWidth: 1280,
          height: "90vh",
          borderRadius: 18,
          boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
          animation: "roiPopIn 0.25s ease-out",
          overflow: "hidden",
        }}
      >
        {/* ── Header ─────────────────────────────────────────────── */}
        <div
          className="flex items-center justify-between px-8 py-4 flex-shrink-0"
          style={{ background: "linear-gradient(135deg, #01161e 0%, #0a2e3d 50%, #114559 100%)" }}
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden"
              style={{ background: "#01161e", border: "1px solid rgba(255,255,255,0.1)" }}>
              <img src="/LOKAM_SECONDARY_LOGO_WHITE.svg" alt="Lokam" width={28} height={28} className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="text-white font-bold text-[15px] tracking-tight">Desklog Recovery ROI Calculator</div>
              <div className="text-[10px] font-semibold mt-0.5" style={{ color: "#05aa96" }}>Powered by Lokam AI</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a href="https://calendly.com/saleeq-lokam/30-minutes-meeting" target="_blank" rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-white text-xs font-semibold px-4 py-2 rounded-lg no-underline transition-colors hover:border-[#05aa96]"
              style={{ border: "1.5px solid rgba(255,255,255,0.22)" }}>
              <Calendar size={13} /> Book a Demo
            </a>
            <button onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 text-white text-xs font-semibold px-4 py-2 rounded-lg"
              style={{ background: "#05aa96", border: "none", cursor: "pointer" }}>
              <Download size={13} /> Download PDF
            </button>
            <button onClick={onClose}
              className="ml-1 p-1.5 rounded-lg transition-colors hover:bg-white/10"
              style={{ color: "rgba(255,255,255,0.6)", border: "none", cursor: "pointer", background: "transparent" }}>
              <X size={18} />
            </button>
          </div>
        </div>

        {/* ── Body ───────────────────────────────────────────────── */}
        <div className="flex-1 overflow-hidden" style={{ padding: "20px 28px 16px" }}>
          <div id="roi-body-grid" className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">

            {/* LEFT — Inputs */}
            <div className="flex flex-col justify-between h-full">
              <Label tag>Your Dealership Numbers</Label>

              {/* Monthly UPs */}
              <div className="flex flex-col gap-1">
                <label className="text-[12px] font-semibold" style={{ color: "#114559" }}>
                  Your Unsold Showroom Traffic (Monthly)
                </label>
                <input
                  type="number"
                  placeholder="e.g. 500"
                  value={inputs.monthlyUps || ""}
                  onChange={e => set("monthlyUps", parseInt(e.target.value) || 0)}
                  className="roi-input w-full rounded-xl text-[15px] font-black outline-none transition-all"
                  style={{ padding: "8px 14px", border: "1.5px solid #c8d5d0", color: "#01161e", fontFamily: "inherit" }}
                />
              </div>

              {/* Follow-up slider */}
              <SliderGroup
                label="What % of unsold customers get a follow-up call within 24 hours?"
                value={inputs.followUpPercent}
                onChange={v => set("followUpPercent", v)}
                note="Industry average is less than 15%."
              />

              {/* Close rate slider */}
              <SliderGroup
                label="Your Current Closing Rate"
                value={inputs.closeRate}
                onChange={v => set("closeRate", v)}
              />

              {/* Gross profit */}
              <div className="flex flex-col gap-1">
                <label className="text-[12px] font-semibold flex items-center gap-1.5" style={{ color: "#114559" }}>
                  Gross Profit per Deal (Front + Back)
                  <Tooltip text="Combined front-end and F&I gross profit per unit sold." />
                </label>
                <div className="flex items-center rounded-xl overflow-hidden" style={{ border: "1.5px solid #c8d5d0", transition: "border-color 0.2s" }}>
                  <span className="px-3 text-[15px] font-black flex-shrink-0" style={{ color: "#7a8f89" }}>$</span>
                  <input
                    type="number"
                    value={inputs.grossProfit}
                    onChange={e => set("grossProfit", parseInt(e.target.value) || 0)}
                    className="roi-input flex-1 text-[15px] font-black outline-none"
                    style={{ padding: "8px 14px 8px 0", border: "none", color: "#01161e", fontFamily: "inherit", background: "transparent" }}
                  />
                </div>
              </div>

              {/* Snapshot */}
              <Label tag>Current Snapshot</Label>

              <div className="grid grid-cols-3 gap-2">
                <SnapCard label="Unsold Volume">{monthlyUps.toLocaleString()}</SnapCard>
                <SnapCard label="Never Get a Call" danger>{neverCalled.toLocaleString()}</SnapCard>
                <SnapCard label={<>Lost Gross / Mo<br />(never called)</>} danger>{fmt(lostGross)}</SnapCard>
              </div>
            </div>

            {/* RIGHT — Results */}
            <div className="flex flex-col rounded-2xl overflow-hidden h-full" style={{ border: "1.5px solid #e2e8e6" }}>
              {/* Right header */}
              <div className="flex items-center justify-between px-6 py-4"
                style={{ background: "linear-gradient(135deg, #01161e 0%, #114559 100%)" }}>
                <span className="text-[10px] font-bold uppercase tracking-[1.4px] flex items-center gap-2" style={{ color: "#05aa96" }}>
                  With Lokam AI
                  <span className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.1)", minWidth: 24 }} />
                </span>
                <span className="text-[9px] font-bold tracking-wide px-3 py-1 rounded-full"
                  style={{ color: "#05aa96", background: "rgba(5,170,150,0.14)" }}>
                  AI RECOVERY
                </span>
              </div>

              {/* Right body */}
              <div className="flex flex-col gap-3 p-4 flex-1">

                {/* Funnel — 4 steps + 3 arrows */}
                <div className="grid items-center gap-1" style={{ gridTemplateColumns: "1fr auto 1fr auto 1fr auto 1fr" }}>
                  {[
                    { val: aiReached, label: "AI Reached",  sub: "75% contact" },
                    { val: qualified, label: "Qualified",   sub: "25% ready" },
                    { val: showed,    label: "Showed Up",   sub: "40% show" },
                    { val: closed,    label: "Closed",      sub: `${closeRate}% your rate` },
                  ].map((step, i) => (
                    <React.Fragment key={step.label}>
                      <div className="text-center rounded-xl py-3 px-1"
                        style={{ background: "#e8f7f5", border: "1px solid rgba(5,170,150,0.18)", height: "100%" }}>
                        <div className="text-[22px] font-display font-bold" style={{ color: "#05aa96" }}>
                          {step.val.toLocaleString()}
                        </div>
                        <div className="text-[8px] mt-0.5 leading-tight font-medium" style={{ color: "#7a8f89" }}>
                          {step.label}<br />
                          <strong style={{ color: "#114559" }}>{step.sub}</strong>
                        </div>
                      </div>
                      {i < 3 && (
                        <div className="text-center text-base font-light px-0.5" style={{ color: "#c8d5d0" }}>›</div>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* Hero result */}
                <div className="rounded-xl py-8 text-center"
                  style={{ background: "linear-gradient(135deg, #05aa96 0%, #049383 100%)" }}>
                  <div className="text-[60px] font-display font-bold text-white tracking-tight leading-none">
                    {fmt(recovered)}
                  </div>
                  <div className="text-[11px] mt-1 font-medium" style={{ color: "rgba(255,255,255,0.85)" }}>
                    Recovered Gross Profit / Month
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { val: fmt(netMonthly), label: "Net Profit / Mo" },
                    { val: roi.toFixed(1) + "x", label: "ROI" },
                    { val: fmt(annual), label: "Annual Impact" },
                  ].map(s => (
                    <div key={s.label} className="rounded-xl py-3 px-2 text-center flex flex-col items-center justify-center"
                      style={{ background: "#f8faf9", border: "1px solid #e2e8e6" }}>
                      <div className="text-[18px] font-display font-bold" style={{ color: "#114559" }}>{s.val}</div>
                      <div className="text-[9px] mt-1 font-medium" style={{ color: "#7a8f89" }}>{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Cost row */}
                <div className="flex items-center justify-between px-5 py-3 rounded-xl mt-auto"
                  style={{ background: "#f8faf9", border: "1px solid #e2e8e6" }}>
                  <span className="text-[13px] font-bold" style={{ color: "#114559" }}>Lokam Monthly Cost</span>
                  <span className="text-[18px] font-display font-bold" style={{ color: "#05aa96" }}>${toolCost.toLocaleString()}/mo</span>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* ── Footer ─────────────────────────────────────────────── */}
        <div className="flex-shrink-0 flex justify-between items-center px-8 py-2.5 text-[10px]"
          style={{ background: "#f8faf9", borderTop: "1px solid #e2e8e6", color: "#7a8f89" }}>
          <span>
            © 2026 Lokam AI ·{" "}
            <a href="https://lokam.ai" target="_blank" rel="noopener noreferrer"
              className="no-underline font-bold" style={{ color: "#05aa96" }}>
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

function Label({ children, tag }: { children: React.ReactNode; tag?: boolean }) {
  if (!tag) return <span>{children}</span>;
  return (
    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[1.4px]" style={{ color: "#05aa96" }}>
      {children}
      <span className="flex-1 h-px" style={{ background: "#e2e8e6" }} />
    </div>
  );
}

function SliderGroup({ label, value, onChange, note }: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  note?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between gap-3 text-[12px] font-semibold" style={{ color: "#114559" }}>
        <span className="flex-1">{label}</span>
        <span className="text-[14px] font-black px-2.5 py-0.5 rounded-md flex-shrink-0"
          style={{ color: "#05aa96", background: "#e8f7f5" }}>
          {value}%
        </span>
      </div>
      <input
        type="range" min={0} max={100} value={value}
        onChange={e => onChange(parseInt(e.target.value))}
        className="roi-slider"
        style={{ background: sliderBg(value) }}
      />
      <div className="flex justify-between text-[10px]" style={{ color: "#7a8f89" }}>
        <span>0%</span><span>100%</span>
      </div>
      {note && (
        <div className="text-[10px] font-semibold" style={{ color: "#e8960c" }}>{note}</div>
      )}
    </div>
  );
}

function SnapCard({ label, children, danger }: {
  label: React.ReactNode;
  children: React.ReactNode;
  danger?: boolean;
}) {
  return (
    <div className="rounded-xl py-4 px-2 text-center" style={{
      background: danger ? "#fef2f2" : "#f8faf9",
      border: `1px solid ${danger ? "#fecaca" : "#e2e8e6"}`,
    }}>
      <div className="text-[22px] font-display font-bold leading-none" style={{ color: danger ? "#dc4545" : "#01161e" }}>
        {children}
      </div>
      <div className="text-[9px] mt-1.5 font-medium leading-tight" style={{ color: "#7a8f89" }}>{label}</div>
    </div>
  );
}

function Tooltip({ text }: { text: string }) {
  const [show, setShow] = useState(false);
  return (
    <span className="relative inline-flex cursor-help"
      onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7a8f89" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
      </svg>
      {show && (
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 text-white text-[11px] leading-snug px-3 py-2 rounded-lg pointer-events-none z-10"
          style={{ background: "#01161e", width: 240, boxShadow: "0 4px 16px rgba(0,0,0,0.25)" }}>
          {text}
        </span>
      )}
    </span>
  );
}
