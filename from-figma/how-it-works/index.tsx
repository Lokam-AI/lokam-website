import { useEffect, useRef, useState } from "react";

const waveformBars = [
  { height: 18, opacity: 1 },
  { height: 28, opacity: 1 },
  { height: 38, opacity: 1 },
  { height: 52, opacity: 1 },
  { height: 44, opacity: 1 },
  { height: 60, opacity: 1 },
  { height: 72, opacity: 1 },
  { height: 64, opacity: 1 },
  { height: 80, opacity: 1 },
  { height: 88, opacity: 1 },
  { height: 76, opacity: 1 },
  { height: 92, opacity: 1 },
  { height: 84, opacity: 1 },
  { height: 96, opacity: 1 },
  { height: 88, opacity: 1 },
  { height: 72, opacity: 1 },
  { height: 60, opacity: 1 },
  { height: 48, opacity: 1 },
  { height: 36, opacity: 1 },
  { height: 24, opacity: 1 },
  { height: 14, opacity: 0.5 },
  { height: 10, opacity: 0.4 },
  { height: 8, opacity: 0.35 },
  { height: 8, opacity: 0.3 },
  { height: 8, opacity: 0.3 },
  { height: 8, opacity: 0.28 },
  { height: 8, opacity: 0.28 },
  { height: 8, opacity: 0.26 },
  { height: 8, opacity: 0.26 },
  { height: 8, opacity: 0.25 },
  { height: 8, opacity: 0.25 },
  { height: 8, opacity: 0.25 },
  { height: 8, opacity: 0.25 },
  { height: 8, opacity: 0.25 },
  { height: 8, opacity: 0.25 },
  { height: 8, opacity: 0.25 },
  { height: 8, opacity: 0.25 },
  { height: 8, opacity: 0.25 },
  { height: 8, opacity: 0.25 },
  { height: 8, opacity: 0.25 },
  { height: 8, opacity: 0.25 },
  { height: 8, opacity: 0.25 },
  { height: 8, opacity: 0.25 },
  { height: 10, opacity: 0.3 },
  { height: 14, opacity: 0.4 },
  { height: 20, opacity: 0.5 },
  { height: 28, opacity: 1 },
  { height: 40, opacity: 1 },
  { height: 56, opacity: 1 },
  { height: 68, opacity: 1 },
  { height: 80, opacity: 1 },
  { height: 92, opacity: 1 },
  { height: 100, opacity: 1 },
  { height: 92, opacity: 1 },
  { height: 84, opacity: 1 },
  { height: 76, opacity: 1 },
  { height: 88, opacity: 1 },
  { height: 96, opacity: 1 },
  { height: 80, opacity: 1 },
  { height: 68, opacity: 1 },
  { height: 52, opacity: 1 },
  { height: 36, opacity: 1 },
  { height: 22, opacity: 1 },
];

const TOTAL_DURATION = 84; // 1:24 in seconds

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export const Layer = (): JSX.Element => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= TOTAL_DURATION) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 0.1;
        });
      }, 100);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying]);

  const progress = currentTime / TOTAL_DURATION;
  const playedBarCount = Math.floor(progress * waveformBars.length);

  const handleWaveformClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const ratio = x / rect.width;
    setCurrentTime(ratio * TOTAL_DURATION);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        className="relative bg-white rounded-3xl shadow-2xl"
        style={{
          width: "730px",
          minHeight: "320px",
          padding: "36px 48px 40px 48px",
          boxShadow:
            "0 0 0 1px rgba(0,0,0,0.04), 0 8px 48px 0 rgba(100,200,200,0.18), 0 2px 16px 0 rgba(0,0,0,0.08)",
        }}
      >
        {/* Header Row */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            {/* Phone Icon Circle */}
            <div
              className="flex items-center justify-center rounded-full border-2"
              style={{
                width: "36px",
                height: "36px",
                borderColor: "#5ecfb1",
                flexShrink: 0,
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"
                  fill="#5ecfb1"
                />
              </svg>
            </div>
            <span
              className="tracking-widest font-semibold text-gray-500"
              style={{
                fontSize: "13px",
                letterSpacing: "0.12em",
                fontFamily: "'Inter', 'Helvetica', sans-serif",
              }}
            >
              SAMPLE SERVICE CALL
            </span>
          </div>
          {/* Positive Badge */}
          <div
            className="flex items-center gap-2 rounded-full px-4 py-1"
            style={{
              backgroundColor: "#d6f5ec",
              border: "1px solid #b2ead8",
            }}
          >
            <span
              className="rounded-full"
              style={{
                width: "8px",
                height: "8px",
                backgroundColor: "#3db88a",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                color: "#2a9d6e",
                fontFamily: "'Inter', 'Helvetica', sans-serif",
                fontWeight: 600,
                fontSize: "14px",
              }}
            >
              Positive
            </span>
          </div>
        </div>
        {/* Caller Name */}
        <div
          className="mb-6"
          style={{
            fontFamily: "'Inter', 'Helvetica', sans-serif",
            fontWeight: 800,
            fontSize: "32px",
            color: "#111",
            lineHeight: 1.2,
          }}
        >
          Sarah Jenkins
        </div>
        {/* Waveform */}
        <div
          className="flex items-center cursor-pointer select-none mb-6"
          style={{ height: "110px", gap: "3px" }}
          onClick={handleWaveformClick}
          role="slider"
          aria-label="Audio progress"
          aria-valuenow={Math.round(currentTime)}
          aria-valuemin={0}
          aria-valuemax={TOTAL_DURATION}
        >
          {waveformBars.map((bar, i) => {
            const isPlayed = i < playedBarCount;
            const isDot = bar.opacity < 0.5;
            return (
              <div
                key={i}
                style={{
                  width: isDot ? "5px" : "7px",
                  height: isDot ? "5px" : `${bar.height}px`,
                  borderRadius: isDot ? "50%" : "4px",
                  backgroundColor: "#5ecfb1",
                  opacity: isPlayed
                    ? 1
                    : bar.opacity < 0.5
                      ? bar.opacity + 0.1
                      : 0.35,
                  flexShrink: 0,
                  transition: "opacity 0.1s",
                }}
              />
            );
          })}
        </div>
        {/* Controls Row */}
        <div className="flex items-center justify-between">
          {/* Current Time */}
          <span
            style={{
              fontFamily: "'Inter', 'Helvetica', sans-serif",
              fontSize: "15px",
              color: "#888",
              fontWeight: 500,
              minWidth: "48px",
            }}
          >
            {formatTime(currentTime)}
          </span>
          {/* Play/Pause Button */}
          <button
            onClick={() => setIsPlaying((p) => !p)}
            className="flex items-center justify-center rounded-full focus:outline-none"
            style={{
              width: "52px",
              height: "52px",
              backgroundColor: "#5ecfb1",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 2px 12px 0 rgba(94,207,177,0.4)",
              flexShrink: 0,
            }}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="5" y="4" width="4" height="16" rx="1" fill="white" />
                <rect x="15" y="4" width="4" height="16" rx="1" fill="white" />
              </svg>
            ) : (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginLeft: "2px" }}
              >
                <path d="M8 5v14l11-7L8 5z" fill="white" />
              </svg>
            )}
          </button>
          {/* Total Duration */}
          <span
            style={{
              fontFamily: "'Inter', 'Helvetica', sans-serif",
              fontSize: "15px",
              color: "#888",
              fontWeight: 500,
              minWidth: "48px",
              textAlign: "right",
            }}
          >
            {formatTime(TOTAL_DURATION)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Layer;
