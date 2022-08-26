import { Board, Column } from 'types';

type UseHandleDeleteTaskParams = {
  board: Board;
  currentColumn: Column | null;
  taskToBeDeletedIndex: number | null;
  setBoard: (board: Board) => void;
  closeDeleteTaskConfirmationModal: () => void;
};

export default function useHandleDeleteTask({
  board,
  currentColumn,
  taskToBeDeletedIndex,
  setBoard,
  closeDeleteTaskConfirmationModal
}: UseHandleDeleteTaskParams) {
  return () => {
    if (!currentColumn || taskToBeDeletedIndex === null) return;

    const newColumn: Column = {
      ...currentColumn,
      tasks: [
        ...currentColumn.tasks.filter((t) => t.id !== currentColumn.tasks[taskToBeDeletedIndex].id)
      ]
    };
    const columnIndex = board.columns.findIndex((column) => column.id === currentColumn.id);

    const newBoard: Board = structuredClone(board);

    newBoard.columns.splice(columnIndex, 1, newColumn);

    setBoard(newBoard);
    closeDeleteTaskConfirmationModal();
  };
}
