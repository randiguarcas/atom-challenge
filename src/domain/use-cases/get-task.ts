import Task from "../../interfaces/Task";
import taskRepository from "../../infra/repositories/task.repository";
import { TaskImpl } from "../TaskImpl";

const getTask = async (id: string) => {
  const task: Task | null = await taskRepository.getTask(id);
  if (!task) return null;

  return new TaskImpl(task);
};

export default getTask;
