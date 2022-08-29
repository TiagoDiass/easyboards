import { Board, Column } from 'types';

type UseHandleEditColumnParams = {
  board: Board;
  currentColumn: Column | null;
  setBoard: (board: Board) => void;
  closeEditColumnModal: () => void;
};

export default function useHandleEditColumn({
  board,
  currentColumn,
  setBoard,
  closeEditColumnModal
}: UseHandleEditColumnParams) {
  return (newColumnTitle: string) => {
    if (!currentColumn) return;

    const newColumn: Column = { ...currentColumn, title: newColumnTitle };
    const columnIndex = board.columns.findIndex((column) => column.id === currentColumn.id);

    const newBoard: Board = structuredClone(board);

    newBoard.columns.splice(columnIndex, 1, newColumn);

    setBoard(newBoard);
    closeEditColumnModal();
  };
}
