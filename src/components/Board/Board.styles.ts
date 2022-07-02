import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    background-color: ${theme.colors.primary.accent2};
    padding: ${theme.spacings.xsmall};
    height: 100%;
  `}
`;
