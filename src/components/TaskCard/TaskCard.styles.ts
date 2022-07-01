import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ isDragging: boolean }>`
  ${({ theme, isDragging }) => css`
    padding: 12px 8px;
    background-color: ${theme.colors.primary.accent1};
    border-radius: ${theme.border.radius};
    margin-bottom: ${theme.spacings.xxsmall};
    border: 1px solid transparent;

    display: grid;
    grid-template-columns: 80% 10%;
    align-items: center;
    justify-content: space-between;

    box-shadow: ${theme.boxShadow};

    transition: all ${theme.transitions.fast};

    .content {
      color: ${theme.colors.secondary.accent3};
      font-size: ${theme.font.sizes.small};
    }

    ${DeleteTaskButton} {
      visibility: hidden;
    }

    &:hover {
      filter: brightness(0.99);

      ${DeleteTaskButton} {
        visibility: visible;
      }
    }

    ${isDragging &&
    css`
      border-color: rgb(38, 132, 255);
    `}
  `}
`;

export const DeleteTaskButton = styled.button`
  ${({ theme }) => css`
    border: none;
    outline: none;
    padding: 0.2rem;
    border-radius: 2px;
    background: transparent;
    color: ${theme.colors.primary.accent3};
    transition: all ${theme.transitions.fast};
    cursor: pointer;

    svg {
      width: 2.4rem;
    }

    &:hover {
      background-color: ${theme.colors.primary.accent2};
      color: ${theme.colors.secondary.accent1};
    }
  `}
`;
