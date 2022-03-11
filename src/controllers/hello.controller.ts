import HttpStatusCodes from 'http-status-codes';
import { Request, Response } from 'express';
import { HelloService } from '../services';

export class HelloController {
  private readonly helloService: HelloService;

  constructor(config: { helloService: HelloService }) {
    this.helloService = config.helloService;
  }

  public async sayHello(req: Request, res: Response): Promise<void> {
    const who = req.params.who || 'guest';
    const response = await this.helloService.sayHello(who);

    res.status(HttpStatusCodes.OK).send(response);
  }
}
