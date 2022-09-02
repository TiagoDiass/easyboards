import { Draggable } from 'react-beautiful-dnd';
import TasksColumn, { TasksColumnProps } from '../TasksColumn';

type DraggableTasksColumnProps = TasksColumnProps & {
  columnIndex: number;
};

/**
 * Draggable column that holds the task cards
 */
export default function DraggableTasksColumn(props: DraggableTasksColumnProps) {
  return (
    <Draggable draggableId={props.column.id} index={props.columnIndex}>
      {(provided) => <TasksColumn {...props} provided={provided} />}
    </Draggable>
  );
}
