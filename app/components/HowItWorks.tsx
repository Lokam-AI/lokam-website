"use client";

import { useEffect, useRef, useState } from "react";

const csiSteps = [
  {
    title: "Immediate Outreach",
    desc: "Lokam's AI calls every customer within 24 hours post-service.",
    maxWidth: 360,
  },
  {
    title: "Instant Escalation",
    desc: "Instantly escalates detractors with full context and transcripts to your service manager.",
    maxWidth: 400,
  },
  {
    title: "Review Generation",
    desc: "Automatically sends Google review links to promoters via SMS.",
    maxWidth: 400,
  },
];

const walkoutSteps = [
  {
    title: "Objection Discovery",
    desc: "Identifies the primary objections (price, trade-in, spouse) holding them back.",
    maxWidth: 360,
  },
  {
    title: "Hot Lead Handoff",
    desc: "Instantly escalates hot leads to the sales team with full context.",
    maxWidth: 370,
  },
  {
    title: "Deal Closing Insights",
    desc: "Gives you every insight to close more deals before they buy a competitor's vehicle.",
    maxWidth: 400,
  },
];

// Exact waveform data from Figma reference
const waveformBars = [
  { height: 18, opacity: 1 },
  { height: 28, opacity: 1 },
  { height: 38, opacity: 1 },
  { height: 52, opacity: 1 },
  { height: 44, opacity: 1 },
  { height: 60, opacity: 1 },
  { height: 72, opacity: 1 },
  { height: 64, opacity: 1 },
  { height: 80, opacity: 1 },
  { height: 88, opacity: 1 },
  { height: 76, opacity: 1 },
  { height: 92, opacity: 1 },
  { height: 84, opacity: 1 },
  { height: 96, opacity: 1 },
  { height: 88, opacity: 1 },
  { height: 72, opacity: 1 },
  { height: 60, opacity: 1 },
  { height: 48, opacity: 1 },
  { height: 36, opacity: 1 },
  { height: 24, opacity: 1 },
  { height: 14, opacity: 0.5 },
  { height: 10, opacity: 0.4 },
  { height: 8, opacity: 0.35 },
  { height: 8, opacity: 0.3 },
  { height: 8, opacity: 0.3 },
  { height: 8, opacity: 0.28 },
  { height: 8, opacity: 0.28 },
  { height: 8, opacity: 0.26 },
  { height: 8, opacity: 0.26 },
  { height: 8, opacity: 0.25 },
  { height: 8, opacity: 0.25 },
  { height: 8, opacity: 0.25 },
  { height: 8, opacity: 0.25 },
  { height: 8, opacity: 0.25 },
  { height: 8, opacity: 0.25 },
  { height: 8, opacity: 0.25 },
  { height: 8, opacity: 0.25 },
  { height: 8, opacity: 0.25 },
  { height: 8, opacity: 0.25 },
  { height: 8, opacity: 0.25 },
  { height: 8, opacity: 0.25 },
  { height: 8, opacity: 0.25 },
  { height: 8, opacity: 0.25 },
  { height: 10, opacity: 0.3 },
  { height: 14, opacity: 0.4 },
  { height: 20, opacity: 0.5 },
  { height: 28, opacity: 1 },
  { height: 40, opacity: 1 },
  { height: 56, opacity: 1 },
  { height: 68, opacity: 1 },
  { height: 80, opacity: 1 },
  { height: 92, opacity: 1 },
  { height: 100, opacity: 1 },
  { height: 92, opacity: 1 },
  { height: 84, opacity: 1 },
  { height: 76, opacity: 1 },
  { height: 88, opacity: 1 },
  { height: 96, opacity: 1 },
  { height: 80, opacity: 1 },
  { height: 68, opacity: 1 },
  { height: 52, opacity: 1 },
  { height: 36, opacity: 1 },
  { height: 22, opacity: 1 },
];

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

interface BadgeConfig {
  bg: string;
  border: string;
  dot: string;
  text: string;
  color: string;
}

const badgeStyles: Record<string, BadgeConfig> = {
  Positive: {
    bg: "#d6f5ec",
    border: "#b2ead8",
    dot: "#3db88a",
    text: "Positive",
    color: "#2a9d6e",
  },
  "In Lead": {
    bg: "#d6ecf5",
    border: "#b2d8ea",
    dot: "#3d8ab8",
    text: "In Lead",
    color: "#2a6e9d",
  },
};

