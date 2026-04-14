"use client";

export default function LogoCloud() {
  return (
    <section className="relative z-10" style={{ marginTop: "clamp(-129px, -9vw, -60px)" }}>

      {/* trusted-by-bg.svg */}
      <img
        src="/assets/trusted-by-bg.svg"
        alt=""
        aria-hidden="true"
        className="absolute left-0 w-full pointer-events-none z-20"
        style={{
          top: "calc(-22vw)",
          clipPath: "inset(21.7vw 0 0 0)",
          maskImage: "linear-gradient(to bottom, transparent 0px, black 20vw)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0px, black 20vw)",
        }}
      />

      {/* ── Trusted By ── */}
      <div className="relative w-full overflow-hidden bg-white">
        <div className="relative z-30 max-w-[1166px] mx-auto border-x border-b border-white/10 pt-[83px] md:pt-[83px] pb-12 md:pb-[60px] px-4">

          <h2 className="font-sans font-medium text-2xl md:text-4xl leading-[52px] text-[#00483a] text-center m-0">
            Trusted By
          </h2>

          <p className="font-sans font-normal text-lg md:text-2xl leading-[26px] tracking-[0.72px] text-[#00483a] text-center mt-4 md:mt-[18px]">
            Customer - First Dealerships
          </p>

          {/* Logo placeholders — scrolls right */}
          <div className="mt-10 md:mt-[76px] overflow-hidden">
            <div className="flex animate-marquee-reverse gap-[126px] w-max">
              {[...["Acme Corp", "Globex", "Initech", "Umbrella", "Hooli"], ...["Acme Corp", "Globex", "Initech", "Umbrella", "Hooli"]].map((name, i) => (
                <span key={i} className="font-sans font-semibold text-lg text-gray-400 flex-shrink-0 tracking-tight">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Integrates With ── */}
      <div className="relative z-30 bg-[url('/assets/integrations-bg.png')] bg-cover bg-center pt-12 md:pt-[60px] pb-14 md:pb-[72px] px-4">
        <div className="max-w-[1166px] mx-auto">

          <p className="font-sans font-medium text-xl md:text-[32px] leading-[52px] text-white text-center mb-10 md:mb-[79px]">
            Integrates with Your Dealership Tools
          </p>

          {/* Logo placeholders — scrolls left */}
          <div className="overflow-hidden">
            <div className="flex animate-marquee gap-[123px] w-max">
              {[...["CDK Global", "Reynolds", "DealerSocket", "VinSolutions", "TEKION"], ...["CDK Global", "Reynolds", "DealerSocket", "VinSolutions", "TEKION"]].map((name, i) => (
                <span key={i} className="font-sans font-semibold text-lg text-white/50 flex-shrink-0 tracking-tight">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
