/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F2F7FF",
        headerBackground: "#ebf3ff",
        primaryHeader: "#0f58d6",
        altPrimaryHeader: "#e2619f",
        secondaryHeader: "#10316B",
        primaryText: "#14213D",
      },
      fontFamily: {
        gopher: ["Gopher", "serif"],
      },
    },
  },
  plugins: [],
};
