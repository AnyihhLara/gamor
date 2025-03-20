import { useState } from "react";
import DarkModeMoonIcon from "./DarkModeMoonIcon";
import DarkModeSunIcon from "./DarkModeSunIcon";

export default function DarkModeToggle() {
  const [darkModeClass, setDarkModeClass] = useState<string | null>("light");

  function handleClick() {
    if (darkModeClass === "dark") {
      setDarkModeClass("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else if (darkModeClass === "light") {
      setDarkModeClass("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
  return (
    <button onClick={handleClick} type="button">
      {darkModeClass === "light" ? <DarkModeMoonIcon /> : <DarkModeSunIcon />}
    </button>
  );
}
