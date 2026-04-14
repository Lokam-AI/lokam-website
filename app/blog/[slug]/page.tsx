import { notFound } from "next/navigation";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { blogPosts, getPostBySlug, CHIP_STYLES } from "../../../lib/blog-posts";

// ─── Static params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const chip = CHIP_STYLES[post.category] ?? { bg: "#E8F5F2", color: "#0C8074" };

  return (
    <>
      <Nav />
      <main
        style={{
          background:
            "linear-gradient(to bottom, rgba(25,171,141,0.06) 0%, #ffffff 320px)",
        }}
      >
        {/* ── Hero ── */}
        <section className="max-w-[780px] mx-auto px-4 md:px-8 pt-14 pb-10">
          <div className="flex items-center gap-3 mb-5">
            <span
              className="inline-block text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full font-sans"
              style={{ background: chip.bg, color: chip.color }}
            >
              {post.category}
            </span>
            <span className="font-sans text-xs text-[#8AADA8]">
              {post.date} · {post.readTime}
            </span>
          </div>

          <h1
            className="font-display font-bold text-[#0D1B2A] mb-5"
            style={{
              fontSize: "clamp(26px, 4vw, 46px)",
              lineHeight: "1.1",
              letterSpacing: "-1.5px",
            }}
          >
            {post.title}
          </h1>

          <p className="font-sans text-base md:text-lg leading-8 text-[#4A6B68] mb-8">
            {post.intro}
          </p>

          {/* Key Takeaways */}
          <div
            className="rounded-2xl p-5 sm:p-6 mb-2"
            style={{ background: "#F4FBF9", border: "1px solid #C8E8E0" }}
          >
            <p className="font-sans font-semibold text-sm uppercase tracking-widest mb-3" style={{ color: "#0C8074" }}>
              Key Takeaways
            </p>
            <ul className="flex flex-col gap-2.5">
              {post.keyTakeaways.map((t) => (
                <li key={t} className="flex items-start gap-2.5">
                  <span
                    className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                    style={{ background: "#0CB4A7" }}
                  />
                  <span className="font-sans text-sm leading-6 text-[#1A2E2B]">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="max-w-[780px] mx-auto px-4 md:px-8">
          <div className="h-px" style={{ background: "#E2F0EE" }} />
        </div>

        {/* ── Body ── */}
        <article className="max-w-[780px] mx-auto px-4 md:px-8 py-10">
          {post.sections.map((section) => (
            <section key={section.heading} className="mb-10">
              <h2
                className="font-display font-bold text-[#0A2E2B] mb-4"
                style={{
                  fontSize: "clamp(18px, 2.5vw, 24px)",
                  letterSpacing: "-0.5px",
                }}
              >
                {section.heading}
              </h2>

              {section.paragraphs.map((para, i) => (
                <p
                  key={i}
                  className="font-sans text-base leading-8 text-[#2E4A48] mb-4"
                >
                  {para}
                </p>
              ))}

              {section.pullQuote && (
                <blockquote
                  className="my-6 pl-5 py-1"
                  style={{ borderLeft: "3px solid #0CB4A7" }}
                >
                  <p
                    className="font-sans font-medium text-base md:text-lg leading-7"
                    style={{ color: "#0A3530" }}
                  >
                    &ldquo;{section.pullQuote}&rdquo;
                  </p>
                </blockquote>
              )}
            </section>
          ))}

          {/* Conclusion */}
          <div
            className="rounded-2xl p-5 sm:p-7 mt-4"
            style={{ background: "#F4FBF9", border: "1px solid #C8E8E0" }}
          >
            <p className="font-sans font-semibold text-sm uppercase tracking-widest mb-3" style={{ color: "#0C8074" }}>
              Bottom Line
            </p>
            <p className="font-sans text-base leading-8 text-[#1A2E2B]">
              {post.conclusion}
            </p>
          </div>
        </article>

        {/* ── CTA ── */}
        <section className="px-4 md:px-8 pb-16">
          <div
            className="max-w-[780px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 rounded-2xl px-5 sm:px-8 py-6"
            style={{ background: "#0A3530" }}
          >
            <div>
              <p
                className="font-sans font-bold text-white"
                style={{ fontSize: "clamp(15px, 2vw, 18px)" }}
              >
                See Lokam in action at your dealership.
              </p>
              <p
                className="font-sans text-xs mt-1"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                Live in under 4 hours · No IT required.
              </p>
            </div>
            <a
              href="https://calendly.com/saleeq-lokam/30-minutes-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full font-sans font-semibold text-sm text-white whitespace-nowrap transition-all duration-200 hover:scale-[1.03] hover:brightness-110 active:scale-[0.98]"
              style={{
                background: "#009589",
                boxShadow: "0 0 20px 6px rgba(0,149,137,0.45)",
              }}
            >
              Book a Demo →
            </a>
          </div>
        </section>

        {/* ── Back to blog ── */}
        <div className="max-w-[780px] mx-auto px-4 md:px-8 pb-14">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 font-sans text-sm font-medium"
            style={{ color: "#0CB4A7" }}
          >
            ← Back to all articles
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
