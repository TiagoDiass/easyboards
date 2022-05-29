import * as S from './Main.styles';

/**
 * Component that will have the content of the boilerplate
 */
export default function Main({ title = 'Next.js Boilerplate' }) {
  return (
    <S.Wrapper>
      <S.Logo src='/img/logo.svg' alt='Atom image with "React Avançado" next to it.' />
      <S.Title>{title}</S.Title>
      <S.Description>
        TypesScript, ReactJS, Next.js, Styled Components & <span className='bold'>More!</span>
      </S.Description>
      <S.Illustration src='/img/hero-illustration.svg' alt='A developer using a computer' />
    </S.Wrapper>
  );
}
