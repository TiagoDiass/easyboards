import styled, { css } from 'styled-components';
import * as ButtonStyles from 'components/Button/Button.styles';

export const Wrapper = styled.aside`
  ${({ theme }) => css`
    border-right: 2px solid ${theme.colors.primary.accent2};
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: ${theme.spacings.xlarge};
    width: 28rem;
    position: relative;
    padding: ${theme.spacings.small} ${theme.spacings.xsmall};
    background-color: ${theme.colors.primary.accent1};
  `}
`;

export const Logo = styled.h2`
  ${({ theme }) => css`
    font-size: 3.6rem;

    a {
      text-decoration: none;
    }

    .blue {
      color: ${theme.colors.success.default};
    }

    .secondary {
      font-weight: ${theme.font.light};
      color: ${theme.colors.secondary.accent2};
    }
  `}
`;

export const CollapseButton = styled.button<{ isSidebarExpanded: boolean }>`
  ${({ theme, isSidebarExpanded }) => css`
    width: 3rem;
    height: 3rem;
    position: absolute;
    border: none;
    outline: none;
    color: ${theme.colors.secondary.accent2};
    background-color: transparent;
    border-radius: ${theme.border.radius};
    transition: background-color ${theme.transitions.fast};

    ${isSidebarExpanded
      ? css`
          top: 4px;
          right: 4px;
        `
      : css`
          top: 4px;
          left: 4px;
        `}

    &:hover {
      cursor: pointer;
      background-color: ${theme.colors.primary.accent2};
    }
  `}
`;

export const BoardsListWrapper = styled.nav`
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  &:hover {
    .add-board-button {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const BoardsListLabel = styled.div`
  ${({ theme }) => css`
    padding: 4px 0;
    font-size: ${theme.font.sizes.xsmall};
    text-transform: uppercase;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.primary.accent3};

    display: flex;
    align-items: center;
    justify-content: space-between;

    .add-board-button {
      visibility: hidden;
      opacity: 0;
      transition: all ${theme.transitions.default};

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
    }
  `}
`;

export const BoardsList = styled.ul`
  ${() => css`
    list-style: none;
    display: flex;
    flex-direction: column;
  `}
`;

export const BoardsListItem = styled.li`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    padding: 2px 0;

    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      column-gap: ${theme.spacings.xxsmall};
      color: ${theme.colors.secondary.accent1};
      font-weight: ${theme.font.medium};
      font-size: ${theme.font.sizes.small};

      &:hover,
      &:focus {
        margin-left: ${theme.spacings.xxsmall};
        color: ${theme.colors.secondary.accent3};
      }

      svg {
        width: 1.6rem;
        height: 1.6rem;
      }

      transition: all ${theme.transitions.fast};
    }

    button {
      visibility: hidden;
      opacity: 0;
    }

    &:hover {
      button {
        visibility: visible;
        opacity: 1;
      }
    }
  `}
`;

export const SecondaryOptions = styled.div`
  ${({ theme }) => css`
    ${ButtonStyles.Wrapper} {
      padding-left: ${theme.spacings.xsmall};
    }
  `}
`;
