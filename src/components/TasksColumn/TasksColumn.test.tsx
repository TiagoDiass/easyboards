import TasksColumn from './TasksColumn';
import { renderWithTheme } from 'utils/test-utils';

describe('Component: TasksColumn', () => {
  it('should render correctly', () => {
    renderWithTheme(<TasksColumn />);
  });
});
