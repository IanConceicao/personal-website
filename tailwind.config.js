/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#e5e5e5",
        primaryHeader: "#5D4063",
        altPrimaryHeader: "#fca311",
        secondaryHeader: "#454F6A",
        primaryText: "#14213D",
      },
      fontFamily: {
        book: ["StolzlBook"],
        gopher: ["Gopher", "serif"],
      },
    },
  },
  plugins: [],
};
