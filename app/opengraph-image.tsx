import { ImageResponse } from "next/og";

export const alt = "Lokam - Voice AI for Automotive Dealerships";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A3530",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            color: "#00D3BD",
            fontSize: 16,
            fontWeight: 700,
            letterSpacing: 5,
            marginBottom: 28,
            textTransform: "uppercase",
          }}
        >
          LOKAM
        </div>
        <div
          style={{
            color: "#ffffff",
            fontSize: 58,
            fontWeight: 700,
            lineHeight: 1.1,
            maxWidth: 820,
            marginBottom: 32,
          }}
        >
          Voice AI for Automotive Dealerships
        </div>
        <div
          style={{
            display: "flex",
            gap: 32,
          }}
        >
          {["200+ Dealers", "70% Contact Rate", "$2.4M+ Recovered"].map((stat) => (
            <div
              key={stat}
              style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: 18,
                borderLeft: "2px solid #00D3BD",
                paddingLeft: 16,
              }}
            >
              {stat}
            </div>
          ))}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 48,
            right: 80,
            color: "rgba(255,255,255,0.3)",
            fontSize: 18,
          }}
        >
          lokam.ai
        </div>
      </div>
    ),
    { ...size }
  );
}
