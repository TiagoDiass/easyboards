import * as S from './Board.styles';
import { Button, TasksColumn } from 'components';
import { Plus as PlusIcon } from '@styled-icons/feather';
import { Board as BoardType } from 'types';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import useOnDragEnd from 'logic/useOnDragEnd/useOnDragEnd';

type BoardProps = {
  board: BoardType;
  setBoard: (board: BoardType) => void;
};

/**
 * Board component used to display the data of a board (columns and task)
 */
export default function Board({ board, setBoard }: BoardProps) {
  const getNewStateAfterDragEnd = useOnDragEnd();

  const onDragEnd = (result: DropResult) => {
    const newColumns = getNewStateAfterDragEnd(result, board.columns);

    if (!newColumns) return;

    setBoard({
      ...board,
      columns: newColumns
    });
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
                  handleAddTask={function (): void {
                    throw new Error('Function not implemented.');
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
    </S.Wrapper>
  );
}
