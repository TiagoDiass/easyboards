import { Board } from 'types';

export const INITIAL_BOARD: Board = {
  id: 'initial-board-id',
  title: 'Your first board 😄',
  slug: 'first-board',
  columns: [
    {
      id: 'todo-column-id',
      title: 'To do ✏️',
      tasks: [
        {
          id: '481a7c06-e641-483b-bbfe-c4c1fc16faa7',
          content: 'Customize this board or create your own board 🦾'
        },
        {
          id: '615189bb-447e-456f-9b7e-a298c2ce9d40',
          content: 'Be happy managing your tasks 🐶'
        }
      ]
    },
    {
      id: 'doing-column-id',
      title: 'Doing 🔨',
      tasks: [
        {
          id: 'ed28d4a7-1a27-4b33-b3f9-4212c3f4a27d',
          content: 'Using this app for the first time 🥳'
        }
      ]
    },
    {
      id: 'done-column-id',
      title: 'Done ✅',
      tasks: []
    }
  ]
};
