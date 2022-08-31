import Modal from './Modal';
import { renderWithTheme } from 'utils/test-utils';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Component: Modal', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(
      <Modal title='Modal Title' isOpen>
        <Modal.Content>
          <h1>My Content</h1>
        </Modal.Content>

        <Modal.Footer>
          <h1>Footer Content</h1>
        </Modal.Footer>
      </Modal>
    );

    expect(screen.getByLabelText('Modal with title "Modal Title"')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Modal Title' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'My Content' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Footer Content' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Close modal' })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should call onClose when user clicks on close modal button', async () => {
    const onCloseMock = jest.fn();

    renderWithTheme(
      <Modal title='Modal Title' isOpen onClose={onCloseMock}>
        <Modal.Content>
          <h1>My Content</h1>
        </Modal.Content>
      </Modal>
    );

    await userEvent.click(screen.getByRole('button', { name: 'Close modal' }));

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
