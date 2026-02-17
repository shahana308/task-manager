import React from 'react'
import TaskCard from './TaskCard';
import { useBoardStore } from '@/lib/store';
import { Column as ColumnType } from '@/lib/types';
import { columnColorMap } from '@/lib/columnColors';

const Column = ({ id, title, taskIds }: ColumnType) => {
  const { tasks } = useBoardStore();
  const columnTasks = taskIds.map((taskId) => tasks[taskId]);

  const { bg, dot, border } = columnColorMap[id] || columnColorMap.default;

  return (
    <section aria-label={title}>
      <div className="flex items-center gap-2 px-1 mb-2">
        <span
          className={`${dot} inline-block w-2.5 h-2.5 rounded-full`}
        />
        <p className="text-xs font-semibold text-gray-500">
          {title.toUpperCase()}
        </p>
        <span className="ml-auto text-xs text-gray-400 font-medium px-2 py-0.2 bg-gray-100">
          {columnTasks.length}
        </span>
      </div>
      <div className={`${bg} rounded-xl p-4 my-2 min-h-full`}>
        {columnTasks.map((task) => (
          <TaskCard key={task.id} task={task} border={border} />
        ))}
      </div>
    </section>
  )
}

export default Column
