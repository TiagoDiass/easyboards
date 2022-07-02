import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 30rem;
    min-height: 8rem;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    row-gap: ${theme.spacings.xxsmall};
    margin-right: ${theme.spacings.xsmall};
  `}
`;

export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    .title {
      color: ${theme.colors.secondary.accent1};
      font-size: ${theme.font.sizes.small};
      padding: 12px 6px;
    }
  `}
`;

export const TaskList = styled.div``;
