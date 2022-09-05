import { ComponentMeta, ComponentStory } from '@storybook/react';
import { INITIAL_BOARD } from 'constants/initial-board';
import Board from './Board';
import { BoardMock } from './Board.mock';

export default {
  title: 'Board',
  component: Board,

  argTypes: {
    board: {
      type: 'symbol'
    },
    setBoard: {
      type: 'function'
    }
  },

  args: {
    board: BoardMock,
    setBoard: () => {}
  }
} as ComponentMeta<typeof Board>;

export const Basic: ComponentStory<typeof Board> = (args) => <Board {...args} />;

export const InitialBoard: ComponentStory<typeof Board> = (args) => (
  <Board {...args} board={INITIAL_BOARD} />
);
