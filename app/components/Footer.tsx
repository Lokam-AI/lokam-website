import Image from "next/image";

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
            <span className="font-sans font-semibold text-white text-xl tracking-tight">
              Lokam
            </span>
            <p className="mt-3 font-sans text-sm leading-6" style={{ color: "rgba(255,255,255,0.55)", maxWidth: 220 }}>
              Voice AI for automotive dealerships. Built to recover revenue, not just report on it.
            </p>
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
              className="h-auto"
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
            {[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms of Service", href: "/terms-of-service" },
              { label: "Contact", href: "/#contact" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="font-sans text-xs hover:text-white transition-colors"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
