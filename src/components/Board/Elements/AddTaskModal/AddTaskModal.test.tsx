import AddTaskModal from './AddTaskModal';
import { renderWithTheme } from 'utils/test-utils';

describe('Component: AddTaskModal', () => {
  it('should render correctly', () => {
    renderWithTheme(<AddTaskModal />);
  });
});
