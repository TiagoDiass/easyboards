import { Board } from 'types';
import useHandleDeleteAllTasks from './useHandleDeleteAllTasks';

const BOARD_MOCK: Board = {
  id: 'fake-id',
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
        },
        {
          id: 'fake-task-2',
          content: 'Fake second task'
        },
        {
          id: 'fake-task-3',
          content: 'Fake third task'
        }
      ]
    },
    {
      id: 'column-2',
      title: 'Column 2',
      tasks: [
        {
          id: 'fake-task-4',
          content: 'Fake fourth task'
        }
      ]
    }
  ]
};

describe('Component: Board > Logic hook: useHandleDeleteAllTasks', () => {
  it('should call setBoard and closeModal correctly', () => {
    // as this hook doesn't use any React logic, we don't need to use @testing-library/react-hooks
    const closeDeleteAllTasksConfirmationModalMock = jest.fn();
    const setBoardMock = jest.fn();

    const handleDeleteColumn = useHandleDeleteAllTasks({
      board: BOARD_MOCK,
      currentColumn: BOARD_MOCK.columns[0],
      closeDeleteAllTasksConfirmationModal: closeDeleteAllTasksConfirmationModalMock,
      setBoard: setBoardMock
    });

    handleDeleteColumn();

    expect(setBoardMock).toHaveBeenCalledTimes(1);
    expect(setBoardMock).toHaveBeenCalledWith({
      id: 'fake-id',
      slug: 'fake-slug',
      title: 'fake-board',
      columns: [
        {
          id: 'column-1',
          title: 'Column 1',
          tasks: []
        },
        BOARD_MOCK.columns[1]
      ]
    });

    expect(closeDeleteAllTasksConfirmationModalMock).toHaveBeenCalledTimes(1);
  });
});
