/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#e5e5e5",
        primaryHeader: "#5D4063",
        secondaryHeader: "#fca311",
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
