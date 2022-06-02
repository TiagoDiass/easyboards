import { ButtonHTMLAttributes } from 'react';
import * as S from './Button.styles';

export type ButtonProps = {
  children?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'success' | 'danger';
  size?: 'medium' | 'large';
  fullWidth?: boolean;
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
  ...props
}: ButtonProps) {
  return (
    <S.Wrapper
      color={color}
      size={size}
      fullWidth={fullWidth}
      disabled={disabled}
      aria-disabled={disabled}
      {...props}
    >
      <span>{children}</span>
    </S.Wrapper>
  );
}
