import styled, { css } from 'styled-components';
import Button from 'components/Button/Button';

export const Wrapper = styled.div``;

export const MenuButton = styled(Button)`
  padding: 0;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  // inner icon
  svg {
    width: 1.8rem;
  }

  // button inner content (<span />)
  span {
    display: none;
  }
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
      width: 2.6rem;
    }
  `}
`;
