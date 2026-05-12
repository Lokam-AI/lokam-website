"use client";
import { useState } from "react";
import { blogPosts, CHIP_STYLES } from "../../lib/blog-posts";

const POSTS_PER_PAGE = 6;

const CATEGORIES = ["All", "Service & CSI", "Sales & BDC", "AI Automations", "Industry Reads"];

function matchesCategory(category: string, filter: string): boolean {
  if (filter === "All") return true;
  if (filter === "Service & CSI") return category === "SERVICES & CSI";
  if (filter === "Sales & BDC") return category === "SALES & BDC";
  if (filter === "AI Automations") return category === "AI AUTOMATIONS";
  if (filter === "Industry Reads") return category === "RECENT NEWS";
  return false;
}

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

function BlogCard({ post }: { post: typeof blogPosts[number] }) {
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
          href={`/blog/${post.slug}`}
          className="font-sans text-sm font-medium text-[#0CB4A7] hover:underline"
        >
          Read →
        </a>
      </div>
    </article>
  );
}

export default function BlogFilter() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const [subStatus, setSubStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [trap, setTrap] = useState("");
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || subStatus === "loading") return;
    setSubStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, trap }),
      });
      const json = await res.json();
      setSubStatus(json.success ? "success" : "error");
      if (json.success) setEmail("");
    } catch {
      setSubStatus("error");
    }
  };

  const filteredPosts = blogPosts.filter((p) => {
    const q = query.trim().toLowerCase();
    const matchesCat = matchesCategory(p.category, activeCategory);
    const matchesQuery = !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q);
    return matchesCat && matchesQuery;
  });

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setVisibleCount(POSTS_PER_PAGE);
  };

  const handleQueryChange = (q: string) => {
    setQuery(q);
    setVisibleCount(POSTS_PER_PAGE);
  };

  return (
    <>
      {/* Search */}
      <div className="px-4 pb-4 flex justify-center">
        <div
          className="flex items-center gap-2 rounded-xl px-4 py-2.5 bg-white max-w-sm w-full"
          style={{ border: "1px solid #C8E8E0", boxShadow: "0 2px 8px rgba(12,176,162,0.1)" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8AADA8" strokeWidth="2" strokeLinecap="round">
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Search articles..."
            value={query}
            onChange={(e) => handleQueryChange(e.target.value)}
            className="flex-1 bg-transparent text-sm font-sans text-[#0A2E2B] placeholder-[#8AADA8] outline-none"
          />
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 pb-20">
        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 mb-8 scrollbar-hide">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
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

        {/* Blog Grid */}
        {visiblePosts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {visiblePosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>

            {hasMore && (
              <div className="flex justify-center mt-10">
                <button
                  onClick={() => setVisibleCount((c) => c + POSTS_PER_PAGE)}
                  className="px-8 py-3 rounded-xl font-sans font-medium text-sm transition-colors"
                  style={{ background: "#F0FBF9", color: "#0C8074", border: "1px solid #C8E8E0" }}
                >
                  Load more articles
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 gap-2">
            <p className="font-sans font-semibold text-[#0A2E2B]" style={{ fontSize: 16 }}>
              No articles found.
            </p>
            <p className="font-sans text-sm text-[#8AADA8]">
              Try a different search term or category.
            </p>
          </div>
        )}
      </div>

      {/* Newsletter CTA */}
      <section className="py-16 px-4" style={{ background: "#F4FBF9" }}>
        <div className="max-w-[560px] mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 font-sans text-xs font-semibold tracking-widest uppercase"
            style={{ background: "#E0F7F4", color: "#0C8074" }}
          >
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
          {subStatus === "success" ? (
            <p className="font-sans text-sm font-semibold text-[#0CB4A7] mt-2">
              You&apos;re subscribed - talk soon.
            </p>
          ) : (
            <form
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 mx-auto w-full"
              style={{ maxWidth: 420 }}
              onSubmit={handleSubscribe}
            >
              {/* Honeypot */}
              <input
                type="text"
                name="website"
                value={trap}
                onChange={(e) => setTrap(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0 }}
              />
              <div
                className="flex items-center gap-2 rounded-xl px-3 py-2 bg-white flex-1"
                style={{ border: "1px solid #C8E8E0", boxShadow: "0 2px 12px rgba(12,176,162,0.1)" }}
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent text-sm font-sans text-[#0A2E2B] placeholder-[#8AADA8] outline-none px-2 py-1.5"
                />
              </div>
              <button
                type="submit"
                disabled={subStatus === "loading"}
                className="flex-shrink-0 px-5 py-3 sm:py-2 rounded-xl sm:rounded-lg font-sans font-semibold text-sm text-white disabled:opacity-60"
                style={{ background: "#0CB4A7" }}
              >
                {subStatus === "loading" ? "..." : "Subscribe →"}
              </button>
            </form>
          )}
          {subStatus === "error" && (
            <p className="font-sans text-xs text-red-500 mt-2">Something went wrong - please try again.</p>
          )}
          <p className="font-sans text-xs text-[#8AADA8] mt-3">
            Join 1,200+ dealer principals and GMs already subscribed.
          </p>
        </div>
      </section>
    </>
  );
}
