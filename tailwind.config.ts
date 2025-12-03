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
        primary: {
          50: "#fdf2f8",
          100: "#fce7f3",
          200: "#fbcfe8",
          300: "#f9a8d4",
          400: "#f472b6",
          500: "#ec4899", // Main pink
          600: "#db2777", // Darker pink
          700: "#be185d",
          800: "#9f1239",
          900: "#831843",
        },
        rose: {
          50: "#fff1f2",
          100: "#ffe4e6",
          200: "#fecdd3",
          300: "#fda4af",
          400: "#fb7185",
          500: "#f43f5e", // Warm rose
          600: "#e11d48",
        },
        blush: {
          50: "#fdf4ed",
          100: "#fbe9d4",
          200: "#f7d3a9",
          300: "#f2b774",
          400: "#ed9a3d", // Dusty blush
          500: "#d97c1f",
        },
        gold: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b", // Elegant gold
          600: "#d97706",
          700: "#b45309",
        },
        charcoal: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937", // Deep charcoal
          900: "#111827",
        },
        peach: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c", // Soft peach
          500: "#f97316",
        },
        cream: {
          50: "#fefdfb",
          100: "#fefbf5",
          200: "#fdf6e9",
          300: "#fcf1dd",
          400: "#faecd1", // Creamy white
        },
        ivory: {
          50: "#fefefe",
          100: "#fefcf9",
          200: "#fdf9f3",
          300: "#fbf5ed",
          400: "#f9f1e7", // Warm ivory
        },
        roseQuartz: {
          50: "#fdf2f8",
          100: "#fce7f3",
          200: "#f9d0e7",
          300: "#f5b8db",
          400: "#f0a1cf", // Soft rose quartz
          500: "#eb8ac3",
        },
        champagne: {
          50: "#fefdf9",
          100: "#fdfbf3",
          200: "#fbf7e7",
          300: "#f9f3db",
          400: "#f7efcf", // Champagne shimmer
          500: "#f5ebc3",
        },
        deepBrown: {
          50: "#faf9f7",
          100: "#f5f3ef",
          200: "#ebe7df",
          300: "#e1dbcf",
          400: "#d7cfbf",
          500: "#2c2416", // Deep brown for text
          600: "#1f1810",
        },
        stone: {
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917",
        },
        berry: {
          50: "#fdf2f8",
          100: "#fce7f3",
          200: "#fbcfe8",
          300: "#f9a8d4",
          400: "#f472b6",
          500: "#ec4899",
          600: "#db2777",
          700: "#be185d",
          800: "#9f1239",
          900: "#831843",
        },
        deepBlush: {
          50: "#fef1f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;

