import * as S from './Board.styles';
import { Button, TasksColumn, ConfirmationModal } from 'components';
import { Plus as PlusIcon } from '@styled-icons/feather';
import { Board as BoardType, Column } from 'types';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import useOnDragEnd from 'logic/useOnDragEnd/useOnDragEnd';
import AddTaskModal from './Elements/AddTaskModal/AddTaskModal';
import { useModalState } from 'hooks';
import { useState } from 'react';
import useHandleAddTask from './logic/useHandleAddTask/useHandleAddTask';
import useHandleDeleteTask from './logic/useHandleDeleteTask/useHandleDeleteTask';

type BoardProps = {
  board: BoardType;
  setBoard: (board: BoardType) => void;
};

/**
 * Board component used to display the data of a board (columns and task)
 */
export default function Board({ board, setBoard }: BoardProps) {
  const [isAddTaskModalOpen, openAddTaskModal, closeAddTaskModal] = useModalState();
  const [
    isDeleteTaskConfirmationModalOpen,
    openDeleteTaskConfirmationModal,
    closeDeleteTaskConfirmationModal
  ] = useModalState();
  const [currentColumn, setCurrentColumn] = useState<Column | null>(null);
  const [taskToBeDeletedIndex, setTaskToBeDeletedIndex] = useState<number | null>(null);

  const getNewStateAfterDragEnd = useOnDragEnd();

  const onDragEnd = (result: DropResult) => {
    const newColumns = getNewStateAfterDragEnd(result, board.columns);

    if (!newColumns) return;

    setBoard({
      ...board,
      columns: newColumns
    });
  };

  const handleAddTask = useHandleAddTask({
    board,
    currentColumn,
    setBoard,
    closeAddTaskModal
  });

  const handleDeleteTask = useHandleDeleteTask({
    board,
    currentColumn,
    taskToBeDeletedIndex,
    setBoard,
    closeDeleteTaskConfirmationModal
  });

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
                  handleDeleteTask={(taskIndex) => {
                    setCurrentColumn(column);
                    setTaskToBeDeletedIndex(taskIndex);
                    openDeleteTaskConfirmationModal();
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

      <ConfirmationModal
        title='Delete task'
        content='Are you sure you want to delete this task?'
        cancelButtonProps={{
          children: "No, I'm not sure"
        }}
        confirmButtonProps={{
          color: 'danger',
          children: 'Yes, delete task',
          onClick: handleDeleteTask
        }}
        isOpen={isDeleteTaskConfirmationModalOpen}
        onClose={closeDeleteTaskConfirmationModal}
      />
    </S.Wrapper>
  );
}
