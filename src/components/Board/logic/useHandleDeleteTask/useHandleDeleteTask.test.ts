import { Board } from 'types';
import useHandleDeleteTask from './useHandleDeleteTask';

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
          content: 'Fake task 1'
        },
        {
          id: 'fake-task-2',
          content: 'Fake task 2'
        },
        {
          id: 'fake-task-3',
          content: 'Fake task 3'
        }
      ]
    }
  ]
};

describe('Component: Board > Logic hook: useHandleDeleteTask', () => {
  it('should call setBoard and closeModal correctly', () => {
    // as this hook doesn't use any React logic, we don't need to use @testing-library/react-hooks
    const closeDeleteTaskConfirmationModalMock = jest.fn();
    const setBoardMock = jest.fn();

    const handleDeleteTask = useHandleDeleteTask({
      board: BOARD_MOCK,
      currentColumn: BOARD_MOCK.columns[0],
      taskToBeDeletedIndex: 1,
      closeDeleteTaskConfirmationModal: closeDeleteTaskConfirmationModalMock,
      setBoard: setBoardMock
    });

    handleDeleteTask();

    expect(setBoardMock).toHaveBeenCalledTimes(1);
    expect(setBoardMock).toHaveBeenCalledWith({
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
              content: 'Fake task 1'
            },
            {
              id: 'fake-task-3',
              content: 'Fake task 3'
            }
          ]
        }
      ]
    });
    expect(closeDeleteTaskConfirmationModalMock).toHaveBeenCalledTimes(1);
  });
});
