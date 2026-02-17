'use client';

import { useBoardStore } from '@/lib/store';
import Column from './Column';

const Board = () => {
  const { columns, tasks } = useBoardStore();

  return (
    <div className="flex w-5/6 gap-4 px-6 py-8 min-h-screen">
     {Object.values(columns).map((column) => (
        <Column key={column.id} id={column.id} title={column.title} taskIds={column.taskIds} />
     ))}
    </div>
  )
}

export default Board