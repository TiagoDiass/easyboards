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

  it('should delete a task correctly', async () => {
    const setBoardMock = jest.fn();

    renderWithTheme(<Board board={BoardMock} setBoard={setBoardMock} />);

    const secondColumn = within(screen.getAllByLabelText('Tasks column')[1]);

    expect(secondColumn.getByRole('heading', { name: 'In progress' })).toBeInTheDocument();
    expect(secondColumn.getByLabelText('Tasks of the "In progress" column').children).toHaveLength(
      1
    );
    expect(secondColumn.getByLabelText('Task card')).toHaveTextContent('Task 3');

    await userEvent.click(secondColumn.getByLabelText('Delete task'));

    await screen.findByLabelText('Modal with title "Delete task"');
    await userEvent.click(screen.getByRole('button', { name: 'Yes, delete task' }));

    expect(setBoardMock).toHaveBeenCalledTimes(1);
    expect(setBoardMock).toHaveBeenCalledWith({
      ...BoardMock,
      columns: [
        BoardMock.columns[0],
        {
          id: 'in-progress-column-id',
          title: 'In progress',
          tasks: []
        }
      ]
    });
  });

  it('should add a column correctly', async () => {
    const setBoardMock = jest.fn();

    renderWithTheme(<Board board={BoardMock} setBoard={setBoardMock} />);

    await userEvent.click(screen.getByRole('button', { name: 'Add column' }));

    const addColumnModal = await screen.findByLabelText('Modal with title "Add column"');
    await userEvent.type(screen.getByRole('textbox', { name: 'Column title' }), 'Backlog');
    await userEvent.click(within(addColumnModal).getByRole('button', { name: 'Add column' }));

    expect(setBoardMock).toHaveBeenCalledTimes(1);
    expect(setBoardMock).toHaveBeenCalledWith({
      ...BoardMock,
      columns: [
        ...BoardMock.columns,
        {
          id: expect.any(String),
          title: 'Backlog',
          tasks: []
        }
      ]
    });
  });

  it('should edit a column correctly', async () => {
    const setBoardMock = jest.fn();

    renderWithTheme(<Board board={BoardMock} setBoard={setBoardMock} />);

    const secondColumn = within(screen.getAllByLabelText('Tasks column')[1]);

    expect(secondColumn.getByRole('heading', { name: 'In progress' })).toBeInTheDocument();
    expect(secondColumn.getByLabelText('Tasks of the "In progress" column').children).toHaveLength(
      1
    );

    await userEvent.click(secondColumn.getByRole('button', { name: 'Open dropdown' }));
    await userEvent.click(secondColumn.getByText('Edit column'));

    await screen.findByLabelText('Modal with title "Edit column"');
    await userEvent.clear(screen.getByRole('textbox', { name: 'Column title' }));
    await userEvent.type(screen.getByRole('textbox', { name: 'Column title' }), 'Backlog');
    await userEvent.click(screen.getByRole('button', { name: 'Edit column' }));

    expect(setBoardMock).toHaveBeenCalledTimes(1);
    expect(setBoardMock).toHaveBeenCalledWith({
      ...BoardMock,
      columns: [
        BoardMock.columns[0],
        {
          id: 'in-progress-column-id',
          title: 'Backlog',
          tasks: [
            {
              id: 'task-3',
              content: 'Task 3'
            }
          ]
        }
      ]
    });
  });

  it('should delete a column correctly', async () => {
    const setBoardMock = jest.fn();

    renderWithTheme(<Board board={BoardMock} setBoard={setBoardMock} />);

    const secondColumn = within(screen.getAllByLabelText('Tasks column')[1]);

    expect(secondColumn.getByRole('heading', { name: 'In progress' })).toBeInTheDocument();
    expect(secondColumn.getByLabelText('Tasks of the "In progress" column').children).toHaveLength(
      1
    );

    await userEvent.click(secondColumn.getByRole('button', { name: 'Open dropdown' }));
    await userEvent.click(secondColumn.getByText('Delete column'));

    await screen.findByLabelText('Modal with title "Delete column"');
    await userEvent.click(screen.getByRole('button', { name: 'Yes, delete column' }));

    expect(setBoardMock).toHaveBeenCalledTimes(1);
    expect(setBoardMock).toHaveBeenCalledWith({
      ...BoardMock,
      columns: [BoardMock.columns[0]]
    });
  });

  it('should delete all tasks from a column correctly', async () => {
    const setBoardMock = jest.fn();

    renderWithTheme(<Board board={BoardMock} setBoard={setBoardMock} />);

    const firstColumn = within(screen.getAllByLabelText('Tasks column')[0]);

    expect(firstColumn.getByRole('heading', { name: 'To do' })).toBeInTheDocument();
    expect(firstColumn.getByLabelText('Tasks of the "To do" column').children).toHaveLength(2);

    await userEvent.click(firstColumn.getByRole('button', { name: 'Open dropdown' }));
    await userEvent.click(firstColumn.getByText('Delete all tasks'));

    await screen.findByLabelText('Modal with title "Delete all tasks"');
    await userEvent.click(screen.getByRole('button', { name: 'Yes, delete all tasks' }));

    expect(setBoardMock).toHaveBeenCalledTimes(1);
    expect(setBoardMock).toHaveBeenCalledWith({
      ...BoardMock,
      columns: [
        {
          id: 'todo-column-id',
          title: 'To do',
          tasks: []
        },
        BoardMock.columns[1]
      ]
    });
  });
});
