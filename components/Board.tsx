'use client';

import { DragDropProvider } from '@dnd-kit/react';

import { useBoardStore } from '@/lib/store';
import Column from './Column';
import AddColumn from './AddColumn';

const Board = () => {
  const columns = useBoardStore((state) => state.columns);
  const columnOrder = useBoardStore((state) => state.columnOrder);
  const moveTask = useBoardStore((state) => state.moveTask);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDragEnd = (event: any) => {
    const { operation } = event

    if (!operation || !operation.source || !operation.target) {
      return;
    }

    const taskId = operation.source.id as string;
    const destinationColumnId = operation.target.id as string;

    const index = operation.target.data?.index ?? columns[destinationColumnId].taskIds.length;

    moveTask(taskId, destinationColumnId, index);
  };

  return (
    <DragDropProvider onDragEnd={handleDragEnd}>
      <div className="flex gap-4 h-full overflow-x-auto pb-4">
        {columnOrder.map((columnId) => {
          const column = columns[columnId];
          return (
            <Column
              key={column.id}
              id={column.id}
              title={column.title}
              taskIds={column.taskIds}
            />
          );
        })}
        <AddColumn />
      </div>
    </DragDropProvider>
  );
};

export default Board;