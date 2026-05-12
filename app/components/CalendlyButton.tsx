"use client";

import { useCallback } from "react";

const CALENDLY_URL = "https://calendly.com/saleeq-lokam/30-minutes-meeting";

interface CalendlyButtonProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function CalendlyButton({ className, style, children, onClick }: CalendlyButtonProps) {
  const handleClick = useCallback(() => {
    onClick?.();
    window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
  }, [onClick]);

  return (
    <button type="button" className={`cursor-pointer ${className ?? ""}`} style={style} onClick={handleClick}>
      {children}
    </button>
  );
}
