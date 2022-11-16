import express from "express";
import thoughtsRouter from "./thoughts/thoughts.route";

const api = express.Router();

api.use('/thoughts', thoughtsRouter);

export default api;