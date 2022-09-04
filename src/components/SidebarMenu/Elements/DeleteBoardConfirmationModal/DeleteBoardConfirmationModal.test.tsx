import DeleteBoardConfirmationModal from './DeleteBoardConfirmationModal';
import { renderWithTheme } from 'utils/test-utils';
import { screen, waitFor } from '@testing-library/react';
import { Board } from 'types';
import userEvent from '@testing-library/user-event';

const BOARD_MOCK: Board = {
  id: 'fake-id',
  slug: 'fake-board-slug',
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

describe('Component: DeleteBoardConfirmationModal', () => {
  it('should render correctly', async () => {
    renderWithTheme(
      <DeleteBoardConfirmationModal isOpen handleDeleteBoard={() => {}} currentBoard={BOARD_MOCK} />
    );

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: 'Delete board' })).toBeInTheDocument(); // modal title
      expect(screen.getByTestId('action-about')).toHaveTextContent(
        'Are you absolutely sure? This action cannot be undone. This will permanently delete the "fake-board" board.'
      );
      expect(
        screen.getByRole('textbox', { name: 'Textfield for the confirmation text' })
      ).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Yes, delete board' })).toBeInTheDocument();
    });
  });

  it('should call onClose when user clicks on Cancel', async () => {
    const onCloseMock = jest.fn();
    renderWithTheme(
      <DeleteBoardConfirmationModal
        isOpen
        onClose={onCloseMock}
        handleDeleteBoard={() => {}}
        currentBoard={BOARD_MOCK}
      />
    );

    await userEvent.click(screen.getByRole('button', { name: 'Cancel' }));

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('should call handleDeleteBoard when user fills in form correctly and click on "Yes, delete board" button', async () => {
    const handleDeleteBoardMock = jest.fn();
    renderWithTheme(
      <DeleteBoardConfirmationModal
        isOpen
        handleDeleteBoard={handleDeleteBoardMock}
        currentBoard={BOARD_MOCK}
      />
    );

    expect(screen.getByRole('button', { name: 'Yes, delete board' })).toBeDisabled();

    await userEvent.type(
      screen.getByRole('textbox', { name: 'Textfield for the confirmation text' }),
      'fake-board-slug'
    );

    expect(screen.getByRole('button', { name: 'Yes, delete board' })).toBeEnabled();

    await userEvent.click(screen.getByRole('button', { name: 'Yes, delete board' }));

    expect(handleDeleteBoardMock).toHaveBeenCalledTimes(1);
  });
});
