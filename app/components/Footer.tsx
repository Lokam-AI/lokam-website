export default function Footer() {
  return (
    <footer style={{ background: "#085856" }}>
      {/* TODO: div-tta-footer-maindiv.svg can be used as background overlay here */}
      <div className="max-w-[1330px] mx-auto px-[50px] py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            {/* TODO: replace with <Image src="/image-47.png" …> — Lokam logo */}
            <span
              className="text-white text-2xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              lokam
            </span>
            <p
              className="mt-4 text-white/60 text-sm leading-6"
              style={{ fontFamily: "var(--font-jakarta)", maxWidth: 220 }}
            >
              Voice AI for automotive dealerships. Built to recover revenue, not just report on it.
            </p>
          </div>

          {/* Links */}
          {[
            {
              title: "Product",
              links: ["How It Works", "ROI Calculator", "Integrations", "Pricing"],
            },
            {
              title: "Company",
              links: ["About", "Case Studies", "Blogs", "Careers"],
            },
            {
              title: "Legal",
              links: ["Privacy Policy", "Terms of Service", "Contact Us"],
            },
          ].map((group) => (
            <div key={group.title}>
              <h4
                className="text-white text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {group.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {group.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-white/60 text-sm hover:text-white transition-colors"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <div className="max-w-[1330px] mx-auto px-[50px] py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-white/50 text-xs"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            © 2026 Lokam Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Service", "Contact"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-white/50 text-xs hover:text-white transition-colors"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
