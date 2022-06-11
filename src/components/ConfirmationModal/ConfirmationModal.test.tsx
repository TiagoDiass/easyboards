import ConfirmationModal from './ConfirmationModal';
import { renderWithTheme } from 'utils/test-utils';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Component: ConfirmationModal', () => {
  it('should render correctly and close when click on cancel button', async () => {
    const onCloseMock = jest.fn();

    renderWithTheme(
      <ConfirmationModal
        isOpen
        onClose={onCloseMock}
        title='Are you sure?'
        content="You won't be able to revert this action"
        cancelButtonProps={{
          children: "No, I'm not sure"
        }}
        confirmButtonProps={{
          color: 'danger',
          children: 'Yes, delete location'
        }}
      />
    );

    expect(screen.getByRole('heading', { name: 'Are you sure?' })).toBeInTheDocument();
    expect(screen.getByText("You won't be able to revert this action")).toBeInTheDocument();
    expect(screen.getByRole('button', { name: "No, I'm not sure" })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Yes, delete location' })).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: "No, I'm not sure" }));

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
