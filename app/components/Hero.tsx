export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Gradient background layers (matching Figma gradient SVGs) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 70% at 50% 110%, rgba(47,115,137,0.15) 0%, rgba(255,255,255,0) 70%)",
        }}
      />

      <div className="relative max-w-[1330px] mx-auto px-[50px] pt-20 pb-0">
        {/* "Backed by" text */}
        <p
          className="text-center text-[#202020] text-[19.8px] leading-[30px] mb-6"
          style={{ fontFamily: "var(--font-jakarta)", fontWeight: 500 }}
        >
          Backed by World Auto Group, IL – our customer turned investor.
        </p>

        {/* Badge pill */}
        <div className="flex justify-center mb-8">
          <div className="relative h-10 rounded-[25px] px-6 flex items-center justify-center overflow-hidden"
            style={{
              background: "#ffffff",
              boxShadow:
                "0px 1px 2px #00000017, 0px 4px 4px #00000014, 0px 10px 6px #0000000d, 0px 18px 7px #00000003",
            }}
          >
            {/* Gradient glow behind pill */}
            <div
              className="absolute inset-0 blur-[7px] rounded-[25px]"
              style={{
                background:
                  "linear-gradient(90deg,rgba(47,115,137,1) 0%,rgba(38,76,88,1) 20%,rgba(38,80,94,1) 52%,rgba(58,165,197,1) 80%,rgba(66,197,219,1) 100%)",
                opacity: 0.35,
              }}
            />
            <span
              className="relative text-neutral-800 text-base leading-[30px]"
              style={{ fontFamily: "var(--font-jakarta)", fontWeight: 500 }}
            >
              Voice AI follow up for dealerships.
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1
          className="text-center text-[50px] leading-[53px] tracking-[-1px] mx-auto mb-6"
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 500,
            color: "#085856",
            maxWidth: 760,
          }}
        >
          Sell More Cars &amp; Increase
          <br />
          service retention
        </h1>

        {/* Subheadline */}
        <p
          className="text-center text-black text-xl leading-[30px] mx-auto mb-10"
          style={{
            fontFamily: "var(--font-jakarta)",
            fontWeight: 500,
            maxWidth: 656,
          }}
        >
          Lokam calls all your customers after a service or showroom visit and
          flags issues before they cost you the sale or relationship.
        </p>

        {/* CTA buttons */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <a
            href="#contact"
            className="h-[50px] px-8 flex items-center rounded-lg text-white text-[15.6px] leading-6 transition-opacity hover:opacity-90"
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 500,
              background: "#307d93",
              minWidth: 164,
              justifyContent: "center",
            }}
          >
            Book a demo
          </a>
          <a
            href="#roi"
            className="h-[50px] px-8 flex items-center rounded-lg text-[15.6px] leading-6 transition-colors hover:bg-[#307d93]/5"
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 500,
              color: "#307d93",
              border: "2px solid #307d93",
              minWidth: 196,
              justifyContent: "center",
            }}
          >
            Calculate your ROI
          </a>
        </div>
      </div>

      {/* Car image — full-width bottom of hero */}
      {/* TODO: replace with <Image src="/car-1.png" …> once asset is added */}
      <div
        className="relative w-full"
        style={{ height: 480, background: "linear-gradient(180deg, #f0f7f8 0%, #cce4ea 60%, #a8cfd8 100%)" }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="text-center"
            style={{ color: "#2c697b", opacity: 0.3, fontFamily: "var(--font-inter)", fontSize: 14 }}
          >
            [ car-1.png — add to /public once Figma assets are exported ]
          </div>
        </div>
        {/* Bottom fade to white */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, #ffffff)" }}
        />
      </div>
    </section>
  );
}
