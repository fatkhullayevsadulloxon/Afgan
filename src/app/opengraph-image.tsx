import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "OXUS Trade & Investment Hub";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#F7F4EE",
          padding: 80,
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#C9A24B",
            fontSize: 18,
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          Uzbekistan — Afghanistan · Kabul
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            color: "#0F1B3C",
            fontSize: 64,
            lineHeight: 1.1,
            fontWeight: 700,
          }}
        >
          OXUS
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 16,
            color: "#0F1B3C",
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          Trade & Investment Hub
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 48,
            width: 420,
            height: 2,
            background: "#C9A24B",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
