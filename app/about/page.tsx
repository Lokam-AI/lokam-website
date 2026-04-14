import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import FAQAccordion from "../components/FAQAccordion";

export const metadata: Metadata = {
  title: "About Lokam | Voice AI for Automotive Dealerships",
  description:
    "Meet the team building Lokam — Voice AI that helps automotive dealerships recover revenue, protect CSI scores, and close more deals.",
  alternates: { canonical: "https://lokam-website.vercel.app/about" },
  openGraph: {
    title: "About Lokam | Voice AI for Automotive Dealerships",
    description:
      "Meet the team building Lokam — Voice AI that helps automotive dealerships recover revenue, protect CSI scores, and close more deals.",
    url: "https://lokam-website.vercel.app/about",
    type: "website",
    siteName: "Lokam",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Lokam",
    description: "Meet the team building Lokam — Voice AI for automotive dealerships.",
  },
};

const team = [
  {
    name: "Saleeq",
    role: "Co-founder & CEO",
    bio: "Previously built enterprise automation products. Obsessed with the gap between what dealerships promise customers and what actually happens after the visit.",
    initial: "S",
  },
  {
    name: "Nevin",
    role: "Co-founder & CTO",
    bio: "Leads the technical architecture behind Lokam's real-time voice infrastructure and platform reliability.",
    initial: "N",
  },
  {
    name: "Sinan",
    role: "AI/ML Engineer",
    bio: "Builds and optimizes the machine learning models powering Lokam's conversation intelligence and sentiment detection.",
    initial: "S",
  },
  {
    name: "Christin",
    role: "Cloud Engineer",
    bio: "Designs and maintains the cloud infrastructure that keeps Lokam's AI calls fast, reliable, and scalable across hundreds of dealerships.",
    initial: "C",
  },
  {
    name: "Vaibhav",
    role: "AI/ML Engineer",
    bio: "Works on model fine-tuning, voice pipeline improvements, and the data systems that make Lokam smarter over time.",
    initial: "V",
  },
  {
    name: "Ramees",
    role: "QA Engineer",
    bio: "Owns quality across every release — from call flow testing to regression coverage — so dealers never experience a bad interaction.",
    initial: "R",
  },
  {
    name: "Gautham",
    role: "SDE Intern",
    bio: "Contributing to full-stack features and tooling across Lokam's product and internal systems.",
    initial: "G",
  },
  {
    name: "Ishita",
    role: "Graphic Designer",
    bio: "Shapes Lokam's visual identity across product, marketing, and brand — making complex AI feel approachable and polished.",
    initial: "I",
  },
  {
    name: "Seenia",
    role: "HR",
    bio: "Keeps the team running smoothly — from hiring and onboarding to culture and operations.",
    initial: "S",
  },
];

