import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  ${({ theme }) => css`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    width: 1.8rem;
    height: 1.8rem;
    border: 0.2rem solid ${theme.colors.secondary.accent3};
    border-radius: 0.2rem;
    transition: background border ${theme.transitions.fast};
    position: relative;
    outline: none;

    &:before {
      content: '';
      width: 0.6rem;
      height: 0.9rem;
      border: 0.2rem solid ${theme.colors.white};
      border-top: 0;
      border-left: 0;
      transform: rotate(45deg);
      position: absolute;
      top: 0.1rem;
      opacity: 0;
      transition: ${theme.transitions.fast};
    }

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.success.default};
    }

    &:checked {
      border-color: ${theme.colors.success.default};
      background: ${theme.colors.success.default};

      &:before {
        opacity: 1;
      }
    }
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.secondary.accent3};
    cursor: pointer;
    line-height: 1.8rem; // input height
    font-size: ${theme.font.sizes.small};
    padding-left: ${theme.spacings.xxsmall};
  `}
`;
