"use client";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const links = [
  { label: "Home",       href: "#" },
  { label: "Case Study", href: "#case-study", dropdown: true },
  { label: "Blogs",      href: "#blogs" },
  { label: "Contact Us", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full h-20" style={{ background: "#2c697b" }}>
      <div className="h-full max-w-[1330px] mx-auto px-[50px] flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex-shrink-0">
          {/* Lokam wordmark — replace src with /image-47.png once assets are added */}
          <span
            className="text-white font-display font-bold text-2xl tracking-tight"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            lokam
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-[30px]">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="flex items-center gap-1 text-white text-[14.1px] leading-[17.5px] hover:text-white/80 transition-colors"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {l.label}
              {l.dropdown && <ChevronDown size={12} />}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/20 px-6 py-4 flex flex-col gap-3" style={{ background: "#2c697b" }}>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white text-sm"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
