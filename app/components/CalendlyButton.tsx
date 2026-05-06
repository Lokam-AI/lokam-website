"use client";

const CALENDLY_URL = "https://calendly.com/saleeq-lokam/30-minutes-meeting";

let loadPromise: Promise<void> | null = null;

function loadCalendly(): Promise<void> {
  if (loadPromise) return loadPromise;
  loadPromise = new Promise((resolve) => {
    if (!document.querySelector('link[href*="calendly.com"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(link);
    }
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.onload = () => resolve();
    script.onerror = () => {
      loadPromise = null; // allow retry on next click
      window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
      resolve(); // don't leave callers hanging
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
  const handleClick = async () => {
    onClick?.();
    await loadCalendly();
    if ((window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({ url: CALENDLY_URL });
    }
  };

  return (
    <button type="button" className={className} style={style} onClick={handleClick}>
      {children}
    </button>
  );
}
