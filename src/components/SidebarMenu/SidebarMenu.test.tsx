import SidebarMenu from './SidebarMenu';
import { renderWithTheme } from 'utils/test-utils';

describe('Component: SidebarMenu', () => {
  it('should render correctly', () => {
    renderWithTheme(<SidebarMenu />);
  });
});
