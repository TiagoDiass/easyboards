import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DragDropContext } from 'react-beautiful-dnd';
import TasksColumn from './TasksColumn';

export default {
  title: 'TasksColumn',
  component: TasksColumn,
  argTypes: {
    handleAddTask: {
      action: 'add task requested'
    },

    handleDeleteTask: {
      action: 'delete task requested'
    },

    handleEditColumn: {
      action: 'edit column requested'
    },

    handleDeleteColumn: {
      action: 'delete column requested'
    },

    handleDeleteAllTasks: {
      action: 'delete all tasks from a specific column requested'
    },

    column: {
      type: 'symbol'
    }
  },

  args: {
    column: {
      id: 'fake-column-id',
      title: 'In progress 🔨',
      tasks: [
        { id: 'task-1', content: 'Develop signup page' },
        { id: 'task-2', content: 'Document how to test signup page' },
        { id: 'task-3', content: 'Study how to use the new forms library' },
        { id: 'task-4', content: 'Create documents for the work presentation' },
        { id: 'task-5', content: 'Develop the logout feature' },
        {
          id: 'task-6',
          content:
            'Test a card with a really huge text because the card appearance should look good even with a big text'
        }
      ]
    }
  }
} as ComponentMeta<typeof TasksColumn>;

export const Basic: ComponentStory<typeof TasksColumn> = (args) => (
  <div style={{ padding: 6, backgroundColor: '#eaeaea', width: 'min-content' }}>
    <DragDropContext onDragEnd={() => {}}>
      <TasksColumn {...args} />
    </DragDropContext>
  </div>
);
