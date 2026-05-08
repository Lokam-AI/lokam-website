import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import SmoothAnchor from "../../components/SmoothAnchor";
import CalendlyButton from "../../components/CalendlyButton";
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
      images: [
        {
          url: `${SITE_URL}/assets/car.jpg`,
          width: 2560,
          height: 1911,
          alt: cs.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: cs.title,
      description,
      images: [`${SITE_URL}/assets/car.jpg`],
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
    image: `${SITE_URL}/assets/car.jpg`,
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
      <main style={{ background: "#ffffff" }}>

        {/* ── Hero Banner ── */}
        <section style={{ background: "linear-gradient(135deg, #00796B 0%, #00BFA5 100%)" }}>
          <div className="max-w-[1100px] mx-auto px-4 md:px-8 pt-10 pb-12">

            {/* Badge + category */}
            <div className="flex items-center gap-3 mb-6">
              <span
                className="inline-flex items-center justify-center rounded-md px-3 py-1 font-sans text-[10px] font-bold tracking-widest uppercase"
                style={{ background: "rgba(0,0,0,0.35)", color: "#fff" }}
              >
                {cs.badge}
              </span>
              {cs.category && (
                <span className="font-sans text-sm font-medium" style={{ color: "rgba(255,255,255,0.75)" }}>
                  {cs.category}
                </span>
              )}
            </div>

            {/* Title */}
            <h1
              className="font-display font-bold text-white mb-4"
              style={{ fontSize: "clamp(26px, 4vw, 50px)", lineHeight: "1.08", letterSpacing: "-1.5px", maxWidth: 820 }}
            >
              {cs.title}
            </h1>

            {/* Excerpt */}
            {cs.excerpt && (
              <p className="font-sans text-sm md:text-base leading-7 mb-8" style={{ color: "rgba(255,255,255,0.78)", maxWidth: 640 }}>
                {cs.excerpt}
              </p>
            )}

            {/* Meta columns */}
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {cs.meta.map((m) => (
                <div key={m.label} className="flex flex-col gap-0.5">
                  <span className="font-sans text-[10px] font-bold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {m.label}
                  </span>
                  <span className="font-sans font-semibold text-white text-sm">{m.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Hero Stat Cards ── */}
        <section style={{ background: "linear-gradient(to bottom, #E8F7F4 0%, #ffffff 100%)" }}>
          <div className="max-w-[1100px] mx-auto px-4 md:px-8 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {cs.heroStats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white rounded-2xl px-5 py-5 flex flex-col gap-1"
                  style={{ border: "1px solid #C8E8E0", boxShadow: "0 1px 8px rgba(12,176,162,0.06)" }}
                >
                  <span
                    className="font-display font-bold leading-none"
                    style={{ fontSize: "clamp(24px, 3vw, 36px)", color: "#00796B" }}
                  >
                    {s.value}
                  </span>
                  <span className="font-sans font-semibold text-[#0A2E2B]" style={{ fontSize: 13 }}>
                    {s.label}
                  </span>
                  {s.sub && (
                    <span className="font-sans text-xs text-[#8AADA8]">{s.sub}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Challenge & Solution ── */}
        {cs.challengeSolution && (
          <section className="max-w-[1100px] mx-auto px-4 md:px-8 pb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Challenge */}
              <div
                className="rounded-2xl p-6 flex flex-col gap-5"
                style={{ background: "#fff", border: "1px solid #F5C6C0", boxShadow: "0 2px 16px rgba(249,112,102,0.06)" }}
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className="flex items-center justify-center rounded-xl flex-shrink-0"
                    style={{ width: 36, height: 36, background: "#FFF4F3", border: "1px solid #F5C6C0" }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F97066" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                  </div>
                  <h2 className="font-sans font-bold text-[#0A2E2B]" style={{ fontSize: 17, letterSpacing: "-0.3px" }}>
                    The Challenge
                  </h2>
                </div>
                <p className="font-sans text-sm leading-6 text-[#4A6B68]">
                  {cs.challengeSolution.challenge.intro}
                </p>
                <ul className="flex flex-col gap-3.5">
                  {cs.challengeSolution.challenge.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span
                        className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                        style={{ background: "#F97066" }}
                      />
                      <span className="font-sans text-sm leading-6 text-[#4A6B68]">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solution */}
              <div
                className="rounded-2xl p-6 flex flex-col gap-5"
                style={{ background: "#fff", border: "1px solid #B2E8E0", boxShadow: "0 2px 16px rgba(12,176,162,0.07)" }}
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className="flex items-center justify-center rounded-xl flex-shrink-0"
                    style={{ width: 36, height: 36, background: "#F0FBF9", border: "1px solid #C8E8E0" }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0CB4A7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <h2 className="font-sans font-bold text-[#0A2E2B]" style={{ fontSize: 17, letterSpacing: "-0.3px" }}>
                    The Solution
                  </h2>
                </div>
                <p className="font-sans text-sm leading-6 text-[#4A6B68]">
                  {cs.challengeSolution.solution.intro}
                </p>
                <ul className="flex flex-col gap-3.5">
                  {cs.challengeSolution.solution.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span
                        className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                        style={{ background: "#0CB4A7" }}
                      />
                      <span className="font-sans text-sm leading-6 text-[#4A6B68]">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </section>
        )}

        {/* ── Timeline ── */}
        {cs.timeline && (
          <section className="max-w-[1100px] mx-auto px-4 md:px-8 pb-10">
            <div className="text-center mb-6">
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-sans text-[10px] font-semibold tracking-widest uppercase mb-3"
                style={{ background: "#E0F7F4", color: "#0C8074", border: "1px solid #B2E8E0" }}
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                </svg>
                Timeline
              </span>
              <h2
                className="font-display font-bold text-[#0A2E2B]"
                style={{ fontSize: "clamp(18px, 2.2vw, 26px)", letterSpacing: "-0.6px", lineHeight: 1.15 }}
              >
                {cs.timeline.heading}
              </h2>
            </div>

            <div className="relative">
              <div
                className="absolute top-0 bottom-0 hidden sm:block"
                style={{ left: 108, width: 1.5, background: "linear-gradient(to bottom, #00D3BD, #00988B)" }}
              />
              <div className="flex flex-col gap-3">
                {cs.timeline.events.map((event, i) => (
                  <div key={i} className="flex items-start gap-0 sm:gap-4">
                    <div className="hidden sm:flex flex-shrink-0 items-center justify-end" style={{ width: 96 }}>
                      <span
                        className="inline-flex items-center justify-center rounded-full font-sans font-bold text-white px-2.5 py-0.5"
                        style={{ background: "#0A3530", fontSize: 11, minWidth: 50 }}
                      >
                        {event.day}
                      </span>
                    </div>
                    <div className="hidden sm:flex flex-shrink-0 items-center justify-center" style={{ width: 28, paddingTop: 3 }}>
                      <span
                        className="rounded-full block"
                        style={{ width: 11, height: 11, background: "#fff", border: "2.5px solid #0CB4A7", boxShadow: "0 0 0 2.5px rgba(12,180,167,0.15)" }}
                      />
                    </div>
                    <div
                      className="flex-1 rounded-xl px-4 py-3"
                      style={{ background: "#fff", border: "1px solid #C8E8E0", boxShadow: "0 1px 8px rgba(12,176,162,0.05)" }}
                    >
                      <span
                        className="inline-flex sm:hidden items-center justify-center rounded-full font-sans font-bold text-white px-2.5 py-0.5 mb-1.5"
                        style={{ background: "#0A3530", fontSize: 11 }}
                      >
                        {event.day}
                      </span>
                      <p className="font-sans font-semibold text-[#0A2E2B]" style={{ fontSize: 13 }}>{event.title}</p>
                      <p className="font-sans text-xs leading-5 text-[#4A6B68] mt-0.5">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Quote ── */}
        <section className="max-w-[1100px] mx-auto px-4 md:px-8 pb-12">
          <div
            className="relative rounded-2xl px-8 sm:px-12 py-10 text-center overflow-hidden"
            style={{ background: "linear-gradient(135deg, #00988B 0%, #00D3BD 100%)", border: "2px solid rgba(255,255,255,0.25)" }}
          >
            {/* Decorative quote mark */}
            <svg
              className="absolute top-6 left-7 opacity-20"
              width="48" height="48" viewBox="0 0 24 24" fill="white"
            >
              <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.496 5c-.8.396-1.56.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1.01-.345 2.04-.217 3.1.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003z" />
            </svg>

            <p
              className="font-sans italic leading-8 text-white relative z-10 mx-auto"
              style={{ fontSize: "clamp(15px, 1.8vw, 18px)", maxWidth: 680 }}
            >
              {cs.quote.text}
            </p>

            <div className="mt-6">
              <p className="font-sans font-bold text-white" style={{ fontSize: 15 }}>
                {cs.quote.author}
              </p>
              <p className="font-sans text-sm mt-0.5" style={{ color: "rgba(255,255,255,0.65)" }}>
                {cs.quote.location}
              </p>
            </div>

            {/* Stars */}
            <div className="flex items-center justify-center gap-1 mt-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#F6C94E">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
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
                  key={r.href}
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
                    <Link
                      href={r.href}
                      className="inline-flex items-center gap-1 font-sans font-semibold text-sm"
                      style={{ color: "#0CB4A7" }}
                    >
                      Read case study <span>›</span>
                    </Link>
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
                Plans tailored to your dealership · Book a demo to get started.
              </p>
            </div>
            <CalendlyButton
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full font-sans font-semibold text-sm text-white whitespace-nowrap transition-all duration-200 hover:scale-[1.03] hover:brightness-110 active:scale-[0.98]"
              style={{ background: "#009589", boxShadow: "0 0 20px 6px rgba(0, 149, 137, 0.45)" }}
            >
              Deploy Lokam Today →
            </CalendlyButton>
          </div>
        </section>

        {/* ── Back to case studies ── */}
        <div className="max-w-[1100px] mx-auto px-4 md:px-8 pb-14">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/case-studies" className="inline-flex items-center gap-2 font-sans text-sm font-medium" style={{ color: "#0CB4A7" }}>
              ← Back to all case studies
            </Link>
            <Link href="/blog" className="inline-flex items-center gap-1 font-sans text-sm font-medium" style={{ color: "#4A6B68" }}>
              Read our blog →
            </Link>
            <SmoothAnchor href="/#roi" className="inline-flex items-center gap-1 font-sans text-sm font-medium" style={{ color: "#4A6B68" }}>
              Calculate your ROI →
            </SmoothAnchor>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
