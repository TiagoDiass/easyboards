import { ComponentMeta, ComponentStory } from '@storybook/react';
import TaskCard from './TaskCard';

export default {
  title: 'TaskCard',
  component: TaskCard,
  args: {
    task: {
      id: 'fake-uuid',
      content: 'Code signup page'
    }
  },

  argTypes: {
    onDelete: {
      action: 'deletion requested'
    }
  }
} as ComponentMeta<typeof TaskCard>;

export const Basic: ComponentStory<typeof TaskCard> = (args) => (
  <div
    style={{
      width: '300px',
      padding: '6px',
      background: '#EAEAEA',
      display: 'flex',
      flexDirection: 'column'
    }}
  >
    <TaskCard {...args} />
  </div>
);
