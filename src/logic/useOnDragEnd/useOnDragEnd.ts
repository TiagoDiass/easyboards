import { DropResult } from 'react-beautiful-dnd';
import { Column } from 'types';

export default function useOnDragEnd() {
  const onDragEnd = (result: DropResult, columns: Column[]) => {
    const { source, destination, type } = result;

    // user dropped the element in a non-droppable place
    if (!destination) return;

    // user dropped the element in its original position
    if (source.droppableId === destination.droppableId && source.index === destination.index)
      return;

    if (type === 'COLUMN') {
      const movedColumn = { ...columns[source.index] };

      const newColumns = [...columns];

      newColumns.splice(source.index, 1);
      newColumns.splice(destination.index, 0, movedColumn);

      return newColumns;
    }

    if (type === 'TASK') {
      const isSameColumn = source.droppableId === destination.droppableId;

      if (isSameColumn) {
        const columnIndex = columns.findIndex((column) => column.id === destination.droppableId);

        const column = { ...columns[columnIndex] };
        const movedTask = column.tasks[source.index];

        const newTasks = [...column.tasks];
        newTasks.splice(source.index, 1);
        newTasks.splice(destination.index, 0, movedTask);

        const newColumn: Column = {
          ...column,
          tasks: newTasks
        };

        const newColumns = [...columns];
        newColumns.splice(columnIndex, 1, newColumn);

        return newColumns;
      } else {
        const sourceColumnIndex = columns.findIndex((column) => column.id === source.droppableId);
        const destinationColumnIndex = columns.findIndex(
          (column) => column.id === destination.droppableId
        );

        const sourceColumn = { ...columns[sourceColumnIndex] };
        const destinationColumn = { ...columns[destinationColumnIndex] };

        const movedTask = { ...sourceColumn.tasks[source.index] };

        const newSourceColumnTasks = [...sourceColumn.tasks];
        newSourceColumnTasks.splice(source.index, 1);

        const newDestinationColumnTasks = [...destinationColumn.tasks];
        newDestinationColumnTasks.splice(destination.index, 0, movedTask);

        const newColumns = [...columns];
        newColumns.splice(sourceColumnIndex, 1, {
          ...sourceColumn,
          tasks: newSourceColumnTasks
        });
        newColumns.splice(destinationColumnIndex, 1, {
          ...destinationColumn,
          tasks: newDestinationColumnTasks
        });

        return newColumns;
      }
    }

    return columns;
  };

  return onDragEnd;
}
