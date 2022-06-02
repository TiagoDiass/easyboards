import styled, { css, DefaultTheme } from 'styled-components';
import { ButtonProps } from './Button';

const wrapperColorRelatedStyles = ({
  color,
  backgroundColor,
  borderColor,
  hoverBackgroundColor
}: {
  color: string;
  backgroundColor: string;
  borderColor: string;
  hoverBackgroundColor: string;
}) => css`
  color: ${color};
  background-color: ${backgroundColor};
  border-color: ${borderColor};

  &:hover,
  &:focus {
    background-color: ${hoverBackgroundColor};
  }
`;

const wrapperModifiers = {
  colors: {
    primary: (theme: DefaultTheme) =>
      wrapperColorRelatedStyles({
        color: theme.colors.secondary.accent1,
        backgroundColor: theme.colors.primary.accent1,
        borderColor: theme.colors.primary.accent2,
        hoverBackgroundColor: theme.colors.primary.accent2
      }),

    secondary: (theme: DefaultTheme) =>
      wrapperColorRelatedStyles({
        color: theme.colors.primary.accent1,
        backgroundColor: theme.colors.secondary.accent1,
        borderColor: theme.colors.secondary.accent3,
        hoverBackgroundColor: theme.colors.secondary.accent3
      }),

    success: (theme: DefaultTheme) =>
      wrapperColorRelatedStyles({
        color: theme.colors.primary.accent1,
        backgroundColor: theme.colors.success.default,
        borderColor: theme.colors.success.default,
        hoverBackgroundColor: theme.colors.success.darker
      }),

    danger: (theme: DefaultTheme) =>
      wrapperColorRelatedStyles({
        color: theme.colors.primary.accent1,
        backgroundColor: theme.colors.error.default,
        borderColor: theme.colors.error.default,
        hoverBackgroundColor: theme.colors.error.darker
      })
  },

  fullWidth: () => css`
    width: 100%;
  `
};

type WrapperProps = Pick<ButtonProps, 'color' | 'size' | 'fullWidth'>;

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, color, fullWidth }) => css`
    cursor: pointer;
    outline: none;
    background-color: ${theme.colors.success.default};
    color: ${theme.colors.white};
    border: 1px solid transparent;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
    transition: ${theme.transitions.default};

    ${wrapperModifiers.colors[color!](theme)}
    ${fullWidth && wrapperModifiers.fullWidth()}
  `}
`;
