"use client";

import { createContext, useContext, useEffect, useState, useMemo, ReactNode } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  readonly theme: Theme;
  readonly setTheme: (theme: Theme) => void;
  readonly toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  readonly children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check localStorage for saved theme preference
    const savedTheme = globalThis.localStorage?.getItem("theme") as Theme | null;
    if (savedTheme && (savedTheme === "dark" || savedTheme === "light")) {
      setThemeState(savedTheme);
    } else {
      // Check system preference
      const prefersDark = globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
      setThemeState(prefersDark ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const root = globalThis.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    globalThis.localStorage?.setItem("theme", theme);
  }, [theme, mounted]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const toggleTheme = () => {
    setThemeState((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const contextValue = useMemo(
    () => ({ theme, setTheme, toggleTheme }),
    [theme]
  );

  // Always provide the context, even before mounting
  // This ensures useTheme() can be called safely
  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

