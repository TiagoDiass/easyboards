import { useState } from 'react';

type Themes = 'light' | 'dark';

export default function useTheme() {
  const [currentTheme, setTheme] = useState<Themes>('light');

  const toggleTheme = () => {
    setTheme((current) => {
      const newTheme = current === 'dark' ? 'light' : 'dark';

      return newTheme;
    });
  };

  return {
    currentTheme,
    toggleTheme
  };
}
