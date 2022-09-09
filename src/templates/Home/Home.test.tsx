/* eslint-disable @typescript-eslint/no-var-requires */
import Home from './Home';
import { renderWithTheme } from 'utils/test-utils';
import { screen } from '@testing-library/react';
import useBoardStore from 'store/board/board.store';
import { renderHook } from '@testing-library/react-hooks';
import userEvent from '@testing-library/user-event';
import { Board } from 'types';

describe('Component: Home', () => {
  it('should render correctly', () => {
    const result = renderHook(() => useBoardStore()).result;

    result.current.state.boards = [
      {
        id: 'fake-id-1',
        title: 'First board',
        slug: 'first-board',
        columns: []
      },
      {
        id: 'fake-id-2',
        title: 'Second board',
        slug: 'second-board',
        columns: []
      }
    ];

    renderWithTheme(<Home />);

    expect(
      screen.getByRole('heading', { name: /hey! welcome to easyboards/i })
    ).toBeInTheDocument();

    expect(screen.getByText('Select a board to start managing your tasks 😉')).toBeInTheDocument();

    expect(screen.getByRole('link', { name: 'First board' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Second board' })).toBeInTheDocument();
  });

  it('should render correctly when there are no boards', () => {
    const result = renderHook(() => useBoardStore()).result;

    result.current.state.boards = [];

    renderWithTheme(<Home />);

    expect(
      screen.getByRole('heading', { name: /hey! welcome to easyboards/i })
    ).toBeInTheDocument();

    expect(
      screen.queryByText('Select a board to start managing your tasks 😉')
    ).not.toBeInTheDocument();
    expect(screen.getByText('It seems you have no boards yet 😕')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Create a new board' })).toBeInTheDocument();
  });

  it('should add a board correctly when user has no boards yet', async () => {
    jest.spyOn(require('next/router'), 'useRouter').mockImplementation(() => ({
      push: jest.fn(),
      prefetch: jest.fn(() => ({ catch: () => {} })) // without this catch, the test fails because something tries to use that catch
    }));

    const setBoardsMock = jest.fn();
    const result = renderHook(() => useBoardStore()).result;

    result.current.state.boards = [];
    result.current.actions.setBoardsAndPartialBoards = setBoardsMock;

    renderWithTheme(<Home />);

    await userEvent.click(screen.getByRole('button', { name: 'Create a new board' }));

    await screen.findByLabelText('Modal with title "Add board"');

    await userEvent.type(screen.getByRole('textbox', { name: 'Board title' }), 'My new board');
    await userEvent.click(screen.getByRole('button', { name: 'Add board' }));

    const expectedNewBoard: Board = {
      id: expect.any(String),
      title: 'My new board',
      slug: 'my-new-board',
      columns: [
        {
          id: expect.any(String),
          title: 'To do ✏️',
          tasks: []
        },
        {
          id: expect.any(String),
          title: 'Doing 🔨',
          tasks: []
        },
        {
          id: expect.any(String),
          title: 'Done ✅',
          tasks: []
        }
      ]
    };

    expect(setBoardsMock).toHaveBeenCalledTimes(1);
    expect(setBoardsMock).toHaveBeenCalledWith([expectedNewBoard]);
  });
});
