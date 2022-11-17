import { NextFunction, Request, Response } from "express";

function logger(req: Request, res: Response, next: NextFunction) {
  var date = new Date();
  console.log(`${req.method} ${req.url} ${date.toISOString()}`);
  next();
}

export default logger;