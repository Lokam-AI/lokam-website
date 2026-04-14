"use client";

const csiSteps = [
  {
    title: "Immediate Outreach",
    desc: "Lokam's AI calls every customer within 24 hours post-service.",
  },
  {
    title: "Instant Escalation",
    desc: "Instantly escalates detractors with full context and transcripts to your service manager.",
  },
  {
    title: "Review Generation",
    desc: "Automatically sends Google review links to promoters via SMS.",
  },
];

const walkoutSteps = [
  {
    title: "Objection Discovery",
    desc: "Identifies the primary objections (price, trade-in, spouse) holding them back.",
  },
  {
    title: "Hot Lead Handoff",
    desc: "Instantly escalates hot leads to the sales team with full context.",
  },
  {
    title: "Deal Closing Insights",
    desc: "Gives you every insight to close more deals before they buy a competitor's vehicle.",
  },
];

const waveHeights = [18, 28, 14, 36, 22, 42, 16, 30, 24, 40, 12, 34, 20, 38, 26, 44, 18, 32, 14, 28, 36, 20, 42, 16, 30, 24, 38, 12, 34, 22, 40, 18, 28, 36, 14, 42, 22, 30, 16, 24];

function Waveform({ color = "#085856" }: { color?: string }) {
  return (
    <div className="flex items-center gap-[2px] h-12">
      {waveHeights.map((h, i) => (
        <div
          key={i}
          className="rounded-full flex-shrink-0"
          style={{ width: 3, height: h, background: color, opacity: i < waveHeights.length / 2 ? 1 : 0.3 }}
        />
      ))}
    </div>
  );
}

function CallCard({ label, name, duration = "01:24", type }: { label: string; name: string; duration?: string; type: "service" | "sales" }) {
  const isService = type === "service";
  return (
    <div className="bg-white rounded-2xl shadow-[0px_4px_24px_rgba(0,0,0,0.10)] p-5 w-full max-w-[340px]">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[11px] font-sans font-semibold text-[#6b7280] tracking-wider uppercase">{label}</span>
        <span className="bg-[#085856] text-white text-[11px] font-sans font-medium px-2.5 py-1 rounded-full">AI Agent</span>
      </div>
      <p className="font-display font-semibold text-[17px] text-[#111827] mb-4">{name}</p>
      <Waveform color={isService ? "#085856" : "#307d93"} />
      <div className="flex items-center justify-between mt-3">
        <span className="font-mono text-xs text-[#6b7280]">00:00</span>
        <div className="w-8 h-8 rounded-full bg-[#085856] flex items-center justify-center flex-shrink-0">
          <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
            <path d="M2 1.5L8.5 6L2 10.5V1.5Z" fill="white" />
          </svg>
        </div>
        <span className="font-mono text-xs text-[#6b7280]">{duration}</span>
      </div>
    </div>
  );
}

const stepIcons = ["/assets/num1.svg", "/assets/num2.svg", "/assets/num3.svg"];

function StepList({ steps }: { steps: typeof csiSteps }) {
  return (
    <div className="flex flex-col">
      {steps.map((step, i) => (
        <div key={step.title}>
          <div className="flex gap-4 items-start">
            <div className="flex flex-col items-center flex-shrink-0">
              <img src={stepIcons[i]} alt={`Step ${i + 1}`} className="w-[47px] h-[47px] flex-shrink-0" />
              {i < steps.length - 1 && (
                <div className="w-px flex-1 min-h-[52px] bg-[#085856]/20 my-1" />
              )}
            </div>
            <div className="pt-2 pb-6">
              <h4 className="font-display font-semibold text-[17px] leading-tight text-[#111827] mb-1">
                {step.title}
              </h4>
              <p className="font-sans font-normal text-[15px] leading-6 text-[#3b3b3b]">
                {step.desc}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-16 md:py-24 px-4">
      {/* Header */}
      <div className="text-center mb-14 md:mb-20">
        <h2 className="font-display font-semibold text-[clamp(28px,3vw,44px)] leading-tight text-[#004839] mb-4">
          How Lokam Works?
        </h2>
        <span className="inline-block bg-[#f4f4f5] text-[#3b3b3b] font-sans text-sm md:text-[15px] px-4 py-2 rounded-full">
          Two workflows. One system. Zero missed opportunities.
        </span>
      </div>

      <div className="max-w-[1100px] mx-auto space-y-20 md:space-y-28">

        {/* ── CSI Workflow ── */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left: steps */}
          <div>
            <h3 className="font-display font-semibold text-[clamp(20px,2vw,30px)] leading-snug text-[#085856] mb-3">
              Automate Your CSI Calls
            </h3>
            <p className="font-sans text-[15px] leading-6 text-[#6b7280] mb-8">
              Stop relying on manual calls that never happen. Lokam&apos;s AI reaches every customer, every time.
            </p>
            <StepList steps={csiSteps} />
          </div>

          {/* Right: call card */}
          <div className="flex justify-center md:justify-end">
            <CallCard label="Sample Service Call" name="Sarah Jenkins" duration="01:24" type="service" />
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#e5e7eb]" />

        {/* ── Showroom Workflow ── */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left: call card */}
          <div className="flex justify-center md:justify-start order-2 md:order-1">
            <CallCard label="Sample Sales Call" name="Michael Chen" duration="03:48" type="sales" />
          </div>

          {/* Right: steps */}
          <div className="order-1 md:order-2">
            <h3 className="font-display font-semibold text-[clamp(20px,2vw,30px)] leading-snug text-[#085856] mb-3">
              Automate Unsold Showroom Lead Follow-Up
            </h3>
            <p className="font-sans text-[15px] leading-6 text-[#6b7280] mb-8">
              Don&apos;t let walk-outs leave the deal. Engage them and bring them back with our AI follow-up system.
            </p>
            <StepList steps={walkoutSteps} />
          </div>
        </div>

      </div>
    </section>
  );
}
