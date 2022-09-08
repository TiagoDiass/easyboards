import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
`;

export const Item = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    color: ${theme.colors.primary.accent3};

    span,
    a {
      font-size: ${theme.font.sizes.small};
      text-decoration: none;
    }

    a {
      color: ${theme.colors.success.default};
      font-weight: ${theme.font.bold};
      transition: ${theme.transitions.fast};

      &:hover {
        color: ${theme.colors.success.darker};
      }
    }

    svg {
      width: ${theme.font.sizes.xxlarge};
    }
  `}
`;
