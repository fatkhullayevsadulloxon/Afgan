import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Uzbekistan Business House — Kabul";
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
          background: "#0A1330",
          padding: 80,
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#E8D9AE",
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
            color: "#FFFFFF",
            fontSize: 64,
            lineHeight: 1.1,
            fontWeight: 600,
          }}
        >
          Uzbekistan Business House
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            color: "#C9A24B",
            fontSize: 28,
          }}
        >
          Tashkent ↔ Kabul
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 48,
            width: 420,
            height: 1,
            background: "#C9A24B",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
