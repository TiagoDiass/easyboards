import styled, { css } from 'styled-components';
import { ModalSizes } from './Modal';

export const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const wrapperModifiers = {
  small: () => css`
    width: 500px;
    min-height: 420px;
  `,

  medium: () => css`
    width: 700px;
    min-height: 540px;
  `,

  large: () => css`
    width: 1100px;
    min-height: 680px;
  `
};

type WrapperProps = {
  size: ModalSizes;
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ size, theme }) => css`
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: ${theme.colors.primary.accent1};
    color: ${theme.colors.secondary.accent2};
    position: relative;
    z-index: 10;
    border-radius: 10px;

    display: flex;
    flex-direction: column;

    ${!!size && wrapperModifiers[size]()}
  `}
`;

export const Header = styled.div`
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.primary.accent2};

    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${theme.spacings.xsmall} 0;
    position: relative;

    .title {
      font-size: ${theme.font.sizes.xlarge};
      color: ${theme.colors.secondary.accent2};
      font-weight: 700;
    }

    .close-button {
      position: absolute;
      right: 0.8rem;
      border-radius: 50%;
      width: 3.6rem;
      height: 3.6rem;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;

      // inner icon
      svg {
        width: 2rem;
      }

      // button inner content (<span />)
      span {
        display: none;
      }
    }
  `}
`;

export const ContentWrapper = styled.div`
  border: 1px solid red;
`;
