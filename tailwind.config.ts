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
        brand: {
          blue: "#333399",
          "blue-deep": "#1f1f7a",
          "blue-mid": "#282890",
          red: "#ED1B24",
          "red-dark": "#c4161e",
          green: "#223127",
          "green-dark": "#1a2620",
          purple: "#857C8D",
          "purple-light": "#a89bb0",
          gold: "#F9CB40",
          "gold-dark": "#d4a91e",
          light: "#F4F7FA",
        },
      },
      fontFamily: {
        serif: ["Rundale", "Georgia", "serif"],
        sans: ["Montserrat", "system-ui", "sans-serif"],
        rundale: ["Rundale", "Georgia", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        "display-2xl": [
          "clamp(2.75rem, 6vw, 5rem)",
          { lineHeight: "1.05", letterSpacing: "-0.01em" },
        ],
        "display-xl": [
          "clamp(2.25rem, 4.5vw, 3.75rem)",
          { lineHeight: "1.08", letterSpacing: "-0.01em" },
        ],
        "display-lg": [
          "clamp(1.75rem, 3vw, 2.75rem)",
          { lineHeight: "1.15", letterSpacing: "-0.005em" },
        ],
        "display-md": ["clamp(1.4rem, 2.5vw, 2rem)", { lineHeight: "1.25" }],
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #333399 0%, #ED1B24 100%)",
        "gradient-brand-r":
          "linear-gradient(to right, #333399 0%, #ED1B24 100%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      boxShadow: {
        card: "0 4px 24px rgba(51, 51, 153, 0.07)",
        "card-hover": "0 16px 48px rgba(51, 51, 153, 0.18)",
        red: "0 4px 20px rgba(237, 27, 36, 0.35)",
        "red-hover": "0 8px 32px rgba(237, 27, 36, 0.5)",
        gold: "0 4px 20px rgba(249, 203, 64, 0.35)",
        blue: "0 4px 20px rgba(51, 51, 153, 0.35)",
        "blue-hover": "0 8px 32px rgba(51, 51, 153, 0.5)",
        glass:
          "0 8px 32px rgba(10, 25, 47, 0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
      },
      borderRadius: {
        card: "0.75rem",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "slow-zoom": "slowZoom 20s ease-in-out infinite alternate",
        shimmer: "shimmer 2s linear infinite",
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
      transitionTimingFunction: {
        spring: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
    },
  },
  plugins: [],
};

export default config;
