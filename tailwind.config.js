/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        "gold": {
          50: "#f7f6ef",
          100: "#ece7d5",
          200: "#dbd1ad",
          300: "#c7b37d",
          400: "#b69959",
          500: "#a4844a",
          600: "#8f6c3f",
          700: "#735335",
          800: "#624631",
          900: "#553c2e",
          950: "#301f18",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["Noto Serif", "serif"],
      },
    },
  },
  plugins: [],
};
