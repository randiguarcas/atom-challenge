import Task from "../../interfaces/Task";
import taskRepository from "../../infra/repositories/task.repository";
import { TaskImpl } from "../TaskImpl";

const getAllTask = async () => {
  const tasks: Task[] = await taskRepository.getAll();
  const allTask = tasks.map((task: Task) => new TaskImpl(task));

  return allTask;
};

export default getAllTask;
