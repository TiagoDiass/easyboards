import { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles';
import useOnAppInit from 'logic/useOnAppInit/useOnAppInit';
import lightTheme, { darkTheme } from 'styles/theme';

const themes = {
  light: lightTheme,
  dark: darkTheme as unknown as typeof lightTheme
};

/**
 * @component Next.js root component
 */
export default function App({ Component, pageProps }: AppProps) {
  const [currentTheme, setTheme] = useState<'light' | 'dark'>('light');
  const toggleTheme = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  const onAppInit = useOnAppInit();

  useEffect(() => {
    onAppInit();
  }, [onAppInit]);

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='shortcut icon' href='/img/icon-512.png' />
        <link rel='apple-touch-icon' href='/img/icon-512.png' />
        <link rel='manifest' href='manifest.json' />
        <meta
          name='description'
          content='A boilerplate to work with Next.js, Typescript and more.'
        />
        <title>Next.js Boilerplate</title>
      </Head>

      <ThemeProvider theme={themes[currentTheme]}>
        <GlobalStyles />
        <Component {...pageProps} toggleTheme={toggleTheme} />
      </ThemeProvider>
    </>
  );
}
