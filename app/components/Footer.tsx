"use client";
import Image from "next/image";
import Link from "next/link";
import SmoothAnchor from "./SmoothAnchor";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: "#0a1628" }}>
      {/* Background image */}
      <Image
        src="/assets/footer-bg.png"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover pointer-events-none"
        style={{ opacity: 0.92 }}
        loading="lazy"
      />

      {/* Top glowing border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, #4ecfaa, #00866D, #4ecfaa, transparent)", boxShadow: "0 0 8px rgba(78,207,170,0.5)" }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_auto] gap-10 mb-12">

          {/* Col 1 — Brand */}
          <div>
            <a href="/" className="no-underline">
              <Image
                src="/LOKAM_PRIMARY_WHITE_FULL_LOGO.svg"
                alt="Lokam"
                width={160}
                height={51}
                className="h-9 w-auto"
              />
            </a>
            <p className="mt-3 font-sans text-sm leading-6" style={{ color: "rgba(255,255,255,0.55)", maxWidth: 220 }}>
              Voice AI follow-up for automotive dealerships. Built to recover revenue, not just report on it.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/lokam-ai/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Lokam on LinkedIn"
                className="flex items-center justify-center w-8 h-8 rounded-lg transition-opacity opacity-60 hover:opacity-100"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/lokam_ai/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Lokam on Instagram"
                className="flex items-center justify-center w-8 h-8 rounded-lg transition-opacity opacity-60 hover:opacity-100"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="white" stroke="none" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2 — Lokam Inc. */}
          <div>
            <h4 className="font-sans font-semibold text-white text-sm mb-3">Lokam Inc.</h4>
            <div className="flex items-start gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <p className="font-sans text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                2261 Market Street STE 46073<br />San Francisco, CA 94114
              </p>
            </div>
            <div className="flex items-center gap-2 mt-3">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <a href="mailto:founder@lokam.ai" className="font-sans text-sm transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.45)" }}>
                founder@lokam.ai
              </a>
            </div>
          </div>

          {/* Col 3 — Backed by */}
          <div>
            <h4 className="font-sans font-semibold text-sm mb-3" style={{ color: "rgba(255,255,255,0.55)" }}>
              Backed by
            </h4>
            <Image
              src="/assets/nvdia.svg"
              alt="Nvidia Inception Program"
              width={120}
              height={40}
              className="w-auto h-10"
            />
          </div>


        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.25)" }}
        >
          <p className="font-sans text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
            © 2026 Lokam Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="font-sans text-xs hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.4)" }}>
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="font-sans text-xs hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.4)" }}>
              Terms of Service
            </Link>
            <SmoothAnchor href="/#contact" className="font-sans text-xs hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.4)" }}>
              Contact
            </SmoothAnchor>
            <a
              href="https://calendly.com/saleeq-lokam/30-minutes-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs hover:text-white transition-colors"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Book a Demo
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
