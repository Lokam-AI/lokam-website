import { ImageResponse } from "next/og";
import { blogPosts, CHIP_STYLES } from "../../../lib/blog-posts";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function OgImage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return new ImageResponse(<div>Not found</div>);

  const chipStyle = CHIP_STYLES[post.category] ?? { bg: "#E0F7F4", color: "#0C8074" };

  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A3530",
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
              color: "#00D3BD",
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
              background: chipStyle.bg,
              color: chipStyle.color,
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: "uppercase",
              padding: "6px 14px",
              borderRadius: 24,
            }}
          >
            {post.category}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              color: "#ffffff",
              fontSize: post.title.length > 60 ? 42 : 52,
              fontWeight: 700,
              lineHeight: 1.15,
              maxWidth: 900,
            }}
          >
            {post.title}
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: 20,
              lineHeight: 1.5,
              maxWidth: 800,
            }}
          >
            {post.excerpt.length > 120 ? post.excerpt.slice(0, 117) + "…" : post.excerpt}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 16 }}>
            {post.date} · {post.readTime}
          </div>
          <div style={{ color: "rgba(255,255,255,0.3)", fontSize: 16 }}>lokam.ai/blog</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
