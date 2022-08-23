import { Board } from 'types';
import useHandleAddTask from './useHandleAddTask';

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
        }
      ]
    }
  ]
};

describe('Component: Board > Logic hook: useHandleAddTask', () => {
  it('should call setBoard and closeModal correctly', () => {
    // as this hook doesn't use any React logic, we don't need to use @testing-library/react-hooks
    const closeAddTaskModalMock = jest.fn();
    const setBoardMock = jest.fn();

    const handleAddTask = useHandleAddTask({
      board: BOARD_MOCK,
      currentColumn: BOARD_MOCK.columns[0],
      closeAddTaskModal: closeAddTaskModalMock,
      setBoard: setBoardMock
    });

    handleAddTask('My new task');

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
              content: 'Fake first task'
            },
            {
              id: expect.any(String),
              content: 'My new task'
            }
          ]
        }
      ]
    });
    expect(closeAddTaskModalMock).toHaveBeenCalledTimes(1);
  });
});
