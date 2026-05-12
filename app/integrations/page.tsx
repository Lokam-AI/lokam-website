import type { Metadata } from "next";
import Image from "next/image";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CalendlyButton from "../components/CalendlyButton";

export const metadata: Metadata = {
  title: "DMS & CRM Integrations for Voice AI Follow-Up | Lokam",
  description:
    "Lokam connects to CDK Global, Dealertrack, Reynolds & Reynolds, DealerSocket, VinSolutions, and TEKION. Works with your existing DMS with no manual exports.",
  alternates: { canonical: "https://www.lokam.ai/integrations" },
  openGraph: {
    title: "DMS & CRM Integrations | Lokam Voice AI",
    description:
      "Lokam connects to CDK Global, Dealertrack, Reynolds & Reynolds, DealerSocket, VinSolutions, TEKION, Authenticom, and DealerVault. Go Lokam's team handles the setup end to end.",
    url: "https://www.lokam.ai/integrations",
    type: "website",
    siteName: "Lokam",
    images: [
      {
        url: "https://www.lokam.ai/opengraph-image",
        width: 1200,
        height: 630,
        alt: "DMS & CRM Integrations | Lokam Voice AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DMS & CRM Integrations | Lokam Voice AI",
    description:
      "Lokam connects to CDK Global, Dealertrack, Reynolds & Reynolds, DealerSocket, VinSolutions, TEKION, and more.",
    images: ["https://www.lokam.ai/opengraph-image"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.lokam.ai" },
    { "@type": "ListItem", position: 2, name: "Integrations", item: "https://www.lokam.ai/integrations" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does integration take?",
      acceptedAnswer: { "@type": "Answer", text: "Most dealerships are Lokam's team handles the setup end to end. Our team handles the integration setup - you don't need to involve your IT team for most DMS configurations." },
    },
    {
      "@type": "Question",
      name: "What data does Lokam access from my DMS?",
      acceptedAnswer: { "@type": "Answer", text: "Lokam reads customer contact information, repair order status, and appointment records. We do not access financial records, deal financials, or any data outside what's needed for follow-up outreach." },
    },
    {
      "@type": "Question",
      name: "Does Lokam write data back to my DMS?",
      acceptedAnswer: { "@type": "Answer", text: "Currently Lokam is read-only from your DMS. Call outcomes, transcripts, and escalations are available in your Lokam dashboard. DMS write-back is on the roadmap." },
    },
    {
      "@type": "Question",
      name: "How is customer data protected during transfer?",
      acceptedAnswer: { "@type": "Answer", text: "Data exchange through Authenticom and DealerVault uses encrypted, permissioned connections with full audit trails. Lokam does not store raw DMS data beyond what's needed to place and log each call." },
    },
    {
      "@type": "Question",
      name: "My DMS isn't on this list. Can I still use Lokam?",
      acceptedAnswer: { "@type": "Answer", text: "Contact us. We add new integrations regularly, and Authenticom covers a broad range of DMS platforms. In many cases we can get you live even without a native integration." },
    },
  ],
};

const liveIntegrations = [
  {
    name: "CDK Global",
    anchor: "cdk-global",
    logo: "/assets/cdk.svg",
    type: "DMS",
    syncs: ["Customer contact data", "Repair order status", "Appointment records", "Service history"],
  },
  {
    name: "Dealertrack",
    anchor: "dealertrack",
    logo: "/assets/dealertrack.svg",
    type: "DMS",
    syncs: ["Customer records", "Deal and RO data", "Contact preferences", "Vehicle history"],
  },
  {
    name: "Authenticom",
    anchor: "authenticom",
    logo: "/assets/authenticom.svg",
    type: "Data Exchange",
    syncs: ["Secure DMS data syndication", "Real-time RO feeds", "Customer opt-out compliance", "Multi-rooftop aggregation"],
  },
  {
    name: "DealerVault",
    anchor: "dealervault",
    logo: "/assets/dealvervault.svg",
    type: "Data Exchange",
    syncs: ["Encrypted data transfer", "Permissioned DMS access", "Audit trail logging", "SOC 2-aligned data handling"],
  },
];

const comingSoonIntegrations = [
  {
    name: "Reynolds & Reynolds",
    anchor: "reynolds-reynolds",
    type: "DMS",
    syncs: ["RO and customer data", "Service appointment records", "Contact information"],
  },
  {
    name: "DealerSocket",
    anchor: "dealersocket",
    type: "DMS / CRM",
    syncs: ["Lead and customer profiles", "Deal records", "Service history"],
  },
  {
    name: "VinSolutions",
    anchor: "vinsolutions",
    type: "CRM",
    syncs: ["Lead management data", "Customer profiles", "Activity history"],
  },
  {
    name: "TEKION",
    anchor: "tekion",
    type: "Cloud DMS",
    syncs: ["RO data", "Customer contact records", "Service workflow status"],
  },
];

const dataFlow = [
  {
    step: "1",
    title: "Customer leaves your dealership",
    desc: "After a service visit or unsold showroom interaction, the RO or desklog is created in your DMS.",
  },
  {
    step: "2",
    title: "Lokam reads the record",
    desc: "Via your DMS integration (CDK, Dealertrack, or through Authenticom/DealerVault), Lokam pulls the customer's contact details and visit context within minutes.",
  },
  {
    step: "3",
    title: "AI call is placed within 12–24 hours",
    desc: "Lokam dials the customer using your branded caller ID. The AI handles the conversation, identifies sentiment, and logs the outcome.",
  },
  {
    step: "4",
    title: "Escalations and results sync back",
    desc: "Detractor escalations go to your service manager instantly. Satisfied customers get a Google review SMS. All call data is logged in your Lokam dashboard.",
  },
];

const faqItems = [
  {
    q: "How long does integration take?",
    a: "Most dealerships are Lokam's team handles the setup end to end. Our team handles the integration setup - you don't need to involve your IT team for most DMS configurations.",
  },
  {
    q: "What data does Lokam access from my DMS?",
    a: "Lokam reads customer contact information, repair order status, and appointment records. We do not access financial records, deal financials, or any data outside what's needed for follow-up outreach.",
  },
  {
    q: "Does Lokam write data back to my DMS?",
    a: "Currently Lokam is read-only from your DMS. Call outcomes, transcripts, and escalations are available in your Lokam dashboard. DMS write-back is on the roadmap.",
  },
  {
    q: "How is customer data protected during transfer?",
    a: "Data exchange through Authenticom and DealerVault uses encrypted, permissioned connections with full audit trails. Lokam does not store raw DMS data beyond what's needed to place and log each call.",
  },
  {
    q: "My DMS isn't on this list. Can I still use Lokam?",
    a: "Contact us. We add new integrations regularly, and Authenticom covers a broad range of DMS platforms. In many cases we can get you live even without a native integration.",
  },
];

export default function IntegrationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Nav />
      <main style={{ background: "linear-gradient(to bottom, rgba(25,171,141,0.06) 0%, #ffffff 320px)" }}>

        {/* ── Hero ── */}
        <section className="max-w-[860px] mx-auto px-4 md:px-8 pt-16 pb-12 text-center">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 font-sans text-xs font-semibold tracking-widest uppercase"
            style={{ background: "#E0F7F4", color: "#0C8074" }}
          >
            Integrations
          </div>
          <h1
            className="font-display font-bold text-[#0D1B2A] mb-5"
            style={{ fontSize: "clamp(28px, 4.5vw, 52px)", lineHeight: "1.08", letterSpacing: "-1.5px" }}
          >
            Works with your DMS. Lokam's team handles the setup.
          </h1>
          <p className="font-sans text-base md:text-lg leading-8 text-[#4A6B68] mx-auto" style={{ maxWidth: 600 }}>
            Lokam connects directly to your dealer management system and data providers. No manual exports, no new logins for your team - it reads your ROs and customer records automatically.
          </p>
        </section>

        {/* ── Live integrations ── */}
        <section className="max-w-[1100px] mx-auto px-4 md:px-8 pb-16">
          <div className="flex items-center gap-3 mb-8">
            <h2
              className="font-sans font-bold text-[#0A2E2B]"
              style={{ fontSize: "clamp(18px, 2.2vw, 24px)", letterSpacing: "-0.4px" }}
            >
              Live integrations
            </h2>
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-sans text-[10px] font-bold tracking-widest uppercase"
              style={{ background: "#E0F7F4", color: "#0C8074", border: "1px solid #B2E8E0" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#0CB4A7] inline-block" />
              Available now
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {liveIntegrations.map((int) => (
              <div
                key={int.name}
                id={int.anchor}
                className="rounded-2xl p-6 flex flex-col gap-4"
                style={{ background: "#fff", border: "1px solid #C8E8E0", boxShadow: "0 2px 12px rgba(12,176,162,0.06)" }}
              >
                <div className="flex items-center justify-between">
                  <Image
                    src={int.logo}
                    alt={int.name}
                    width={130}
                    height={36}
                    className="h-8 w-auto"
                  />
                  <span
                    className="font-sans text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full"
                    style={{ background: "#F4FBF9", color: "#0C8074", border: "1px solid #C8E8E0" }}
                  >
                    {int.type}
                  </span>
                </div>
                <div>
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-[#8AADA8] mb-2.5">
                    Data synced
                  </p>
                  <ul className="flex flex-col gap-2">
                    {int.syncs.map((s) => (
                      <li key={s} className="flex items-start gap-2">
                        <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: "#0CB4A7" }} />
                        <span className="font-sans text-sm text-[#4A6B68]">{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Coming soon integrations ── */}
        <section className="max-w-[1100px] mx-auto px-4 md:px-8 pb-16">
          <div className="flex items-center gap-3 mb-8">
            <h2
              className="font-sans font-bold text-[#0A2E2B]"
              style={{ fontSize: "clamp(18px, 2.2vw, 24px)", letterSpacing: "-0.4px" }}
            >
              Coming soon
            </h2>
            <span
              className="inline-flex items-center rounded-full px-3 py-1 font-sans text-[10px] font-bold tracking-widest uppercase"
              style={{ background: "#FFF7E6", color: "#B45309", border: "1px solid #FDE8A8" }}
            >
              In progress
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {comingSoonIntegrations.map((int) => (
              <div
                key={int.name}
                id={int.anchor}
                className="rounded-2xl p-6 flex flex-col gap-4"
                style={{ background: "#FAFAFA", border: "1px solid #E5E7EB", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}
              >
                <div className="flex items-center justify-between">
                  <p className="font-sans font-bold text-[#374151]" style={{ fontSize: 16 }}>{int.name}</p>
                  <span
                    className="font-sans text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full"
                    style={{ background: "#F3F4F6", color: "#6B7280", border: "1px solid #E5E7EB" }}
                  >
                    {int.type}
                  </span>
                </div>
                <div>
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-[#9CA3AF] mb-2.5">
                    Data to be synced
                  </p>
                  <ul className="flex flex-col gap-2">
                    {int.syncs.map((s) => (
                      <li key={s} className="flex items-start gap-2">
                        <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#D1D5DB]" />
                        <span className="font-sans text-sm text-[#6B7280]">{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── How it works ── */}
        <section className="max-w-[1100px] mx-auto px-4 md:px-8 pb-20">
          <h2
            className="font-sans font-bold text-[#0A2E2B] mb-8"
            style={{ fontSize: "clamp(18px, 2.2vw, 24px)", letterSpacing: "-0.4px" }}
          >
            How the data flow works
          </h2>
          <div className="flex flex-col gap-4">
            {dataFlow.map((step, i) => (
              <div
                key={step.step}
                className="flex gap-5 rounded-2xl p-6"
                style={{ background: "#fff", border: "1px solid #C8E8E0", boxShadow: "0 2px 12px rgba(12,176,162,0.06)" }}
              >
                <div
                  className="flex-shrink-0 flex items-center justify-center rounded-full font-display font-bold text-white"
                  style={{ width: 36, height: 36, background: "linear-gradient(135deg, #00988B, #00D3BD)", fontSize: 14 }}
                >
                  {step.step}
                </div>
                <div>
                  <p className="font-sans font-semibold text-[#0A2E2B] mb-1" style={{ fontSize: 15 }}>
                    {step.title}
                  </p>
                  <p className="font-sans text-sm leading-6 text-[#4A6B68]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="max-w-[860px] mx-auto px-4 md:px-8 pb-20">
          <h2
            className="font-sans font-bold text-[#0A2E2B] mb-8"
            style={{ fontSize: "clamp(18px, 2.2vw, 24px)", letterSpacing: "-0.4px" }}
          >
            Integration questions
          </h2>
          <div className="flex flex-col gap-3">
            {faqItems.map((item) => (
              <div
                key={item.q}
                className="rounded-2xl p-6"
                style={{ background: "#fff", border: "1px solid #C8E8E0" }}
              >
                <p className="font-sans font-semibold text-[#0A2E2B] mb-2" style={{ fontSize: 15 }}>
                  {item.q}
                </p>
                <p className="font-sans text-sm leading-6 text-[#4A6B68]">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="px-4 md:px-8 pb-16">
          <div
            className="max-w-[1100px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 rounded-2xl px-5 sm:px-8 py-6"
            style={{ background: "#0A3530" }}
          >
            <div>
              <p className="font-sans font-bold text-white" style={{ fontSize: "clamp(15px, 2vw, 18px)" }}>
                Not sure if your DMS is supported?
              </p>
              <p className="font-sans text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                Book a demo and we'll confirm your setup before you commit to anything.
              </p>
            </div>
            <CalendlyButton
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full font-sans font-semibold text-sm text-white whitespace-nowrap transition-all duration-200 hover:scale-[1.03] hover:brightness-110 active:scale-[0.98]"
              style={{ background: "#009589", boxShadow: "0 0 20px 6px rgba(0,149,137,0.45)" }}
            >
              Book a Demo →
            </CalendlyButton>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
