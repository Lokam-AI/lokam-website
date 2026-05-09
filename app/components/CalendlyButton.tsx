"use client";

import { useEffect, useCallback } from "react";

const CALENDLY_URL = "https://calendly.com/saleeq-lokam/30-minutes-meeting";
const SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";
const CSS_HREF = "https://assets.calendly.com/assets/external/widget.css";

// Shared across all instances — only inject once
let injected = false;

function injectCalendly() {
  if (injected || typeof document === "undefined") return;
  injected = true;

  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = CSS_HREF;
  document.head.appendChild(link);

  const script = document.createElement("script");
  script.src = SCRIPT_SRC;
  script.async = true;
  document.body.appendChild(script);
}

interface CalendlyButtonProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function CalendlyButton({ className, style, children, onClick }: CalendlyButtonProps) {
  useEffect(() => {
    injectCalendly();
  }, []);

  const handleClick = useCallback(() => {
    onClick?.();
    if ((window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
    }
  }, [onClick]);

  return (
    <button type="button" className={`cursor-pointer ${className ?? ""}`} style={style} onClick={handleClick}>
      {children}
    </button>
  );
}
