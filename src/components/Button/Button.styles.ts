import styled, { css, DefaultTheme } from 'styled-components';
import { ButtonColors, ButtonProps } from './Button';

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

  &:hover:not(:disabled) {
    background-color: ${hoverBackgroundColor};
  }

  &:focus,
  &:active {
    background-color: ${hoverBackgroundColor};
    box-shadow: 0 0 0 1px transparent, 0 0 0 1px ${borderColor};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
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
        color: theme.colors.white,
        backgroundColor: theme.colors.success.default,
        borderColor: theme.colors.success.default,
        hoverBackgroundColor: theme.colors.success.darker
      }),

    danger: (theme: DefaultTheme) =>
      wrapperColorRelatedStyles({
        color: theme.colors.white,
        backgroundColor: theme.colors.error.default,
        borderColor: theme.colors.error.default,
        hoverBackgroundColor: theme.colors.error.darker
      })
  },

  fullWidth: () => css`
    width: 100%;
  `,

  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,

  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,

  outline: (theme: DefaultTheme, color: ButtonColors) => {
    const colors: {
      [key in ButtonColors]: {
        initialColor: string;
        textColorOnButtonHover: string;
      };
    } = {
      primary: {
        initialColor: theme.colors.primary.accent2,
        textColorOnButtonHover: theme.colors.secondary.accent1
      },
      secondary: {
        initialColor: theme.colors.secondary.accent3,
        textColorOnButtonHover: theme.colors.primary.accent1
      },
      success: {
        initialColor: theme.colors.success.default,
        textColorOnButtonHover: theme.colors.white
      },
      danger: {
        initialColor: theme.colors.error.default,
        textColorOnButtonHover: theme.colors.white
      }
    };

    const currentColor = colors[color];

    return css`
      background: none;
      border-color: ${currentColor.initialColor};
      color: ${currentColor.initialColor};

      &:hover:not(:disabled),
      :active {
        background-color: ${currentColor.initialColor};
        color: ${currentColor.textColorOnButtonHover};
      }
    `;
  },

  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.6rem;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,

  minimal: (theme: DefaultTheme) => css`
    background: none;
    border: none;

    &:hover:not(:disabled) {
      background-color: ${theme.colors.primary.accent2};
    }
  `
};

type WrapperProps = {
  hasIcon: boolean;
} & Pick<ButtonProps, 'color' | 'size' | 'fullWidth' | 'outline' | 'minimal'>;

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, color, size, fullWidth, outline, minimal, hasIcon }) => css`
    cursor: pointer;
    outline: none;
    border: 1px solid transparent;
    border-radius: ${theme.border.radius};
    transition: all ${theme.transitions.default};
    display: flex;
    align-items: center;

    ${wrapperModifiers.colors[color!](theme)}
    ${!!size && wrapperModifiers[size](theme)}
    ${fullWidth && wrapperModifiers.fullWidth()}
    ${minimal && wrapperModifiers.minimal(theme)}
    ${outline && wrapperModifiers.outline(theme, color!)}
    ${!!hasIcon && wrapperModifiers.withIcon(theme)};
  `}
`;
