import { ChangeEvent, InputHTMLAttributes, useState } from 'react';
import * as S from './TextField.styles';

export type TextFieldProps = {
  onInput?: (value: string) => void;
  label?: string;
  labelFor?: string;
  initialValue?: string;
  disabled?: boolean;

  /**
   * Error message to let the user know that there is an error with the provided input.
   *
   * PS: you should provide the `labelFor` prop when using this error prop, to make the component more accessible
   */
  error?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
} & InputHTMLAttributes<HTMLInputElement>;

/**
 * TextField component that is used for user inputs
 */
export default function TextField({
  label,
  labelFor,
  initialValue = '',
  onInput,
  disabled = false,
  error,
  icon,
  iconPosition = 'left',
  ...props
}: TextFieldProps) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    setValue(newValue);

    !!onInput && onInput(newValue);
  };

  const hasError = !!error;
  const errorElementId = labelFor && `${labelFor}-error`;

  return (
    <S.Wrapper disabled={disabled} hasError={hasError}>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}

      <S.InputWrapper iconPosition={iconPosition}>
        {!!icon && <S.Icon>{icon}</S.Icon>}
        <S.Input
          type='text'
          id={labelFor}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          aria-disabled={disabled}
          aria-invalid={hasError ? 'true' : 'false'}
          aria-errormessage={errorElementId}
          {...props}
        />
      </S.InputWrapper>

      {hasError && <S.Error id={errorElementId}>{error}</S.Error>}
    </S.Wrapper>
  );
}
