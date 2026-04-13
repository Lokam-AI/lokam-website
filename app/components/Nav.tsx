"use client";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const links = [
  { label: "Home",       href: "/" },
  { label: "Case Study", href: "#case-study", chevron: true },
  { label: "Blogs",      href: "#blogs" },
  { label: "Contact Us", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Announcement bar */}
      <div
        style={{
          height: 44,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "white",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-jakarta)",
            fontWeight: 500,
            fontSize: 13.5,
            lineHeight: "20px",
            color: "#202020",
            margin: 0,
          }}
        >
          Backed by World Auto Group, IL – our customer turned investor.
        </p>
      </div>

      {/* Navbar */}
      <header style={{ background: "#2c697b", height: 80 }}>
        <div
          style={{
            maxWidth: 1330,
            margin: "0 auto",
            padding: "0 50px",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <a href="/" style={{ flexShrink: 0 }}>
            <Image
              src="/assets/image-47.png"
              alt="Lokam"
              width={108}
              height={34}
              style={{ objectFit: "contain", display: "block" }}
            />
          </a>

          <nav className="hidden md:flex items-center" style={{ gap: 40 }}>
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 400,
                  fontSize: 14.1,
                  lineHeight: "17.5px",
                  color: "white",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                {l.label}
                {l.chevron && <ChevronDown size={11} />}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden text-white p-1"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div
            style={{ background: "#2c697b", padding: "12px 24px" }}
            className="md:hidden border-t border-white/20 flex flex-col gap-3"
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{ fontFamily: "var(--font-inter)", fontSize: 14, color: "white", textDecoration: "none" }}
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
