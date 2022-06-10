import styled from 'styled-components';

const ModalFooter = styled.div`
  border-top: 1px solid ${(p) => p.theme.colors.primary.accent2};
  padding: ${(p) => p.theme.spacings.xxsmall};
`;

export default ModalFooter;
