"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const caseStudyLinks = [
  { label: "Metro Toyota",       href: "/case-studies/metro-toyota" },
  { label: "Riverside Honda",    href: "/case-studies/riverside-honda" },
  { label: "Valley Ford",        href: "/case-studies/valley-ford" },
  { label: "Sunrise Ford",       href: "/case-studies/sunrise-ford" },
  { label: "Capital Auto Group", href: "/case-studies/capital-auto-group" },
  { label: "Pacific Subaru",     href: "/case-studies/pacific-subaru" },
  { label: "World Auto Group",   href: "/case-studies/world-auto-group" },
];

const blogLinks = [
  { label: "Why Your BDC Loses Customers Early",    href: "/blog/why-your-bdc-is-losing-customers-before-the-workday-even-starts" },
  { label: "The Hidden Cost of a Missed CSI Call",  href: "/blog/the-hidden-cost-of-a-single-missed-csi-call" },
  { label: "What Unsold Customers Want to Hear",    href: "/blog/what-unsold-customers-actually-want-to-hear-and-when" },
  { label: "NADA 2026: 5 Themes for BDC Leaders",  href: "/blog/nada-2026-the-5-biggest-themes-for-fixed-ops-and-bdc-leaders" },
  { label: "Multilingual Customers: The NADA Gap", href: "/blog/multilingual-customers-monolingual-dealerships-the-nada-gap" },
  { label: "Branded Caller ID & Contact Rate",      href: "/blog/branded-caller-id-the-single-biggest-lever-for-contact-rate" },
];

function DropdownMenu({
  label,
  href,
  items,
}: {
  label: string;
  href: string;
  items: { label: string; href: string }[];
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        className="flex items-center gap-1 text-white text-[14.1px] leading-[17.5px] font-sans font-normal bg-transparent border-0 cursor-pointer p-0"
        onClick={() => setOpen((v) => !v)}
      >
        <a href={href} className="text-white no-underline" onClick={(e) => e.stopPropagation()}>
          {label}
        </a>
        <ChevronDown
          size={11}
          className="transition-transform duration-200"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>

      {open && (
        <div
          className={`absolute top-full mt-2 rounded-xl overflow-hidden z-50 py-1.5 ${label === "Blogs" ? "right-0" : "left-0"}`}
          style={{
            background: "#fff",
            border: "1px solid #C8E8E0",
            boxShadow: "0 8px 24px rgba(12,176,162,0.12)",
            width: label === "Blogs" ? 280 : 200,
          }}
        >
          <a
            href={href}
            className="flex items-center gap-2 px-4 py-2.5 font-sans text-sm font-semibold no-underline border-b border-[#E8F5F2]"
            style={{ color: "#0CB4A7" }}
            onClick={() => setOpen(false)}
          >
            View all {label} →
          </a>
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex items-center px-4 py-2.5 font-sans text-sm no-underline transition-colors hover:bg-[#F4FBF9] truncate"
              style={{ color: "#0A2E2B" }}
              onClick={() => setOpen(false)}
              title={item.label}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

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
            <a href="/" className="text-white text-[14.1px] leading-[17.5px] no-underline font-sans font-normal">
              Home
            </a>
            <DropdownMenu label="Case Study" href="/case-studies" items={caseStudyLinks} />
            <DropdownMenu label="Blogs" href="/blog" items={blogLinks} />
            <a href="/#contact" className="text-white text-[14.1px] leading-[17.5px] no-underline font-sans font-normal">
              Contact Us
            </a>
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
            <a href="/" onClick={() => setOpen(false)} className="text-white text-sm font-sans no-underline">Home</a>
            <a href="/case-studies" onClick={() => setOpen(false)} className="text-white text-sm font-sans no-underline">Case Studies</a>
            {caseStudyLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-white/70 text-sm font-sans no-underline pl-3">
                {l.label}
              </a>
            ))}
            <a href="/blog" onClick={() => setOpen(false)} className="text-white text-sm font-sans no-underline">Blogs</a>
            {blogLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-white/70 text-xs font-sans no-underline pl-3">
                {l.label}
              </a>
            ))}
            <a href="/#contact" onClick={() => setOpen(false)} className="text-white text-sm font-sans no-underline">Contact Us</a>
          </div>
        )}
      </header>
    </>
  );
}
