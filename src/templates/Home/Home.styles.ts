import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  margin: ${(p) => p.theme.spacings.medium};
  max-width: 60vh;
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.huge};
    font-weight: ${theme.font.light};
    color: ${theme.colors.secondary.accent3};
    margin-bottom: ${(p) => p.theme.spacings.xsmall};
    white-space: nowrap;

    strong {
      font-weight: ${theme.font.medium};
      color: ${theme.colors.success.default};
    }
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.secondary.accent2};
    margin-bottom: ${(p) => p.theme.spacings.medium};
  `}
`;

export const SelectBoardWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    row-gap: ${theme.spacings.xxsmall};

    .select-a-board-text {
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.secondary.accent2};
    }

    .boards-list {
      list-style: none;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: ${theme.spacings.xxsmall};
    }

    .boards-list-item {
      border: 1px solid ${theme.colors.primary.accent2};
      font-size: ${theme.font.sizes.small};
      padding: 14px 8px;
      border-radius: ${theme.border.radius};
      background-color: ${theme.colors.primary.accent2};
      cursor: pointer;
      display: flex;
      transition: ${theme.transitions.fast};

      a {
        text-decoration: none;
        color: ${theme.colors.secondary.accent3};
        flex-grow: 1;
      }

      &:hover {
        border-color: ${theme.colors.success.default};
      }
    }
  `}
`;

export const CreateABoardWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    row-gap: ${theme.spacings.xxsmall};

    .no-boards-text {
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.secondary.accent2};
    }

    button {
      max-width: 50%;
    }
  `}
`;
