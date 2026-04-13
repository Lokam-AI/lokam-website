"use client";
import { useState } from "react";

export default function ROI() {
  const [ros, setRos] = useState(100);       // ROs per month
  const [avgRev, setAvgRev] = useState(450); // avg revenue per retained customer
  const [walkouts, setWalkouts] = useState(40); // walk-outs per month
  const [closeRate, setCloseRate] = useState(15); // close rate % with Lokam

  const retainedCustomers = Math.round(ros * 0.92); // 92% contact rate
  const revenueFromCSI = retainedCustomers * avgRev * 0.12; // 12% additional spend
  const walkoutRevenue = Math.round(walkouts * (closeRate / 100) * 32000); // avg vehicle price
  const totalROI = Math.round(revenueFromCSI + walkoutRevenue);

  return (
    <section id="roi" className="py-20 bg-white">
      {/* Divider */}
      <div className="max-w-[1330px] mx-auto px-[50px]">
        <div className="h-px mb-20" style={{ background: "#0000001a" }} />
      </div>

      <div className="max-w-[1330px] mx-auto px-[50px]">
        {/* Heading */}
        <h2
          className="text-center text-[50px] leading-[56px] tracking-[-1px] mb-14"
          style={{ fontFamily: "var(--font-inter)", fontWeight: 500, color: "#085856" }}
        >
          Calculate your ROI
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Inputs */}
          <div className="flex flex-col gap-8">
            {[
              {
                label: "Monthly Repair Orders (ROs)",
                value: ros,
                set: setRos,
                min: 10, max: 1000, step: 10,
                hint: `${ros} ROs/month`,
              },
              {
                label: "Avg. Additional Revenue Per Retained Customer ($)",
                value: avgRev,
                set: setAvgRev,
                min: 100, max: 2000, step: 50,
                hint: `$${avgRev}`,
              },
              {
                label: "Monthly Walk-Out Leads",
                value: walkouts,
                set: setWalkouts,
                min: 0, max: 300, step: 5,
                hint: `${walkouts} walk-outs/month`,
              },
              {
                label: "Expected Close Rate with Lokam (%)",
                value: closeRate,
                set: setCloseRate,
                min: 5, max: 50, step: 1,
                hint: `${closeRate}%`,
              },
            ].map((input) => (
              <div key={input.label} className="flex flex-col gap-3">
                <div className="flex justify-between items-baseline">
                  <label
                    className="text-[15px] font-medium"
                    style={{ color: "#000", fontFamily: "var(--font-inter)" }}
                  >
                    {input.label}
                  </label>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: "#307d93", fontFamily: "var(--font-inter)" }}
                  >
                    {input.hint}
                  </span>
                </div>
                <input
                  type="range"
                  min={input.min}
                  max={input.max}
                  step={input.step}
                  value={input.value}
                  onChange={(e) => input.set(Number(e.target.value))}
                  className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #307d93 0%, #307d93 ${((input.value - input.min) / (input.max - input.min)) * 100}%, #e5e7eb ${((input.value - input.min) / (input.max - input.min)) * 100}%, #e5e7eb 100%)`,
                  }}
                />
              </div>
            ))}
          </div>

          {/* Result card */}
          <div
            className="rounded-2xl p-10 flex flex-col gap-6 sticky top-24"
            style={{ background: "#085856" }}
          >
            <p
              className="text-white/70 text-sm font-medium"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Estimated Monthly Revenue Recovery
            </p>
            <div>
              <p
                className="text-white text-6xl font-bold tracking-tight leading-none"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                ${totalROI.toLocaleString()}
              </p>
              <p className="text-white/50 text-sm mt-2" style={{ fontFamily: "var(--font-jakarta)" }}>
                per month
              </p>
            </div>

            <div className="flex flex-col gap-3 pt-2 border-t border-white/10">
              <div className="flex justify-between text-sm">
                <span className="text-white/60" style={{ fontFamily: "var(--font-jakarta)" }}>CSI retention value</span>
                <span className="text-white font-medium" style={{ fontFamily: "var(--font-inter)" }}>
                  ${Math.round(revenueFromCSI).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/60" style={{ fontFamily: "var(--font-jakarta)" }}>Walk-out deal recovery</span>
                <span className="text-white font-medium" style={{ fontFamily: "var(--font-inter)" }}>
                  ${walkoutRevenue.toLocaleString()}
                </span>
              </div>
            </div>

            <a
              href="#contact"
              className="mt-2 h-[50px] flex items-center justify-center rounded-lg text-[15.6px] font-medium text-white transition-opacity hover:opacity-90"
              style={{ fontFamily: "var(--font-inter)", background: "#307d93" }}
            >
              Book a demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
