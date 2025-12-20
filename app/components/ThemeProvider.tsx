'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Theme = 'ocean' | 'sunset' | 'midnight' | 'christmas';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('christmas');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Load theme from localStorage, default to christmas
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && ['ocean', 'sunset', 'midnight', 'christmas'].includes(savedTheme)) {
      setThemeState(savedTheme);
    } else {
      // Default to christmas theme
      setThemeState('christmas');
    }
  }, []);

  useEffect(() => {
    if (mounted && typeof document !== 'undefined') {
      // Apply theme to document
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }
  }, [theme, mounted]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  // Always provide context, even when not mounted (for SSR)
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

