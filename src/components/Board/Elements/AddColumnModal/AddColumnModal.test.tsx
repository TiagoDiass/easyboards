import AddColumnModal from './AddColumnModal';
import { renderWithTheme } from 'utils/test-utils';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Component: AddColumnModal', () => {
  it('should render correctly', () => {
    renderWithTheme(<AddColumnModal isOpen handleAddColumn={() => {}} />);

    expect(screen.getByRole('heading', { name: 'Add column' })).toBeInTheDocument(); // modal title
    expect(screen.getByRole('textbox', { name: 'Column title' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Add column' })).toBeInTheDocument();
  });

  it('should call onClose when user clicks on Cancel', async () => {
    const onCloseMock = jest.fn();
    renderWithTheme(<AddColumnModal isOpen onClose={onCloseMock} handleAddColumn={() => {}} />);

    await userEvent.click(screen.getByRole('button', { name: 'Cancel' }));

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('should call handleAddColumn when user clicks on "Add column" button', async () => {
    const handleAddColumnMock = jest.fn();
    renderWithTheme(<AddColumnModal isOpen handleAddColumn={handleAddColumnMock} />);

    expect(screen.getByRole('button', { name: 'Add column' })).toBeDisabled();

    await userEvent.type(screen.getByRole('textbox', { name: 'Column title' }), 'In progress');

    expect(screen.getByRole('button', { name: 'Add column' })).toBeEnabled();

    await userEvent.click(screen.getByRole('button', { name: 'Add column' }));

    expect(handleAddColumnMock).toHaveBeenCalledTimes(1);
    expect(handleAddColumnMock).toHaveBeenCalledWith('In progress');
  });
});
