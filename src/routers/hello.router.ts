import { Router } from 'express';
import { HelloController } from '../controllers';
import { wrapExpressController } from '../lib';

export class HelloRouter {
  private readonly helloController: HelloController;
  private readonly wrapExpressController: typeof wrapExpressController;

  constructor(config: {
    helloController: HelloController,
    wrapExpressController: typeof wrapExpressController,
  }) {
    this.helloController = config.helloController;
    this.wrapExpressController = config.wrapExpressController;
  }

  public mount(router: Router) {
    router.get('/hello/:who?',
        this.wrapExpressController(
            this.helloController.sayHello.bind(this.helloController),
        ));

    return router;
  }
}
