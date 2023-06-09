/* eslint-disable @typescript-eslint/no-empty-interface */
interface Base {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date | null;
}
export enum TaskStatus {
  Completed = 'Completed',
  InProgress = 'InProgress',
  ToDo = 'ToDo',
  Paused = 'Paused',
  Canceled = 'Canceled',
}
export enum TaskImportance {
  Important = 'Important',
  Urgent = 'Urgent',
  Necessary = 'Necessary',
  IWouldLike = 'I Would Like',
  Optional = 'Optional',
}
export interface Task extends Base {
  status: TaskStatus;
  importance: TaskImportance;
  seasons?: [{ from: Date, until: Date }];
  timeEstimated?: number;
  objetiveId : Objetive['id'];
}
interface Objetive extends Base {
  tasks: Array<Task['id']>;
  idGoal: Goal['id'];
}
interface Goal extends Base {
  objetives: Array<Objetive['id']>;
  idCategory: Category['id'];
  motivation: string;
}
interface Category extends Base {
  goals: Array<Goal['id']>;
}
/* DTOs */
export interface CreateTaskDTO extends Omit<Task, 'id'> {}
export interface UpdateTask extends Partial<CreateTaskDTO> {}
