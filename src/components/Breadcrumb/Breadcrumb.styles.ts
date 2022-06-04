import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
`;

export const Item = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    color: ${theme.colors.primary.accent3};

    span {
      font-size: ${theme.font.sizes.small};
    }

    svg {
      width: ${theme.font.sizes.xxlarge};
    }
  `}
`;
