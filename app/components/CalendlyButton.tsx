"use client";

import { useEffect } from "react";

const CALENDLY_URL = "https://calendly.com/saleeq-lokam/30-minutes-meeting";
const SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";
const CSS_HREF = "https://assets.calendly.com/assets/external/widget.css";

let loadPromise: Promise<void> | null = null;

function loadCalendly(): Promise<void> {
  if (loadPromise) return loadPromise;
  loadPromise = new Promise((resolve) => {
    if (!document.querySelector(`link[href="${CSS_HREF}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = CSS_HREF;
      document.head.appendChild(link);
    }
    if (document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
      // Script tag exists but may still be loading — poll for Calendly global
      const poll = setInterval(() => {
        if ((window as any).Calendly) { clearInterval(poll); resolve(); }
      }, 50);
      return;
    }
    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.onload = () => resolve();
    script.onerror = () => {
      loadPromise = null;
      window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
      resolve();
    };
    document.head.appendChild(script);
  });
  return loadPromise;
}

interface CalendlyButtonProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function CalendlyButton({ className, style, children, onClick }: CalendlyButtonProps) {
  // Prefetch on mount so the script is ready before any interaction
  useEffect(() => {
    if (document.querySelector(`link[rel="prefetch"][href="${SCRIPT_SRC}"]`)) return;
    const hint = document.createElement("link");
    hint.rel = "prefetch";
    hint.as = "script";
    hint.href = SCRIPT_SRC;
    document.head.appendChild(hint);
  }, []);

  const handleClick = async () => {
    onClick?.();
    await loadCalendly();
    if ((window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({ url: CALENDLY_URL });
    }
  };

  return (
    <button
      type="button"
      className={className}
      style={style}
      onMouseEnter={loadCalendly}
      onFocus={loadCalendly}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
