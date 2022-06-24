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
    width: 25rem;
    position: relative;
    padding: ${theme.spacings.small} ${theme.spacings.xsmall};
    background-color: ${theme.colors.primary.accent1};
  `}
`;

export const Logo = styled.h2`
  ${({ theme }) => css`
    font-size: 3.6rem;

    .blue {
      color: ${theme.colors.success.default};
    }

    .secondary {
      font-weight: ${theme.font.light};
      color: ${theme.colors.secondary.accent2};
    }
  `}
`;

export const CollapseButton = styled.button`
  ${({ theme }) => css`
    width: 3rem;
    height: 3rem;
    position: absolute;
    top: 4px;
    right: 4px;
    border: none;
    outline: none;
    color: ${theme.colors.secondary.accent2};
    background-color: transparent;
    border-radius: ${theme.border.radius};
    transition: background-color ${theme.transitions.fast};

    &:hover {
      cursor: pointer;
      background-color: ${theme.colors.primary.accent2};
    }
  `}
`;

export const BoardsListWrapper = styled.nav`
  flex-grow: 1;
`;

export const BoardListLabel = styled.div`
  border: 1px solid red;
`;

export const BoardsList = styled.ul`
  ${({ theme }) => css`
    list-style: none;
    font-size: ${theme.font.sizes.small};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: ${theme.spacings.xxsmall};
  `}
`;

export const BoardsListItem = styled.li`
  ${({ theme }) => css`
    a {
      text-decoration: none;
      display: flex;
      column-gap: ${theme.spacings.xxsmall};
      color: ${theme.colors.secondary.accent1};

      &:hover {
        margin-left: ${theme.spacings.xxsmall};
        color: ${theme.colors.secondary.accent3};
      }

      svg {
        width: 1.6rem;
        height: 1.6rem;
      }

      transition: all ${theme.transitions.fast};
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
