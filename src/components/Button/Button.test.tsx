import Button from './Button';
import { renderWithTheme } from 'utils/test-utils';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AddShoppingCart } from 'styled-icons/material-outlined';
import theme from 'styles/theme';

const getButton = () => screen.getByRole('button', { name: 'Add new task' });

describe('Component: Button', () => {
  describe('Colors', () => {
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
  });

  describe('Outline colors', () => {
    it('should render correctly with primary color when button is outline', () => {
      renderWithTheme(
        <Button outline color='primary'>
          Add new task
        </Button>
      );

      expect(getButton()).toHaveStyle({
        'background-color': 'none',
        color: theme.colors.primary.accent2,
        'border-color': theme.colors.primary.accent2
      });
    });

    it('should render correctly with secondary color when button is outline', () => {
      renderWithTheme(
        <Button outline color='secondary'>
          Add new task
        </Button>
      );

      expect(getButton()).toHaveStyle({
        'background-color': 'none',
        color: theme.colors.secondary.accent3,
        'border-color': theme.colors.secondary.accent3
      });
    });

    it('should render correctly with success color when button is outline', () => {
      renderWithTheme(
        <Button outline color='success'>
          Add new task
        </Button>
      );

      expect(getButton()).toHaveStyle({
        'background-color': 'none',
        color: theme.colors.success.default,
        'border-color': theme.colors.success.default
      });
    });

    it('should render correctly with danger color when button is outline', () => {
      renderWithTheme(
        <Button outline color='danger'>
          Add new task
        </Button>
      );

      expect(getButton()).toHaveStyle({
        'background-color': 'none',
        color: theme.colors.error.default,
        'border-color': theme.colors.error.default
      });
    });
  });

  describe('Sizes', () => {
    it('should render correctly with medium size', () => {
      renderWithTheme(<Button size='medium'>Add new task</Button>);

      expect(getButton()).toHaveStyle({
        height: '4rem',
        'font-size': `${theme.font.sizes.small}`,
        padding: `${theme.spacings.xxsmall} ${theme.spacings.medium}`
      });
    });

    it('should render correctly with large size', () => {
      renderWithTheme(<Button size='large'>Add new task</Button>);

      expect(getButton()).toHaveStyle({
        height: '5rem',
        'font-size': `${theme.font.sizes.medium}`,
        padding: `${theme.spacings.xxsmall} ${theme.spacings.xlarge}`
      });
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

  it('should render with an icon when specified', () => {
    renderWithTheme(<Button icon={<AddShoppingCart data-testid='icon' />}>Add new task</Button>);

    expect(getButton()).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('should render correctly when it is a minimal button', () => {
    renderWithTheme(<Button minimal>Add new task</Button>);

    expect(getButton()).toHaveStyle({
      background: 'none',
      border: 'none'
    });
  });
});
