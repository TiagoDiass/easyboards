import useHandleAddBoard from './useHandleAddBoard';
import { Board } from 'types';
import 'jest-localstorage-mock';
import { BOARDS_KEY } from 'constants/local-storage-keys';

jest.mock('uuid', () => ({
  v4: () => 'fake-uuid'
}));

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

describe('Component: Board > Logic hook: useHandleAddBoard', () => {
  it('should call setBoard and closeModal correctly', () => {
    // as this hook doesn't use any React logic, we don't need to use @testing-library/react-hooks
    const closeAddBoardModalMock = jest.fn();
    const setBoardsMock = jest.fn();

    const handleAddBoard = useHandleAddBoard({
      boards: BOARDS_MOCK,
      closeAddBoardModal: closeAddBoardModalMock,
      setBoards: setBoardsMock
    });

    handleAddBoard({
      boardTitle: 'My new board',
      startWithKanbanTemplate: false
    });

    const expectedNewBoards: Board[] = [
      ...BOARDS_MOCK,
      {
        id: 'fake-uuid',
        title: 'My new board',
        slug: 'my-new-board',
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

    expect(closeAddBoardModalMock).toHaveBeenCalledTimes(1);
  });

  it('should create a new board with a kanban template correctly', () => {
    // as this hook doesn't use any React logic, we don't need to use @testing-library/react-hooks
    const closeAddBoardModalMock = jest.fn();
    const setBoardsMock = jest.fn();

    const handleAddBoard = useHandleAddBoard({
      boards: BOARDS_MOCK,
      closeAddBoardModal: closeAddBoardModalMock,
      setBoards: setBoardsMock
    });

    handleAddBoard({
      boardTitle: 'My new board',
      startWithKanbanTemplate: true
    });

    const expectedNewBoards: Board[] = [
      ...BOARDS_MOCK,
      {
        id: 'fake-uuid',
        title: 'My new board',
        slug: 'my-new-board',
        columns: [
          {
            id: 'fake-uuid',
            title: 'To do ✏️',
            tasks: []
          },
          {
            id: 'fake-uuid',
            title: 'Doing 🔨',
            tasks: []
          },
          {
            id: 'fake-uuid',
            title: 'Done ✅',
            tasks: []
          }
        ]
      }
    ];

    expect(setBoardsMock).toHaveBeenCalledTimes(1);
    expect(setBoardsMock).toHaveBeenCalledWith(expectedNewBoards);

    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      BOARDS_KEY,
      JSON.stringify(expectedNewBoards)
    );

    expect(closeAddBoardModalMock).toHaveBeenCalledTimes(1);
  });
});
