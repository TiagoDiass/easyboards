import * as S from './Board.styles';
import { Button, TasksColumn } from 'components';
import { Plus as PlusIcon } from '@styled-icons/feather';
import { Board as BoardType } from 'types';

type BoardProps = {
  board: BoardType;
};

/**
 * Board component used to display the data of a board (columns and task)
 */
export default function Board({ board }: BoardProps) {
  return (
    <S.Wrapper>
      {board.columns.map((column) => (
        <TasksColumn
          key={column.id}
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

      <Button color='success' icon={<PlusIcon />}>
        Add column
      </Button>
    </S.Wrapper>
  );
}
