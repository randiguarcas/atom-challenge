import taskRepository from "../../infra/repositories/task.repository";
import Task from "../../interfaces/Task";
import { TaskImpl } from "../TaskImpl";
import getTask from "./get-task";

const updateTask = async (
  id: string,
  updateTask: Task
): Promise<Task | null> => {
  const taskStored: Task | null = await getTask(id);

  if (!taskStored) return null;

  const taskToUpdate: Task = new TaskImpl({
    ...updateTask,
    id: taskStored.id,
  });

  const task: Task = await taskRepository.updateTask(taskToUpdate);

  const taskCreated: Task = new TaskImpl(task);
  return taskCreated;
};

export default updateTask;
