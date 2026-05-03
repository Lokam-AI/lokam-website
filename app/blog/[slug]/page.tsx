import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { blogPosts, getPostBySlug, CHIP_STYLES } from "../../../lib/blog-posts";

const SITE_URL = "https://lokam-website.vercel.app";

// ─── Static params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    title: `${post.title} | Lokam`,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
      siteName: "Lokam",
      images: [
        {
          url: `${SITE_URL}/assets/car.jpg`,
          width: 2560,
          height: 1911,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`${SITE_URL}/assets/car.jpg`],
    },
  };
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const MONTH_MAP: Record<string, string> = {
  Jan: "01", Feb: "02", Mar: "03", Apr: "04", May: "05", Jun: "06",
  Jul: "07", Aug: "08", Sep: "09", Oct: "10", Nov: "11", Dec: "12",
};

function toISODate(humanDate: string): string {
  const [month, year] = humanDate.split(" ");
  return `${year}-${MONTH_MAP[month] ?? "01"}-01`;
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
  const postUrl = `${SITE_URL}/blog/${post.slug}`;
  const isoDate = toISODate(post.date);

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_URL}/assets/car.jpg`,
    url: postUrl,
    datePublished: isoDate,
    dateModified: isoDate,
    author: {
      "@type": "Person",
      name: "Saleeq",
      jobTitle: "Co-founder & CEO",
      worksFor: { "@type": "Organization", name: "Lokam", url: SITE_URL },
      url: `${SITE_URL}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: "Lokam",
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    articleBody: [
      post.intro,
      ...post.sections.flatMap((s) => s.paragraphs),
      post.conclusion,
    ].join(" "),
    articleSection: post.category,
    keywords: ["automotive dealership", "voice AI", "CSI calls", "BDC", post.category.toLowerCase()],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: postUrl },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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

          {/* Author + date */}
          <div className="flex items-center gap-2.5 mb-5">
            <div
              className="flex-shrink-0 flex items-center justify-center rounded-full font-sans font-bold text-white text-xs"
              style={{ width: 28, height: 28, background: "linear-gradient(135deg, #00988B, #00D3BD)" }}
            >
              S
            </div>
            <div className="flex items-center gap-1.5 font-sans text-xs text-[#4A6B68]">
              <span>By</span>
              <Link href="/about" className="font-semibold" style={{ color: "#0CB4A7" }}>Saleeq</Link>
              <span>·</span>
              <span>Co-founder &amp; CEO, Lokam</span>
              <span>·</span>
              <time dateTime={isoDate}>{post.date}</time>
            </div>
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

        {/* ── Author bio ── */}
        <div
          className="max-w-[780px] mx-auto px-4 md:px-8 pt-2 pb-10"
        >
          <div
            className="flex items-start gap-4 rounded-2xl p-5"
            style={{ background: "#F4FBF9", border: "1px solid #C8E8E0" }}
          >
            <div
              className="flex-shrink-0 flex items-center justify-center rounded-full font-sans font-bold text-white"
              style={{ width: 44, height: 44, background: "linear-gradient(135deg, #00988B, #00D3BD)", fontSize: 18 }}
            >
              S
            </div>
            <div>
              <p className="font-sans font-semibold text-sm text-[#0A2E2B]">
                Saleeq —{" "}
                <span className="font-normal" style={{ color: "#39B39B" }}>Co-founder &amp; CEO, Lokam</span>
              </p>
              <p className="font-sans text-xs leading-6 text-[#4A6B68] mt-1">
                Previously built enterprise automation products. Focused on helping automotive dealerships recover revenue through AI-powered customer follow-up. <Link href="/about" style={{ color: "#0CB4A7" }}>Meet the full team →</Link>
              </p>
            </div>
          </div>
        </div>

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
                Plans tailored to your dealership · Book a demo to get started.
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

        {/* ── Internal links ── */}
        <div className="max-w-[780px] mx-auto px-4 md:px-8 pb-6">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/blog" className="inline-flex items-center gap-2 font-sans text-sm font-medium" style={{ color: "#0CB4A7" }}>
              ← Back to all articles
            </Link>
            <Link href="/case-studies" className="inline-flex items-center gap-1 font-sans text-sm font-medium" style={{ color: "#4A6B68" }}>
              See dealer case studies →
            </Link>
            <Link href="/#how-it-works" className="inline-flex items-center gap-1 font-sans text-sm font-medium" style={{ color: "#4A6B68" }}>
              How Lokam works →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
