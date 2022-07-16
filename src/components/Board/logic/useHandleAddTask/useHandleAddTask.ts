import { Board, Column, Task } from 'types';
import { v4 as uuid } from 'uuid';

type UseHandleAddTaskParams = {
  board: Board;
  currentColumn: Column | null;
  setBoard: (board: Board) => void;
  closeAddTaskModal: () => void;
};

export default function useHandleAddTask({
  board,
  currentColumn,
  setBoard,
  closeAddTaskModal
}: UseHandleAddTaskParams) {
  return (taskContent: string) => {
    if (!currentColumn) return;

    const newTask: Task = {
      id: uuid(),
      content: taskContent
    };

    const newColumn: Column = { ...currentColumn, tasks: [...currentColumn.tasks, newTask] };
    const columnIndex = board.columns.findIndex((column) => column.id === currentColumn.id);

    const newBoard: Board = structuredClone(board);

    newBoard.columns.splice(columnIndex, 1, newColumn);

    setBoard(newBoard);
    closeAddTaskModal();
  };
}
