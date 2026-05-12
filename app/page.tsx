import type { Metadata } from "next";
import { Suspense } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ScrollHandler from "./components/ScrollHandler";
import TrustedBy from "./components/TrustedBy";
import IntegratesWith from "./components/IntegratesWith";
import HowItWorks from "./components/HowItWorks";
import Insights from "./components/Insights";
import BDC from "./components/BDC";
import ROI from "./components/ROI";
import Testimonial from "./components/Testimonial";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

const SITE_URL = "https://www.lokam.ai";

export const metadata: Metadata = {
  title: "Lokam - Voice AI Follow Up for Automotive Dealerships",
  description:
    "Lokam's AI voice agents call every service customer and unsold showroom lead automatically - recovering missed revenue, protecting CSI scores, and closing more deals without adding headcount.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Lokam - Voice AI Follow Up for Automotive Dealerships",
    description:
      "Lokam's AI voice agents call every service customer and unsold showroom lead automatically - recovering missed revenue, protecting CSI scores, and closing more deals without adding headcount.",
    url: SITE_URL,
    siteName: "Lokam",
    type: "website",
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: "Lokam Voice AI for Automotive Dealerships" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lokam - Voice AI Follow Up for Automotive Dealerships",
    description:
      "Lokam's AI voice agents call every service customer and unsold showroom lead automatically - recovering missed revenue, protecting CSI scores, and closing more deals without adding headcount.",
    images: [`${SITE_URL}/opengraph-image`],
  },
};

const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Scott Falcone - World Auto Group Testimonial",
  description:
    "Dealer principal Scott Falcone explains how Lokam boosted Google ratings from 4.0 to 4.6 in 5 weeks and helped close 15–20 extra cars per month.",
  thumbnailUrl: `https://image.mux.com/ky85x1jCLPGj01xCsPM1upXYxQvuocJPnz1MCnJ3mM600/thumbnail.jpg`,
  contentUrl: `https://stream.mux.com/ky85x1jCLPGj01xCsPM1upXYxQvuocJPnz1MCnJ3mM600.m3u8`,
  embedUrl: `https://player.mux.com/ky85x1jCLPGj01xCsPM1upXYxQvuocJPnz1MCnJ3mM600`,
  uploadDate: "2026-01-01T00:00:00+00:00",
  duration: "PT1M31S",
  publisher: { "@type": "Organization", name: "Lokam", url: SITE_URL },
};

const videoSchema2 = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Teri Bisbikis - World Hyundai Matteson Testimonial",
  description:
    "General Manager Teri Bisbikis explains how Lokam uncovered hidden customer issues, recovered missed revenue, and drove 15–20 additional cars sold per month.",
  thumbnailUrl: `https://image.mux.com/iqR01jOycyo02w00VGKM00eA3Zf007mgqnGy7XqnHf7tKh6M/thumbnail.jpg`,
  contentUrl: `https://stream.mux.com/iqR01jOycyo02w00VGKM00eA3Zf007mgqnGy7XqnHf7tKh6M.m3u8`,
  embedUrl: `https://player.mux.com/iqR01jOycyo02w00VGKM00eA3Zf007mgqnGy7XqnHf7tKh6M`,
  uploadDate: "2026-01-01T00:00:00+00:00",
  duration: "PT2M25S",
  publisher: { "@type": "Organization", name: "Lokam", url: SITE_URL },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema2) }}
      />
      <Suspense fallback={null}><ScrollHandler /></Suspense>
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
