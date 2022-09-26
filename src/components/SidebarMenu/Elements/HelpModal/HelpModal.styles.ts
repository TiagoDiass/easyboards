import styled, { css } from 'styled-components';

export const Heading = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.secondary.accent1};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.secondary.accent1};
    margin-bottom: ${theme.spacings.small};

    a {
      color: ${theme.colors.success.default};
      text-decoration: none;
      font-weight: ${theme.font.bold};
      transition: ${theme.transitions.fast};
    }

    a:hover {
      color: ${theme.colors.success.darker};
      text-decoration: underline;
    }
  `}
`;

export const List = styled.ul`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.secondary.accent1};
    list-style: disc;
    padding-left: ${theme.spacings.small};
    margin-bottom: ${theme.spacings.small};
  `}
`;
