import { ButtonHTMLAttributes } from 'react';
import * as S from './Button.styles';

export type ButtonColors = 'primary' | 'secondary' | 'success' | 'danger';

export type ButtonProps = {
  children?: React.ReactNode;
  color?: ButtonColors;
  size?: 'medium' | 'large';
  fullWidth?: boolean;
  outline?: boolean;
  icon?: React.ReactNode;
  minimal?: boolean;
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
  outline = false,
  minimal = false,
  icon,
  disabled = false,
  ...props
}: ButtonProps) {
  return (
    <S.Wrapper
      color={color}
      size={size}
      fullWidth={fullWidth}
      outline={outline}
      minimal={minimal}
      hasIcon={!!icon}
      disabled={disabled}
      aria-disabled={disabled}
      {...props}
    >
      {!!icon && icon}
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  );
}
