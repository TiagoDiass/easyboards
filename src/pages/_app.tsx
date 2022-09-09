import { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles';
import useOnAppInit from 'logic/useOnAppInit/useOnAppInit';
import lightTheme, { darkTheme } from 'styles/theme';
import { useTheme } from 'hooks';
import { SidebarMenu } from 'components';
import useBoardStore from 'store/board/board.store';

const themes = {
  light: lightTheme,
  dark: darkTheme as unknown as typeof lightTheme
};

/**
 * @component Next.js root component
 */
export default function App({ Component, pageProps }: AppProps) {
  const { currentTheme, toggleTheme } = useTheme();
  const setBoardsAndPartialBoards = useBoardStore(
    (store) => store.actions.setBoardsAndPartialBoards
  );
  const boards = useBoardStore((store) => store.state.boards);

  const onAppInit = useOnAppInit();

  useEffect(() => {
    onAppInit();
  }, [onAppInit]);

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          name='description'
          content='A website where you can create boards to manage your tasks'
        />
        <link rel='shortcut icon' href='/img/kanban-icon.png' />
        <link rel='apple-touch-icon' href='/img/kanban-icon.png' />
        <title>EasyBoards</title>
      </Head>

      <ThemeProvider theme={themes[currentTheme]}>
        <GlobalStyles />

        <div style={{ display: 'flex' }}>
          <SidebarMenu
            useBoardsList={() => boards}
            toggleTheme={toggleTheme}
            setBoards={setBoardsAndPartialBoards}
          />

          <Component {...pageProps} toggleTheme={toggleTheme} />
        </div>
      </ThemeProvider>
    </>
  );
}
