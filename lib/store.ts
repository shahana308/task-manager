
import { create } from "zustand";

import { BoardData, Column, Task } from "./types";

interface BoardStore extends BoardData {
  addColumn: (column: Column) => void;
  addTask: (task: Task) => void;
  moveTask: (taskId: string, status: string, index: number) => void;
}

const initialData: BoardData = {
  tasks: {
    "task-1": {
      id: "task-1",
      taskCode: "T001",
      title: "Setup project structure",
      description: "Initialize Next.js with TypeScript and Tailwind",
      priority: "high",
      status: "done",
      assignee: {
        name: "Shahana",
        avatar: "https://i.pravatar.cc/150?img=3",
      },
      tags: ["setup", "infrastructure"],
      createdAt: "2024-02-16T08:00:00.000Z",
    },
    "task-2": {
      id: "task-2",
      taskCode: "T002",
      title: "Implement drag and drop",
      description: "Add @dnd-kit for Kanban board functionality",
      priority: "high",
      status: "in-progress",
      assignee: {
        name: "Sara Ahmed",
        avatar: "https://i.pravatar.cc/150?img=5",
      },
      tags: ["feature", "ui"],
      createdAt: "2024-02-16T09:00:00.000Z",
    },
    "task-3": {
      id: "task-3",
      taskCode: "T003",
      title: "Add task creation modal",
      description: "Build form with Ant Design components",
      priority: "medium",
      status: "todo",
      assignee: {
        name: "Ahmed Khan",
        avatar: undefined,
      },
      tags: ["feature", "form"],
      createdAt: "2024-02-16T10:00:00.000Z",
    },
    "task-4": {
      id: "task-4",
      taskCode: "T004",
      title: "Implement filters and search",
      description: "Add ability to filter tasks by priority, assignee, and tags",
      priority: "low",
      status: "todo",
      tags: ["enhancement"],
      createdAt: "2024-02-16T11:00:00.000Z",
    },
  },
  columns: {
    todo: {
      id: "todo",
      title: "To Do",
      taskIds: ["task-3", "task-4"],
    },
    "in-progress": {
      id: "in-progress",
      title: "In Progress",
      taskIds: ["task-2"],
    },
    done: {
      id: "done",
      title: "Done",
      taskIds: ["task-1"],
    },
  },
  columnOrder: ["todo", "in-progress", "done"],
};

export const useBoardStore = create<BoardStore>((set) => ({
  ...initialData,

  addColumn: (column: Column) => {
    set((state) => ({
      columns: { ...state.columns, [column.id]: column },
      columnOrder: [...state.columnOrder, column.id],
    }));
  },

  addTask: (taskData) => {
    const newTask: Task = {
      ...taskData,
      id: `task-${Date.now()}`,
      createdAt: new Date().toISOString(),
    };

    set((state) => ({
      tasks: {
        ...state.tasks,
        [newTask.id]: newTask,
      },
      columns: {
        ...state.columns,
        [newTask.status]: {
          ...state.columns[newTask.status],
          taskIds: [...state.columns[newTask.status].taskIds, newTask.id],
        },
      },
    }));
  },

  moveTask: (taskId: string, destinationColumnId: string, index: number) => {
    set((state) => {
      const task = state.tasks[taskId];
      if (!task) return state;

      const sourceColumnId = task.status;

      // if moving within the same column
      if (sourceColumnId === destinationColumnId) {
        const column = state.columns[sourceColumnId];
        const newTaskIds = [...column.taskIds];
        const currentIndex = newTaskIds.indexOf(taskId);

        // extract from current position
        newTaskIds.splice(currentIndex, 1);
        // insert at new position
        newTaskIds.splice(index, 0, taskId);

        return {
          ...state,
          columns: {
            ...state.columns,
            [sourceColumnId]: {
              ...column,
              taskIds: newTaskIds,
            },
          },
        };
      }

      // moving to a different column
      const sourceColumn = state.columns[sourceColumnId];
      const destinationColumn = state.columns[destinationColumnId];

      // extract from source column
      const sourceTaskIds = sourceColumn.taskIds.filter((id) => id !== taskId);

      // insert at destination column at the specified index
      const destinationTaskIds = [...destinationColumn.taskIds];
      destinationTaskIds.splice(index, 0, taskId);

      return {
        ...state,
        tasks: {
          ...state.tasks,
          [taskId]: {
            ...task,
            status: destinationColumnId,
          },
        },
        columns: {
          ...state.columns,
          [sourceColumnId]: {
            ...sourceColumn,
            taskIds: sourceTaskIds,
          },
          [destinationColumnId]: {
            ...destinationColumn,
            taskIds: destinationTaskIds,
          },
        },
      };
    });
  },
}));