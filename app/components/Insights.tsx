import Image from "next/image";

export default function Insights() {
  return (
    <section className="relative bg-white overflow-hidden py-20 md:py-28">
      {/* Radial gradient background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1431 1159"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <path
          d="M1431 1159H0V0H1431V1159Z"
          fill="url(#paint0_radial_insights)"
          fillOpacity="0.13"
        />
        <defs>
          <radialGradient
            id="paint0_radial_insights"
            cx="0" cy="0" r="1"
            gradientTransform="matrix(196.578 -1361.8 1439.22 555.5 594.014 953.088)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="0.487941" stopColor="white" />
            <stop offset="0.713185" stopColor="#0CB0A2" />
            <stop offset="1" stopColor="#C5FDFF" />
          </radialGradient>
        </defs>
      </svg>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-8">
        {/* Heading */}
        <h2
          className="font-sans font-medium text-center mb-14 md:mb-20"
          style={{ color: "#095857", fontSize: "clamp(26px, 4vw, 50px)", lineHeight: "1.12", letterSpacing: "-1px" }}
        >
          Insight To Win Back Customers<br />and Close More Deals
        </h2>

        {/* Dashboard image */}
        <div className="flex justify-center">
          <Image
            src="/assets/dashboard.png"
            alt="Lokam dashboard showing customer insights and deal analytics"
            width={1051}
            height={600}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1051px"
            className="w-full max-w-[1051px] h-auto rounded-2xl"
            style={{ boxShadow: "0 0 60px rgba(17, 112, 98, 0.4), 0 20px 60px rgba(0, 0, 0, 0.15)" }}
          />
        </div>
      </div>
    </section>
  );
}
