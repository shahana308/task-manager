export type Priority = "low" | "medium" | "high";

export type Status = "todo" | "in-progress" | "done";

export interface Assignee {
  name: string;
  avatar?: string;
}

export interface Task {
    id: string;
    taskCode: string;
    title: string;
    description: string;
    priority: Priority;
    status: Status;
    assignee?: Assignee;
    dueDate?: string;
    tags?: string[];
    createdAt: string;
}

export interface Column {
  id: Status;
  title: string;
  taskIds: string[];
}

export interface BoardData {
  tasks: Record<string, Task>;
  columns: Record<Status, Column>;
  columnOrder: Status[];
}  