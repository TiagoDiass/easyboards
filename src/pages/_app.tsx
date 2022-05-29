import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles';
import theme from 'styles/theme';

/**
 * @component Next.js root component
 */
export default function App({ Component, pageProps }: AppProps) {
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

      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
