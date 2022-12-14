/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{tsx, ts, jsx, js}",
    "./pages/components/*.{tsx, ts, jsx, js}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      serif: ["Cormorant Garamond", "serif"],
      display: ["DM Serif Display", "serif"],
      firaCode: ["Fira Code", "Menlo"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
