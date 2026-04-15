"use client";
import Image from "next/image";
import Link from "next/link";
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
        <Link href={href} className="text-white no-underline" onClick={(e) => e.stopPropagation()}>
          {label}
        </Link>
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
          <Link
            href={href}
            className="flex items-center gap-2 px-4 py-2.5 font-sans text-sm font-semibold no-underline border-b border-[#E8F5F2]"
            style={{ color: "#0CB4A7" }}
            onClick={() => setOpen(false)}
          >
            View all {label} →
          </Link>
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center px-4 py-2.5 font-sans text-sm no-underline transition-colors hover:bg-[#F4FBF9] truncate"
              style={{ color: "#0A2E2B" }}
              onClick={() => setOpen(false)}
              title={item.label}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileAccordion({
  label,
  href,
  items,
  onNavigate,
}: {
  label: string;
  href: string;
  items: { label: string; href: string }[];
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        className="w-full flex items-center justify-between py-4 font-sans text-sm font-medium text-white bg-transparent border-0 cursor-pointer"
        onClick={() => setOpen((v) => !v)}
      >
        <span>{label}</span>
        <ChevronDown
          size={16}
          className="transition-transform duration-200 text-white/60"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>

      {open && (
        <div className="pb-3 flex flex-col gap-0.5">
          <Link
            href={href}
            onClick={onNavigate}
            className="font-sans text-xs font-semibold no-underline py-2 px-3 rounded-lg"
            style={{ color: "#5ecfb1" }}
          >
            View all {label} →
          </Link>
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className="font-sans text-sm no-underline py-2 px-3 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function scrollToContact(e: React.MouseEvent, onDone?: () => void) {
  const el = document.getElementById("contact");
  if (el) {
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth" });
  }
  onDone?.();
}

export default function Nav() {
  const [open, setOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      {/* Announcement bar */}
      <div className="h-11 flex items-center justify-center bg-white px-4">
        <p className="font-sans font-medium text-[13.5px] leading-5 text-[#202020] text-center m-0">
          Backed by World Auto Group, IL – our customer turned investor.
        </p>
      </div>

      {/* Navbar */}
      <header className="h-[67px] bg-brand-nav relative z-50">
        <div className="max-w-[1330px] mx-auto px-6 md:px-[50px] h-full flex items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/assets/image-47.png"
              alt="Lokam"
              width={108}
              height={34}
              className="object-contain block"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            <Link href="/about" className="text-white text-[14.1px] leading-[17.5px] no-underline font-sans font-normal">
              About
            </Link>
            <DropdownMenu label="Case Study" href="/case-studies" items={caseStudyLinks} />
            <DropdownMenu label="Blogs" href="/blog" items={blogLinks} />
            <Link href="/#contact" onClick={(e) => scrollToContact(e)} className="text-white text-[14.1px] leading-[17.5px] no-underline font-sans font-normal">
              Contact Us
            </Link>
            <a
              href="https://app.lokam.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-5 h-9 rounded-lg border border-white/40 text-white text-[13.5px] font-sans font-medium no-underline hover:bg-white/10 transition-colors"
            >
              Log in
            </a>
          </nav>

          {/* Hamburger button */}
          <button
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-white hover:bg-white/10 transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile menu — full-screen overlay */}
      {open && (
        <div className="md:hidden fixed inset-0 z-40 flex flex-col" style={{ top: 111 /* announcement 44px + nav 67px */ }}>
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40" onClick={close} />

          {/* Panel */}
          <div
            className="relative flex flex-col h-full max-h-[calc(100dvh-111px)] overflow-y-auto"
            style={{ backgroundColor: "#2c697b" }}
          >
            <div className="px-6 pt-2 pb-8 flex flex-col flex-1">

              {/* Main links */}
              <div className="border-b border-white/10">
                <Link href="/about" onClick={close} className="flex items-center py-4 font-sans text-sm font-medium text-white no-underline">
                  About
                </Link>
              </div>

              <MobileAccordion label="Case Studies" href="/case-studies" items={caseStudyLinks} onNavigate={close} />
              <MobileAccordion label="Blogs" href="/blog" items={blogLinks} onNavigate={close} />

              <div className="border-b border-white/10">
                <Link href="/#contact" onClick={(e) => scrollToContact(e, close)} className="flex items-center py-4 font-sans text-sm font-medium text-white no-underline">
                  Contact Us
                </Link>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-col gap-3">
                <a
                  href="https://app.lokam.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-11 rounded-xl border border-white/40 text-white text-sm font-sans font-medium no-underline"
                >
                  Log in
                </a>
                <a
                  href="https://calendly.com/saleeq-lokam/30-minutes-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={close}
                  className="flex items-center justify-center h-11 rounded-xl text-white text-sm font-sans font-medium no-underline"
                  style={{ backgroundColor: "#307D93" }}
                >
                  Book a demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
