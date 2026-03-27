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
        navy: {
          DEFAULT: "#0A192F",
          deep: "#060f1e",
          mid: "#112240",
          light: "#1d3461",
        },
        greige: {
          DEFAULT: "#D1D1C7",
          light: "#E8E8E0",
          pale: "#F4F4F0",
          dark: "#B8B8AD",
        },
        sage: {
          DEFAULT: "#8A9A5B",
          light: "#A8B87A",
          muted: "#C4CEAA",
          dark: "#6B7A44",
        },
        gold: {
          DEFAULT: "#C9A96E",
          light: "#DFC08F",
          dark: "#A88850",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["clamp(2.75rem, 6vw, 5rem)", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        "display-xl": ["clamp(2.25rem, 4.5vw, 3.75rem)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
        "display-lg": ["clamp(1.75rem, 3vw, 2.75rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "display-md": ["clamp(1.4rem, 2.5vw, 2rem)", { lineHeight: "1.25" }],
      },
      spacing: {
        "section": "7rem",
        "section-sm": "5rem",
      },
      borderRadius: {
        "card": "0.75rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "slow-zoom": "slowZoom 20s ease-in-out infinite alternate",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        slowZoom: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.06)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        "card": "0 4px 24px rgba(10, 25, 47, 0.06)",
        "card-hover": "0 16px 48px rgba(10, 25, 47, 0.12)",
        "glass": "0 8px 32px rgba(10, 25, 47, 0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
        "gold": "0 4px 20px rgba(201, 169, 110, 0.35)",
        "gold-hover": "0 8px 32px rgba(201, 169, 110, 0.5)",
      },
      transitionTimingFunction: {
        "spring": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "bounce-soft": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
