import Board from './Board';
import { renderWithTheme } from 'utils/test-utils';
import { Board as BoardType } from 'types';
import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const BoardMock: BoardType = {
  id: 'fake-board',
  title: 'iOS App',
  slug: 'ios-app',
  columns: [
    {
      id: 'todo-column-id',
      title: 'To do',
      tasks: [
        {
          id: 'task-1',
          content: 'Task 1'
        },
        {
          id: 'task-2',
          content: 'Task 2'
        }
      ]
    },
    {
      id: 'in-progress-column-id',
      title: 'In progress',
      tasks: [
        {
          id: 'task-3',
          content: 'Task 3'
        }
      ]
    }
  ]
};

describe('Component: Board', () => {
  it('should render correctly', () => {
    renderWithTheme(<Board board={BoardMock} setBoard={() => {}} />);

    expect(screen.getAllByLabelText('Tasks column')).toHaveLength(2);
    expect(screen.getAllByLabelText('Task card')).toHaveLength(3);
    expect(screen.getByRole('button', { name: 'Add column' })).toBeInTheDocument();
  });

  it('should add a task correctly', async () => {
    const setBoardMock = jest.fn();

    renderWithTheme(<Board board={BoardMock} setBoard={setBoardMock} />);

    const secondColumn = within(screen.getAllByLabelText('Tasks column')[1]);

    expect(secondColumn.getByRole('heading', { name: 'In progress' })).toBeInTheDocument();
    expect(secondColumn.getByLabelText('Tasks of the "In progress" column').children).toHaveLength(
      1
    );

    await userEvent.click(secondColumn.getByRole('button', { name: 'Open dropdown' }));
    await userEvent.click(secondColumn.getByText('Add task'));

    await screen.findByLabelText('Modal with title "Add task"');
    await userEvent.type(screen.getByRole('textbox', { name: 'Task content' }), 'Do the homework');
    await userEvent.click(screen.getByRole('button', { name: 'Add task' }));

    expect(setBoardMock).toHaveBeenCalledTimes(1);
    expect(setBoardMock).toHaveBeenCalledWith({
      ...BoardMock,
      columns: [
        BoardMock.columns[0],
        {
          id: 'in-progress-column-id',
          title: 'In progress',
          tasks: [
            {
              id: 'task-3',
              content: 'Task 3'
            },
            {
              id: expect.any(String),
              content: 'Do the homework'
            }
          ]
        }
      ]
    });
  });
});
