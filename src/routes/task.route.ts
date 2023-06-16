import express, { Request, Response, Router } from "express";
import taskController from "../controllers/task.controller";
import Task from "../interfaces/Task";

const router: Router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const response = await taskController.getAllTasksAction();
    res.send(response);
  } catch (error) {
    console.error("Error fetching task:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const task: Task = req.body;
    const response = await taskController.postTaskAction(task);

    res.status(201).json({ ...response });
  } catch (error) {
    console.error("Error fetching task:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;

    const response = await taskController.getTasksAction(id);
    if (!response) {
      res.status(404).send("Task not found");
      return;
    }

    res.status(200).json({ ...response });
  } catch (error) {
    console.error("Error fetching task:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  try {
    const task: Task = req.body;
    const id: string = req.params.id;

    const response = await taskController.putTaskAction(id, task);
    if (!response) {
      res.status(404).send("Task not found");
      return;
    }

    res.status(200).json({ ...response });
  } catch (error) {
    console.error("Error fetching task:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const task: Task = req.body;
    const id: string = req.params.id;

    const response = await taskController.deleteTaskAction(id, task);
    if (!response) {
      res.status(404).send("Task not found");
      return;
    }

    res.status(200).json({ delete: true });
  } catch (error) {
    console.error("Error fetching task:", error);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
