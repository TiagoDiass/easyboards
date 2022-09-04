import DeleteBoardConfirmationModal from './DeleteBoardConfirmationModal';
import { renderWithTheme } from 'utils/test-utils';
import { screen, waitFor } from '@testing-library/react';
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
});
