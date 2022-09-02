import { Task } from 'types';
import { Draggable } from 'react-beautiful-dnd';
import TaskCard from '../TaskCard';

type DraggableTaskCardProps = {
  task: Task;
  taskIndex: number;
  onDelete: () => void;
};

/**
 * Draggable task card
 */
export default function DraggableTaskCard({ task, taskIndex, onDelete }: DraggableTaskCardProps) {
  return (
    <Draggable draggableId={task.id} index={taskIndex}>
      {(provided, snapshot) => (
        <TaskCard task={task} onDelete={onDelete} provided={provided} snapshot={snapshot} />
      )}
    </Draggable>
  );
}
