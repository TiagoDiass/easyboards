import styled, { css, DefaultTheme } from 'styled-components';
import { TextFieldProps } from './TextField';

const wrapperModifiers = {
  disabled: (theme: DefaultTheme) => css`
    ${Label}, ${Input}, ${Icon} {
      color: ${theme.colors.primary.accent3};
      cursor: not-allowed;

      &::placeholder {
        color: currentColor;
      }
    }
  `,

  withError: (theme: DefaultTheme) => css`
    ${Label}, ${Icon} {
      color: ${theme.colors.error.default};
    }

    ${InputWrapper} {
      border: 1px solid ${theme.colors.error.default};

      &:focus-within {
        border: 2px solid ${theme.colors.error.darker};
        box-shadow: none;
      }
    }
  `
};

type WrapperProps = {
  disabled: TextFieldProps['disabled'];
  hasError: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, disabled, hasError }) => css`
    display: flex;
    flex-direction: column;
    row-gap: ${theme.spacings.xxsmall};

    ${hasError && wrapperModifiers.withError(theme)}
    ${disabled && wrapperModifiers.disabled(theme)}
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.secondary.accent2};
    cursor: pointer;
  `}
`;

const inputWrapperModifiers = {
  iconOnRight: () => css`
    flex-direction: row-reverse;
  `
};

type InputWrapperProps = Pick<TextFieldProps, 'iconPosition'>;

export const InputWrapper = styled.div<InputWrapperProps>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    background: ${theme.colors.primary.accent1};
    border-radius: 0.2rem;
    padding: 0 ${theme.spacings.xxsmall};
    border: 0.2rem solid;
    border-color: ${theme.colors.primary.accent2};

    transition: box-shadow ${theme.transitions.default};

    &:focus-within {
      border: 1px solid ${theme.colors.primary.accent3};
    }

    ${iconPosition === 'right' && inputWrapperModifiers.iconOnRight()}
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.secondary.accent2};
    /* font-family: ${theme.font}; */
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall};
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;

    ::placeholder {
      color: red;
      color: ${theme.colors.primary.accent3};
    }

    /* Removes the autofill styles from browser */
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px ${theme.colors.primary.accent1} inset !important;
    }
  `}
`;

export const Icon = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 2.2rem;
    color: ${theme.colors.primary.accent3};

    & > svg {
      width: 100%;
    }
  `}
`;

export const Error = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.error.default};
    font-size: ${theme.font.sizes.xsmall};
  `}
`;
