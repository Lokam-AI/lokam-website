"use client";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="relative bg-white overflow-hidden py-20 md:py-28">
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
          fill="url(#paint0_radial_cta)"
          fillOpacity="0.13"
        />
        <defs>
          <radialGradient
            id="paint0_radial_cta"
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

      <div className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-8">
        {/* Heading */}
        <h2
          className="font-sans font-medium text-center mb-12"
          style={{ color: "#095857", fontSize: "clamp(26px, 4vw, 50px)", lineHeight: "1.12", letterSpacing: "-1px" }}
        >
          We&apos;d Love To Hear From You
        </h2>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">

          {/* Left — contact cards */}
          <div className="flex flex-col gap-4">
            {/* Email */}
            <div
              className="bg-white rounded-2xl px-6 py-5 flex items-center gap-4"
              style={{ border: "1px solid #e5e7eb", boxShadow: "0 8px 32px rgba(0,134,109,0.35)" }}
            >
              <div
                className="flex-shrink-0 flex items-center justify-center rounded-xl"
                style={{ width: 44, height: 44, backgroundColor: "#edf7f5", border: "1px solid #c6ede6" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00866D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <span className="font-sans text-[15px] flex-1" style={{ color: "#00866D" }}>founder@lokam.ai</span>
              <a
                href="mailto:founder@lokam.ai"
                className="flex-shrink-0 flex items-center justify-center rounded-lg text-white text-sm font-medium font-sans transition-opacity hover:opacity-90"
                style={{ width: 100, height: 40, background: "linear-gradient(to right, #4DA28C, #418E7A)" }}
              >
                Email Us
              </a>
            </div>

            {/* Phone */}
            <div
              className="bg-white rounded-2xl px-6 py-5 flex items-center gap-4"
              style={{ border: "1px solid #e5e7eb", boxShadow: "0 8px 32px rgba(0,134,109,0.35)" }}
            >
              <div
                className="flex-shrink-0 flex items-center justify-center rounded-xl"
                style={{ width: 44, height: 44, backgroundColor: "#edf7f5", border: "1px solid #c6ede6" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00866D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.09 6.09l1.06-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <span className="font-sans text-[15px] flex-1" style={{ color: "#00866D" }}>+19809446263</span>
              <a
                href="tel:+19809446263"
                className="flex-shrink-0 flex items-center justify-center rounded-lg text-white text-sm font-medium font-sans transition-opacity hover:opacity-90"
                style={{ width: 100, height: 40, background: "linear-gradient(to right, #4DA28C, #418E7A)" }}
              >
                Call Us
              </a>
            </div>
          </div>

          {/* Right — CTA card */}
          <div
            className="bg-white rounded-2xl px-8 py-8 flex flex-col justify-between"
            style={{ border: "1px solid #e5e7eb", boxShadow: "0 8px 32px rgba(0,134,109,0.35)" }}
          >
            <div>
              <h3 className="font-sans font-semibold text-[20px] leading-snug text-[#111827] mb-3 text-center">
                Ready To Transform Your<br />Service Center With AI?
              </h3>
              <p className="font-sans text-sm text-[#6b7280] text-center mb-6">
                Join dealerships recovering $84K+ monthly with zero IT setup.
              </p>
            </div>
            <div>
              <a
                href="https://calendly.com/saleeq-lokam/30-minutes-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full rounded-xl text-white text-[15px] font-medium font-sans py-4 transition-opacity hover:opacity-90 mb-3"
                style={{ background: "linear-gradient(to right, #4DA28C, #418E7A)", boxShadow: "0 0 16px rgba(77,162,140,0.4)" }}
              >
                Book a Demo
                <ArrowRight size={15} />
              </a>
              <p className="font-sans text-xs text-[#9ca3af] text-center">
                Live in under 4 hours · No commitment
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
