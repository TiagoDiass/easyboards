import Board from './Board';
import { renderWithTheme } from 'utils/test-utils';
import { Board as BoardType } from 'types';
import { screen } from '@testing-library/react';

const BoardMock: BoardType = {
  id: 'fake-board',
  title: 'iOS App 📱',
  slug: 'ios-app',
  columns: [
    {
      id: 'todo-column-id',
      title: 'To do ✏️',
      tasks: [
        {
          id: 'task-8',
          content: 'Estimate stories'
        },
        {
          id: 'task-9',
          content: 'Start coding'
        }
      ]
    },
    {
      id: 'in-progress-column-id',
      title: 'In progress 🔨',
      tasks: [
        {
          id: 'task-7',
          content: 'Create stories for the app development'
        },
        {
          id: 'task-6',
          content: 'Create stories for the backend development'
        }
      ]
    },
    {
      id: 'done-column-id',
      title: 'Done ✅',
      tasks: [
        {
          id: 'task-4',
          content:
            'Create a diagram to check if the features can solve them, and also to check the flow of the user using the features'
        },
        {
          id: 'task-3',
          content: 'Create list with the features that our app will have'
        }
      ]
    }
  ]
};

describe.skip('Component: Board', () => {
  it('should render correctly', () => {
    renderWithTheme(<Board board={BoardMock} />);

    expect(screen.getAllByLabelText('Tasks column')).toHaveLength(3);
    expect(screen.getAllByLabelText('Task card')).toHaveLength(6);
    expect(screen.getByRole('button', { name: 'Add column' })).toBeInTheDocument();
  });
});
