const dealers = [
  "World Auto Group",
  "Falcone Auto Group",
  "Hendrick Automotive",
  "AutoNation",
  "Penske Automotive",
  "Lithia Motors",
  "Asbury Automotive",
  "Group 1 Automotive",
];

const tools = [
  "CDK Global", "Reynolds & Reynolds", "DealerSocket",
  "VinSolutions", "RouteOne", "Dealertrack", "TEKION", "Elead",
];

export default function LogoCloud() {
  return (
    <section className="relative overflow-hidden">
      {/* Divider line */}
      <div className="max-w-[1330px] mx-auto px-[50px]">
        <div className="h-px bg-white/10" />
      </div>

      {/* Trusted By — on white background */}
      <div className="py-16 bg-white">
        <div className="max-w-[1330px] mx-auto px-[50px]">
          {/* Heading */}
          <div className="flex flex-col items-center gap-[18px] mb-[76px]">
            <h2
              className="text-[36px] leading-[52px] text-center"
              style={{ fontFamily: "var(--font-inter)", fontWeight: 500, color: "#004839" }}
            >
              Trusted By
            </h2>
            <p
              className="text-2xl text-center tracking-[0.72px] leading-[26px]"
              style={{ fontFamily: "var(--font-jakarta)", fontWeight: 400, color: "#004839" }}
            >
              Customer - First Dealerships
            </p>
          </div>

          {/* TODO: replace with <Image src="/frame-5101.svg" …> — dealer logos strip */}
          <div className="overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to right, white, transparent)" }} />
            <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to left, white, transparent)" }} />
            <div className="flex gap-12 animate-marquee whitespace-nowrap" style={{ width: "max-content" }}>
              {[...dealers, ...dealers].map((d, i) => (
                <span
                  key={i}
                  className="flex-shrink-0 text-sm font-semibold"
                  style={{ color: "#004839", fontFamily: "var(--font-inter)" }}
                >
                  {d}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Integrates With — dark teal background */}
      <div className="py-16" style={{ background: "#085856" }}>
        <div className="max-w-[1330px] mx-auto px-[50px]">
          <p
            className="text-white text-[32px] leading-[52px] text-center mb-[79px]"
            style={{ fontFamily: "var(--font-inter)", fontWeight: 500 }}
          >
            Integrates with Your Dealership Tools
          </p>

          {/* TODO: replace with <Image src="/frame-5102.svg" …> — tools logos strip */}
          <div className="overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to right, #085856, transparent)" }} />
            <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to left, #085856, transparent)" }} />
            <div className="flex gap-12 animate-marquee whitespace-nowrap" style={{ width: "max-content" }}>
              {[...tools, ...tools].map((t, i) => (
                <span
                  key={i}
                  className="flex-shrink-0 text-sm font-semibold text-white/70"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
