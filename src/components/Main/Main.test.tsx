import Main from './Main';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/test-utils';

describe('Component: Main', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Main />);

    expect(screen.getByRole('heading', { name: 'Next.js Boilerplate' })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
