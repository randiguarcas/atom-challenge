import taskRepository from "../../infra/repositories/task.repository";
import Task from "../../interfaces/Task";
import { TaskImpl } from "../TaskImpl";

const createTask = async (newTask: Task): Promise<Task> => {
  const taskToCreate: Task = new TaskImpl(newTask);
  const task: Task = await taskRepository.createTask(taskToCreate);

  const taskCreated: Task = new TaskImpl(task);
  return taskCreated;
};

export default createTask;
