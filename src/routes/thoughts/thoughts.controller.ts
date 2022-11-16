import express, { Request, Response } from "express";

export const getAllThoughts = (req: Request, res: Response) => {
  res.send({result: "Success"});
}
export const getThought = () => {}
export const postThought = () => {}
export const updateThought = () => {}
export const deleteThought = () => {}