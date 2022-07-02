import { Board } from 'types';

export const BoardMock: Board = {
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
        },
        {
          id: 'task-10',
          content: 'Deploy backend'
        },
        {
          id: 'task-11',
          content: 'Test app'
        },
        {
          id: 'task-12',
          content: 'Launch app on AppStore'
        },
        {
          id: 'task-13',
          content: 'Have a party, the app has been launched'
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
        },
        {
          id: 'task-5',
          content: 'Design the app (must use Figma)'
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
        },
        {
          id: 'task-2',
          content: 'How are we going to solve those problems'
        },
        {
          id: 'task-1',
          content: 'Create a list with the problems that we want to solve'
        }
      ]
    }
  ]
};
