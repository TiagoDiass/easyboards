import TasksColumn from './TasksColumn';
import { renderWithTheme } from 'utils/test-utils';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DragDropContext } from 'react-beautiful-dnd';

const renderComponent = () => {
  const handleAddTaskMock = jest.fn();
  const handleDeleteColumnMock = jest.fn();
  const handleDeleteTaskMock = jest.fn();
  const handleEditColumnMock = jest.fn();
  const handleDeleteAllTasksMock = jest.fn();

  renderWithTheme(
    <DragDropContext onDragEnd={() => {}}>
      <TasksColumn
        column={{
          id: 'fake-column-id',
          title: 'In progress',
          tasks: [
            { id: 'task-1', content: 'Develop signup page' },
            { id: 'task-2', content: 'Document how to test signup page' },
            { id: 'task-3', content: 'Study how to use the new forms library' },
            { id: 'task-4', content: 'Create documents for the work presentation' },
            { id: 'task-5', content: 'Develop the logout feature' },
            {
              id: 'task-6',
              content:
                'Test a card with a really huge text because the card appearance should look good even with a big text'
            }
          ]
        }}
        handleAddTask={handleAddTaskMock}
        handleDeleteColumn={handleDeleteColumnMock}
        handleDeleteTask={handleDeleteTaskMock}
        handleEditColumn={handleEditColumnMock}
        handleDeleteAllTasks={handleDeleteAllTasksMock}
      />
    </DragDropContext>
  );

  return {
    handleAddTaskMock,
    handleDeleteColumnMock,
    handleDeleteTaskMock,
    handleEditColumnMock,
    handleDeleteAllTasksMock
  };
};

describe('Component: TasksColumn', () => {
  it('should render correctly', () => {
    renderComponent();

    expect(screen.getByRole('heading', { name: 'In progress' })).toBeInTheDocument();
    expect(
      screen.getByRole('list', { name: 'Tasks of the "In progress" column' }).children
    ).toHaveLength(6);
    expect(screen.getByLabelText('Column related actions')).toBeInTheDocument();
  });

  it('should call handleAddTask when user clicks on the "Add task" dropdown option', async () => {
    const { handleAddTaskMock } = renderComponent();

    await userEvent.click(screen.getByRole('button', { name: 'Open dropdown' }));

    await userEvent.click(screen.getByText('Add task'));

    expect(handleAddTaskMock).toHaveBeenCalledTimes(1);
  });

  it('should call handleDeleteColumn when user clicks on the "Delete column" dropdown option', async () => {
    const { handleDeleteColumnMock } = renderComponent();

    await userEvent.click(screen.getByRole('button', { name: 'Open dropdown' }));

    await userEvent.click(screen.getByText('Delete column'));

    expect(handleDeleteColumnMock).toHaveBeenCalledTimes(1);
  });

  it('should call handleEditColumn when user clicks on the "Edit column" dropdown option', async () => {
    const { handleEditColumnMock } = renderComponent();

    await userEvent.click(screen.getByRole('button', { name: 'Open dropdown' }));

    await userEvent.click(screen.getByText('Edit column'));

    expect(handleEditColumnMock).toHaveBeenCalledTimes(1);
  });

  it('should call handleDeleteAllTasks when user clicks on "Delete all tasks" dropdown option', async () => {
    const { handleDeleteAllTasksMock } = renderComponent();

    await userEvent.click(screen.getByRole('button', { name: 'Open dropdown' }));

    await userEvent.click(screen.getByText('Delete all tasks'));

    expect(handleDeleteAllTasksMock).toHaveBeenCalledTimes(1);
  });
});
