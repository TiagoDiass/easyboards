import { Board, Column } from 'types';
import { v4 as uuid } from 'uuid';

type UseHandleAddColumnParams = {
  board: Board;
  setBoard: (board: Board) => void;
  closeAddColumnModal: () => void;
};

export default function useHandleAddColumn({
  board,
  setBoard,
  closeAddColumnModal
}: UseHandleAddColumnParams) {
  return (columnTitle: string) => {
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
