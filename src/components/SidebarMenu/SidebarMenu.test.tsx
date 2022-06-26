import SidebarMenu from './SidebarMenu';
import { renderWithTheme } from 'utils/test-utils';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Component: SidebarMenu', () => {
  it('should render correctly', () => {
    renderWithTheme(<SidebarMenu />);

    expect(screen.getByRole('heading', { name: 'React Trello' })).toBeInTheDocument();
    expect(screen.getByLabelText('Your boards list')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Help' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Settings' })).toBeInTheDocument();
    expect(screen.getByTitle('Collapse sidebar')).toBeInTheDocument();
  });

  it('should handle the collapse/expand of the sidebar correctly', async () => {
    renderWithTheme(<SidebarMenu />);

    expect(screen.getByLabelText('Sidebar menu')).toBeInTheDocument();
    expect(screen.getByTitle('Collapse sidebar')).toBeInTheDocument();

    await userEvent.click(screen.getByTitle('Collapse sidebar'));

    await waitFor(() => {
      expect(screen.queryByLabelText('Sidebar menu')).not.toBeInTheDocument();
      expect(screen.queryByTitle('Collapse sidebar')).not.toBeInTheDocument();
      expect(screen.getByTitle('Expand sidebar')).toBeInTheDocument();
    });

    await userEvent.click(screen.getByTitle('Expand sidebar'));

    await waitFor(() => {
      expect(screen.getByLabelText('Sidebar menu')).toBeInTheDocument();
      expect(screen.getByTitle('Collapse sidebar')).toBeInTheDocument();
      expect(screen.queryByTitle('Expand sidebar')).not.toBeInTheDocument();
    });
  });
});
