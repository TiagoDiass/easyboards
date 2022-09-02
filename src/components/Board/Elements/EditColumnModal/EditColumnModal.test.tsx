import EditColumnModal from './EditColumnModal';
import { renderWithTheme } from 'utils/test-utils';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Component: EditColumnModal', () => {
  it('should render correctly', async () => {
    renderWithTheme(
      <EditColumnModal isOpen handleEditColumn={() => {}} currentColumnTitle='In progress' />
    );

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: 'Edit column' })).toBeInTheDocument(); // modal title
      expect(screen.getByRole('textbox', { name: 'Column title' })).toBeInTheDocument();
      expect(screen.getByRole('textbox', { name: 'Column title' })).toHaveValue('In progress');
      expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Edit column' })).toBeInTheDocument();
    });
  });

  it('should call onClose when user clicks on Cancel', async () => {
    const onCloseMock = jest.fn();
    renderWithTheme(
      <EditColumnModal
        isOpen
        onClose={onCloseMock}
        currentColumnTitle='In progress'
        handleEditColumn={() => {}}
      />
    );

    await userEvent.click(screen.getByRole('button', { name: 'Cancel' }));

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('should call handleEditColumn when user clicks on "Edit column" button', async () => {
    const handleEditColumnMock = jest.fn();
    renderWithTheme(
      <EditColumnModal
        isOpen
        handleEditColumn={handleEditColumnMock}
        currentColumnTitle='In progress'
      />
    );

    expect(screen.getByRole('button', { name: 'Edit column' })).toBeDisabled();

    await userEvent.clear(screen.getByRole('textbox', { name: 'Column title' }));
    await userEvent.type(screen.getByRole('textbox', { name: 'Column title' }), 'Backlog');

    expect(screen.getByRole('button', { name: 'Edit column' })).toBeEnabled();

    await userEvent.click(screen.getByRole('button', { name: 'Edit column' }));

    expect(handleEditColumnMock).toHaveBeenCalledTimes(1);
    expect(handleEditColumnMock).toHaveBeenCalledWith('Backlog');
  });
});
