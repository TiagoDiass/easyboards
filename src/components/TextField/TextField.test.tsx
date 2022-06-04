import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from 'utils/test-utils';
import TextField from './TextField';
import { Email as EmailIcon } from 'styled-icons/material-outlined';

describe('<TextField />', () => {
  it('should render correctly with Label', () => {
    renderWithTheme(<TextField label='Label' labelFor='Field' />);

    expect(screen.getByLabelText('Label')).toBeInTheDocument();
  });

  it('should render correctly without Label', () => {
    renderWithTheme(<TextField />);

    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument();
  });

  it('should render correctly with placeholder', () => {
    renderWithTheme(<TextField placeholder='Type your email in here' />);

    expect(screen.getByPlaceholderText('Type your email in here')).toBeInTheDocument();
  });

  it('should render correctly with an icon', () => {
    renderWithTheme(
      <TextField label='Label' labelFor='Field' icon={<EmailIcon data-testid='icon' />} />
    );

    expect(screen.getByLabelText('Label')).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('should render correctly with an icon on the right side', () => {
    renderWithTheme(
      <TextField label='Label' labelFor='Field' icon={<EmailIcon />} iconPosition='right' />
    );

    expect(screen.getByLabelText('Label').parentElement).toHaveStyle({
      display: 'flex',
      flexDirection: 'row-reverse'
    });
  });

  it('should disable the input when disabled prop is specified', () => {
    renderWithTheme(
      <TextField
        disabled
        label='Label'
        labelFor='Field'
        icon={<EmailIcon />}
        iconPosition='right'
      />
    );

    const inputElement = screen.getByRole('textbox');

    expect(inputElement).toBeDisabled();
    expect(inputElement).toHaveAttribute('aria-disabled', 'true');
  });

  it('should render correctly with an accessible error', () => {
    const inputId = 'email';
    const errorMessage = 'Please fill out this field';

    const { container } = renderWithTheme(
      <TextField label='Label' labelFor={inputId} error={errorMessage} />
    );

    const errorElement = screen.getByText(errorMessage);
    const inputElement = screen.getByRole('textbox', { name: 'Label' });

    expect(inputElement).toHaveAttribute('aria-invalid', 'true');
    expect(inputElement).toHaveAttribute('aria-errormessage', `${inputId}-error`);

    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveAttribute('id', `${inputId}-error`);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should call props.onInput correctly when input value changes', async () => {
    const onInput = jest.fn();
    renderWithTheme(
      <TextField onInput={onInput} label='TextField' labelFor='TextField' id='TextField' />
    );

    const input = screen.getByRole('textbox');
    const text = 'This is my new text';
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue(text);
      expect(onInput).toHaveBeenCalledTimes(text.length);
    });
    expect(onInput).toHaveBeenLastCalledWith(text);
  });

  it('should be accessible with the tab key', () => {
    renderWithTheme(<TextField label='TextField' labelFor='TextField' id='TextField' />);

    const input = screen.getByLabelText('TextField');
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(input).toHaveFocus();
  });
});
