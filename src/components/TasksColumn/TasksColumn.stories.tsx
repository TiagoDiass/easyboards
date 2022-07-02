import { ComponentMeta, ComponentStory } from '@storybook/react';
import TasksColumn from './TasksColumn';

export default {
  title: 'TasksColumn',
  component: TasksColumn
} as ComponentMeta<typeof TasksColumn>;

export const Basic: ComponentStory<typeof TasksColumn> = (args) => <TasksColumn {...args} />;
