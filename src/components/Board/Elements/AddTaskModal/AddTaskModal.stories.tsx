import { ComponentMeta, ComponentStory } from '@storybook/react';
import AddTaskModal from './AddTaskModal';

export default {
  title: 'AddTaskModal',
  component: AddTaskModal
} as ComponentMeta<typeof AddTaskModal>;

export const Basic: ComponentStory<typeof AddTaskModal> = (args) => <AddTaskModal {...args} />;
