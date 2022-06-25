import styled from 'styled-components';

export const Wrapper = styled.main`
  background-color: ${(p) => p.theme.colors.success.darker};
  color: ${(p) => p.theme.colors.primary.accent1};
  width: 100%;
  height: 100vh;
  padding: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Logo = styled.img`
  width: 25rem;
  margin-bottom: 1.5rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
`;

export const Description = styled.h2`
  font-size: 2.5rem;
  font-weight: 400;

  .bold {
    font-weight: 700;
  }
`;

export const Illustration = styled.img`
  margin-top: 3rem;
  width: min(30rem, 100%);
`;
