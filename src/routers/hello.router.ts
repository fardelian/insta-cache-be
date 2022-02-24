import { Router } from 'express';
import { HelloController } from '../controllers';
import { wrapAsync } from '../lib';

export class HelloRouter {
  private readonly helloController: HelloController;
  private readonly Router: typeof Router;

  constructor(config: { helloController: HelloController, Router: typeof Router }) {
    this.helloController = config.helloController;
    this.Router = Router;
  }

  public getRoutes(): Router {
    const router = this.Router();

    router.get('/hello/:who?',
        wrapAsync(this.helloController.sayHello.bind(this.helloController)));

    return router;
  }
}
