import { BOARDS_KEY } from 'constants/local-storage-keys';
import { Board } from 'types';

type UseHandleEditBoardParams = {
  boards: Board[];
  setBoards: (boards: Board[]) => void;
  closeEditBoardModal: () => void;
};

export default function useHandleEditBoard({
  boards,
  setBoards,
  closeEditBoardModal
}: UseHandleEditBoardParams) {
  return (boardId: string, newBoardTitle: string) => {
    const boardIndex = boards.findIndex((b) => b.id === boardId);

    const newBoards: Board[] = structuredClone(boards);

    newBoards[boardIndex].title = newBoardTitle;

    setBoards(newBoards);
    localStorage.setItem(BOARDS_KEY, JSON.stringify(newBoards));
    closeEditBoardModal();
  };
}
