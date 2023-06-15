import express, { Express, Request, Response } from "express";
import { taskRoute, welcomeRoute } from "./routes";
import dotenv from "dotenv";

dotenv.config();
const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/", welcomeRoute);
app.use("/tasks", taskRoute);

app.listen(port, () => {
  console.log(`Server running at https://localhost:${port} 🚀`);
});
