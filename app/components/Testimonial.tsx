"use client";
import { useRef, useState } from "react";
import MuxPlayer from "@mux/mux-player-react";
import type MuxPlayerElement from "@mux/mux-player";

const PLAYBACK_ID = "ky85x1jCLPGj01xCsPM1upXYxQvuocJPnz1MCnJ3mM600";


function ExpandIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#307D93" strokeWidth="2.5" strokeLinecap="round">
      <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
    </svg>
  );
}

export default function Testimonial() {
  const playerRef = useRef<MuxPlayerElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);


  const togglePlay = () => {
    if (!playerRef.current) return;
    if (isPlaying) {
      playerRef.current.pause();
      setIsPlaying(false);
    } else {
      playerRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  return (
    <section id="case-study" className="py-20 bg-white">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2
          className="font-display font-semibold text-[clamp(28px,3vw,44px)] leading-tight"
          style={{ color: "#085856" }}
        >
          Hear from our customers
        </h2>
      </div>

      {/* Card */}
      <div className="max-w-[1125px] mx-auto px-8">
        <div
          className="bg-white grid grid-cols-1 lg:grid-cols-2 overflow-hidden lg:h-[486px]"
          style={{ borderRadius: 20, boxShadow: "0 0 36px #307D93" }}
        >
          {/* Quote side */}
          <div className="flex flex-col justify-center px-8 py-10 lg:px-14 lg:py-12">
            <p
              className="font-sans font-light text-base lg:text-xl leading-7 lg:leading-8 text-black"
              style={{ maxWidth: 420 }}
            >
              &ldquo;Lokam boosted our Google ratings from 4.0 to 4.6 in 5 weeks
              by catching service detractors in real time. On sales, it uncovered
              hidden objections from unsold desklog traffic, helping us close
              15–20 extra cars monthly&rdquo;
            </p>
            <div className="mt-8">
              <p className="font-sans font-semibold text-[22px] leading-8 text-black">
                Scott Falcone
              </p>
              <p className="font-sans font-light text-xl leading-7 text-black mt-1">
                Dealer principal,<br />World Auto Group.
              </p>
            </div>
          </div>

          {/* Video side */}
          <div
            ref={containerRef}
            className="flex items-center justify-center lg:-translate-x-10 overflow-hidden w-full"
          >
            {/* Tight wrapper that matches the video's rendered size */}
            <div
              className="relative w-full"
              style={{ aspectRatio: "16/9" }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <MuxPlayer
                ref={playerRef}
                playbackId={PLAYBACK_ID}
                loop
                style={{
                  width: "100%",
                  height: "100%",
                  "--controls": "none",
                  "--accent-color": "#ffffff",
                  "--media-primary-color": "#ffffff",
                  "--media-secondary-color": "#000000",
                } as never}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* Play/Pause overlay — visible on hover */}
              <div
                className="absolute inset-0 flex items-center justify-center transition-opacity duration-200 cursor-pointer"
                style={{ opacity: isHovered ? 1 : 0 }}
                onClick={togglePlay}
              >
                <div
                  className="flex items-center justify-center rounded-full"
                  style={{ width: 56, height: 56, backgroundColor: "rgba(255,255,255,0.85)" }}
                >
                  {isPlaying ? (
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

              {/* Expand button */}
              <div className="absolute bottom-3 right-3 pointer-events-none">
                <button
                  className="flex items-center justify-center rounded-md focus:outline-none pointer-events-auto"
                  style={{ width: 30, height: 30, backgroundColor: "rgba(255,255,255,0.85)" }}
                  onClick={(e) => { e.stopPropagation(); setShowModal(true); }}
                  aria-label="Expand video"
                >
                  <ExpandIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
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
              className="absolute -top-9 right-0 text-white text-sm font-sans flex items-center gap-1.5 opacity-80 hover:opacity-100"
              onClick={() => setShowModal(false)}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
              Close
            </button>
            <iframe
              src={`https://player.mux.com/${PLAYBACK_ID}?autoplay=true`}
              className="w-full rounded-xl"
              style={{ border: "none", aspectRatio: "16/9" }}
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
