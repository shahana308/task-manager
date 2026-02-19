import { useDraggable } from '@dnd-kit/react';
import { Task } from '@/lib/types';
import { priorityColorMap } from '@/lib/priorityColors';
import AssigneeAvatar from './Avatar';

const TaskCard = ({ task, border, index }: { task: Task; border: string; index: number }) => {
  const { bg, text } = priorityColorMap[task.priority] || priorityColorMap.default;

  const { ref, isDragging } = useDraggable({
    id: task.id,
    data: { type: 'task', index },
  });

  return (
    <article
      ref={ref}
      className={`
        bg-white p-4 
        rounded-md shadow-md 
        border ${border} mb-4 
        flex flex-col gap-2 
        cursor-grab active:cursor-grabbing
        transition-all duration-200
        hover:scale-[1.02] hover:shadow-md
        ${isDragging ? 'opacity-50' : 'opacity-100'}
      `}
    >
      <header>
        <div className={`${bg} inline-flex w-fit py-1 px-2 rounded-full`}>
          <p className={`${text} text-[11px] font-semibold`}>
            {task.priority.toUpperCase()}
          </p>
        </div>
      </header>
      <p className="text-sm font-medium text-gray-800 leading-snug">
        {task.title}
      </p>
      <footer className="flex justify-between items-center">
        <AssigneeAvatar assignee={task.assignee || { name: 'Unassigned' }} />
        <span className="text-xs text-gray-500">{task.taskCode}</span>
      </footer>
    </article>
  );
};

export default TaskCard;