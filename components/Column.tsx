import React from 'react'
import TaskCard from './TaskCard';
import { useBoardStore } from '@/lib/store';
import { Column as ColumnType } from '@/lib/types';

const Column = ({ title, taskIds }: Omit<ColumnType, 'id'>) => {
  const { tasks } = useBoardStore();
  const columnTasks = taskIds.map((taskId) => tasks[taskId]);

  return (
    <div>
      <h6 className='text-sm text-pastel-gray-dark'>{title.toUpperCase()}</h6>
      <div className='bg-pastel-blue-light rounded-xl p-4 my-2 min-h-full'>
          {columnTasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
      </div>
    </div>
  )
}

export default Column
