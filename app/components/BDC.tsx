const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00866D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a3 3 0 0 1 3 3v7a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="23" />
        <line x1="8" y1="23" x2="16" y2="23" />
      </svg>
    ),
    title: "Empathetic, Multilingual Voice AI That Truly Listens",
    desc: "Lokam's AI holds natural, two-way conversations in multiple languages — detecting tone, pausing, and responding with genuine empathy, not a script.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00866D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.09 6.09l1.06-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    title: "Branded Outbound Calling",
    desc: "Every call appears from your dealership's number with your name — customers pick up because they recognize you, not an unknown caller ID.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00866D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10" />
        <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
      </svg>
    ),
    title: "Auto-Scheduled Retries Optimized for High Pick-Up Time Blocks",
    desc: "Lokam learns your customers' answer patterns and automatically retries during peak pick-up windows — maximizing contact without burning goodwill.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00866D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "First Call Within 12–24 Hours After the Customer Left",
    desc: "Strike while the iron is hot. Lokam reaches out before memory fades, before the review is written, and before the competitor follows up.",
  },
];

export default function BDC() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8">

        {/* Heading */}
        <h2
          className="font-sans font-medium text-center mb-14"
          style={{ color: "#095857", fontSize: "clamp(26px, 4vw, 50px)", lineHeight: "1.12", letterSpacing: "-1px" }}
        >
          How Lokam Beats Manual<br />BDC Outreach
        </h2>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-[50px]">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-2xl p-4 sm:p-6 flex gap-4"
              style={{
                border: "1px solid #e5e7eb",
                boxShadow: "0 12px 60px rgba(8,88,86,0.55), 0 4px 16px rgba(8,88,86,0.35)",
              }}
            >
              {/* Icon */}
              <div
                className="flex-shrink-0 flex items-center justify-center rounded-xl"
                style={{ width: 48, height: 48, backgroundColor: "#edf7f5", border: "1px solid #c6ede6" }}
              >
                {f.icon}
              </div>
              {/* Text */}
              <div>
                <h3 className="font-sans font-semibold text-[15px] leading-snug text-[#111827] mb-1.5">
                  {f.title}
                </h3>
                <p className="font-sans text-sm leading-6 text-[#6b7280]">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stat banner */}
        <div
          className="rounded-2xl px-4 sm:px-8 py-5 flex items-center justify-center text-center"
          style={{ backgroundColor: "#00866D", border: "1px solid #4ecfaa", boxShadow: "0 0 12px rgba(78,207,170,0.3)" }}
        >
          <p className="font-sans text-base md:text-lg font-medium text-white leading-relaxed">
            As a result, we have a{" "}
            <span className="font-bold text-white bg-white/20 rounded-md px-2 py-0.5 mx-1">85%</span>
            {" "}contact rate compared to an industry average of 45-50%
          </p>
        </div>

      </div>
    </section>
  );
}
