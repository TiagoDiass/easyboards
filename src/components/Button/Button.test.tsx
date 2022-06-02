import Button from './Button';
import { renderWithTheme } from 'utils/test-utils';
import { screen } from '@testing-library/react';
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
});
