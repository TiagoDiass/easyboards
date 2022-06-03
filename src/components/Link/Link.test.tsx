import Link from './Link';
import { renderWithTheme } from 'utils/test-utils';

describe('Component: Link', () => {
  it('should render correctly', () => {
    renderWithTheme(<Link href='anything' />);
  });
});
