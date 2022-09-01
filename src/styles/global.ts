import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit; // border-box
    }
  }

  html {
    font-size: 62.5%; // 10px
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: ${(p) => p.theme.font.family};
    background-color: ${(p) => p.theme.colors.primary.accent1};
  }
`;

export default GlobalStyles;
