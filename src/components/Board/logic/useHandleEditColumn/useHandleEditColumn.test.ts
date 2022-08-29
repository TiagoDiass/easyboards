import useHandleEditColumn from './useHandleEditColumn';
import { Board } from 'types';

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
    }
  ]
};

describe('Component: Board > Logic hook: useHandleEditColumn', () => {
  it('should call setBoard and closeModal correctly', () => {
    // as this hook doesn't use any React logic, we don't need to use @testing-library/react-hooks
    const closeEditColumnModalMock = jest.fn();
    const setBoardMock = jest.fn();

    const handleEditColumn = useHandleEditColumn({
      board: BOARD_MOCK,
      currentColumn: BOARD_MOCK.columns[0],
      closeEditColumnModal: closeEditColumnModalMock,
      setBoard: setBoardMock
    });

    handleEditColumn('My new column 1');

    expect(setBoardMock).toHaveBeenCalledTimes(1);
    expect(setBoardMock).toHaveBeenCalledWith({
      id: 'fake-id',
      slug: 'fake-slug',
      title: 'fake-board',
      columns: [
        {
          id: 'column-1',
          title: 'My new column 1',
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
    });
    expect(closeEditColumnModalMock).toHaveBeenCalledTimes(1);
  });
});
