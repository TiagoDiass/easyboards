import Board from './Board';
import { renderWithTheme } from 'utils/test-utils';

describe('Component: Board', () => {
  it('should render correctly', () => {
    renderWithTheme(<Board />);
  });
});
