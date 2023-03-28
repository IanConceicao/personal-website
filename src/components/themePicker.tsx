import { useEffect, useState } from "react";

export default function ThemePicker() {
  const themes = ["Default", "Dark", "Vintage"];
  const [currentTheme, setCurrentTheme] = useState("");

  useEffect(() => {
    // Set theme state on page load
    setCurrentTheme(
      document.documentElement.getAttribute("data-theme") ||
        localStorage.theme ||
        "Default"
    );
  }, []);

  useEffect(() => {
    // Change DOM and local storage on theme change
    if (currentTheme) {
      document.documentElement.setAttribute(
        "data-theme",
        currentTheme.toLowerCase()
      );
      localStorage.setItem("theme", currentTheme);
    }
  }, [currentTheme]);

  return (
    <div className="flex gap-x-2 mb-3">
      {themes.map((theme) => (
        <button
          key={theme}
          type="button"
          className={`font-gopher text-center text-sm px-2 py-1 border 
           rounded-full ${
             currentTheme.toLowerCase() == theme.toLowerCase()
               ? "text-select border-select"
               : "text-primaryHeader text-hover-effect border-primaryHeader hover:border-select"
           }`}
          onClick={() => setCurrentTheme(theme)}
        >
          {theme}
        </button>
      ))}
    </div>
  );
}
