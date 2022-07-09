import { BoardMock } from 'components/Board/Board.mock';
import { INITIAL_BOARD } from 'constants/initial-board';
import { PartialBoard } from 'types';
import createStore from 'zustand';

export type BoardStore = {
  state: {
    partialBoards: PartialBoard[];
    // currentBoard: Board | null;
    // currentBoardId: string | null;
  };

  actions: {
    // setCurrentBoard: (currentBoard: Board | null) => void;
    // addBoard: (board: Board) => void;
    // deleteBoard: (boardId: string) => void;
    // editBoard: (newBoardName: string) => void;
    // updateColumnOnCurrentBoard: (column: Column) => void;
    // deleteColumnOnCurrentBoard: (column: Column) => void;
    // addColumnOnCurrentBoard: (column: Column) => void;
  };
};

const useBoardStore = createStore<BoardStore>()(() => {
  const initialState: BoardStore['state'] = {
    partialBoards: [INITIAL_BOARD, BoardMock]
  };

  return {
    state: {
      ...initialState
    }
  } as BoardStore;
});

export default useBoardStore;
