import { db } from "../../utils/firebase";
import Task from "../../interfaces/Task";

const getAll = async () => {
  let promiseTasks: any[] = [];

  const snapshot = await db
    .collection("tasks")
    .where("enabled", "==", true)
    .get();

  snapshot.forEach((doc) => promiseTasks.push(doc.data()));

  const tasks = await Promise.all(promiseTasks);
  return tasks;
};

const createTask = async (task: Task) => {
  const taskRef = db.collection("tasks").doc(task.id);
  await taskRef.set({ ...task });

  return task;
};

const getTask = async (id: string) => {
  const taskRef = db.collection("tasks").doc(id);
  const taskSnapshot = await taskRef.get();

  if (!taskSnapshot.exists) {
    return null;
  }

  const task: Task = taskSnapshot.data() as Task;
  if (!task.enabled) {
    return null;
  }

  return task;
};

const updateTask = async (task: Task) => {
  const docRef = db.collection("tasks").doc(task.id);
  await docRef.set({ ...task }, { merge: true });

  return task;
};

export default {
  getAll,
  createTask,
  getTask,
  updateTask,
};
