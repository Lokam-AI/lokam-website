"use client";
import Image from "next/image";

// Figma node 2077:4748 — "Logo cloud"
// Overlaps hero bottom: hero minH=1140, logo cloud absY=961 → marginTop=-179
// Trusted By: top=113 (heading), top=183 (subtitle), top=285 (logos), gap=126px
// Integrates With: top=517 (heading), top=649 (logos), gap=123px

const trustedLogos = [
  { src: "/assets/logo-trusted-1.png", alt: "Trusted partner 1", w: 132, h: 26 },
  { src: "/assets/logo-trusted-2.png", alt: "Trusted partner 2", w: 123, h: 32 },
  { src: "/assets/logo-trusted-3.png", alt: "Trusted partner 3", w: 148, h: 34 },
  { src: "/assets/logo-trusted-4.png", alt: "Trusted partner 4", w: 168, h: 20 },
  { src: "/assets/logo-trusted-5.png", alt: "Trusted partner 5", w: 101, h: 34 },
];

const integratesLogos = [
  { src: "/assets/logo-integrates-1.png", alt: "CDK Global",      w: 132, h: 26 },
  { src: "/assets/logo-integrates-2.png", alt: "Reynolds",        w: 123, h: 32 },
  { src: "/assets/logo-integrates-3.png", alt: "DealerSocket",    w: 148, h: 34 },
  { src: "/assets/logo-integrates-4.png", alt: "VinSolutions",    w: 168, h: 20 },
  { src: "/assets/logo-integrates-5.png", alt: "TEKION",          w: 101, h: 34 },
];

export default function LogoCloud() {
  return (
    <section style={{ position: "relative", zIndex: 1 }}>

      {/* ── Trusted By ────────────────────────────────────────────────────── */}
      {/* background:white is the base layer — trusted-by-bg.svg is fill-opacity=0.55 (semi-transparent) */}
      <div style={{ position: "relative", width: "100%", overflow: "hidden", background: "white" }}>

        {/* Radial gradient overlay */}
        <img
          src="/assets/trusted-by-bg.svg"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* Inner container — maxWidth 1166, white-opacity side borders */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 1166,
            margin: "0 auto",
            borderLeft:   "1px solid rgba(255,255,255,0.12)",
            borderRight:  "1px solid rgba(255,255,255,0.12)",
            borderBottom: "1px solid rgba(255,255,255,0.12)",
            paddingTop: 113,
            paddingBottom: 60,
          }}
        >
          {/* Heading */}
          <h2
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 500,
              fontSize: 36,
              lineHeight: "52px",
              color: "#00483a",
              textAlign: "center",
              margin: 0,
            }}
          >
            Trusted By
          </h2>

          {/* Subtitle — top=183, heading bottom≈165 → gap≈18px */}
          <p
            style={{
              fontFamily: "var(--font-jakarta)",
              fontWeight: 400,
              fontSize: 24,
              lineHeight: "26px",
              letterSpacing: "0.72px",
              color: "#00483a",
              textAlign: "center",
              margin: "18px 0 0",
            }}
          >
            Customer - First Dealerships
          </p>

          {/* Logo row — top=285, subtitle bottom≈209 → mt=76px, gap=126px */}
          <div
            style={{
              marginTop: 76,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 126,
              height: 48,
            }}
          >
            {trustedLogos.map((logo, i) => (
              <div
                key={i}
                style={{ width: logo.w, height: logo.h, flexShrink: 0, position: "relative" }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Integrates With ───────────────────────────────────────────────── */}
      <div style={{ background: "#085856", paddingTop: 60, paddingBottom: 72 }}>
        <div style={{ maxWidth: 1166, margin: "0 auto" }}>

          {/* Heading */}
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 500,
              fontSize: 32,
              lineHeight: "52px",
              color: "white",
              textAlign: "center",
              margin: "0 0 79px",
            }}
          >
            Integrates with Your Dealership Tools
          </p>

          {/* Logo row — gap=123px */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 123,
              height: 48,
            }}
          >
            {integratesLogos.map((logo, i) => (
              <div
                key={i}
                style={{ width: logo.w, height: logo.h, flexShrink: 0, position: "relative" }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  style={{ objectFit: "contain", filter: "brightness(0) invert(1)", opacity: 0.65 }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
