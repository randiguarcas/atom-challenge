import Task from "../interfaces/Task";
import getAllTasks from "../domain/use-cases/get-all-task";
import createTask from "../domain/use-cases/create-task";
import getTask from "../domain/use-cases/get-task";
import updateTask from "../domain/use-cases/update-task";
import deleteTask from "../domain/use-cases/delete-task";

const getAllTasksAction = async (): Promise<Task[]> => {
  return getAllTasks();
};

const postTaskAction = async (task: Task): Promise<Task> => {
  const newTask: Task = await createTask(task);

  return newTask;
};

const putTaskAction = async (id: string, task: Task): Promise<Task | null> => {
  const newTask: Task | null = await updateTask(id, task);
  return newTask;
};

const getTasksAction = async (id: string): Promise<Task | null> => {
  const task: Task | null = await getTask(id);

  return task;
};

const deleteTaskAction = async (id: string, task: Task): Promise<Task | null> => {
  const newTask: Task | null = await deleteTask(id);
  return newTask;
};


export default {
  getAllTasksAction,
  postTaskAction,
  getTasksAction,
  putTaskAction,
  deleteTaskAction
};
