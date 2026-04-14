export default function Results() {
  return (
    <section id="results" className="bg-white">
      {/* Divider */}
      <div className="max-w-[1330px] mx-auto px-[50px]">
        <div className="h-px" style={{ background: "#0000001a" }} />
      </div>

      {/* Full-width gradient */}
      <div className="relative w-full overflow-hidden" style={{ height: 296 }}>
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1429 984" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <path d="M1428.5 984H0V0H1428.5V984Z" fill="url(#paint0_radial_results)" fillOpacity="0.13"/>
          <defs>
            <radialGradient id="paint0_radial_results" cx="0" cy="0" r="1" gradientTransform="matrix(196.578 -1037.08 1439.22 423.043 591.514 879.828)" gradientUnits="userSpaceOnUse">
              <stop stopColor="white"/>
              <stop offset="0.487941" stopColor="white"/>
              <stop offset="0.713185" stopColor="#0CB0A2"/>
              <stop offset="1" stopColor="#C5FDFF"/>
            </radialGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}
