import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "Lokam - Voice AI for Automotive Dealerships";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  const svgData = readFileSync(join(process.cwd(), "public/LOKAM_PRIMARY_WHITE_FULL_LOGO.svg"));
  const base64 = svgData.toString("base64");
  const src = `data:image/svg+xml;base64,${base64}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#000000",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt="Lokam" style={{ width: 700, height: 222 }} />
      </div>
    ),
    { ...size }
  );
}