function CallCard({
  label,
  name,
  badge,
  totalSeconds,
}: {
  label: string;
  name: string;
  badge: string;
  totalSeconds: number;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= totalSeconds) { setIsPlaying(false); return 0; }
          return prev + 0.1;
        });
      }, 100);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [isPlaying, totalSeconds]);

  const playedBarCount = Math.floor((currentTime / totalSeconds) * waveformBars.length);

  const handleWaveformClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCurrentTime((e.clientX - rect.left) / rect.width * totalSeconds);
  };

  const badgeCfg = badgeStyles[badge] ?? badgeStyles["Positive"];

  return (
    <div
      className="bg-white flex flex-col"
      style={{
        width: 588,
        borderRadius: 24,
        height: 340,
        padding: "36px 30px 36px",
        boxShadow: "0 0 36px #125669",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-1.5">
          <img src="/assets/phone.svg" alt="" className="flex-shrink-0" style={{ width: 22, height: 22 }} />
          <span className="font-sans font-semibold text-[#9ca3af] uppercase" style={{ fontSize: 8, letterSpacing: "0.10em" }}>
            {label}
          </span>
        </div>
        <div
          className="flex items-center gap-1 rounded-full"
          style={{ backgroundColor: badgeCfg.bg, border: `1px solid ${badgeCfg.border}`, padding: "2.5px 7px" }}
        >
          <span className="rounded-full flex-shrink-0" style={{ width: 5, height: 5, backgroundColor: badgeCfg.dot, display: "inline-block" }} />
          <span className="font-sans" style={{ color: badgeCfg.color, fontWeight: 600, fontSize: 10 }}>{badgeCfg.text}</span>
        </div>
      </div>

      {/* Name */}
      <div className="font-display mb-3" style={{ fontWeight: 700, fontSize: 26, color: "#111", lineHeight: 1.3 }}>
        {name}
      </div>

      {/* Waveform — overflow hidden so bars stay within card */}
      <div
        className="overflow-hidden cursor-pointer select-none mb-4 mt-auto"
        style={{ height: 80 }}
        onClick={handleWaveformClick}
        role="slider"
        aria-label="Audio progress"
        aria-valuenow={Math.round(currentTime)}
        aria-valuemin={0}
        aria-valuemax={totalSeconds}
      >
        <div className="flex items-center w-full justify-between" style={{ height: 80 }}>
          {waveformBars.map((bar, i) => {
            const isPlayed = i < playedBarCount;
            const isDot = bar.opacity < 0.5;
            return (
              <div
                key={i}
                style={{
                  width: isDot ? 5 : 6,
                  height: isDot ? 4 : Math.round(bar.height * 0.75),
                  borderRadius: isDot ? "50%" : 2,
                  backgroundColor: "#5ecfb1",
                  opacity: isPlayed ? 1 : isDot ? bar.opacity + 0.1 : 0.35,
                  flexShrink: 0,
                  transition: "opacity 0.1s",
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        <span className="font-sans" style={{ fontSize: 13, color: "#004839", fontWeight: 500, minWidth: 40 }}>
          {formatTime(currentTime)}
        </span>
        <button
          onClick={() => setIsPlaying((p) => !p)}
          className="flex items-center justify-center rounded-full focus:outline-none flex-shrink-0"
          style={{ width: 48, height: 48, backgroundColor: "#5ecfb1", border: "0.5px solid #004839", cursor: "pointer", boxShadow: "0 2px 10px rgba(94,207,177,0.45)" }}
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <rect x="5" y="4" width="4" height="16" rx="1" fill="white" />
              <rect x="15" y="4" width="4" height="16" rx="1" fill="white" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white" style={{ marginLeft: 2 }}>
              <path d="M8 5v14l11-7L8 5z" fill="white" />
            </svg>
          )}
        </button>
        <span className="font-sans" style={{ fontSize: 13, color: "#004839", fontWeight: 500, minWidth: 40, textAlign: "right" }}>
          {formatTime(totalSeconds)}
        </span>
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
              <p className="font-sans font-normal text-[15px] leading-6 text-[#3b3b3b]" style={{ maxWidth: step.maxWidth }}>
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
    <section id="how-it-works" className="relative bg-white pt-16 md:pt-24 pb-8 px-4 overflow-hidden">
      {/* Background gradient — CSI (top, flipped vertically) */}
      <svg className="absolute top-0 left-0 w-full h-1/2 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1429 984" preserveAspectRatio="xMidYMid slice" aria-hidden="true" style={{ transform: "scaleY(-1)" }}>
        <path d="M1428.5 984H0V0H1428.5V984Z" fill="url(#paint0_radial_csi)" fillOpacity="0.13"/>
        <defs>
          <radialGradient id="paint0_radial_csi" cx="0" cy="0" r="1" gradientTransform="matrix(196.578 -1037.08 1439.22 423.043 591.514 879.828)" gradientUnits="userSpaceOnUse">
            <stop stopColor="white"/>
            <stop offset="0.487941" stopColor="white"/>
            <stop offset="0.713185" stopColor="#0CB0A2"/>
            <stop offset="1" stopColor="#C5FDFF"/>
          </radialGradient>
        </defs>
      </svg>
      {/* Background gradient — Showroom (bottom, normal) */}
      <svg className="absolute bottom-0 left-0 w-full h-1/2 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1429 984" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <path d="M1428.5 984H0V0H1428.5V984Z" fill="url(#paint0_radial_lead)" fillOpacity="0.13"/>
        <defs>
          <radialGradient id="paint0_radial_lead" cx="0" cy="0" r="1" gradientTransform="matrix(196.578 -1037.08 1439.22 423.043 591.514 879.828)" gradientUnits="userSpaceOnUse">
            <stop stopColor="white"/>
            <stop offset="0.487941" stopColor="white"/>
            <stop offset="0.713185" stopColor="#0CB0A2"/>
            <stop offset="1" stopColor="#C5FDFF"/>
          </radialGradient>
        </defs>
      </svg>
      {/* Header */}
      <div className="text-center mb-14 md:mb-20 relative z-10">
        <h2 className="font-display font-semibold text-[clamp(28px,3vw,44px)] leading-tight text-[#004839] mb-4">
          How Lokam Works?
        </h2>
        <p className="font-sans text-sm md:text-[15px] text-[#6b7280]">
          Two workflows. One system. Zero missed opportunities.
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto space-y-10 md:space-y-14">

        {/* ── CSI Workflow ── */}
        <div className="flex justify-center items-center gap-[34px]">
          <div className="flex-shrink-0 w-[520px] relative z-10">
            <h3 className="font-display font-semibold text-[clamp(20px,2vw,30px)] leading-snug text-[#085856] mb-3">
              Automate Your CSI Calls
            </h3>
            <p className="font-sans text-[15px] leading-6 text-[#6b7280] mb-8" style={{ maxWidth: 360 }}>
              Stop relying on manual calls that never happen. Lokam&apos;s AI reaches every customer, every time.
            </p>
            <StepList steps={csiSteps} />
          </div>
          <div className="flex-shrink-0 relative z-10">
            <CallCard label="Sample Service Call" name="Sarah Jenkins" badge="Positive" totalSeconds={84} />
          </div>
        </div>

        {/* ── Showroom Workflow ── */}
        <div className="flex justify-center items-center gap-[34px]">
          <div className="flex-shrink-0 relative z-10">
            <CallCard label="Sample Sales Call" name="Michael Chen" badge="In Lead" totalSeconds={228} />
          </div>
          <div className="flex-shrink-0 w-[520px] translate-x-[64px] relative z-10">
            <h3 className="font-display font-semibold text-[clamp(20px,2vw,30px)] leading-snug text-[#085856] mb-3">
              Automate Unsold Showroom<br />Lead Follow-Up
            </h3>
            <p className="font-sans text-[15px] leading-6 text-[#6b7280] mb-8" style={{ maxWidth: 360 }}>
              Don&apos;t let walk-outs leave the deal. Engage them and bring them back with our AI follow-up system.
            </p>
            <StepList steps={walkoutSteps} />
          </div>
        </div>

      </div>

    </section>
  );
}
