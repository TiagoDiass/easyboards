import useHandleAddColumn from './useHandleAddColumn';
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
    }
  ]
};

describe('Component: Board > Logic hook: useHandleAddColumn', () => {
  it('should call setBoard and closeModal correctly', () => {
    // as this hook doesn't use any React logic, we don't need to use @testing-library/react-hooks
    const closeAddColumnModalMock = jest.fn();
    const setBoardMock = jest.fn();

    const handleAddColumn = useHandleAddColumn({
      board: BOARD_MOCK,
      closeAddColumnModal: closeAddColumnModalMock,
      setBoard: setBoardMock
    });

    handleAddColumn('My new awesome column');

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
            }
          ]
        },
        {
          id: expect.any(String),
          title: 'My new awesome column',
          tasks: []
        }
      ]
    });
    expect(closeAddColumnModalMock).toHaveBeenCalledTimes(1);
  });
});
