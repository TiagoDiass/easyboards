import { Board } from 'types';
import useHandleDeleteColumn from './useHandleDeleteColumn';

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
    },
    {
      id: 'column-3',
      title: 'Column 3',
      tasks: [
        {
          id: 'fake-task-3',
          content: 'Fake third task'
        }
      ]
    }
  ]
};

describe('Component: Board > Logic hook: useHandleAddTask', () => {
  it('should call setBoard and closeModal correctly', () => {
    // as this hook doesn't use any React logic, we don't need to use @testing-library/react-hooks
    const closeDeleteColumnConfirmationModalMock = jest.fn();
    const setBoardMock = jest.fn();

    const handleDeleteColumn = useHandleDeleteColumn({
      board: BOARD_MOCK,
      currentColumn: BOARD_MOCK.columns[0],
      closeDeleteColumnConfirmationModal: closeDeleteColumnConfirmationModalMock,
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
          id: 'column-2',
          title: 'Column 2',
          tasks: [
            {
              id: 'fake-task-2',
              content: 'Fake second task'
            }
          ]
        },
        {
          id: 'column-3',
          title: 'Column 3',
          tasks: [
            {
              id: 'fake-task-3',
              content: 'Fake third task'
            }
          ]
        }
      ]
    });

    expect(closeDeleteColumnConfirmationModalMock).toHaveBeenCalledTimes(1);
  });
});
