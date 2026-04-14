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

export default function Home() {
  return (
    <>
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
