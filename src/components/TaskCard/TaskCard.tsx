import * as S from './TaskCard.styles';
import { Task } from 'types';
import { Trash as TrashIcon } from '@styled-icons/evil';

type TaskCardProps = {
  task: Task;
  onDelete: () => void;
};

/**
 * Card that displays the content of a task and a dropdown with some actions
 */
export default function TaskCard({ task, onDelete }: TaskCardProps) {
  return (
    <S.Wrapper isDragging={false}>
      <span className='content'>{task.content}</span>

      <S.DeleteTaskButton aria-label='Delete task' title='Delete task' onClick={onDelete}>
        <TrashIcon />
      </S.DeleteTaskButton>
    </S.Wrapper>
  );
}
