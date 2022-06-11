import styled, { css } from 'styled-components';
import { Button } from 'components';

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

export const MenuList = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    max-width: 18rem;
    border: 1px solid ${theme.colors.primary.accent2};
    border-radius: ${(p) => p.theme.border.radius};
    background-color: ${theme.colors.primary.accent1};
  `}
`;

export const MenuItem = styled.button`
  ${({ theme }) => css`
    border: none;
    outline: none;
    text-align: left;
    background-color: ${theme.colors.primary.accent1};
    padding: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.small};

    &:hover {
      background-color: ${theme.colors.primary.accent2};
    }

    &:first-of-type {
      border-top-left-radius: ${(p) => p.theme.border.radius};
      border-top-right-radius: ${(p) => p.theme.border.radius};
    }

    &:last-of-type {
      border-bottom-left-radius: ${(p) => p.theme.border.radius};
      border-bottom-right-radius: ${(p) => p.theme.border.radius};
    }
  `}
`;
