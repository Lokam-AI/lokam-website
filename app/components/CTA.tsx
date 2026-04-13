"use client";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="py-20 bg-white">
      {/* Divider */}
      <div className="max-w-[1330px] mx-auto px-[50px]">
        <div className="h-px mb-20" style={{ background: "#0000001a" }} />
      </div>

      <div className="max-w-[1330px] mx-auto px-[50px]">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left copy */}
          <div>
            <h2
              className="text-[50px] leading-[56px] tracking-[-1px] mb-6"
              style={{ fontFamily: "var(--font-inter)", fontWeight: 500, color: "#085856" }}
            >
              We&apos;d Love to Hear From You
            </h2>
            <p
              className="text-xl leading-8 mb-8"
              style={{ fontFamily: "var(--font-jakarta)", fontWeight: 400, color: "#3b3b3b" }}
            >
              Whether you&apos;re managing 1 rooftop or 20, Lokam fits your
              operation. Book a 20-minute demo and we&apos;ll show you exactly
              what it looks like for your store.
            </p>

            {/* Backed by badge */}
            <div className="flex items-center gap-3">
              <span
                className="text-sm"
                style={{ fontFamily: "var(--font-jakarta)", color: "#3b3b3b" }}
              >
                Backed by
              </span>
              <span
                className="text-sm font-semibold"
                style={{ fontFamily: "var(--font-inter)", color: "#085856" }}
              >
                World Auto Group, IL
              </span>
              <span className="text-sm text-gray-400">— our customer turned investor.</span>
            </div>
          </div>

          {/* Right form */}
          <div
            className="rounded-2xl p-8"
            style={{ background: "#f4f9fa", border: "1px solid #e0ecee" }}
          >
            <h3
              className="text-[22px] leading-8 mb-6"
              style={{ fontFamily: "var(--font-inter)", fontWeight: 600, color: "#085856" }}
            >
              Book a 20-Minute Demo
            </h3>

            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                {["First Name", "Last Name"].map((f) => (
                  <div key={f} className="flex flex-col gap-1.5">
                    <label
                      className="text-xs font-medium"
                      style={{ color: "#3b3b3b", fontFamily: "var(--font-inter)" }}
                    >
                      {f}
                    </label>
                    <input
                      type="text"
                      placeholder={f === "First Name" ? "Scott" : "Falcone"}
                      className="bg-white border rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                      style={{
                        border: "1px solid #d1dfe3",
                        fontFamily: "var(--font-jakarta)",
                        color: "#000",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#307d93")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "#d1dfe3")}
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium" style={{ color: "#3b3b3b", fontFamily: "var(--font-inter)" }}>
                  Work Email
                </label>
                <input
                  type="email"
                  placeholder="scott@worldauto.com"
                  className="bg-white border rounded-lg px-4 py-3 text-sm outline-none"
                  style={{ border: "1px solid #d1dfe3", fontFamily: "var(--font-jakarta)", color: "#000" }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#307d93")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#d1dfe3")}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium" style={{ color: "#3b3b3b", fontFamily: "var(--font-inter)" }}>
                  Dealership Name
                </label>
                <input
                  type="text"
                  placeholder="World Auto Group"
                  className="bg-white border rounded-lg px-4 py-3 text-sm outline-none"
                  style={{ border: "1px solid #d1dfe3", fontFamily: "var(--font-jakarta)", color: "#000" }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#307d93")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#d1dfe3")}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium" style={{ color: "#3b3b3b", fontFamily: "var(--font-inter)" }}>
                  Number of Rooftops
                </label>
                <select
                  className="bg-white border rounded-lg px-4 py-3 text-sm outline-none"
                  style={{ border: "1px solid #d1dfe3", fontFamily: "var(--font-jakarta)", color: "#000" }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#307d93")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#d1dfe3")}
                >
                  <option value="">Select…</option>
                  <option>1 store</option>
                  <option>2–5 stores</option>
                  <option>6–20 stores</option>
                  <option>20+ stores</option>
                </select>
              </div>

              <button
                type="submit"
                className="mt-2 h-[50px] flex items-center justify-center gap-2 w-full rounded-lg text-white text-[15.6px] font-medium transition-opacity hover:opacity-90"
                style={{ background: "#307d93", fontFamily: "var(--font-inter)" }}
              >
                Book My Demo
                <ArrowRight size={16} />
              </button>

              <p
                className="text-center text-xs"
                style={{ color: "#6b7280", fontFamily: "var(--font-jakarta)" }}
              >
                No credit card required. We'll reach out within 1 business day.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
