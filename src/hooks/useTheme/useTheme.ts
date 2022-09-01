import { useState } from 'react';
import { CURRENT_THEME_KEY } from 'constants/local-storage-keys';

type Themes = 'light' | 'dark';

export default function useTheme() {
  const [currentTheme, setTheme] = useState<Themes>(() => {
    if (typeof window === 'undefined') {
      return 'light';
    } else {
      const themeFromStorage = localStorage.getItem(CURRENT_THEME_KEY) as Themes | null;
      return themeFromStorage || 'light';
    }
  });

  const toggleTheme = () => {
    setTheme((current) => {
      const newTheme = current === 'dark' ? 'light' : 'dark';
      localStorage.setItem(CURRENT_THEME_KEY, newTheme);

      return newTheme;
    });
  };

  return {
    currentTheme,
    toggleTheme
  };
}
