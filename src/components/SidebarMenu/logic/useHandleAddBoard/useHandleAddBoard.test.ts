import { Board } from 'types';
import useHandleAddBoard from './useHandleAddBoard';

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

    expect(setBoardsMock).toHaveBeenCalledTimes(1);
    expect(setBoardsMock).toHaveBeenCalledWith([
      ...BOARDS_MOCK,
      {
        id: expect.any(String),
        title: 'My new board',
        slug: 'my-new-board',
        columns: []
      }
    ]);
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

    expect(setBoardsMock).toHaveBeenCalledTimes(1);
    expect(setBoardsMock).toHaveBeenCalledWith([
      ...BOARDS_MOCK,
      {
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
      }
    ] as Board[]);
    expect(closeAddBoardModalMock).toHaveBeenCalledTimes(1);
  });
});
