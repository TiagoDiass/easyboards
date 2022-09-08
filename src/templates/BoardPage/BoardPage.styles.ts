import styled, { css } from 'styled-components';
import * as BoardStyles from 'components/Board/Board.styles';

export const BoardContent = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  ${BoardStyles.Wrapper} {
    min-height: 85vh;
  }
`;

export const BoardContentTopSection = styled.div`
  ${({ theme }) => css`
    padding: 2.8rem ${theme.spacings.xxsmall};
    padding-bottom: ${theme.spacings.small};
    display: flex;
    flex-direction: column;
  `}
`;

export const BoardTitle = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.huge};
    font-weight: ${theme.font.medium};
    color: ${theme.colors.secondary.accent3};
  `}
`;