const values = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: "Revenue first",
    desc: "Every feature we ship is measured against one question: does this recover real dollars for dealerships?",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.09 6.09l1.06-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    title: "Speed over perfection",
    desc: "Dealers don't have time to wait. We ship fast, iterate with real customers, and fix things in days — not quarters.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: "Zero-friction deployment",
    desc: "Our target is 4 hours from signed contract to live calls. No IT tickets, no month-long onboarding, no excuses.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Dealer-obsessed",
    desc: "We spend time on showroom floors and in service lanes. The product gets better because we understand the job, not just the data.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How quickly can Lokam go live at my dealership?",
      acceptedAnswer: { "@type": "Answer", text: "Most dealerships are live within 4 hours. There's no IT setup, no CRM integration required to start, and no hardware to install. We connect to your DMS and configure your AI caller on a call with you." },
    },
    {
      "@type": "Question",
      name: "What DMS and CRM systems does Lokam integrate with?",
      acceptedAnswer: { "@type": "Answer", text: "Lokam works with CDK Global, Reynolds & Reynolds, DealerSocket, VinSolutions, and TEKION. If you use a different system, contact us — we add new integrations regularly." },
    },
    {
      "@type": "Question",
      name: "Does Lokam replace my BDC team?",
      acceptedAnswer: { "@type": "Answer", text: "No. Lokam handles the high-volume, repetitive outreach so your BDC team can focus on warm escalations and inbound opportunities. Most dealers see BDC productivity increase, not headcount decrease." },
    },
    {
      "@type": "Question",
      name: "How does the AI know when to escalate to a human?",
      acceptedAnswer: { "@type": "Answer", text: "Lokam's AI detects dissatisfaction signals in real time and instantly notifies your service manager or sales team with the full call transcript and context so they can step in with everything they need to resolve it." },
    },
    {
      "@type": "Question",
      name: "Will customers know they're talking to an AI?",
      acceptedAnswer: { "@type": "Answer", text: "Lokam calls with your dealership's branded caller ID and is transparent when asked. Our contact rates average 89%+ because the calls feel relevant and timely, not robotic." },
    },
    {
      "@type": "Question",
      name: "How does Lokam improve CSI scores?",
      acceptedAnswer: { "@type": "Answer", text: "By reaching every customer within 24 hours of service, Lokam catches detractors before they submit a negative survey or leave a bad review. Escalations go directly to your service manager with full context." },
    },
    {
      "@type": "Question",
      name: "How does the Google review generation work?",
      acceptedAnswer: { "@type": "Answer", text: "When Lokam identifies a satisfied customer during the CSI call, it automatically sends them an SMS with your Google review link. This has helped dealerships move from 4.0 to 4.8★ ratings within 90 days." },
    },
    {
      "@type": "Question",
      name: "What's the pricing model?",
      acceptedAnswer: { "@type": "Answer", text: "Lokam is priced per rooftop with no setup fee and no long-term contract. Volume discounts apply for multi-store groups. Book a demo and we'll build a custom ROI model for your store before you commit to anything." },
    },
  ],
};

