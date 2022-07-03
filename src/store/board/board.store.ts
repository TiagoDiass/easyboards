import { BoardMock } from 'components/Board/Board.mock';
import { INITIAL_BOARD } from 'constants/initial-board';
import { Board, Column } from 'types';
import createStore from 'zustand';

export type BoardStore = {
  state: {
    boards: Board[];
    currentBoard: Board | null;
    currentBoardId: string | null;
  };

  actions: {
    setCurrentBoard: (currentBoard: Board | null) => void;

    addBoard: (board: Board) => void;
    deleteBoard: (boardId: string) => void;
    editBoard: (newBoardName: string) => void;

    updateColumnOnCurrentBoard: (column: Column) => void;
    deleteColumnOnCurrentBoard: (column: Column) => void;
    addColumnOnCurrentBoard: (column: Column) => void;
  };
};

const useBoardStore = createStore<BoardStore>()((set) => {
  const initialState: BoardStore['state'] = {
    boards: [INITIAL_BOARD, BoardMock],
    currentBoard: null,
    currentBoardId: null
  };

  return {
    state: {
      ...initialState
    },

    actions: {
      setCurrentBoard: (currentBoard) =>
        set((store) => ({
          state: {
            ...store.state,
            currentBoard,
            currentBoardId: currentBoard ? currentBoard.id : null
          }
        }))
    }
  } as BoardStore;
});

export default useBoardStore;
