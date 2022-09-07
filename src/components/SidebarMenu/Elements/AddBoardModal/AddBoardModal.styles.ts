import styled, { css } from 'styled-components';

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    row-gap: ${theme.spacings.xxsmall};

    .help-text {
      font-size: ${theme.font.sizes.small};
    }
  `}
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 4px;

  .help svg {
    width: 2.2rem;
  }

  .help:hover {
    color: ${(p) => p.theme.colors.success.default};
  }
`;
