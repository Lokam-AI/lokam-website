import HowItWorksCards from "./HowItWorksCards";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-white pt-16 md:pt-24 pb-8 px-4 overflow-hidden">
      {/* Background gradient — CSI */}
      <svg className="absolute top-0 left-0 w-full h-1/2 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1429 984" preserveAspectRatio="xMidYMid slice" aria-hidden="true" style={{ transform: "scaleY(-1)" }}>
        <path d="M1428.5 984H0V0H1428.5V984Z" fill="url(#paint0_radial_csi)" fillOpacity="0.13"/>
        <defs>
          <radialGradient id="paint0_radial_csi" cx="0" cy="0" r="1" gradientTransform="matrix(196.578 -1037.08 1439.22 423.043 591.514 879.828)" gradientUnits="userSpaceOnUse">
            <stop stopColor="white"/><stop offset="0.487941" stopColor="white"/>
            <stop offset="0.713185" stopColor="#0CB0A2"/><stop offset="1" stopColor="#C5FDFF"/>
          </radialGradient>
        </defs>
      </svg>
      {/* Background gradient — Showroom */}
      <svg className="absolute bottom-0 left-0 w-full h-1/2 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1429 984" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <path d="M1428.5 984H0V0H1428.5V984Z" fill="url(#paint0_radial_lead)" fillOpacity="0.13"/>
        <defs>
          <radialGradient id="paint0_radial_lead" cx="0" cy="0" r="1" gradientTransform="matrix(196.578 -1037.08 1439.22 423.043 591.514 879.828)" gradientUnits="userSpaceOnUse">
            <stop stopColor="white"/><stop offset="0.487941" stopColor="white"/>
            <stop offset="0.713185" stopColor="#0CB0A2"/><stop offset="1" stopColor="#C5FDFF"/>
          </radialGradient>
        </defs>
      </svg>

      {/* Header */}
      <div className="text-center mb-14 md:mb-20 relative z-10">
        <h2 className="font-sans font-medium mb-4" style={{ color: "#095857", fontSize: "clamp(26px, 4vw, 50px)", lineHeight: "1.12", letterSpacing: "-1px" }}>
          How Lokam Works?
        </h2>
        <p className="text-center" style={{ color: "#000", fontSize: 20, lineHeight: "30px", fontWeight: 500 }}>
          Two workflows. One system. Zero missed opportunities.
        </p>
      </div>

      <HowItWorksCards />
    </section>
  );
}
