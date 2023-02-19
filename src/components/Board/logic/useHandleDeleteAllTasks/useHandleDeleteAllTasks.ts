import { Board, Column } from 'types';
type UseHandleDeleteColumnParams = {
  board: Board;
  currentColumn: Column | null;
  setBoard: (board: Board) => void;
  closeDeleteAllTasksConfirmationModal: () => void;
};

export default function useHandleDeleteColumn({
  board,
  currentColumn,
  setBoard,
  closeDeleteAllTasksConfirmationModal
}: UseHandleDeleteColumnParams) {
  return () => {
    if (!currentColumn) return;

    const newColumn: Column = { ...currentColumn, tasks: [] };
    const columnIndex = board.columns.findIndex((column) => column.id === currentColumn.id);

    const newBoard: Board = structuredClone(board);

    newBoard.columns.splice(columnIndex, 1, newColumn);

    setBoard(newBoard);
    closeDeleteAllTasksConfirmationModal();
  };
}
