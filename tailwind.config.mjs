import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gmk: {
          ink: "#0f172a",       // Deep Slate / Corporate Black
          blue: "#0047bb",      // Precision Industrial Blue (Sefar signature blue)
          paper: "#ffffff",     // Clean clinical white
          surface: "#f8fafc",   // Light gray container fill (slate-50)
          line: "#e2e8f0",      // Sharp border lines (slate-200)
        },
      },
      fontFamily: {
        sans: ["var(--font-noto-serif)", "Georgia", "Times New Roman", "serif"],
        body: ["var(--font-noto-serif)", "Georgia", "Times New Roman", "serif"],
        heading: ["var(--font-fira-sans)", "Arial Narrow", "Arial", "sans-serif"],
      },
      fontSize: {
        sm: ["0.75rem", { lineHeight: "1.125rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        xl: ["1.333rem", { lineHeight: "2rem" }],
        "2xl": ["1.777rem", { lineHeight: "2.5rem" }],
        "3xl": ["2.369rem", { lineHeight: "1.2" }],
        "4xl": ["3.158rem", { lineHeight: "1.1" }],
        "5xl": ["4.21rem", { lineHeight: "1.05" }],
      },
      borderRadius: {
        none: "0px",
        DEFAULT: "0px",
        sm: "0px",
        md: "0px",
        lg: "0px",
        xl: "0px",
        "2xl": "0px",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        sefarLight: {
          primary: "#0047bb",
          secondary: "#0f172a",
          accent: "#0047bb",
          neutral: "#0f172a",
          "base-100": "#ffffff",
          "base-200": "#f8fafc",
          "base-300": "#e2e8f0",
          info: "#0047bb",
          success: "#16a34a",
          warning: "#ca8a04",
          error: "#dc2626",
        },
      },
      "light",
    ],
    defaultTheme: "sefarLight",
    logs: false,
  },
};

export default config;