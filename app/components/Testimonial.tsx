"use client";
import React, { useRef, useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import type MuxPlayerElement from "@mux/mux-player";

const MuxPlayer = dynamic(() => import("@mux/mux-player-react"), { ssr: false });

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  playbackId: string;
  renderQuote?: () => React.ReactNode;
}

const scottQuote = () => (
  <>
    &ldquo;Lokam boosted our Google ratings from{" "}
    <strong className="font-semibold">4.0 to 4.6 in 5 weeks</strong> by catching service detractors in real time. On sales, it uncovered hidden objections from unsold desklog traffic, helping us close{" "}
    <strong className="font-semibold">15–20 extra cars </strong> monthly&rdquo;
  </>
);

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Lokam boosted our Google ratings from 4.0 to 4.6 in 5 weeks by catching service detractors in real time. On sales, it uncovered hidden objections from unsold desklog traffic, helping us close 15–20 extra cars monthly",
    name: "Scott Falcone",
    title: "Dealer principal,\nWorld Auto Group.",
    playbackId: "ky85x1jCLPGj01xCsPM1upXYxQvuocJPnz1MCnJ3mM600",
    renderQuote: scottQuote,
  },
  {
    quote: "Lokam boosted our Google ratings from 4.0 to 4.6 in 5 weeks by catching service detractors in real time. On sales, it uncovered hidden objections from unsold desklog traffic, helping us close 15–20 extra cars monthly",
    name: "Scott Falcone",
    title: "Dealer principal,\nWorld Auto Group.",
    playbackId: "ky85x1jCLPGj01xCsPM1upXYxQvuocJPnz1MCnJ3mM600",
    renderQuote: scottQuote,
  },
];

