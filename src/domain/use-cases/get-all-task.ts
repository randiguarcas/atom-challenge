import taskRepository from "../../infra/repositories/task.repository";

const getAllTask = async () => {
  const tasks = await taskRepository.getAll();
  return tasks;
};

export default getAllTask;
