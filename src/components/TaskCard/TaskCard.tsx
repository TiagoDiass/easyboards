import * as S from './TaskCard.styles';
import { Task } from 'types';
import { Trash as TrashIcon } from '@styled-icons/evil';
import { DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';

export type TaskCardProps = {
  task: Task;
  onDelete: () => void;
  provided?: DraggableProvided;
  snapshot?: DraggableStateSnapshot;
};

/**
 * Card that displays the content of a task and a dropdown with some actions
 */
export default function TaskCard({ task, onDelete, provided, snapshot }: TaskCardProps) {
  return (
    <S.Wrapper
      role='listitem'
      aria-label='Task card'
      {...provided?.draggableProps}
      {...provided?.dragHandleProps}
      ref={provided?.innerRef}
      isDragging={snapshot?.isDragging || false}
    >
      <span className='content'>{task.content}</span>

      <S.DeleteTaskButton aria-label='Delete task' title='Delete task' onClick={onDelete}>
        <TrashIcon />
      </S.DeleteTaskButton>
    </S.Wrapper>
  );
}
