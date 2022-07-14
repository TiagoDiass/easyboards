import * as S from './TaskCard.styles';
import { Task } from 'types';
import { Trash as TrashIcon } from '@styled-icons/evil';
import { Draggable } from 'react-beautiful-dnd';

type TaskCardProps = {
  task: Task;
  taskIndex: number;
  onDelete: () => void;
};

/**
 * Card that displays the content of a task and a dropdown with some actions
 */
export default function TaskCard({ task, taskIndex, onDelete }: TaskCardProps) {
  return (
    <Draggable draggableId={task.id} index={taskIndex}>
      {(provided, snapshot) => (
        <S.Wrapper
          role='listitem'
          aria-label='Task card'
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <span className='content'>{task.content}</span>

          <S.DeleteTaskButton aria-label='Delete task' title='Delete task' onClick={onDelete}>
            <TrashIcon />
          </S.DeleteTaskButton>
        </S.Wrapper>
      )}
    </Draggable>
  );
}
