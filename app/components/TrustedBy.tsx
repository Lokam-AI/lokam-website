export default function TrustedBy() {
  const dealers = [
    "Family Hyundai",
    "World Kia Joliet",
    "World Hyundai Matteson",
  ];

  return (
    <section className="relative overflow-hidden bg-white" style={{ marginTop: "clamp(-165px, -11.5vw, -70px)" }}>

      {/* Background SVG — fills the section at every viewport width */}
      <img
        src="/assets/trusted-by-bg.svg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none"
      />

      {/* Gradient blend — white top (matches Hero) fading to reveal SVG bg */}
      <div
        className="absolute inset-x-0 top-0 h-40 md:h-52 pointer-events-none z-[1]"
        style={{
          background: "linear-gradient(to bottom, #FFFFFF 0%, rgba(255,255,255,0.5) 50%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-[1166px] mx-auto pt-4 md:pt-[35px] pb-12 md:pb-[60px] px-4">

        <h2 className="font-sans font-medium text-2xl md:text-4xl leading-8 md:leading-[52px] text-[#00483a] text-center m-0">
          Trusted By
        </h2>

        <p className="font-sans font-normal text-lg md:text-2xl leading-[26px] tracking-[0.72px] text-[#00483a] text-center mt-6 md:mt-[18px]">
          Customer - First Dealerships
        </p>

        <div className="mt-10 md:mt-[76px] overflow-hidden">
          <div className="flex animate-marquee-reverse gap-[126px] w-max">
            {[...dealers, ...dealers, ...dealers, ...dealers].map((name, i) => (
              <span key={i} className="font-sans font-semibold text-lg text-gray-400 flex-shrink-0 tracking-tight">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
