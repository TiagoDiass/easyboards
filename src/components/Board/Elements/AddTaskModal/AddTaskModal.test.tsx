import AddTaskModal from './AddTaskModal';
import { renderWithTheme } from 'utils/test-utils';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Component: AddTaskModal', () => {
  it('should render correctly', () => {
    renderWithTheme(<AddTaskModal isOpen handleAddTask={() => {}} />);

    expect(screen.getByRole('heading', { name: 'Add task' })).toBeInTheDocument(); // modal title
    expect(screen.getByRole('textbox', { name: 'Task content' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Add task' })).toBeInTheDocument();
  });

  it('should call onClose when user clicks on Cancel', async () => {
    const onCloseMock = jest.fn();
    renderWithTheme(<AddTaskModal isOpen onClose={onCloseMock} handleAddTask={() => {}} />);

    await userEvent.click(screen.getByRole('button', { name: 'Cancel' }));

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('should call handleAddTask when user clicks on "Add task" button', async () => {
    const handleAddTaskMock = jest.fn();
    renderWithTheme(<AddTaskModal isOpen handleAddTask={handleAddTaskMock} />);

    expect(screen.getByRole('button', { name: 'Add task' })).toBeDisabled();

    await userEvent.type(screen.getByRole('textbox', { name: 'Task content' }), 'Do the homework');

    expect(screen.getByRole('button', { name: 'Add task' })).toBeEnabled();

    await userEvent.click(screen.getByRole('button', { name: 'Add task' }));

    expect(handleAddTaskMock).toHaveBeenCalledTimes(1);
    expect(handleAddTaskMock).toHaveBeenCalledWith('Do the homework');
  });
});
