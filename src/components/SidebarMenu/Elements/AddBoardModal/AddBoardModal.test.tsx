import AddBoardModal from './AddBoardModal';
import { renderWithTheme } from 'utils/test-utils';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Component: AddBoardModal', () => {
  it('should render correctly', () => {
    renderWithTheme(<AddBoardModal isOpen handleAddBoard={() => {}} />);

    expect(screen.getByRole('heading', { name: 'Add board' })).toBeInTheDocument(); // modal title
    expect(screen.getByRole('textbox', { name: 'Board title' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Add board' })).toBeInTheDocument();
    expect(screen.getByLabelText('Start with a Kanban template')).toBeChecked();
  });

  it('should call onClose when user clicks on Cancel', async () => {
    const onCloseMock = jest.fn();
    renderWithTheme(<AddBoardModal isOpen onClose={onCloseMock} handleAddBoard={() => {}} />);

    await userEvent.click(screen.getByRole('button', { name: 'Cancel' }));

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('should call handleAddBoard when user clicks on "Add board" button', async () => {
    const handleAddBoardMock = jest.fn();
    renderWithTheme(<AddBoardModal isOpen handleAddBoard={handleAddBoardMock} />);

    expect(screen.getByRole('button', { name: 'Add board' })).toBeDisabled();

    await userEvent.type(screen.getByRole('textbox', { name: 'Board title' }), 'New board');

    expect(screen.getByRole('button', { name: 'Add board' })).toBeEnabled();

    await userEvent.click(screen.getByRole('button', { name: 'Add board' }));

    expect(handleAddBoardMock).toHaveBeenCalledTimes(1);
    expect(handleAddBoardMock).toHaveBeenCalledWith({
      boardTitle: 'New board',
      startWithKanbanTemplate: true
    });
  });
});
