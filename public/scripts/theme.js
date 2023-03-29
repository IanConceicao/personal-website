if (
  // Dark theme, or no theme and device in dark mode
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.setAttribute("data-theme", "dark");
} else if (localStorage.theme == "vintage") {
  // Vintage theme
  document.documentElement.setAttribute("data-theme", "vintage");
} else {
  // Default
  document.documentElement.setAttribute("data-theme", "default");
}
