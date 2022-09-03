import { BOARDS_KEY } from 'constants/local-storage-keys';
import { Board } from 'types';

type UseHandleDeleteBoardParams = {
  boards: Board[];
  setBoards: (boards: Board[]) => void;
  closeDeleteBoardModal: () => void;
};

export default function useHandleDeleteBoard({
  boards,
  setBoards,
  closeDeleteBoardModal
}: UseHandleDeleteBoardParams) {
  return (boardId: string) => {
    const newBoards = boards.filter((board) => board.id !== boardId);

    setBoards(newBoards);
    localStorage.setItem(BOARDS_KEY, JSON.stringify(newBoards));
    closeDeleteBoardModal();
  };
}
