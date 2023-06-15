import { Timestamp } from "firebase-admin/firestore";

export type CustomTimestamp = {
  _seconds: number;
  _miliseconds: number;
};

export enum TaskStatus {
  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
}

interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  createdAt?: Timestamp | Date | undefined;
  updatedAt?: Timestamp | Date | undefined;
}

export default Task;
