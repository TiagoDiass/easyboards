import { INITIAL_BOARD } from 'constants/initial-board';
import { Board, Column } from 'types';
import createStore from 'zustand';

export type BoardStore = {
  state: {
    boards: Board[];
    currentBoardId: string | null;
  };

  actions: {
    addBoard: (board: Board) => void;
    deleteBoard: (boardId: string) => void;
    editBoard: (newBoardName: string) => void;

    updateColumnOnCurrentBoard: (column: Column) => void;
    deleteColumnOnCurrentBoard: (column: Column) => void;
    addColumnOnCurrentBoard: (column: Column) => void;
  };
};

const useBoardStore = createStore<BoardStore>()(() => {
  const initialState: BoardStore['state'] = {
    boards: [INITIAL_BOARD],
    currentBoardId: 'initial-board-id'
  };

  return {
    state: {
      ...initialState
    },

    actions: {}
  } as BoardStore;
});

export default useBoardStore;
