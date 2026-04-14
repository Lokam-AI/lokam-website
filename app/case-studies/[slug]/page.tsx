import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { caseStudies, getStudyBySlug, CHIP } from "../../../lib/case-studies";

const SITE_URL = "https://lokam-website.vercel.app";

// ─── Static params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return caseStudies.map((s) => ({ slug: s.slug }));
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getStudyBySlug(slug);
  if (!cs) return {};

  const dealership = cs.meta.find((m) => m.label === "Dealership" || m.label === "Dealership Group")?.value ?? "";
  const description = `Case study: ${dealership} achieved ${cs.heroStats[0].value} ${cs.heroStats[0].label} using Lokam Voice AI.`;
  const url = `${SITE_URL}/case-studies/${cs.slug}`;

  return {
    title: `${cs.title} | Lokam`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: cs.title,
      description,
      url,
      type: "article",
      siteName: "Lokam",
    },
    twitter: {
      card: "summary_large_image",
      title: cs.title,
      description,
    },
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getStudyBySlug(slug);
  if (!cs) notFound();

  const studyUrl = `${SITE_URL}/case-studies/${cs.slug}`;
  const dealership = cs.meta.find((m) => m.label === "Dealership" || m.label === "Dealership Group")?.value ?? cs.slug;

  const deployedMeta = cs.meta.find((m) => m.label === "Deployed");
  const deployedDate = deployedMeta
    ? new Date(`01 ${deployedMeta.value}`).toISOString().split("T")[0]
    : "2024-01-01";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: cs.title,
    url: studyUrl,
    datePublished: deployedDate,
    dateModified: "2026-04-14",
    author: { "@type": "Organization", name: "Lokam", url: SITE_URL },
    publisher: { "@type": "Organization", name: "Lokam", url: SITE_URL },
    description: `Case study: ${dealership} achieved ${cs.heroStats[0].value} ${cs.heroStats[0].label} using Lokam Voice AI.`,
    mainEntityOfPage: { "@type": "WebPage", "@id": studyUrl },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Case Studies", item: `${SITE_URL}/case-studies` },
      { "@type": "ListItem", position: 3, name: dealership, item: studyUrl },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Nav />
      <main style={{ background: "linear-gradient(to bottom right, rgba(25, 171, 141, 0.1) 20%, #ffffff 80%)" }}>

        {/* ── Hero ── */}
        <section className="max-w-[1100px] mx-auto px-4 md:px-8 pt-12 pb-2">

          {/* Top row: badge + logo */}
          <div className="flex items-center justify-between mb-6">
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 font-sans text-[10px] font-semibold tracking-widest uppercase"
              style={{ border: "1px solid #0CB4A7", color: "#0CB4A7" }}
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              {cs.badge}
            </span>
            <span className="font-display font-bold text-sm" style={{ color: "#0A2E2B" }}>
              lokam <span style={{ color: "#0CB4A7" }}>ai</span>
            </span>
          </div>

          {/* Title */}
          <h1
            className="font-display font-bold text-[#0D1B2A] mb-4"
            style={{ fontSize: "clamp(26px, 4vw, 46px)", lineHeight: "1.1", letterSpacing: "-1.5px", maxWidth: 860 }}
          >
            {cs.title}
          </h1>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-2 mb-8">
            {cs.meta.map((m, i) => (
              <span key={m.label} className="font-sans text-sm text-[#4A6B68] flex items-center gap-1">
                <span className="font-medium text-[#0A2E2B]">{m.label}:</span>
                <span className="font-medium" style={{ color: "#0CB4A7" }}>{m.value}</span>
                {i < cs.meta.length - 1 && <span className="ml-1 text-[#C8E8E0]">|</span>}
              </span>
            ))}
          </div>

          {/* Hero stats */}
          <div
            className="flex flex-col sm:flex-row rounded-2xl overflow-hidden mb-10"
            style={{ border: "1px solid #C8E8E0", background: "#F5FDFB" }}
          >
            {cs.heroStats.map((s, i) => (
              <div
                key={s.label}
                className={`flex-1 flex flex-col items-center justify-center py-4 px-4 gap-1.5${i > 0 ? " border-t sm:border-t-0 sm:border-l border-[#C8E8E0]" : ""}`}
              >
                <span
                  className="font-display font-bold leading-none"
                  style={{ fontSize: "clamp(28px, 3.5vw, 42px)", color: "#0A3530", fontWeight: 900 }}
                >
                  {s.value}
                </span>
                <span
                  className="font-sans font-semibold uppercase tracking-widest text-center"
                  style={{ fontSize: 11, color: "#39B39B", fontWeight: 700 }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Quote ── */}
        <section className="max-w-[1100px] mx-auto px-4 md:px-8 pb-12">
          <div
            className="rounded-2xl p-5 sm:p-7 md:p-10"
            style={{ background: "#fff", border: "1px solid #C8E8E0", boxShadow: "0 2px 16px rgba(12,176,162,0.07)" }}
          >
            <p className="font-sans text-base md:text-lg leading-8 text-[#1A2E2B] mb-6">
              {cs.quote.text}
            </p>
            <p className="font-display font-bold text-base" style={{ color: "#197976" }}>
              {cs.quote.author}
            </p>
            <p className="font-sans text-sm text-[#8AADA8] mt-0.5">{cs.quote.location}</p>
          </div>
        </section>

        {/* ── Before & After ── */}
        <section className="max-w-[1100px] mx-auto px-4 md:px-8 pb-14">
          <h2
            className="font-sans font-bold text-[#0A2E2B] text-center mb-8"
            style={{ fontSize: "clamp(20px, 2.5vw, 28px)", letterSpacing: "-0.5px" }}
          >
            Before &amp; After Lokam
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Before */}
            <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid #F5C6C0" }}>
              <div className="flex items-center gap-2 px-6 py-4 border-b border-[#F5C6C0]" style={{ background: "#FFF8F7" }}>
                <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: "#F97066" }} />
                <span className="font-sans font-semibold text-sm text-[#0A2E2B]">Before Lokam</span>
              </div>
              {cs.before.map((row, i) => (
                <div
                  key={row.metric}
                  className="flex items-center justify-between px-6 py-3.5 border-b border-[#FDE8E6] last:border-0"
                  style={{ background: i % 2 === 0 ? "#fff" : "#FFFAF9" }}
                >
                  <span className="font-sans text-sm text-[#4A6B68] min-w-0">{row.metric}</span>
                  <span className="font-sans text-sm font-semibold flex-shrink-0 ml-2" style={{ color: "#F97066" }}>{row.value}</span>
                </div>
              ))}
            </div>

            {/* After */}
            <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid #B2E8E0" }}>
              <div className="flex items-center gap-2 px-6 py-4 border-b border-[#B2E8E0]" style={{ background: "#F0FBF9" }}>
                <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: "#0CB4A7" }} />
                <span className="font-sans font-semibold text-sm text-[#0A2E2B]">After Lokam</span>
              </div>
              {cs.after.map((row, i) => (
                <div
                  key={row.metric}
                  className="flex items-center justify-between px-6 py-3.5 border-b border-[#D6F0EC] last:border-0"
                  style={{ background: i % 2 === 0 ? "#fff" : "#FAFFFE" }}
                >
                  <span className="font-sans text-sm text-[#4A6B68] min-w-0">{row.metric}</span>
                  <span className="font-sans text-sm font-semibold flex-shrink-0 ml-2" style={{ color: "#0CB4A7" }}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Related Case Studies ── */}
        <section className="max-w-[1100px] mx-auto px-4 md:px-8 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {cs.related.map((r) => {
              const chip = CHIP[r.category] ?? { bg: "#E8F5F2", color: "#0C8074" };
              return (
                <div
                  key={r.dealership}
                  className="rounded-2xl bg-white overflow-hidden"
                  style={{ border: "1px solid #C8E8E0", boxShadow: "0 2px 12px rgba(12,176,162,0.06)" }}
                >
                  <div className="h-1.5 w-full" style={{ background: "linear-gradient(to right, #00988B, #00D3BD)" }} />
                  <div className="p-5 flex flex-col gap-2.5">
                    <span
                      className="inline-block self-start text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full font-sans"
                      style={{ background: chip.bg, color: chip.color }}
                    >
                      {r.category}
                    </span>
                    <p className="font-sans font-bold text-[#0A2E2B]" style={{ fontSize: 15 }}>{r.dealership}</p>
                    <p className="font-sans font-semibold text-sm" style={{ color: "#007970" }}>{r.metric}</p>
                    <a
                      href={r.href}
                      className="inline-flex items-center gap-1 font-sans font-semibold text-sm"
                      style={{ color: "#0CB4A7" }}
                    >
                      Read case study <span>›</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="px-4 md:px-8 pb-12">
          <div
            className="max-w-[1100px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 rounded-2xl px-5 sm:px-8 py-6"
            style={{ background: "#0A3530" }}
          >
            <div>
              <p className="font-sans font-bold text-white" style={{ fontSize: "clamp(15px, 2vw, 18px)" }}>
                Want results like these?
              </p>
              <p className="font-sans text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                Live at your dealership in under 4 hours · No IT required.
              </p>
            </div>
            <a
              href="https://calendly.com/saleeq-lokam/30-minutes-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full font-sans font-semibold text-sm text-white whitespace-nowrap transition-all duration-200 hover:scale-[1.03] hover:brightness-110 active:scale-[0.98]"
              style={{ background: "#009589", boxShadow: "0 0 20px 6px rgba(0, 149, 137, 0.45)" }}
            >
              Deploy Lokam Today →
            </a>
          </div>
        </section>

        {/* ── Back to case studies ── */}
        <div className="max-w-[1100px] mx-auto px-4 md:px-8 pb-14">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href="/case-studies" className="inline-flex items-center gap-2 font-sans text-sm font-medium" style={{ color: "#0CB4A7" }}>
              ← Back to all case studies
            </a>
            <a href="/blog" className="inline-flex items-center gap-1 font-sans text-sm font-medium" style={{ color: "#4A6B68" }}>
              Read our blog →
            </a>
            <a href="/#roi" className="inline-flex items-center gap-1 font-sans text-sm font-medium" style={{ color: "#4A6B68" }}>
              Calculate your ROI →
            </a>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
