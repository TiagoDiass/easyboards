import { BOARDS_KEY } from 'constants/local-storage-keys';
import { useRouter } from 'next/router';
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
  const router = useRouter();

  return (boardId: string) => {
    const newBoards = boards.filter((board) => board.id !== boardId);
    const boardToBeDeleted = boards.find((board) => board.id === boardId);

    if (!boardToBeDeleted) return;

    const isCurrentBoardTheBoardToBeDeleted = router.asPath === `/boards/${boardToBeDeleted.slug}`;

    if (isCurrentBoardTheBoardToBeDeleted) {
      router.push('/');
    }

    setBoards(newBoards);
    localStorage.setItem(BOARDS_KEY, JSON.stringify(newBoards));
    closeDeleteBoardConfirmationModal();
  };
}
