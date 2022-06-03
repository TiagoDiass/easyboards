import { ButtonHTMLAttributes } from 'react';
import * as S from './Button.styles';

export type ButtonColors = 'primary' | 'secondary' | 'success' | 'danger';

export type ButtonProps = {
  children?: React.ReactNode;
  color?: ButtonColors;
  size?: 'medium' | 'large';
  fullWidth?: boolean;
  outline?: boolean;
  disabled?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * Button component
 */
export default function Button({
  children,
  color = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  outline = false,
  ...props
}: ButtonProps) {
  return (
    <S.Wrapper
      color={color}
      size={size}
      fullWidth={fullWidth}
      outline={outline}
      disabled={disabled}
      aria-disabled={disabled}
      {...props}
    >
      <span>{children}</span>
    </S.Wrapper>
  );
}
