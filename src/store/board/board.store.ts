import { Board, PartialBoard } from 'types';
import createStore from 'zustand';

export type BoardStore = {
  state: {
    partialBoards: PartialBoard[];
    boards: Board[];
    currentBoard: Board | null;
  };

  actions: {
    setBoardsAndPartialBoards: (boards: Board[]) => void;
    setCurrentBoard: (currentBoard: Board | null) => void;
    // addBoard: (board: Board) => void;
    // deleteBoard: (boardId: string) => void;
    // editBoard: (newBoardName: string) => void;
    // updateColumnOnCurrentBoard: (column: Column) => void;
    // deleteColumnOnCurrentBoard: (column: Column) => void;
    // addColumnOnCurrentBoard: (column: Column) => void;
  };
};

const useBoardStore = createStore<BoardStore>()((set) => {
  const initialState: BoardStore['state'] = {
    partialBoards: [],
    boards: [],
    currentBoard: null
  };

  return {
    state: {
      ...initialState
    },

    actions: {
      setBoardsAndPartialBoards: (newBoards) => {
        set((store) => ({
          state: {
            ...store.state,
            boards: newBoards,
            partialBoards: newBoards.map((board) => ({
              id: board.id,
              title: board.title,
              slug: board.slug
            }))
          }
        }));
      },

      setCurrentBoard: (currentBoard) =>
        set((store) => ({
          state: {
            ...store.state,
            currentBoard
          }
        }))
    }
  } as BoardStore;
});

export default useBoardStore;
