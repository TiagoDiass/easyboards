import * as S from './Board.styles';
import { Button, TasksColumn } from 'components';
import { Plus as PlusIcon } from '@styled-icons/feather';
import { Board as BoardType, Column, Task } from 'types';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import useOnDragEnd from 'logic/useOnDragEnd/useOnDragEnd';
import AddTaskModal from './Elements/AddTaskModal/AddTaskModal';
import { useModalState } from 'hooks';
import { v4 as uuid } from 'uuid';
import { useState } from 'react';

type BoardProps = {
  board: BoardType;
  setBoard: (board: BoardType) => void;
};

/**
 * Board component used to display the data of a board (columns and task)
 */
export default function Board({ board, setBoard }: BoardProps) {
  const [isAddTaskModalOpen, openAddTaskModal, closeAddTaskModal] = useModalState();
  const [currentColumn, setCurrentColumn] = useState<Column | null>(null);

  const getNewStateAfterDragEnd = useOnDragEnd();

  const onDragEnd = (result: DropResult) => {
    const newColumns = getNewStateAfterDragEnd(result, board.columns);

    if (!newColumns) return;

    setBoard({
      ...board,
      columns: newColumns
    });
  };

  const handleAddTask = (taskContent: string) => {
    console.log('vou adicionar essa task');
    console.log(taskContent);

    console.log('nessa coluna');
    console.log(currentColumn);

    if (!currentColumn) return alert('Ops, something went wrong, please refresh the page.');

    const newTask: Task = {
      id: uuid(),
      content: taskContent
    };

    const newColumn: Column = { ...currentColumn, tasks: [...currentColumn.tasks, newTask] };
    const columnIndex = board.columns.findIndex((column) => column.id === currentColumn.id);

    const newBoard: BoardType = structuredClone(board);

    newBoard.columns.splice(columnIndex, 1, newColumn);

    setBoard(newBoard);
    closeAddTaskModal();
  };

  return (
    <S.Wrapper>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId={board.id} type='COLUMN' direction='horizontal'>
          {(provided) => (
            <S.ColumnsWrapper {...provided.droppableProps} ref={provided.innerRef}>
              {board.columns.map((column, index) => (
                <TasksColumn
                  key={column.id}
                  columnIndex={index}
                  column={column}
                  handleAddTask={() => {
                    setCurrentColumn(column);
                    openAddTaskModal();
                  }}
                  handleDeleteTask={function (): void {
                    throw new Error('Function not implemented.');
                  }}
                  handleEditColumn={function (): void {
                    throw new Error('Function not implemented.');
                  }}
                  handleDeleteColumn={function (): void {
                    throw new Error('Function not implemented.');
                  }}
                />
              ))}

              {provided.placeholder}
            </S.ColumnsWrapper>
          )}
        </Droppable>
      </DragDropContext>

      <Button color='success' icon={<PlusIcon />}>
        Add column
      </Button>

      {/*
        Doing this conditional to force the component to re-render everytime this state changes.
        Without this conditional, the modal keeps state even though the user closes the modal and open it again
       */}
      {isAddTaskModalOpen && (
        <AddTaskModal
          isOpen={isAddTaskModalOpen}
          onClose={closeAddTaskModal}
          handleAddTask={handleAddTask}
        />
      )}
    </S.Wrapper>
  );
}
