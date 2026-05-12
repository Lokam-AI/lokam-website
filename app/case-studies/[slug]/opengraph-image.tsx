import { ImageResponse } from "next/og";
import { caseStudies, CHIP } from "../../../lib/case-studies";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export default function OgImage({ params }: { params: { slug: string } }) {
  const cs = caseStudies.find((c) => c.slug === params.slug);
  if (!cs) return new ImageResponse(<div>Not found</div>);

  const chipStyle = CHIP[cs.badge] ?? { bg: "#E0F7F4", color: "#0C8074" };
  const topStats = cs.heroStats.slice(0, 3);

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #00988B 0%, #00D3BD 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div
            style={{
              color: "rgba(255,255,255,0.9)",
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: 5,
              textTransform: "uppercase",
            }}
          >
            LOKAM
          </div>
          <div
            style={{
              background: "rgba(255,255,255,0.2)",
              color: "#ffffff",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: "uppercase",
              padding: "6px 14px",
              borderRadius: 24,
            }}
          >
            Case Study
          </div>
        </div>

        <div
          style={{
            color: "#ffffff",
            fontSize: cs.title.length > 70 ? 36 : 46,
            fontWeight: 700,
            lineHeight: 1.2,
            maxWidth: 900,
          }}
        >
          {cs.title}
        </div>

        <div style={{ display: "flex", gap: 24 }}>
          {topStats.map((stat) => (
            <div
              key={stat.label}
              style={{
                background: "rgba(255,255,255,0.18)",
                borderRadius: 16,
                padding: "20px 28px",
                display: "flex",
                flexDirection: "column",
                gap: 6,
                minWidth: 180,
              }}
            >
              <div style={{ color: "#ffffff", fontSize: 36, fontWeight: 700, lineHeight: 1 }}>
                {stat.value}
              </div>
              <div style={{ color: "rgba(255,255,255,0.8)", fontSize: 14, fontWeight: 600 }}>
                {stat.label}
              </div>
              {stat.sub && (
                <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 13 }}>{stat.sub}</div>
              )}
            </div>
          ))}
          <div style={{ flex: 1 }} />
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              color: "rgba(255,255,255,0.5)",
              fontSize: 16,
            }}
          >
            lokam.ai
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
