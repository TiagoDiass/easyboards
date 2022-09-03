import useHandleEditBoard from './useHandleEditBoard';
import { Board } from 'types';
import { BOARDS_KEY } from 'constants/local-storage-keys';
import 'jest-localstorage-mock';

const BOARD_MOCK: Board = {
  id: 'fake-board-id',
  slug: 'fake-slug',
  title: 'fake-board',
  columns: [
    {
      id: 'column-1',
      title: 'Column 1',
      tasks: [
        {
          id: 'fake-task-1',
          content: 'Fake first task'
        }
      ]
    },
    {
      id: 'column-2',
      title: 'Column 2',
      tasks: [
        {
          id: 'fake-task-2',
          content: 'Fake second task'
        }
      ]
    }
  ]
};

describe('Component: SidebarMenu > Logic hook: useHandleEditBoard', () => {
  it('should call setBoards and closeModal correctly', () => {
    // as this hook doesn't use any React logic, we don't need to use @testing-library/react-hooks
    const closeEditBoardModalMock = jest.fn();
    const setBoardsMock = jest.fn();

    const handleEditBoard = useHandleEditBoard({
      boards: [BOARD_MOCK],
      closeEditBoardModal: closeEditBoardModalMock,
      setBoards: setBoardsMock
    });

    handleEditBoard('fake-board-id', 'My new board');
    const expectedNewBoards: Board[] = [
      {
        ...BOARD_MOCK,
        title: 'My new board'
      }
    ];

    expect(setBoardsMock).toHaveBeenCalledTimes(1);
    expect(setBoardsMock).toHaveBeenCalledWith(expectedNewBoards);

    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      BOARDS_KEY,
      JSON.stringify(expectedNewBoards)
    );

    expect(closeEditBoardModalMock).toHaveBeenCalledTimes(1);
  });
});
