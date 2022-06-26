import styled, { css } from 'styled-components';

export const Wrapper = styled.div``;

export const MenuButton = styled.button`
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
      width: 1.6rem;
    }

    &:hover {
      background-color: ${theme.colors.primary.accent2};
      color: ${theme.colors.secondary.accent1};
    }
  `}
`;

export const MenuListWrapper = styled.div<{ isOpen: boolean }>`
  ${({ theme, isOpen }) => css`
    position: fixed;
    display: flex;
    flex-direction: column;
    max-width: 18rem;
    border: 1px solid ${theme.colors.primary.accent2};
    border-radius: ${(p) => p.theme.border.radius};
    background-color: ${theme.colors.primary.accent1};
    transform: translateY(4px);

    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'initial' : 'none'};
    visibility: ${isOpen ? 'visible' : 'hidden'};
    transition: opacity ${theme.transitions.fast};
    z-index: 10;
  `}
`;

export const MenuList = styled.ul`
  ${({ theme }) => css`
    list-style: none;
    display: flex;
    flex-direction: column;
    max-width: 18rem;
    border-radius: ${(p) => p.theme.border.radius};
    background-color: ${theme.colors.primary.accent1};
  `}
`;

export const MenuItem = styled.li`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary.accent1};
    padding: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.secondary.accent2};
    cursor: pointer;
    display: flex;
    align-items: center;

    & + li {
      border-top: 1px solid ${theme.colors.primary.accent2};
    }

    &:hover {
      background-color: ${theme.colors.primary.accent2};
    }

    svg {
      width: 2.2rem;
    }
  `}
`;
