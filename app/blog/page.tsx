"use client";
import { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

// ─── Data ────────────────────────────────────────────────────────────────────

const featuredPost = {
  tag: "CSI Calls",
  title: "How Metro Toyota Added $84,000/Month Using Lokam's AI CSI Follow-Up",
  excerpt:
    "Within 90 days of deployment, Metro Toyota recovered more than $84k from improved CSI outcomes, with a significant lift in Google reviews and repeat service visits.",
  date: "Jan 2026",
  readTime: "5 min read",
  href: "#",
  stats: [
    { value: "52%",  label: "Contact Rate (Before)",         sub: "industry avg" },
    { value: "91%", label: "Contact Rate (After)", sub: "+39 pts" },
    { value: "38", label: "At-Risk Customers Recovered", sub: "first month" },
    { value: "$84k", label: "Monthly Revenue Added", sub: "per month" },
  ],
};

type Post = {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  href: string;
};

const posts: Post[] = [
  {
    category: "SERVICES & CSI",
    title: "Why Your BDC Is Losing Customers Before the Workday Even Starts",
    excerpt:
      "Late response times are silently costing dealerships leads, deals, and reputation — and most stores don't know it's happening.",
    date: "Jan 2026",
    readTime: "4 min read",
    href: "#",
  },
  {
    category: "SERVICES & CSI",
    title: "The Hidden Cost of a Single Missed CSI Call",
    excerpt:
      "A missed CSI call isn't just a missed survey — it's a negative review waiting to happen and a customer walking to your competitor.",
    date: "Jan 2026",
    readTime: "3 min read",
    href: "#",
  },
  {
    category: "SALES & BDC",
    title: "What Unsold Customers Actually Want to Hear (And When)",
    excerpt:
      "Most dealerships follow up too late, too generically, or not at all. Here's what actually moves the needle on unsold desklog re-engagement.",
    date: "Feb 2026",
    readTime: "5 min read",
    href: "#",
  },
  {
    category: "RECENT NEWS",
    title: "NADA 2026: The 5 Biggest Themes for Fixed Ops and BDC Leaders",
    excerpt:
      "From AI-driven follow-up to electrification headwinds, here's what dealership operators were talking about on the show floor.",
    date: "Feb 2026",
    readTime: "6 min read",
    href: "#",
  },
  {
    category: "SERVICES & CSI",
    title: "Multilingual Customers, Monolingual Dealerships: The NADA Gap",
    excerpt:
      "A surprising number of dealerships are losing service retention among Spanish-speaking customers simply because no one calls them back in their language.",
    date: "Feb 2026",
    readTime: "4 min read",
    href: "#",
  },
  {
    category: "AI AUTOMATIONS",
    title: "Branded Caller ID: The Single Biggest Lever for Contact Rate",
    excerpt:
      "Contact rates double when customers see the dealership name on their phone. Here's the simple change that separates top performers from the rest.",
    date: "Mar 2026",
    readTime: "3 min read",
    href: "#",
  },
];

const CATEGORIES = ["All", "Service & CSI", "Sales & BDC", "AI Automations", "Industry Reads", "Case Studies"];

const CHIP_STYLES: Record<string, { bg: string; color: string }> = {
  "SERVICES & CSI":  { bg: "#D6F5EF", color: "#0C8074" },
  "SALES & BDC":     { bg: "#D6EBF5", color: "#1B6A8A" },
  "AI AUTOMATIONS":  { bg: "#E8E4FA", color: "#5A4FC0" },
  "RECENT NEWS":     { bg: "#FFF0D4", color: "#9A6200" },
};

// ─── Components ──────────────────────────────────────────────────────────────

function CategoryChip({ label }: { label: string }) {
  const s = CHIP_STYLES[label] ?? { bg: "#E8F5F2", color: "#0C8074" };
  return (
    <span
      className="inline-block text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full font-sans"
      style={{ background: s.bg, color: s.color }}
    >
      {label}
    </span>
  );
}

function BlogCard({ post }: { post: Post }) {
  return (
    <article
      className="flex flex-col rounded-2xl bg-white p-6 gap-3 h-full"
      style={{ border: "1px solid #C8E8E0", boxShadow: "0 2px 12px rgba(12,176,162,0.07)" }}
    >
      <CategoryChip label={post.category} />
      <h3
        className="font-sans font-semibold leading-snug text-[#0A2E2B]"
        style={{ fontSize: 17 }}
      >
        {post.title}
      </h3>
      <p className="font-sans text-sm leading-6 text-[#4A6B68] flex-1">
        {post.excerpt}
      </p>
      <div className="flex items-center justify-between pt-2 mt-auto border-t border-[#E2F0EE]">
        <span className="font-sans text-xs text-[#8AADA8]">
          {post.date} · {post.readTime}
        </span>
        <a
          href={post.href}
          className="font-sans text-sm font-medium text-[#0CB4A7] hover:underline"
        >
          Read →
        </a>
      </div>
    </article>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [email, setEmail] = useState("");

  return (
    <>
      <Nav />
      <main className="bg-white">

        {/* ── Hero ── */}
        <section className="pt-16 pb-12 text-center px-4">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 font-sans text-xs font-semibold tracking-widest uppercase"
            style={{ background: "#E0F7F4", color: "#0C8074" }}>
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

          {/* Search */}
          <div className="mt-8 mx-auto flex items-center gap-2 rounded-xl px-4 py-2.5 bg-white max-w-sm"
            style={{ border: "1px solid #C8E8E0", boxShadow: "0 2px 8px rgba(12,176,162,0.1)" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8AADA8" strokeWidth="2" strokeLinecap="round">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search articles..."
              className="flex-1 bg-transparent text-sm font-sans text-[#0A2E2B] placeholder-[#8AADA8] outline-none"
            />
          </div>
        </section>

        <div className="max-w-[1200px] mx-auto px-4 md:px-8 pb-20">

          {/* ── Featured Post ── */}
          <div
            className="rounded-3xl p-5 sm:p-7 md:p-10 mb-10"
            style={{ background: "linear-gradient(to bottom right, #00988B, #00D3BD)" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 lg:gap-12">
              {/* Left */}
              <div className="flex flex-col justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-5">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full font-sans"
                      style={{ background: "#0CB4A7", color: "#fff" }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      Featured
                    </span>
                    <span className="inline-block text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full font-sans"
                      style={{ background: "rgba(12,180,167,0.18)", color: "#5DE8DE" }}>
                      Case Study
                    </span>
                  </div>
                  <h2
                    className="font-sans font-semibold text-white leading-tight"
                    style={{ fontSize: "clamp(20px, 2.8vw, 32px)", letterSpacing: "-0.5px" }}
                  >
                    {featuredPost.title}
                  </h2>
                  <p className="font-sans text-sm leading-6 mt-3" style={{ color: "rgba(255,255,255,0.65)" }}>
                    {featuredPost.excerpt}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={featuredPost.href}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-sans font-semibold text-sm whitespace-nowrap"
                    style={{ background: "#fff", color: "#0A3530" }}
                  >
                    Read Case Study →
                  </a>
                  <span className="font-sans text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {featuredPost.date} · {featuredPost.readTime}
                  </span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">
                {featuredPost.stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl p-4 flex flex-col gap-1"
                    style={{ background: "#49D2C2" }}
                  >
                    <span className="font-sans font-bold text-white" style={{ fontSize: "clamp(20px, 5vw, 30px)" }}>
                      {s.value}
                    </span>
                    <span className="font-sans text-xs leading-4 text-white font-medium">
                      {s.label}
                    </span>
                    <span className="font-sans text-xs leading-4" style={{ color: "rgba(255,255,255,0.7)" }}>
                        {s.sub}
                      </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Category Tabs ── */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 mb-8 scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="flex-shrink-0 px-4 py-2 rounded-full font-sans font-medium text-sm transition-colors"
                style={
                  activeCategory === cat
                    ? { background: "#0A3530", color: "#fff" }
                    : { background: "#F0F9F7", color: "#4A6B68", border: "1px solid #C8E8E0" }
                }
              >
                {cat}
              </button>
            ))}
          </div>

          {/* ── Blog Grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((post) => (
              <BlogCard key={post.title} post={post} />
            ))}
          </div>
        </div>

        {/* ── Newsletter CTA ── */}
        <section className="py-16 px-4" style={{ background: "#F4FBF9" }}>
          <div className="max-w-[560px] mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 font-sans text-xs font-semibold tracking-widest uppercase"
              style={{ background: "#E0F7F4", color: "#0C8074" }}>
              Newsletter
            </div>
            <h2
              className="font-sans font-medium mb-3"
              style={{ fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.8px", color: "#0A2E2B", lineHeight: "1.15" }}
            >
              Stay Ahead of the Curve
            </h2>
            <p className="font-sans text-sm md:text-base text-[#4A6B68] mb-8">
              Get the latest dealer insights, AI news, and Lokam case studies delivered to your inbox every two weeks. No spam.
            </p>
            <form
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 mx-auto w-full"
              style={{ maxWidth: 420 }}
              onSubmit={(e) => e.preventDefault()}
            >
              <div
                className="flex items-center gap-2 rounded-xl px-3 py-2 bg-white flex-1"
                style={{ border: "1px solid #C8E8E0", boxShadow: "0 2px 12px rgba(12,176,162,0.1)" }}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent text-sm font-sans text-[#0A2E2B] placeholder-[#8AADA8] outline-none px-2 py-1.5"
                />
              </div>
              <button
                type="submit"
                className="flex-shrink-0 px-5 py-3 sm:py-2 rounded-xl sm:rounded-lg font-sans font-semibold text-sm text-white"
                style={{ background: "#0CB4A7" }}
              >
                Subscribe →
              </button>
            </form>
            <p className="font-sans text-xs text-[#8AADA8] mt-3">
              Join 1,200+ dealer principals and GMs already subscribed.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
