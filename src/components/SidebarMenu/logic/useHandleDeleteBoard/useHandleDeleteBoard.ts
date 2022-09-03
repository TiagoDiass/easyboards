import { BOARDS_KEY } from 'constants/local-storage-keys';
import { Board } from 'types';

type UseHandleDeleteBoardParams = {
  boards: Board[];
  setBoards: (boards: Board[]) => void;
  closeDeleteBoardConfirmationModal: () => void;
};

export default function useHandleDeleteBoard({
  boards,
  setBoards,
  closeDeleteBoardConfirmationModal
}: UseHandleDeleteBoardParams) {
  return (boardId: string) => {
    const newBoards = boards.filter((board) => board.id !== boardId);

    setBoards(newBoards);
    localStorage.setItem(BOARDS_KEY, JSON.stringify(newBoards));
    closeDeleteBoardConfirmationModal();
  };
}
