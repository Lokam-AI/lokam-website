import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import BlogFilter from "../components/BlogFilter";

export const metadata: Metadata = {
  title: "Dealer Insights & Automotive AI Blog | Lokam",
  description:
    "Strategies, data, and real-world case studies to help your dealership recover more revenue from service retention and sales follow-up.",
  alternates: { canonical: "https://lokam-website.vercel.app/blog" },
  openGraph: {
    title: "Dealer Insights & Automotive AI Blog | Lokam",
    description:
      "Strategies, data, and real-world case studies to help your dealership recover more revenue from service retention and sales follow-up.",
    url: "https://lokam-website.vercel.app/blog",
    type: "website",
    siteName: "Lokam",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dealer Insights & Automotive AI Blog | Lokam",
    description:
      "Strategies, data, and real-world case studies to help your dealership recover more revenue.",
  },
};

export default function BlogPage() {
  return (
    <>
      <Nav />
      <main className="bg-white">

        {/* ── Hero ── */}
        <section className="pt-16 pb-8 text-center px-4">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 font-sans text-xs font-semibold tracking-widest uppercase"
            style={{ background: "#E0F7F4", color: "#0C8074" }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
            Lokam Insights
          </div>

          <h1
            className="font-display font-bold mx-auto"
            style={{
              fontSize: "clamp(28px, 4.5vw, 56px)",
              lineHeight: "1.08",
              letterSpacing: "-1.5px",
              color: "#0D1B2A",
              maxWidth: 680,
            }}
          >
            Built for Dealers.{" "}
            <span style={{ display: "inline", backgroundImage: "linear-gradient(to right, #00988B, #00D3BD)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", color: "transparent" }}>Written by Experts.</span>
          </h1>

          <p className="font-sans text-base md:text-lg text-[#4A6B68] mt-4 mx-auto" style={{ maxWidth: 520 }}>
            Strategies, data, and real-world case studies to help your dealership recover more revenue — from service and sales.
          </p>
        </section>

        <BlogFilter />

      </main>
      <Footer />
    </>
  );
}