export default function AboutPage() {
  return (
    <>
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
            About Us
          </div>
          <h1
            className="font-display font-bold text-[#0D1B2A] mb-5"
            style={{ fontSize: "clamp(28px, 4.5vw, 52px)", lineHeight: "1.08", letterSpacing: "-1.5px" }}
          >
            Built for Dealers.{" "}
            <span style={{ backgroundImage: "linear-gradient(to right, #00988B, #00D3BD)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", color: "transparent" }}>
              Obsessed with Revenue.
            </span>
          </h1>
          <p className="font-sans text-base md:text-lg leading-8 text-[#4A6B68] mx-auto" style={{ maxWidth: 600 }}>
            Lokam is Voice AI built specifically for automotive dealerships. We automate the follow-up calls that your team never has enough time to make — and turn missed opportunities into closed deals.
          </p>
        </section>

        {/* ── Mission ── */}
        <section className="max-w-[1100px] mx-auto px-4 md:px-8 pb-16">
          <div
            className="rounded-2xl p-7 md:p-10"
            style={{ background: "#0A3530" }}
          >
            <p
              className="font-sans font-semibold uppercase tracking-widest text-xs mb-4"
              style={{ color: "#39B39B" }}
            >
              Our Mission
            </p>
            <p
              className="font-sans font-medium leading-9"
              style={{ color: "#fff", fontSize: "clamp(18px, 2.5vw, 26px)", maxWidth: 740 }}
            >
              &ldquo;Every customer who visits a dealership deserves a follow-up. Every dealer deserves to know what happened on that call — with zero manual effort.&rdquo;
            </p>
          </div>
        </section>

        {/* ── Values ── */}
        <section className="max-w-[1100px] mx-auto px-4 md:px-8 pb-20">
          <h2
            className="font-sans font-bold text-[#0A2E2B] mb-8"
            style={{ fontSize: "clamp(20px, 2.5vw, 28px)", letterSpacing: "-0.5px" }}
          >
            How we work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl p-6 flex gap-4"
                style={{ background: "#fff", border: "1px solid #C8E8E0", boxShadow: "0 2px 12px rgba(12,176,162,0.06)" }}
              >
                <div
                  className="flex-shrink-0 flex items-center justify-center rounded-xl"
                  style={{ width: 40, height: 40, background: "#F0FBF9", border: "1px solid #C8E8E0", color: "#0CB4A7" }}
                >
                  {v.icon}
                </div>
                <div>
                  <p className="font-sans font-semibold text-[#0A2E2B] mb-1" style={{ fontSize: 15 }}>{v.title}</p>
                  <p className="font-sans text-sm leading-6" style={{ color: "#4A6B68" }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Team ── */}
        <section className="max-w-[1100px] mx-auto px-4 md:px-8 pb-20">
          <h2
            className="font-sans font-bold text-[#0A2E2B] mb-2"
            style={{ fontSize: "clamp(20px, 2.5vw, 28px)", letterSpacing: "-0.5px" }}
          >
            The team
          </h2>
          <p className="font-sans text-sm text-[#4A6B68] mb-8">
            A small team with a tight focus. Backed by{" "}
            <span style={{ color: "#0CB4A7", fontWeight: 600 }}>Nvidia Inception</span>{" "}
            and our first customer turned investor,{" "}
            <span style={{ color: "#0CB4A7", fontWeight: 600 }}>World Auto Group</span>.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl p-6 flex flex-col gap-3"
                style={{ background: "#fff", border: "1px solid #C8E8E0", boxShadow: "0 2px 12px rgba(12,176,162,0.06)" }}
              >
                <div className="h-1 w-full rounded-full" style={{ background: "linear-gradient(to right, #00988B, #00D3BD)" }} />
                <div className="flex items-center gap-3">
                  <div
                    className="flex-shrink-0 flex items-center justify-center rounded-full font-display font-bold text-white"
                    style={{ width: 44, height: 44, background: "linear-gradient(135deg, #00988B, #00D3BD)", fontSize: 18 }}
                  >
                    {member.initial}
                  </div>
                  <div>
                    <p className="font-sans font-bold text-[#0A2E2B]" style={{ fontSize: 16 }}>{member.name}</p>
                    <p className="font-sans text-xs font-semibold" style={{ color: "#39B39B" }}>{member.role}</p>
                  </div>
                </div>
                <p className="font-sans text-sm leading-6" style={{ color: "#4A6B68" }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="max-w-[860px] mx-auto px-4 md:px-8 pb-20">
          <div className="text-center mb-10">
            <h2
              className="font-sans font-bold text-[#0A2E2B] mb-3"
              style={{ fontSize: "clamp(22px, 3vw, 32px)", letterSpacing: "-0.5px" }}
            >
              Frequently Asked Questions
            </h2>
            <p className="font-sans text-sm text-[#4A6B68]">
              Everything you need to know before you deploy.
            </p>
          </div>
          <FAQAccordion />
        </section>

        {/* ── CTA ── */}
        <section className="px-4 md:px-8 pb-16">
          <div
            className="max-w-[1100px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 rounded-2xl px-5 sm:px-8 py-6"
            style={{ background: "#0A3530" }}
          >
            <div>
              <p className="font-sans font-bold text-white" style={{ fontSize: "clamp(15px, 2vw, 18px)" }}>
                Ready to see Lokam at your dealership?
              </p>
              <p className="font-sans text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                Live in under 4 hours · No IT required · No setup fee.
              </p>
            </div>
            <a
              href="https://calendly.com/saleeq-lokam/30-minutes-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full font-sans font-semibold text-sm text-white whitespace-nowrap transition-all duration-200 hover:scale-[1.03] hover:brightness-110 active:scale-[0.98]"
              style={{ background: "#009589", boxShadow: "0 0 20px 6px rgba(0, 149, 137, 0.45)" }}
            >
              Book a Demo →
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
