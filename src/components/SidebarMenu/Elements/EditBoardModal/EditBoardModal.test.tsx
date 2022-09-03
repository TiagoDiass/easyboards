import EditBoardModal from './EditBoardModal';
import { renderWithTheme } from 'utils/test-utils';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Component: EditBoardModal', () => {
  it('should render correctly', async () => {
    renderWithTheme(
      <EditBoardModal isOpen handleEditBoard={() => {}} currentBoardTitle='iOS App' />
    );

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: 'Edit board' })).toBeInTheDocument(); // modal title
      expect(screen.getByRole('textbox', { name: 'Board title' })).toBeInTheDocument();
      expect(screen.getByRole('textbox', { name: 'Board title' })).toHaveValue('iOS App');
      expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Edit board' })).toBeInTheDocument();
    });
  });

  it('should call onClose when user clicks on Cancel', async () => {
    const onCloseMock = jest.fn();
    renderWithTheme(
      <EditBoardModal
        isOpen
        onClose={onCloseMock}
        currentBoardTitle='iOS App'
        handleEditBoard={() => {}}
      />
    );

    await userEvent.click(screen.getByRole('button', { name: 'Cancel' }));

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('should call handleEditBoard when user clicks on "Edit board" button', async () => {
    const handleEditBoardMock = jest.fn();
    renderWithTheme(
      <EditBoardModal isOpen handleEditBoard={handleEditBoardMock} currentBoardTitle='iOS App' />
    );

    expect(screen.getByRole('button', { name: 'Edit board' })).toBeDisabled();

    await userEvent.clear(screen.getByRole('textbox', { name: 'Board title' }));
    await userEvent.type(screen.getByRole('textbox', { name: 'Board title' }), 'Android App');

    expect(screen.getByRole('button', { name: 'Edit board' })).toBeEnabled();

    await userEvent.click(screen.getByRole('button', { name: 'Edit board' }));

    expect(handleEditBoardMock).toHaveBeenCalledTimes(1);
    expect(handleEditBoardMock).toHaveBeenCalledWith('Android App');
  });
});
