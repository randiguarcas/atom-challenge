import { Timestamp } from "firebase-admin/firestore";
import { v4 as uuidv4 } from "uuid";
import Task, { TaskStatus } from "../interfaces/Task";
import createSlug from "../utils/slugify";
import dayjs from "dayjs";

/**
 * TODO: Consider TaskImpl as a Task Entity or Task Aggregate according to the case
 */

export class TaskImpl {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  createdAt: Timestamp | Date | undefined;
  updatedAt: Timestamp | Date | undefined;
  slugify: string;
  enabled: boolean | undefined;

  constructor(task: Task) {
    this.id = task.id || uuidv4();
    this.title = task.title || "";
    this.description = task.description || "";
    this.status = task.status || TaskStatus.PENDING;
    this.slugify = createSlug(task.title);

    this.createdAt = task.createdAt
      ? this.createTimestamp(task.createdAt)
      : Timestamp.now();

    this.updatedAt = task.createdAt
      ? this.createTimestamp(task.createdAt)
      : Timestamp.now();
    
    this.enabled = task.enabled || true;
  }

  private createTimestamp(timestamp: Timestamp | Date): Date {
    // @ts-ignore: next-line
    return dayjs.unix(timestamp._seconds).toDate();
  }
}
