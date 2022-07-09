import { INITIAL_BOARD } from 'constants/initial-board';
import { BOARDS_KEY } from 'constants/local-storage-keys';
import { useCallback } from 'react';
import useBoardStore from 'store/board/board.store';
import { Board } from 'types';

/**
 * Hook to be used on the initialization of the app
 * It will handle the logic of checking if there are boards in the storage, otherwise it will set the initial board
 */
export default function useOnAppInit() {
  const setBoardsAndPartialBoards = useBoardStore(
    (store) => store.actions.setBoardsAndPartialBoards
  );

  return useCallback(() => {
    const boardsInStorage = localStorage.getItem(BOARDS_KEY);

    if (boardsInStorage) {
      const boards: Board[] = JSON.parse(boardsInStorage);
      setBoardsAndPartialBoards(boards);
    } else {
      setBoardsAndPartialBoards([INITIAL_BOARD]);
      localStorage.setItem(BOARDS_KEY, JSON.stringify([INITIAL_BOARD]));
    }
  }, [setBoardsAndPartialBoards]);
}
