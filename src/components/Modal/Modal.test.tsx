import Modal from './Modal';
import { renderWithTheme } from 'utils/test-utils';

xdescribe('Component: Modal', () => {
  it('should render correctly', () => {
    renderWithTheme(<Modal />);
  });
});
