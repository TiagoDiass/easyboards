import { ComponentMeta, ComponentStory } from '@storybook/react';
import Board from './Board';
import { BoardMock } from './Board.mock';

export default {
  title: 'Board',
  component: Board,

  argTypes: {
    board: {
      type: 'symbol'
    }
  },

  args: {
    board: BoardMock
  }
} as ComponentMeta<typeof Board>;

export const Basic: ComponentStory<typeof Board> = (args) => <Board {...args} />;
