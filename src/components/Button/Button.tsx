import * as S from './Button.styles';

type ButtonProps = {
  children: React.ReactNode;
};

/**
 * Button component
 */
export default function Button({ children }: ButtonProps) {
  return <S.Wrapper>{children}</S.Wrapper>;
}
