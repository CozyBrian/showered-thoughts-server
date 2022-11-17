import { Request, Response } from "express";
const nanoid = require('nanoid');

import { thought } from "../../@types";
import pool from "../../services/postgres";

export const getAllThoughts = (req: Request, res: Response) => {
  pool.query(`SELECT * FROM thoughts`, (err: any , result: any) => {
    if (err) {
      console.log(err);
      return res.status(401).send({
        error: 'SERVER_ERROR'
      });
    }

    return res.send(result.rows);
  });

  pool.end;
}

export const getThought = (req: Request, res: Response) => {
  const id = req.params.id;
  pool.query(`SELECT * FROM thoughts WHERE id='${id}'`, (err: any , result: any) => {
    if (err) {
      console.log(err);
      return res.status(401).send({
        error: 'SERVER_ERROR'
      });
    }

    return res.send(result.rows[0]);
  });

  pool.end;
}

export const postThought = (req: Request, res: Response) => {
  const id = nanoid();
  const thought: thought = req.body;
  const content = () => {
    if (thought.content.includes("'")) {
      return thought.content.replace("'", "''");
    } else {
      return thought.content;
    }
  }
  
  pool.query(`INSERT INTO thoughts (id, author, content) VALUES ( '${id}', '${thought.author}', '${content()}' )`, (err: any , result: any) => {
    if (err) {
      console.log(err);
      return res.status(401).send({
        error: 'SERVER_ERROR'
      });
    }

    return res.status(201).send({
      status: 'SUCCESS',
      result: {
        ...thought,
        id: id,
      }
    });
  });

  pool.end;
}

export const updateThought = (req: Request, res: Response) => {
  const id = req.params.id;
  const thought: thought = req.body;
  const content = () => {
    if (thought.content.includes("'")) {
      return thought.content.replace("'", "''");
    } else {
      return thought.content;
    }
  }
  pool.query(`UPDATE public.thoughts SET author='${thought.author}', content='${content()}' WHERE id='${id}'`, (err: any , result: any) => {
    if (err) {
      console.log(err);
      return res.status(401).send({
        error: 'SERVER_ERROR'
      });
    }
  
    return res.status(200).send({
      status: 'SUCCESS',
      result: {
        ...thought,
        id: id,
      }
    });
  });
  
  pool.end;
}

export const deleteThought = (req: Request, res: Response) => {
  const id = req.params.id;
  pool.query(`DELETE FROM public.thoughts WHERE id='${id}'`, (err: any , result: any) => {
    if (err) {
      console.log(err);
      return res.status(401).send({
        error: 'SERVER_ERROR'
      });
    }
  
    return res.status(200).send({
      status: 'SUCCESS',
      result: {
        id
      }
    });
  });
  
  pool.end;
}