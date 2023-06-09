import React from 'react';
import { TaskImportance, TaskStatus } from '../../models';
import { TaskContext } from '../../Contexts/TaskContext';

export default function TodoCreateButton() {
  const { addTask } = React.useContext(TaskContext);
  const defaultTask = {
    title: 'Hacer el almuerzo',
    status: TaskStatus.ToDo,
    importance: TaskImportance.Important,
    description: 'Ir a cocinar las lentejas, ver si tenemos ingredientes, sino ir a comprarlos',
    startDate: new Date(),
    endDate: null,
    objetiveId: 'khfjfjf',
  };

  return <button type="button" className="create-btn" onClick={() => addTask(defaultTask)}>Crear Tarea</button>;
}
