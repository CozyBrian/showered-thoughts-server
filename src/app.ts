import express, { Request, Response } from "express";
import cors from "cors";
import api from "./routes/api"
const nanoid = require("nanoid");

const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);

app.use('/v1', api);

export default app;
