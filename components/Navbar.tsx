"use client";
import { Moon, Sun, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function NavBar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const navItems = [
    { name: "Hem", href: "#" },
    { name: "Produkter", href: "#" },
    { name: "Varukorg", href: "#" },
  ];

  return (
    <nav className="w-full backdrop-blur-md shadow-sm transition-all bg-white/70 dark:bg-stone-900/70">
      <div className="mx-auto grid max-w-7xl grid-cols-[150px_auto_150px] items-center px-6 py-3">
        {/* Left: Logo */}
        <div className="justify-self-start">
          <h1 className="text-xl font-semibold text-stone-900 tracking-tight dark:text-stone-100">
            by Maurii<span className="text-red-500 ml-1">.</span>
          </h1>
        </div>

        {/* Center: Navigation */}
        <div className="justify-self-center">
          <ul className="hidden md:flex items-center justify-center gap-8 text-sm font-medium text-stone-900 dark:text-stone-100">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="relative group transition-colors hover:text-red-500"
                >
                  {item.name}
                  <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-red-500 transition-all group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Dark Mode + Hamburger */}
        <div className="justify-self-end flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center justify-center rounded-md border border-stone-300 p-2 transition-colors hover:border-stone-500 dark:border-stone-700"
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <Moon className="h-5 w-5 text-red-500" />
            ) : (
              <Sun className="h-5 w-5 text-red-500" />
            )}
          </button>

          {/* Hamburger menu */}
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="md:hidden flex items-center justify-center rounded-md border border-stone-300 p-2 transition-colors hover:border-stone-500 dark:border-stone-700"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5 text-stone-800 dark:text-stone-100" />
              </button>
            </SheetTrigger>

            <SheetContent side="left" className="bg-white dark:bg-stone-900">
              <SheetHeader>
                <SheetTitle className="text-stone-900 dark:text-stone-100">
                  by Maurii<span className="text-red-500 ml-1">.</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-6 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-stone-800 dark:text-stone-100 text-base font-medium hover:text-red-500 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
