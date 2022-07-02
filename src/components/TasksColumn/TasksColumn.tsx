import * as S from './TasksColumn.styles';

import DropdownMenu from 'components/DropdownMenu/DropdownMenu';
import { Column } from 'types';
import { Pencil as PencilIcon, Trash as TrashIcon } from '@styled-icons/evil';
import { Plus as PlusIcon } from '@styled-icons/feather';
import TaskCard from 'components/TaskCard/TaskCard';

type TasksColumnProps = {
  column: Column;
  handleAddTask: () => void;
  handleDeleteTask: (taskIndex: number) => void;
  handleEditColumn: () => void;
  handleDeleteColumn: () => void;
};

/**
 * Column that holds the task cards
 */
export default function TasksColumn({
  column,
  handleAddTask,
  handleDeleteTask,
  handleEditColumn,
  handleDeleteColumn
}: TasksColumnProps) {
  return (
    <S.Wrapper>
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
            }
          ]}
          ariaLabel='Column related actions'
        />
      </S.Header>

      <S.TaskList role='list' aria-label={`Tasks of the "${column.title}" column`}>
        {column.tasks.map((task, taskIndex) => (
          <TaskCard key={task.id} task={task} onDelete={() => handleDeleteTask(taskIndex)} />
        ))}
      </S.TaskList>
    </S.Wrapper>
  );
}
