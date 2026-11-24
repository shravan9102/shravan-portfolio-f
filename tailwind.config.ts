import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: { colors: { ink: "#060a14", navy: "#0b1220", accent: "#22d3ee", brand: "#3b82f6", violet: "#8b5cf6" },
    fontFamily: { sans: ["var(--font-inter)", "system-ui", "sans-serif"], display: ["var(--font-display)", "var(--font-inter)", "system-ui", "sans-serif"] } } },
  plugins: [],
} satisfies Config;
