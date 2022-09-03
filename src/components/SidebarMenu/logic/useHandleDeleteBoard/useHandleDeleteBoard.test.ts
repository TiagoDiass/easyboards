/* eslint-disable @typescript-eslint/no-var-requires */
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
    const useRouter = jest.spyOn(require('next/router'), 'useRouter');

    useRouter.mockImplementation(() => ({
      asPath: '',
      push: jest.fn()
    }));

    const closeDeleteBoardConfirmationModalMock = jest.fn();
    const setBoardsMock = jest.fn();

    const handleDeleteBoard = useHandleDeleteBoard({
      boards: BOARDS_MOCK,
      closeDeleteBoardConfirmationModal: closeDeleteBoardConfirmationModalMock,
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

    expect(closeDeleteBoardConfirmationModalMock).toHaveBeenCalledTimes(1);
  });

  it('should navigate to the root route when the board to be deleted is the current board', async () => {
    const useRouter = jest.spyOn(require('next/router'), 'useRouter');
    const pushRouteMock = jest.fn();

    useRouter.mockImplementation(() => ({
      asPath: '/boards/work', // 'work' is the second board slug
      push: pushRouteMock
    }));

    const closeDeleteBoardConfirmationModalMock = jest.fn();
    const setBoardsMock = jest.fn();

    const handleDeleteBoard = useHandleDeleteBoard({
      boards: BOARDS_MOCK,
      closeDeleteBoardConfirmationModal: closeDeleteBoardConfirmationModalMock,
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

    expect(pushRouteMock).toHaveBeenCalledTimes(1);
    expect(pushRouteMock).toHaveBeenCalledWith('/');

    expect(setBoardsMock).toHaveBeenCalledTimes(1);
    expect(setBoardsMock).toHaveBeenCalledWith(expectedNewBoards);

    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      BOARDS_KEY,
      JSON.stringify(expectedNewBoards)
    );

    expect(closeDeleteBoardConfirmationModalMock).toHaveBeenCalledTimes(1);
  });
});
