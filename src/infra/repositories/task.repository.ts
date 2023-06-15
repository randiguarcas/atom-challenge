import { db } from "../../utils/firebase";
import Task from "../../interfaces/Task";

const getAll = () => {
  return {
    id: 1,
  };
};

const createTask = async (task: Task) => {
  try {
    const taskRef = db.collection("tasks").doc(task.id);
    await taskRef.set({ ...task });

    return task;
  } catch (error) {
    throw error;
  }
};

export default {
  getAll,
  createTask,
};
