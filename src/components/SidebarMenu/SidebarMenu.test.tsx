/* eslint-disable @typescript-eslint/no-var-requires */
import SidebarMenu from './SidebarMenu';
import { renderWithTheme } from 'utils/test-utils';
import { screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Board } from 'types';

const BOARDS_MOCK: Board[] = [
  {
    id: 'board-1-id',
    title: 'Cool project',
    slug: 'cool-project',
    columns: []
  },
  {
    id: 'board-2-id',
    title: 'Work',
    slug: 'work',
    columns: []
  },
  {
    id: 'board-3-id',
    title: 'iOS App',
    slug: 'ios-app',
    columns: []
  }
];

const renderComponent = () => {
  const toggleThemeMock = jest.fn();
  const setBoardsMock = jest.fn();

  renderWithTheme(
    <SidebarMenu
      useBoardsList={() => BOARDS_MOCK}
      toggleTheme={toggleThemeMock}
      setBoards={setBoardsMock}
    />
  );

  return {
    toggleThemeMock,
    setBoardsMock
  };
};

const getBoardLink = (name: string) => screen.getByRole('link', { name });

describe('Component: SidebarMenu', () => {
  it('should render correctly', () => {
    renderComponent();

    expect(screen.getByRole('heading', { name: 'Easy Boards' })).toBeInTheDocument();
    expect(screen.getByLabelText('Your boards list')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Help' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Toggle theme' })).toBeInTheDocument();
    expect(screen.getByTitle('Collapse sidebar')).toBeInTheDocument();

    expect(getBoardLink('Cool project')).toBeInTheDocument();
    expect(getBoardLink('Work')).toBeInTheDocument();
    expect(getBoardLink('iOS App')).toBeInTheDocument();
  });

  it('should handle the collapse/expand of the sidebar correctly', async () => {
    renderComponent();

    expect(screen.getByLabelText('Sidebar menu')).toBeInTheDocument();
    expect(screen.getByTitle('Collapse sidebar')).toBeInTheDocument();

    await userEvent.click(screen.getByTitle('Collapse sidebar'));

    await waitFor(() => {
      expect(screen.queryByLabelText('Sidebar menu')).not.toBeInTheDocument();
      expect(screen.queryByTitle('Collapse sidebar')).not.toBeInTheDocument();
      expect(screen.getByTitle('Expand sidebar')).toBeInTheDocument();
    });

    await userEvent.click(screen.getByTitle('Expand sidebar'));

    await waitFor(() => {
      expect(screen.getByLabelText('Sidebar menu')).toBeInTheDocument();
      expect(screen.getByTitle('Collapse sidebar')).toBeInTheDocument();
      expect(screen.queryByTitle('Expand sidebar')).not.toBeInTheDocument();
    });
  });

  it('should call toggleTheme when user clicks on Toggle Theme button', async () => {
    const { toggleThemeMock } = renderComponent();

    await userEvent.click(screen.getByRole('button', { name: 'Toggle theme' }));

    await waitFor(() => {
      expect(toggleThemeMock).toHaveBeenCalledTimes(1);
    });
  });

  it('should add a board correctly', async () => {
    jest.spyOn(require('next/router'), 'useRouter').mockImplementation(() => ({
      push: jest.fn(),
      prefetch: jest.fn(() => ({ catch: () => {} })) // without this catch, the test fails because something tries to use that catch
    }));

    const { setBoardsMock } = renderComponent();

    await userEvent.click(screen.getByTitle('Add new board'));

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
    expect(setBoardsMock).toHaveBeenCalledWith([...BOARDS_MOCK, expectedNewBoard]);
  });

  it('should edit a board title correctly', async () => {
    const { setBoardsMock } = renderComponent();

    const thirdBoardItem = within(getBoardLink('iOS App').parentElement!);

    await userEvent.click(thirdBoardItem.getByLabelText('Open dropdown'));
    await userEvent.click(thirdBoardItem.getByText('Edit board'));

    await screen.findByLabelText('Modal with title "Edit board"');

    await userEvent.clear(screen.getByRole('textbox', { name: 'Board title' }));
    await userEvent.type(screen.getByRole('textbox', { name: 'Board title' }), 'Android App');
    await userEvent.click(screen.getByRole('button', { name: 'Edit board' }));

    const expectedBoards: Board[] = structuredClone(BOARDS_MOCK);

    expectedBoards[2].title = 'Android App';

    expect(setBoardsMock).toHaveBeenCalledTimes(1);
    expect(setBoardsMock).toHaveBeenCalledWith(expectedBoards);
  });

  it('should delete a board correctly', async () => {
    jest.spyOn(require('next/router'), 'useRouter').mockImplementation(() => ({
      asPath: '',
      prefetch: jest.fn(() => ({ catch: () => {} })) // without this catch, the test fails because something tries to use that catch
    }));

    const { setBoardsMock } = renderComponent();

    const thirdBoardItem = within(getBoardLink('iOS App').parentElement!);

    await userEvent.click(thirdBoardItem.getByLabelText('Open dropdown'));
    await userEvent.click(thirdBoardItem.getByText('Delete board'));

    await screen.findByLabelText('Modal with title "Delete board"');

    await userEvent.type(
      screen.getByRole('textbox', { name: 'Textfield for the confirmation text' }),
      'ios-app' // third board slug
    );
    await userEvent.click(screen.getByRole('button', { name: 'Yes, delete board' }));

    const expectedBoards: Board[] = [
      {
        id: 'board-1-id',
        title: 'Cool project',
        slug: 'cool-project',
        columns: []
      },
      {
        id: 'board-2-id',
        title: 'Work',
        slug: 'work',
        columns: []
      }
    ];

    expect(setBoardsMock).toHaveBeenCalledTimes(1);
    expect(setBoardsMock).toHaveBeenCalledWith(expectedBoards);
  });
});
