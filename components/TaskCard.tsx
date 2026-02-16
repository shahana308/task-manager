import React from 'react'
import { Task } from '@/lib/types';

const TaskCard = ({ task }: { task: Task }) => {
  return (
    <div className='bg-white p-4 rounded-md shadow-md border border-gray-200 mb-4'>
        <h3 className='text-lg font-bold'>{task.title}</h3>
        <p className='text-sm text-gray-500'>{task.description}</p>
        <p className='text-sm text-gray-500'>{task.priority}</p>
        <p className='text-sm text-gray-500'>{task.status}</p>
        <p className='text-sm text-gray-500'>{task.assignee}</p>
        <p className='text-sm text-gray-500'>{task.dueDate}</p>
        <p className='text-sm text-gray-500'>{task.tags}</p>
    </div>
  )
}

export default TaskCard