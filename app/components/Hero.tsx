"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section style={{ background: "white" }}>

      {/* ── Car + content: car overlaid with text ── */}
      <div style={{ position: "relative" }}>

        {/* Car image — crop 122px from top (white studio gap) */}
        <div style={{ overflow: "hidden" }}>
          <Image
            src="/assets/car.png"
            alt=""
            width={4096}
            height={3058}
            style={{ width: "100%", height: "auto", display: "block", marginTop: -165 }}
            priority
          />
        </div>

        {/* Content overlaid on top of car */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            paddingTop: 35,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Badge */}
          <div style={{ position: "relative", display: "inline-flex" }}>
            <div
              style={{
                position: "absolute",
                inset: -5,
                borderRadius: 105,
                background:
                  "linear-gradient(90deg, rgba(47,115,137,0.5) 0%, rgba(58,165,197,0.4) 50%, rgba(66,197,219,0.5) 100%)",
                filter: "blur(8px)",
              }}
            />
            <div
              style={{
                position: "relative",
                height: 32,
                borderRadius: 100,
                background: "white",
                boxShadow:
                  "0px 1px 2px rgba(0,0,0,0.06), 0px 4px 8px rgba(0,0,0,0.06), 0px 10px 16px rgba(0,0,0,0.04)",
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "0 14px 0 8px",
              }}
            >
              <div style={{ position: "relative", width: 20, height: 20, flexShrink: 0 }}>
                <img
                  src="/assets/Icon.svg"
                  alt=""
                  style={{ position: "absolute", width: 20, height: 20, left: 1.5, top: 1.5 }}
                />
                <img
                  src="/assets/Icon-small.svg"
                  alt=""
                  style={{ position: "absolute", width: 20, height: 20, left: -1, top: -1 }}
                />
              </div>
              <span
                style={{
                  fontFamily: "var(--font-jakarta)",
                  fontWeight: 500,
                  fontSize: 13.5,
                  lineHeight: "20px",
                  color: "#272727",
                  whiteSpace: "nowrap",
                }}
              >
                Voice AI follow up for dealerships.
              </span>
            </div>
          </div>

          {/* H1 */}
          <h1
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 500,
              fontSize: "clamp(32px, 3.5vw, 50px)",
              lineHeight: 1.06,
              letterSpacing: "-1px",
              color: "#085856",
              textAlign: "center",
              margin: "25px 0 0",
              width: "min(760px, 90vw)",
            }}
          >
            Sell More Cars &amp; Increase
            <br />
            service retention
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: "var(--font-jakarta)",
              fontWeight: 500,
              fontSize: 20,
              lineHeight: "30px",
              color: "#000000",
              textAlign: "center",
              margin: "18px 0 0",
              width: "min(656px, 90vw)",
            }}
          >
            Lokam calls all your customers after a service or showroom visit
            and flags issues before they cost you the sale or relationship.
          </p>

          {/* CTAs */}
          <div
            style={{
              marginTop: 30,
              display: "flex",
              gap: 16,
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="#contact"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 165,
                height: 50,
                background: "#307d93",
                borderRadius: 8,
                fontFamily: "var(--font-inter)",
                fontWeight: 500,
                fontSize: 15.6,
                color: "white",
                textDecoration: "none",
                flexShrink: 0,
              }}
            >
              Book a demo
            </a>
            <a
              href="#roi"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 197,
                height: 50,
                border: "2px solid #307d93",
                borderRadius: 8,
                fontFamily: "var(--font-inter)",
                fontWeight: 500,
                fontSize: 15.6,
                color: "#307d93",
                textDecoration: "none",
                flexShrink: 0,
              }}
            >
              Calculate your ROI
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
