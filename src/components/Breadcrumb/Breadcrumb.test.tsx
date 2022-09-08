import Breadcrumb from './Breadcrumb';
import { renderWithTheme } from 'utils/test-utils';
import { screen } from '@testing-library/react';

describe('Component: Breadcrumb', () => {
  it('should render correctly', () => {
    renderWithTheme(
      <Breadcrumb
        items={[
          {
            text: 'Source of everything',
            to: '/source-of-everything'
          },
          {
            text: 'Your boards'
          },
          {
            text: 'Board with a random name'
          }
        ]}
      />
    );

    expect(screen.getByRole('link', { name: 'Source of everything' })).toBeInTheDocument();
    expect(screen.getByText('Your boards')).toBeInTheDocument();
    expect(screen.getByText('Board with a random name')).toBeInTheDocument();
    expect(screen.getAllByLabelText('Right arrow icon')).toHaveLength(2);
  });
});
