import TaskCard from './TaskCard';
import { renderWithTheme } from 'utils/test-utils';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Component: TaskCard', () => {
  it('should render correctly', () => {
    renderWithTheme(
      <TaskCard task={{ id: 'fake-id', content: 'Task Content' }} onDelete={() => {}} />
    );

    expect(screen.getByText('Task Content')).toBeInTheDocument();
    expect(screen.getByLabelText('Delete task')).toBeInTheDocument();
    expect(screen.getByLabelText('Delete task')).not.toBeVisible();
  });

  it('should call onDelete when user clicks on delete button', async () => {
    const onDeleteMock = jest.fn();

    renderWithTheme(
      <TaskCard task={{ id: 'fake-id', content: 'Task Content' }} onDelete={onDeleteMock} />
    );

    await userEvent.click(screen.getByLabelText('Delete task'));

    expect(onDeleteMock).toHaveBeenCalledTimes(1);
  });
});
