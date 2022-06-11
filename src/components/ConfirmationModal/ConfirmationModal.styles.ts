import styled, { css } from 'styled-components';

export const MessageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const ConfirmationMessage = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    text-align: center;
    color: ${theme.colors.secondary.accent2};
  `}
`;

export const ButtonsRow = styled.div`
  display: flex;
  column-gap: ${(p) => p.theme.spacings.xxsmall};
  justify-content: flex-end;
`;
