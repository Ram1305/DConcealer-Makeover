import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        surface: "#121414",
        background: "#121414",
        secondary: "#e9c349",
        "on-surface": "#e2e2e2",
        "on-surface-variant": "#c4c7c7",
        "on-secondary": "#3c2f00",
        "on-secondary-fixed": "#241a00",
        "on-secondary-container": "#342800",
        "secondary-container": "#af8d11",
        "secondary-fixed": "#ffe088",
        "surface-container-lowest": "#0c0f0f",
        "surface-container-low": "#1a1c1c",
        "surface-container": "#1e2020",
        "surface-container-high": "#282a2b",
        "surface-container-highest": "#333535",
        "surface-variant": "#333535",
        "surface-dim": "#121414",
        "surface-bright": "#37393a",
        outline: "#8e9192",
        "outline-variant": "#444748",
        primary: "#c8c6c5",
        "primary-container": "#1b1b1b",
        tertiary: "#d7c1c8",
        error: "#ffb4ab",
        rosegold: {
          DEFAULT: "#e9c349",
          light: "#ffe088",
          dark: "#af8d11",
        },
        blush: "#FCE4EC",
        cream: "#FFF8F0",
        ink: "#e2e2e2",
      },
      spacing: {
        "container-padding": "24px",
        base: "8px",
        "stack-sm": "12px",
        "stack-md": "24px",
        "stack-lg": "48px",
        gutter: "16px",
        "section-gap": "80px",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-outfit)", "sans-serif"],
        "headline-lg": ["var(--font-playfair)", "serif"],
        "headline-sm": ["var(--font-playfair)", "serif"],
        "headline-md": ["var(--font-playfair)", "serif"],
        "headline-lg-mobile": ["var(--font-playfair)", "serif"],
        "display-lg": ["var(--font-playfair)", "serif"],
        "label-lg": ["var(--font-outfit)", "sans-serif"],
        "body-md": ["var(--font-outfit)", "sans-serif"],
        "body-lg": ["var(--font-outfit)", "sans-serif"],
      },
      fontSize: {
        "headline-lg": ["48px", { lineHeight: "1.2", fontWeight: "600" }],
        "headline-lg-mobile": ["36px", { lineHeight: "1.2", fontWeight: "600" }],
        "display-lg": ["64px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-md": ["32px", { lineHeight: "1.3", fontWeight: "500" }],
        "headline-sm": ["24px", { lineHeight: "1.4", fontWeight: "500" }],
        "label-lg": ["14px", { lineHeight: "1.2", letterSpacing: "0.1em", fontWeight: "600" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "300" }],
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #af8d11 0%, #e9c349 45%, #ffe088 65%, #e9c349 100%)",
        "ink-gradient": "linear-gradient(180deg, #121414 0%, #1a1c1c 100%)",
      },
      boxShadow: {
        luxury: "0 20px 60px -15px rgba(233, 195, 73, 0.35)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.3)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(3deg)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        glow: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        glow: "glow 3s ease-in-out infinite",
        "fade-in": "fadeIn 1s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
