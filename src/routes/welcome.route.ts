import express, { Request, Response, Router } from "express";
import welcomeController from "../controllers/welcome.controller";

const router: Router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const response = await welcomeController.welcomeAction();
    res.send(response);
  } catch (error) {
    console.log(error);
  }
});

export default router;
