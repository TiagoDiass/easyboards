import SidebarMenu from './SidebarMenu';
import { renderWithTheme } from 'utils/test-utils';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const renderComponent = () => {
  renderWithTheme(
    <SidebarMenu
      boardsList={[
        {
          id: 'board-1-id',
          title: 'Cool project',
          slug: 'cool-project'
        },
        {
          id: 'board-2-id',
          title: 'Work',
          slug: 'work'
        },
        {
          id: 'board-3-id',
          title: 'iOS App',
          slug: 'ios-app'
        }
      ]}
    />
  );
};

const getBoardLink = (name: string) => screen.getByRole('link', { name });

describe('Component: SidebarMenu', () => {
  it('should render correctly', () => {
    renderComponent();

    expect(screen.getByRole('heading', { name: 'React Trello' })).toBeInTheDocument();
    expect(screen.getByLabelText('Your boards list')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Help' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Settings' })).toBeInTheDocument();
    expect(screen.getByTitle('Collapse sidebar')).toBeInTheDocument();

    expect(getBoardLink('Cool project')).toBeInTheDocument();
    expect(getBoardLink('Work')).toBeInTheDocument();
    expect(getBoardLink('iOS App')).toBeInTheDocument();
  });

  it('should handle the collapse/expand of the sidebar correctly', async () => {
    renderComponent();

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
