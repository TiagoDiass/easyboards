import Home from './Home';
import { renderWithTheme } from 'utils/test-utils';
import { screen } from '@testing-library/react';
import useBoardStore from 'store/board/board.store';
import { renderHook } from '@testing-library/react-hooks';

describe('Component: Home', () => {
  it('should render correctly', () => {
    const result = renderHook(() => useBoardStore()).result;

    result.current.state.partialBoards = [
      {
        id: 'fake-id-1',
        title: 'First board',
        slug: 'first-board'
      },
      {
        id: 'fake-id-2',
        title: 'Second board',
        slug: 'second-board'
      }
    ];

    renderWithTheme(<Home />);

    expect(
      screen.getByRole('heading', { name: /hey! welcome to reacttrello/i })
    ).toBeInTheDocument();

    expect(screen.getByText('Select a board to start managing your tasks 😉')).toBeInTheDocument();

    expect(screen.getByRole('link', { name: 'First board' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Second board' })).toBeInTheDocument();
  });
});
