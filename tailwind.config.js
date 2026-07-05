/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index.tsx",
    "./App.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
        display: ['"Cabinet Grotesk"', '"DM Sans"', "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', '"Courier New"', "monospace"],
      },
      colors: {
        surface: {
          DEFAULT: "#FFFFFF",
          alt: "#F5F5F0",
        },
        amber: {
          DEFAULT: "#D4A84B",
          text: "#5C7080",
          btn: "#92680A",
        },
        steel: {
          DEFAULT: "#5C7080",
          light: "rgba(92, 112, 128, 0.1)",
          text: "#4A6170",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-up": "fadeUp 0.55s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-dot": "statusPulse 2.5s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        statusPulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
