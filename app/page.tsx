import Nav from "./components/Nav";
import Hero from "./components/Hero";
import LogoCloud from "./components/LogoCloud";
import HowItWorks from "./components/HowItWorks";
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
        <LogoCloud />
        <HowItWorks />
        <ROI />
        <Testimonial />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
