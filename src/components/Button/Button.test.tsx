import Button from './Button';
import { renderWithTheme } from 'utils/test-utils';

describe('Component: Button', () => {
  it('should render correctly', () => {
    renderWithTheme(<Button />);
  });

  it.todo('should render correctly with primary color');
  it.todo('should render correctly with secondary color');
  it.todo('should render correctly with success color');
  it.todo('should render correctly with danger color');
  it.todo('should render correctly when is a fullWidth button');
});
