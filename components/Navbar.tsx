"use client";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav>
      <div>
        {/* Logo element, in this case mine */}
        <h1>
          by Maurii <span>.</span>
        </h1>
        {/* Middle element */}
        <div>
          <ul>
            <li>Hem</li>
            <li>Produkter</li>
            <li>Varukorg</li>
          </ul>
        </div>

        {/* DarkMode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle theme"
        >
          {darkMode ? <Moon /> : <Sun />}
        </button>
      </div>
    </nav>
  );
}
