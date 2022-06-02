import * as S from './Button.styles';

export type ButtonProps = {
  children?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'success' | 'danger';
  size?: 'medium' | 'large';
};

/**
 * Button component
 */
export default function Button({ children, color = 'primary', size = 'medium' }: ButtonProps) {
  return (
    <S.Wrapper color={color} size={size}>
      {children}
    </S.Wrapper>
  );
}
