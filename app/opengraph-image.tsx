import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "Lokam — Voice AI for Automotive Dealerships";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  const svgBuffer = readFileSync(
    join(process.cwd(), "public/assets/LOKAM_SECONDARY_LOGO_BLACK.svg")
  );
  const svgDataUri = `data:image/svg+xml;base64,${svgBuffer.toString("base64")}`;

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
        <img src={svgDataUri} width={300} height={300} alt="Lokam" />
      </div>
    ),
    { ...size }
  );
}
