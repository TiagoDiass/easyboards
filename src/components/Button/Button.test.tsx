import Button from './Button';
import { renderWithTheme } from 'utils/test-utils';

describe('Component: Button', () => {
  it('should render correctly', () => {
    renderWithTheme(<Button />);
  });
});
