import styled, { css, DefaultTheme } from 'styled-components';

const modalFooterModifiers = {
  isAButtonsRow: (theme: DefaultTheme) => css`
    display: flex;
    justify-content: flex-end;
    column-gap: ${theme.spacings.xxsmall};
  `
};

export type ModalFooterProps = {
  isButtonsRow?: boolean;
};

const ModalFooter = styled.div<ModalFooterProps>`
  ${({ theme, isButtonsRow }) => css`
    border-top: 1px solid ${theme.colors.primary.accent2};
    padding: ${theme.spacings.xxsmall};

    ${isButtonsRow && modalFooterModifiers.isAButtonsRow(theme)}
  `}
`;

export default ModalFooter;
