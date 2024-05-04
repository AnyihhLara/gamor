import { useState } from "react";
import DarkModeMoonIcon from "./DarkModeMoonIcon";
import DarkModeSunIcon from "./DarkModeSunIcon";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(true);

  function handleClick() {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
  return (
    <button onClick={handleClick} type="button">
      {darkMode ? <DarkModeMoonIcon /> : <DarkModeSunIcon />}
    </button>
  );
}

