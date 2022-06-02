import styled, { css, DefaultTheme } from 'styled-components';
import { ButtonProps } from './Button';

// 'primary' | 'secondary' | 'success' | 'danger'

const wrapperModifiers = {
  colors: {
    primary: (theme: DefaultTheme) => css`
      color: ${theme.colors.secondary.accent1};
      background-color: ${theme.colors.primary.accent1};
      border-color: ${theme.colors.primary.accent2};

      &:hover,
      &:focus {
        background-color: ${theme.colors.primary.accent2};
      }
    `,

    secondary: (theme: DefaultTheme) => css`
      color: ${theme.colors.primary.accent1};
      background-color: ${theme.colors.secondary.accent2};
      border-color: ${theme.colors.secondary.accent3};

      &:hover,
      &:focus {
        background-color: ${theme.colors.secondary.accent3};
      }
    `,

    success: (theme: DefaultTheme) => css`
      color: ${theme.colors.primary.accent1};
      background-color: ${theme.colors.success.default};
      border-color: ${theme.colors.success.default};

      &:hover,
      &:focus {
        background-color: ${theme.colors.success.darker};
      }
    `,

    danger: (theme: DefaultTheme) => css`
      color: ${theme.colors.primary.accent1};
      background-color: ${theme.colors.error.default};
      border-color: ${theme.colors.error.default};

      &:hover,
      &:focus {
        background-color: ${theme.colors.error.darker};
      }
    `
  }
};

type WrapperProps = Pick<ButtonProps, 'color' | 'size'>;

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, color }) => css`
    cursor: pointer;
    outline: none;
    background-color: ${theme.colors.success.default};
    color: ${theme.colors.white};
    border: 1px solid transparent;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
    transition: ${theme.transitions.default};

    ${wrapperModifiers.colors[color!](theme)}
  `}
`;
