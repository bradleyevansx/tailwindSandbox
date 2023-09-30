import React, { useState, useEffect } from "react";

const ColorModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleColorMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light"; // Whenever the user explicitly chooses light mode
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark"; // Whenever the user explicitly chooses dark mode
    }
    setIsDarkMode(!isDarkMode);
  };

  const handleSystemPreference = () => {
    localStorage.removeItem("theme"); // Whenever the user explicitly chooses to respect the OS preference
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  };

  return (
    <div className="flex items-center">
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        onClick={toggleColorMode}
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <button
        className="ml-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded"
        onClick={handleSystemPreference}
      >
        Auto
      </button>
    </div>
  );
};

export default ColorModeToggle;
