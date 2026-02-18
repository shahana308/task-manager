'use client';

import { useBoardStore } from '@/lib/store';
import Column from './Column';

import AddColumn from './AddColumn';

const Board = () => {
  const columns = useBoardStore((state) => state.columns);


  return (
    <div className="flex w-5/6 gap-4 h-full">
      {Object.values(columns).map((column) => (
        <Column key={column.id} id={column.id} title={column.title} taskIds={column.taskIds} />
      ))}

      <AddColumn />
    </div>
  )
}

export default Board