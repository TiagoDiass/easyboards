import BoardPage from './BoardPage';
import { renderWithTheme } from 'utils/test-utils';

describe.skip('Component: BoardPage', () => {
  it('should render correctly', () => {
    renderWithTheme(
      <BoardPage
        boardSlug={''}
        toggleTheme={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
  });
});
