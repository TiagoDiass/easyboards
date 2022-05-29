import styled from 'styled-components';

export const Wrapper = styled.main`
  background-color: ${(p) => p.theme.colors.primary};
  color: ${(p) => p.theme.colors.white};
  width: 100%;
  height: 100%;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
