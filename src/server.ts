import express, { Express } from "express";
import { taskRoute, welcomeRoute } from "./routes";
import dotenv from "dotenv";
import cors from "cors";
import swaggerUi from "swagger-ui-express";

const swaggerDocument = require("./swagger.json");
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/", welcomeRoute);
app.use("/tasks", taskRoute);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Server running at https://localhost:${port} 🚀`);
});
