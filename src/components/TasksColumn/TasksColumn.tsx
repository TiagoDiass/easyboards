import * as S from './TasksColumn.styles';

import DropdownMenu from 'components/DropdownMenu/DropdownMenu';
import { Column } from 'types';
import { Pencil as PencilIcon, Trash as TrashIcon } from '@styled-icons/evil';
import { Plus as PlusIcon } from '@styled-icons/feather';
import { Broom as ClearAllIcon } from '@styled-icons/fluentui-system-filled';
import { TaskCard } from 'components';
import { DraggableProvided, Droppable } from 'react-beautiful-dnd';

export type TasksColumnProps = {
  column: Column;
  handleAddTask: () => void;
  handleDeleteTask: (taskIndex: number) => void;
  handleEditColumn: () => void;
  handleDeleteColumn: () => void;
  handleDeleteAllTasks: () => void;
  provided?: DraggableProvided;
};

/**
 * Column that holds the task cards
 */
export default function TasksColumn({
  column,
  handleAddTask,
  handleDeleteTask,
  handleEditColumn,
  handleDeleteColumn,
  handleDeleteAllTasks,
  provided
}: TasksColumnProps) {
  return (
    <S.Wrapper
      aria-label='Tasks column'
      {...provided?.draggableProps}
      {...provided?.dragHandleProps}
      ref={provided?.innerRef}
    >
      <S.Header>
        <h4 className='title'>{column.title}</h4>

        <DropdownMenu
          items={[
            {
              icon: <PlusIcon />,
              text: 'Add task',
              onClick: handleAddTask
            },
            {
              icon: <PencilIcon />,
              text: 'Edit column',
              onClick: handleEditColumn
            },
            {
              icon: <TrashIcon />,
              text: 'Delete column',
              onClick: handleDeleteColumn
            },
            {
              icon: <ClearAllIcon />,
              text: 'Delete all tasks',
              onClick: handleDeleteAllTasks
            }
          ]}
          ariaLabel='Column related actions'
        />
      </S.Header>

      <Droppable droppableId={column.id} type='TASK'>
        {(provided) => (
          <S.TaskList
            role='list'
            aria-label={`Tasks of the "${column.title}" column`}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {column.tasks.map((task, taskIndex) => (
              <TaskCard
                key={task.id}
                task={task}
                taskIndex={taskIndex}
                onDelete={() => handleDeleteTask(taskIndex)}
              />
            ))}

            {provided.placeholder}
          </S.TaskList>
        )}
      </Droppable>
    </S.Wrapper>
  );
}
