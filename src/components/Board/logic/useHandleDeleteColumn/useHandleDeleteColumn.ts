import { Board, Column } from 'types';

type UseHandleDeleteColumnParams = {
  board: Board;
  currentColumn: Column | null;
  setBoard: (board: Board) => void;
  closeDeleteColumnConfirmationModal: () => void;
};

export default function useHandleDeleteColumn({
  board,
  currentColumn,
  setBoard,
  closeDeleteColumnConfirmationModal
}: UseHandleDeleteColumnParams) {
  return () => {
    if (!currentColumn) return;

    const newBoard: Board = {
      ...board,
      columns: board.columns.filter((column) => column.id !== currentColumn.id)
    };

    setBoard(newBoard);

    closeDeleteColumnConfirmationModal();
  };
}
