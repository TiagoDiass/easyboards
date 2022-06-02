import Button from './Button';
import { renderWithTheme } from 'utils/test-utils';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import theme from 'styles/theme';

const getButton = () => screen.getByRole('button', { name: 'Add new task' });

describe('Component: Button', () => {
  it.todo('should render correctly');

  it('should render correctly with primary color', () => {
    renderWithTheme(<Button color='primary'>Add new task</Button>);

    expect(getButton()).toHaveStyle({
      color: theme.colors.secondary.accent1,
      'background-color': theme.colors.primary.accent1,
      'border-color': theme.colors.primary.accent2
    });
  });

  it('should render correctly with secondary color', () => {
    renderWithTheme(<Button color='secondary'>Add new task</Button>);

    expect(getButton()).toHaveStyle({
      color: theme.colors.primary.accent1,
      'background-color': theme.colors.secondary.accent1,
      'border-color': theme.colors.secondary.accent3
    });
  });

  it('should render correctly with success color', () => {
    renderWithTheme(<Button color='success'>Add new task</Button>);

    expect(getButton()).toHaveStyle({
      color: theme.colors.white,
      'background-color': theme.colors.success.default,
      'border-color': theme.colors.success.default
    });
  });

  it('should render correctly with danger color', () => {
    renderWithTheme(<Button color='danger'>Add new task</Button>);

    expect(getButton()).toHaveStyle({
      color: theme.colors.white,
      'background-color': theme.colors.error.default,
      'border-color': theme.colors.error.default
    });
  });

  it('should render correctly when it is a fullWidth button', () => {
    renderWithTheme(<Button fullWidth>Add new task</Button>);

    expect(getButton()).toHaveStyleRule('width', '100%');
  });

  it('should not call onClick prop and have aria-disabled when button is disabled', async () => {
    const onClickMock = jest.fn();

    renderWithTheme(
      <Button onClick={onClickMock} disabled>
        Add new task
      </Button>
    );

    const button = getButton();

    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('aria-disabled', 'true');

    userEvent.click(button);

    await waitFor(() => {
      expect(onClickMock).not.toHaveBeenCalled();
    });
  });
});
