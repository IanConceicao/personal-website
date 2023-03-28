/** @type {import('tailwindcss').Config} */
function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: withOpacity("--color-background"),
        headerBackground: withOpacity("--color-header-background"),
        headerBorder: withOpacity("--color-header-border"),
        primaryHeader: withOpacity("--color-primary-header"),
        select: withOpacity("--color-select"),
        success: withOpacity("--color-success"),
        secondaryHeader: withOpacity("--color-secondary-header"),
        primaryText: withOpacity("--color-primary-text"),
      },
      fontFamily: {
        gopher: ["var(--custom-font-family)", "serif"],
      },
    },
  },
  plugins: [],
};
