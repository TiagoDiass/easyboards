import * as S from './Link.styles';

export type LinkProps = {
  children?: React.ReactNode;
  href: string;
};

/**
 * Link component
 */
export default function Link({ children, href }: LinkProps) {
  return (
    <S.Wrapper href={href}>
      <a>{children}</a>
    </S.Wrapper>
  );
}
