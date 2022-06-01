import * as S from './Button.styles';

// you should have a figma before doint that
type ButtonProps = {
  children: React.ReactNode;
};

/**
 * Button component
 */
export default function Button({ children }: ButtonProps) {
  return <S.Wrapper>{children}</S.Wrapper>;
}
