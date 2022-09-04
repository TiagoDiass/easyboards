import styled, { css } from 'styled-components';

export const ActionAbout = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    margin-bottom: ${theme.spacings.xsmall};
  `}
`;
export const ActionLabel = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`;
