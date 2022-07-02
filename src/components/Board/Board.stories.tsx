import { ComponentMeta, ComponentStory } from '@storybook/react';
import Board from './Board';

export default {
  title: 'Board',
  component: Board
} as ComponentMeta<typeof Board>;

export const Basic: ComponentStory<typeof Board> = (args) => <Board {...args} />;
