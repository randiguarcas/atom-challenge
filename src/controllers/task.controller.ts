import Task from "../interfaces/Task";
import getAllTasks from "../domain/use-cases/get-all-task";
import createTask from "../domain/use-cases/create-task";

const getAllTasksAction = async () => {
  return getAllTasks();
};

const postTaskAction = async (task: Task): Promise<Task> => {
  const newTask: Task = await createTask(task);
  
  return newTask;
};

export default {
  getAllTasksAction,
  postTaskAction,
};
