import DropdownMenu from './DropdownMenu';
import { renderWithTheme } from 'utils/test-utils';
import { Pencil as PencilIcon } from '@styled-icons/evil';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Component: DropdownMenu', () => {
  it('should render items correctly', async () => {
    renderWithTheme(
      <DropdownMenu
        items={[
          {
            icon: <PencilIcon data-testid='pencil-icon' />,
            text: 'Edit task',
            onClick: () => alert('EDIT TASK')
          },
          {
            text: 'Delete task',
            onClick: () => alert('DELETE TASK')
          }
        ]}
        ariaLabel='Task related actions'
      />
    );

    const dropdownContentWrapper = screen.getByLabelText('Task related actions');

    expect(dropdownContentWrapper).toHaveAttribute('aria-hidden', 'true');
    expect(dropdownContentWrapper).toHaveStyleRule('opacity', '0');
    expect(dropdownContentWrapper).not.toBeVisible();

    await userEvent.click(screen.getByRole('button', { name: 'Open dropdown' }));

    await waitFor(() => {
      expect(dropdownContentWrapper).toHaveAttribute('aria-hidden', 'false');
      expect(dropdownContentWrapper).toHaveStyleRule('opacity', '1');
      expect(dropdownContentWrapper).toBeVisible();
    });

    expect(screen.getAllByRole('listitem')).toHaveLength(2);
    expect(screen.getByTestId('pencil-icon')).toBeInTheDocument();
    expect(screen.getByText('Edit task')).toBeInTheDocument();
    expect(screen.getByText('Delete task')).toBeInTheDocument();
  });

  it('should call the onClick function of an item and then close the dropdown when user clicks on an item', async () => {
    const onClickMock = jest.fn();

    renderWithTheme(
      <DropdownMenu
        items={[
          {
            text: 'Delete task',
            onClick: onClickMock
          }
        ]}
        ariaLabel='Task related actions'
      />
    );

    await userEvent.click(screen.getByRole('button', { name: 'Open dropdown' }));

    await waitFor(() => {
      expect(screen.getByLabelText('Task related actions')).toBeVisible();
    });

    await userEvent.click(screen.getByText('Delete task'));

    await waitFor(() => {
      expect(onClickMock).toHaveBeenCalledTimes(1);
      expect(screen.getByLabelText('Task related actions')).not.toBeVisible();
    });
  });

  it('should close the menu when user focus on another element', async () => {
    renderWithTheme(
      <div>
        <button>Just a button to get the focus</button>

        <DropdownMenu
          items={[{ text: 'Option 1' }, { text: 'Option 2' }, { text: 'Option 3' }]}
          ariaLabel='Options'
        />
      </div>
    );

    await userEvent.click(screen.getByRole('button', { name: 'Open dropdown' }));

    await waitFor(() => {
      expect(screen.getByLabelText('Options')).toBeVisible();
    });

    await userEvent.click(screen.getByRole('button', { name: /Just a button/ }));

    await waitFor(() => {
      expect(screen.getByLabelText('Options')).not.toBeVisible();
    });
  });
});
