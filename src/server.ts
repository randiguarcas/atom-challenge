import express, { Express } from "express";
import { taskRoute } from "./routes";

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/tasks", taskRoute);

app.listen(port, () => {
  console.log(`Server running at https://localhost:${port} 🚀`);
});
