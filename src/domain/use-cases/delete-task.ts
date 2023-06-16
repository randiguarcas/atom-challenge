import { Timestamp } from "firebase-admin/firestore";
import taskRepository from "../../infra/repositories/task.repository";
import Task from "../../interfaces/Task";
import { TaskImpl } from "../TaskImpl";
import getTask from "./get-task";

const deleteTask = async (id: string): Promise<Task | null> => {
  const taskStored: Task | null = await getTask(id);

  if (!taskStored) return null;

  const taskToUpdate: Task = new TaskImpl(taskStored);

  const task: Task = await taskRepository.updateTask({
    ...taskToUpdate,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
    enabled: false,
  });

  const taskDeleted: Task = new TaskImpl(task);
  return taskDeleted;
};

export default deleteTask;
