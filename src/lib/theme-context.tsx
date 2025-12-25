"use client";

import React, { createContext, useContext, useEffect, useMemo } from "react";

type ThemeValues = {
  primary: string;
  primaryHover: string;
  primaryDark?: string;
};

const defaultTheme: ThemeValues = {
  primary: "#237C8E",
  primaryHover: "#2E91A5",
  primaryDark: "#1E6D7E",
};

const ThemeContext = createContext<ThemeValues>(defaultTheme);

export function ThemeProvider({ children, value }: { children: React.ReactNode; value?: Partial<ThemeValues> }) {
  const theme = useMemo(() => ({
    primary: value?.primary || defaultTheme.primary,
    primaryHover: value?.primaryHover || defaultTheme.primaryHover,
    primaryDark: value?.primaryDark || defaultTheme.primaryDark,
  }), [value]);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--color-primary", theme.primary);
    root.style.setProperty("--color-primary-light", theme.primaryHover);
    if (theme.primaryDark) root.style.setProperty("--color-primary-dark", theme.primaryDark);
  }, [theme]);

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}

