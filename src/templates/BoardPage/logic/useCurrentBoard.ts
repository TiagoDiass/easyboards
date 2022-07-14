import { BOARDS_KEY } from 'constants/local-storage-keys';
import useBoardStore from 'store/board/board.store';
import { Board } from 'types';

type UseCurrentBoardParams = {
  boardSlug: string;
};

type UseCurrentBoardResult = [Board | null, (board: Board) => void];

export default function useCurrentBoard({
  boardSlug
}: UseCurrentBoardParams): UseCurrentBoardResult {
  const boards = useBoardStore((store) => store.state.boards);
  const setBoardsAndPartialBoards = useBoardStore(
    (store) => store.actions.setBoardsAndPartialBoards
  );
  const currentBoard = boards.find((board) => board.slug === boardSlug);

  const setBoard = (board: Board) => {
    const currentBoardIndex = boards.findIndex((b) => b.id === board.id);
    const newBoards = [...boards];

    newBoards.splice(currentBoardIndex, 1, board);

    setBoardsAndPartialBoards(newBoards);
    localStorage.setItem(BOARDS_KEY, JSON.stringify(newBoards));
  };

  return [currentBoard || null, setBoard];
}
