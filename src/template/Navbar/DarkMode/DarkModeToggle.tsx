import { useState } from "react";
import DarkModeMoonIcon from "./DarkModeMoonIcon";
import DarkModeSunIcon from "./DarkModeSunIcon";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(true);
  let darkModeClass: string | null;

  if (localStorage.getItem("color-theme")) {
    darkModeClass = localStorage.getItem("color-theme");
  } else if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    darkModeClass = "dark";
    console.log(darkModeClass);
  } else {
    darkModeClass = "light";
  }

  if (darkModeClass) {
    document.documentElement.classList.add(darkModeClass);
  }
  function handleClick() {
    setDarkMode(!darkMode);

    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  }
  return (
    <button onClick={handleClick} type="button">
      {darkModeClass === "light" ? <DarkModeMoonIcon /> : <DarkModeSunIcon />}
    </button>
  );
}
