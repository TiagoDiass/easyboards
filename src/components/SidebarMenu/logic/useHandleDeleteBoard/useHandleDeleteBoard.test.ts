import { Board } from 'types';
import useHandleDeleteBoard from './useHandleDeleteBoard';
import 'jest-localstorage-mock';
import { BOARDS_KEY } from 'constants/local-storage-keys';

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

describe('Component: SidebarMenu > Logic hook: useHandleDeleteBoard', () => {
  it('should call setBoards and closeModal correctly', () => {
    // as this hook doesn't use any React logic, we don't need to use @testing-library/react-hooks
    const closeDeleteBoardModalMock = jest.fn();
    const setBoardsMock = jest.fn();

    const handleDeleteBoard = useHandleDeleteBoard({
      boards: BOARDS_MOCK,
      closeDeleteBoardModal: closeDeleteBoardModalMock,
      setBoards: setBoardsMock
    });

    handleDeleteBoard('board-2-id'); // deleting the second board
    const expectedNewBoards: Board[] = [
      {
        id: 'board-1-id',
        title: 'Cool project',
        slug: 'cool-project',
        columns: []
      },
      {
        id: 'board-3-id',
        title: 'iOS App',
        slug: 'ios-app',
        columns: []
      }
    ];

    expect(setBoardsMock).toHaveBeenCalledTimes(1);
    expect(setBoardsMock).toHaveBeenCalledWith(expectedNewBoards);

    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      BOARDS_KEY,
      JSON.stringify(expectedNewBoards)
    );

    expect(closeDeleteBoardModalMock).toHaveBeenCalledTimes(1);
  });
});
