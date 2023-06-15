import { db } from "../../utils/firebase";
import Task from "../../interfaces/Task";

const getAll = async () => {
  let promiseTasks: any[] = [];
  const snapshot = await db.collection("tasks").get();
  snapshot.forEach((doc) => promiseTasks.push(doc.data()));
  
  const tasks = await Promise.all(promiseTasks);
  return tasks;
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
