import * as S from './Button.styles';

export type ButtonProps = {
  children?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'success' | 'danger';
  size?: 'medium' | 'large';
  fullWidth?: boolean;
};

/**
 * Button component
 */
export default function Button({
  children,
  color = 'primary',
  size = 'medium',
  fullWidth = false
}: ButtonProps) {
  return (
    <S.Wrapper color={color} size={size} fullWidth={fullWidth}>
      <span>{children}</span>
    </S.Wrapper>
  );
}
