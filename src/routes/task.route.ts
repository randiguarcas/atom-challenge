import express, { Request, Response, Router } from "express";
import taskController from "../controllers/task.controller";
import Task from "../interfaces/Task";

const router: Router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const response = await taskController.getAllTasksAction();
    res.send(response);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", (req: Request, res: Response) => {
  const id: string = req.params.id;
  res.send("Hello from route" + id);
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const task: Task = req.body;
    const response = await taskController.postTaskAction(task);

    res.status(201).json({ ...response });
  } catch (error) {
    throw error;
  }
});

export default router;
