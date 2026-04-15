import Nav from "./components/Nav";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import IntegratesWith from "./components/IntegratesWith";
import HowItWorks from "./components/HowItWorks";
import Insights from "./components/Insights";
import BDC from "./components/BDC";
import ROI from "./components/ROI";
import Testimonial from "./components/Testimonial";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

const SITE_URL = "https://lokam-website.vercel.app";

const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Scott Falcone — World Auto Group Testimonial",
  description:
    "Dealer principal Scott Falcone explains how Lokam boosted Google ratings from 4.0 to 4.6 in 5 weeks and helped close 15–20 extra cars per month.",
  thumbnailUrl: `https://image.mux.com/ky85x1jCLPGj01xCsPM1upXYxQvuocJPnz1MCnJ3mM600/thumbnail.jpg`,
  contentUrl: `https://stream.mux.com/ky85x1jCLPGj01xCsPM1upXYxQvuocJPnz1MCnJ3mM600.m3u8`,
  embedUrl: `https://player.mux.com/ky85x1jCLPGj01xCsPM1upXYxQvuocJPnz1MCnJ3mM600`,
  uploadDate: "2026-01-01",
  duration: "PT2M15S",
  publisher: { "@type": "Organization", name: "Lokam", url: SITE_URL },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      <Nav />
      <main>
        <Hero />
        <TrustedBy />
        <IntegratesWith />
        <HowItWorks />
        <div className="mx-auto h-px bg-[#1F9F74]" style={{ maxWidth: 1100, opacity: 0.35 }} />
        <ROI />
        <div className="mx-auto h-px bg-[#1F9F74]" style={{ maxWidth: 1100, opacity: 0.35 }} />
        <Testimonial />
        <div className="mx-auto h-px bg-[#1F9F74]" style={{ maxWidth: 1100, opacity: 0.35 }} />
        <Insights />
        <div className="mx-auto h-px bg-[#1F9F74]" style={{ maxWidth: 1100, opacity: 0.35 }} />
        <BDC />
        <div className="mx-auto h-px bg-[#1F9F74]" style={{ maxWidth: 1100, opacity: 0.35 }} />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
