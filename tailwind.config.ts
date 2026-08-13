import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0F1B3C",
          dark: "#0A1330",
        },
        gold: {
          DEFAULT: "#C9A24B",
          light: "#E8D9AE",
        },
        "off-white": "rgba(255,255,255,0.75)",
        line: "rgba(255,255,255,0.14)",
        "bg-light": "#F5F3EE",
        ink: "#1A1A1A",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "var(--font-noto-serif)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        h1: ["clamp(2.25rem, 4vw + 1rem, 4rem)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        h2: ["clamp(1.75rem, 2vw + 1rem, 2.625rem)", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
      },
      maxWidth: {
        content: "1200px",
      },
      spacing: {
        section: "9rem",
      },
      transitionDuration: {
        250: "250ms",
      },
    },
  },
  plugins: [],
};
export default config;
