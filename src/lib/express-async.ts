import { Request, Response } from 'express';
import logger from './logger';

export const wrapAsync = (func: Function) => {
  return (req: Request, res: Response) => {
    Promise.resolve(func(req, res))
        .catch((err: any) => {
          logger.error(err);
          res.status(500).send(err.stack);
        });
  };
};
