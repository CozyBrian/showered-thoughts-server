import express from "express";
import { deleteThought, getAllThoughts, getThought, postThought, updateThought } from "./thoughts.controller";

const thoughtsRouter = express.Router();

thoughtsRouter.get("/", getAllThoughts)
thoughtsRouter.get("/:id", getThought)
thoughtsRouter.post("/", postThought)
thoughtsRouter.put("/", updateThought)
thoughtsRouter.delete("/", deleteThought)

export default thoughtsRouter;