function ChevronLeft({ color }: { color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRight({ color }: { color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

function ExpandIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#307D93" strokeWidth="2.5" strokeLinecap="round">
      <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
    </svg>
  );
}

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState<boolean[]>(TESTIMONIALS.map(() => false));
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const playerRefs = useRef<(MuxPlayerElement | null)[]>([]);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const [arrowHover, setArrowHover] = useState<"prev" | "next" | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const goTo = useCallback((next: number) => {
    const prev = currentIndex;
    playerRefs.current[prev]?.pause();
    setIsPlaying(TESTIMONIALS.map(() => false));
    setCurrentIndex(next);
  }, [currentIndex]);

  const goPrev = () => goTo((currentIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const goNext = () => goTo((currentIndex + 1) % TESTIMONIALS.length);

  const togglePlay = (index: number) => {
    const player = playerRefs.current[index];
    if (!player) return;
    if (isPlaying[index]) {
      player.pause();
    } else {
      player.play().catch(() => {});
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const dx = touchStartX.current - e.changedTouches[0].clientX;
    const dy = Math.abs(touchStartY.current - e.changedTouches[0].clientY);
    if (Math.abs(dx) > 50 && Math.abs(dx) > dy) {
      if (dx > 0) goNext();
      else goPrev();
    }
  };

  const transition = reducedMotion ? "none" : "transform 420ms cubic-bezier(0.25, 0.46, 0.45, 0.94)";

  return (
    <section id="case-study" className="py-16 md:py-20 bg-white">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2
          className="font-sans font-medium"
          style={{ color: "#095857", fontSize: "clamp(26px, 4vw, 50px)", lineHeight: "1.12", letterSpacing: "-1px" }}
        >
          Hear from our customers
        </h2>
      </div>

      {/* Slider */}
      <div
        className="max-w-[1360px] mx-auto px-4 md:px-8"
        role="region"
        aria-label="Customer testimonials"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="overflow-hidden">
        {/* Track */}
        <div
          style={{
            display: "flex",
            transform: `translateX(-${currentIndex * 100}%)`,
            transition,
            willChange: "transform",
          }}
        >
          {TESTIMONIALS.map((t, i) => {
            const isActive = i === currentIndex;
            return (
              <div
                key={i}
                className="w-full flex-shrink-0 pl-10 pr-9 py-10"
              >
                <div
                  style={{
                    transform: isActive ? "scale(1)" : "scale(0.97)",
                    transition: reducedMotion ? "none" : "transform 420ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  }}
                >
                <div
                  className="bg-white grid grid-cols-1 lg:grid-cols-5 overflow-hidden"
                  style={{ borderRadius: 20, boxShadow: "0 0 36px #307D93" }}
                >
                  {/* Quote side — 2 of 5 columns */}
                  <div className="lg:col-span-2 flex flex-col justify-center px-10 py-12 lg:px-14 lg:py-16">
                    <p
                      className="font-sans font-light text-base lg:text-lg leading-7 lg:leading-8 text-black"
                      style={{ maxWidth: "min(380px, 100%)" }}
                    >
                      {t.renderQuote ? t.renderQuote() : <>&ldquo;{t.quote}&rdquo;</>}
                    </p>
                    <div className="mt-6">
                      <p className="font-sans font-semibold text-[22px] leading-8 text-black">{t.name}</p>
                      <p className="font-sans font-light text-base leading-6 text-black mt-1" style={{ whiteSpace: "pre-line" }}>
                        {t.title}
                      </p>
                    </div>
                  </div>

                  {/* Video side — 3 of 5 columns */}
                  <div className="lg:col-span-3 flex items-center justify-center w-full lg:pt-4 lg:pb-4 lg:pl-1 lg:pr-5">
                    <div
                      className="relative w-full overflow-hidden"
                      style={{ aspectRatio: "16/9", borderRadius: 14 }}
                      onMouseEnter={() => setHoveredIndex(i)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <MuxPlayer
                        ref={(el) => { playerRefs.current[i] = el; }}
                        playbackId={t.playbackId}
                        loop
                        defaultHiddenCaptions
                        disableCookies
                        disableTracking
                        style={{
                          width: "100%",
                          height: "100%",
                          "--controls": "none",
                          "--accent-color": "#ffffff",
                          "--media-primary-color": "#ffffff",
                          "--media-secondary-color": "#000000",
                        } as never}
                        onPlay={() => setIsPlaying(prev => prev.map((v, idx) => idx === i ? true : v))}
                        onPause={() => setIsPlaying(prev => prev.map((v, idx) => idx === i ? false : v))}
                      />

                      {/* Inactive overlay — dims non-active cards */}
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background: "rgba(0,0,0,0.45)",
                          opacity: isActive ? 0 : 1,
                          transition: reducedMotion ? "none" : "opacity 300ms ease",
                          borderRadius: 14,
                        }}
                      />

                      {/* Play/Pause overlay — always visible when paused, hover-only when playing */}
                      {isActive && (
                        <div
                          className="absolute inset-0 flex items-center justify-center cursor-pointer"
                          style={{
                            opacity: !isPlaying[i] || hoveredIndex === i ? 1 : 0,
                            transition: "opacity 200ms ease",
                          }}
                          onClick={() => togglePlay(i)}
                        >
                          <div
                            className="flex items-center justify-center rounded-full"
                            style={{ width: 56, height: 56, backgroundColor: "rgba(255,255,255,0.85)" }}
                          >
                            {isPlaying[i] ? (
                              <svg width="18" height="18" viewBox="0 0 24 24">
                                <rect x="5" y="4" width="4" height="16" rx="1" fill="#307D93" />
                                <rect x="15" y="4" width="4" height="16" rx="1" fill="#307D93" />
                              </svg>
                            ) : (
                              <svg width="18" height="18" viewBox="0 0 24 24" style={{ marginLeft: 3 }}>
                                <path d="M8 5v14l11-7L8 5z" fill="#307D93" />
                              </svg>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Expand button — only on active card */}
                      {isActive && (
                        <div className="absolute bottom-3 right-3 pointer-events-none">
                          <button
                            className="flex items-center justify-center rounded-md focus:outline-none pointer-events-auto cursor-pointer"
                            style={{ width: 30, height: 30, backgroundColor: "rgba(255,255,255,0.85)" }}
                            onClick={(e) => {
                              e.stopPropagation();
                              playerRefs.current[i]?.pause();
                              setIsPlaying(prev => prev.map(() => false));
                              setShowModal(true);
                            }}
                            aria-label="Expand video"
                          >
                            <ExpandIcon />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                </div>
              </div>
            );
          })}
        </div>
        </div>
      </div>

      {/* Navigation: prev arrow + dots + next arrow */}
      <div className="flex items-center justify-center gap-5 mt-8" role="group" aria-label="Testimonial navigation">
        {/* Prev */}
        <button
          onClick={goPrev}
          onMouseEnter={() => setArrowHover("prev")}
          onMouseLeave={() => setArrowHover(null)}
          aria-label="Previous testimonial"
          className="flex items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#307D93] cursor-pointer"
          style={{
            width: 44,
            height: 44,
            background: arrowHover === "prev" ? "#307D93" : "#ffffff",
            border: "1.5px solid #307D93",
            boxShadow: "0 2px 8px rgba(48,125,147,0.15)",
            transition: "background 200ms ease, box-shadow 200ms ease",
          }}
        >
          <ChevronLeft color={arrowHover === "prev" ? "#ffffff" : "#307D93"} />
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {TESTIMONIALS.map((_, i) => {
            const active = i === currentIndex;
            return (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                aria-current={active ? "true" : undefined}
                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#307D93] rounded-full cursor-pointer"
                style={{
                  width: active ? 28 : 10,
                  height: 10,
                  borderRadius: 999,
                  background: active ? "#085856" : "rgba(48,125,147,0.3)",
                  transition: reducedMotion ? "none" : "width 250ms cubic-bezier(0.25,0.46,0.45,0.94), background 200ms ease",
                  border: "none",
                  padding: 0,
                }}
              />
            );
          })}
        </div>

        {/* Next */}
        <button
          onClick={goNext}
          onMouseEnter={() => setArrowHover("next")}
          onMouseLeave={() => setArrowHover(null)}
          aria-label="Next testimonial"
          className="flex items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#307D93] cursor-pointer"
          style={{
            width: 44,
            height: 44,
            background: arrowHover === "next" ? "#307D93" : "#ffffff",
            border: "1.5px solid #307D93",
            boxShadow: "0 2px 8px rgba(48,125,147,0.15)",
            transition: "background 200ms ease, box-shadow 200ms ease",
          }}
        >
          <ChevronRight color={arrowHover === "next" ? "#ffffff" : "#307D93"} />
        </button>
      </div>

      {/* Expand modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative w-full max-w-4xl mx-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-9 right-0 text-white text-sm font-sans flex items-center gap-1.5 opacity-80 hover:opacity-100 cursor-pointer"
              onClick={() => setShowModal(false)}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
              Close
            </button>
            <MuxPlayer
              playbackId={TESTIMONIALS[currentIndex].playbackId}
              streamType="on-demand"
              autoPlay
              defaultHiddenCaptions
              disableCookies
              disableTracking
              accentColor="#000000"
              className="w-full rounded-xl"
              style={{ aspectRatio: "16/9" } as never}
            />
          </div>
        </div>
      )}
    </section>
  );
}
