import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Byond Capital brand palette — navy / steel / neutrals. NO purple.
        navy: {
          DEFAULT: "#060C18",
          900: "#060C18",
          800: "#0A1326",
          700: "#0F1B33",
          600: "#16243F",
        },
        steel: {
          DEFAULT: "#4A80C4",
          light: "#6E9BD6",
          dark: "#3A6BA8",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Barlow Condensed", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
