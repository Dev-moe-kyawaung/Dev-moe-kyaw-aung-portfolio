import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "oklch(0.98 0.002 240)",
        foreground: "oklch(0.15 0.02 240)",
        primary: {
          DEFAULT: "oklch(0.62 0.22 100)",
          foreground: "oklch(0.98 0.002 240)",
          light: "oklch(0.75 0.18 100)",
          dark: "oklch(0.50 0.20 100)",
        },
        secondary: {
          DEFAULT: "oklch(0.25 0.06 240)",
          foreground: "oklch(0.98 0.002 240)",
        },
        accent: {
          DEFAULT: "oklch(0.70 0.18 180)",
          foreground: "oklch(0.15 0.02 240)",
        },
        muted: {
          DEFAULT: "oklch(0.92 0.01 240)",
          foreground: "oklch(0.45 0.04 240)",
        },
        card: {
          DEFAULT: "oklch(1 0 0)",
          foreground: "oklch(0.15 0.02 240)",
        },
        border: "oklch(0.85 0.02 240)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
