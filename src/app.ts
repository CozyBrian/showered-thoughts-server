import express, { Request, Response } from "express";
import cors from "cors";
import api from "./routes/api"
import logger from "./middleware/logger";

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);
app.use(express.json());

app.use(logger);

app.use('/v1', api);

export default app;
