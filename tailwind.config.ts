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
        primary: "#1E3A8A",
        secondary: "#3B82F6",
        darkblue: "#0D224D",
        lightblue: "#C0D5ED",
        graytext: "#6B7280",
        accent: "#8B5CF6",
        "accent-bright": "#A78BFA",
        "dark-bg": "#0F0A1E",
        "dark-card": "#1A1333",
        "dark-border": "#2D2444",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-future":
          "linear-gradient(135deg, #0F0A1E 0%, #1A1333 40%, #1E1B4B 70%, #0D224D 100%)",
        "gradient-glow": "radial-gradient(ellipse 80% 50% at 70% 40%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(139, 92, 246, 0.25)",
        "glow-sm": "0 0 20px rgba(139, 92, 246, 0.15)",
        "depth-3d": "0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 30px rgba(139, 92, 246, 0.1)",
        "depth-3d-lg": "0 35px 60px -15px rgba(0, 0, 0, 0.5), 0 0 50px rgba(139, 92, 246, 0.12)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 40px rgba(139, 92, 246, 0.2)" },
          "50%": { opacity: "0.9", boxShadow: "0 0 60px rgba(139, 92, 246, 0.35)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
