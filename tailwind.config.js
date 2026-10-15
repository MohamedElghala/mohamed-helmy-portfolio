/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        noir: {
          950: "#050607",
          900: "#090B0C",
          850: "#101316",
          800: "#15191D",
          700: "#22272E",
          600: "#363E48",
        },
        champagne: {
          light: "#EADBB5",
          DEFAULT: "#C8A96A",
          dark: "#9E8043",
        },
        bone: {
          DEFAULT: "#F2EDE4",
          muted: "#A69F94",
          dim: "#746E64",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      keyframes: {
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
      },
      animation: {
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
      },
    },
  },
  plugins: [],
};
