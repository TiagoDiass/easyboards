import { Board, Column } from 'types';
import { v4 as uuid } from 'uuid';

type UseHandleAddColumnParams = {
  board: Board;
  currentColumn: Column | null;
  setBoard: (board: Board) => void;
  closeAddColumnModal: () => void;
};

export default function useHandleAddColumn({
  board,
  currentColumn,
  setBoard,
  closeAddColumnModal
}: UseHandleAddColumnParams) {
  return (columnTitle: string) => {
    if (!currentColumn) return;

    const newColumn: Column = {
      id: uuid(),
      title: columnTitle,
      tasks: []
    };

    const newBoard: Board = structuredClone(board);

    newBoard.columns.push(newColumn);

    setBoard(newBoard);
    closeAddColumnModal();
  };
}
