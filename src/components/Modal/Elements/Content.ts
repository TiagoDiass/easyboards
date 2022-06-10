import styled, { css } from 'styled-components';

const ModalContent = styled.div`
  ${({ theme }) => css`
    flex-grow: 1;
    padding: 0 ${theme.spacings.xxsmall};

    overflow-y: scroll;

    /* Scroll */
    &::-webkit-scrollbar {
      width: 4px;
    }

    /* Scroll Handle */
    &::-webkit-scrollbar-thumb {
      background: ${theme.colors.secondary.accent2};
    }
  `}
`;

export default ModalContent;
