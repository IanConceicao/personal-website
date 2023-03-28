if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.setAttribute("data-theme", "dark");
} else if (localStorage.theme == "vintage") {
  document.documentElement.setAttribute("data-theme", "vintage");
} else {
  document.documentElement.setAttribute("data-theme", "default");
}
