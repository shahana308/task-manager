'use client';

import { DragDropProvider } from '@dnd-kit/react';

import { useBoardStore } from '@/lib/store';
import Column from './Column';
import AddColumn from './AddColumn';

const Board = () => {
  const columns = useBoardStore((state) => state.columns);
  const columnOrder = useBoardStore((state) => state.columnOrder);
  const moveTask = useBoardStore((state) => state.moveTask);
  const tasks = useBoardStore((state) => state.tasks);
  const searchQuery = useBoardStore((state) => state.searchQuery);

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const matchesSearch = (taskId: string) => {
    if (!normalizedQuery) return true;
    const task = tasks[taskId];
    if (!task) return false;

    const haystack = [
      task.taskCode,
      task.title,
      task.description,
      task.assignee?.name ?? '',
      ...(task.tags ?? []),
    ]
      .join(' ')
      .toLowerCase();

    return haystack.includes(normalizedQuery);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDragEnd = (event: any) => {
    if (normalizedQuery) return;

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
              taskIds={column.taskIds.filter(matchesSearch)}
            />
          );
        })}
        <AddColumn />
      </div>
    </DragDropProvider>
  );
};

export default Board;