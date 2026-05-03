"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

interface Props {
  src: string;
  poster: string;
  width: number;
  height: number;
  className?: string;
  ariaLabel: string;
}

export default function AutoPlayVideo({
  src,
  poster,
  width,
  height,
  className,
  ariaLabel,
}: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduce) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduce]);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      width={width}
      height={height}
      muted
      loop
      playsInline
      preload="none"
      aria-label={ariaLabel}
      className={className}
    />
  );
}
