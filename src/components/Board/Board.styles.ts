import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    background-color: ${theme.colors.primary.accent2};
    padding: ${theme.spacings.xsmall};
    height: 100%;
  `}
`;

export const ColumnsWrapper = styled.div`
  padding: 0.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const AddColumnButtonWrapper = styled.div`
  height: fit-content;
  min-width: 17rem;
`;
