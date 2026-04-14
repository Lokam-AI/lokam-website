"use client";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const links = [
  { label: "Home",       href: "/" },
  { label: "Case Study", href: "/case-studies", chevron: true },
  { label: "Blogs",      href: "/blog" },
  { label: "Contact Us", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Announcement bar */}
      <div className="h-11 flex items-center justify-center bg-white px-4">
        <p className="font-sans font-medium text-[13.5px] leading-5 text-[#202020] text-center m-0">
          Backed by World Auto Group, IL – our customer turned investor.
        </p>
      </div>

      {/* Navbar */}
      <header className="h-[67px] bg-brand-nav">
        <div className="max-w-[1330px] mx-auto px-6 md:px-[50px] h-full flex items-center justify-between">
          <a href="/" className="flex-shrink-0">
            <Image
              src="/assets/image-47.png"
              alt="Lokam"
              width={108}
              height={34}
              className="object-contain block"
            />
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="flex items-center gap-1 text-white text-[14.1px] leading-[17.5px] no-underline font-sans font-normal"
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
          <div className="md:hidden bg-brand-nav border-t border-white/20 px-6 py-3 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-white text-sm font-sans no-underline"
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
