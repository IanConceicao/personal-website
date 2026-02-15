import { useEffect, useState } from "react";

export default function ThemePicker() {
  const themes: { display: string; internal: string }[] = [
    { display: "System", internal: "system" },
    { display: "Light", internal: "default" },
    { display: "Dark", internal: "dark" },
    { display: "Vintage", internal: "vintage" },
  ];
  const [currentTheme, setCurrentTheme] = useState("");

  useEffect(() => {
    // Set theme state on page load
    setCurrentTheme(localStorage.theme || "system");
  }, []);

  useEffect(() => {
    // Change DOM and local storage on theme change

    if (currentTheme === "system") {
      localStorage.removeItem("theme");
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "default");
      }
    } else if (currentTheme) {
      document.documentElement.setAttribute("data-theme", currentTheme);
      localStorage.setItem("theme", currentTheme);
    }
  }, [currentTheme]);

  return (
    <div className="flex gap-x-2 mb-3">
      {themes.map((theme) => (
        <button
          key={theme.internal}
          type="button"
          className={`text-center text-sm px-2 py-1 border 
           rounded-full ${
             currentTheme == theme.internal
               ? "text-select border-select"
               : "text-primary-header text-hover-effect border-primary-header hover:border-select"
           }`}
          onClick={() => setCurrentTheme(theme.internal)}
        >
          {theme.display}
        </button>
      ))}
    </div>
  );
}
