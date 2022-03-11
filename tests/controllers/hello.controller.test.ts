import { HelloService } from '../../src/services';
import { HelloController } from '../../src/controllers';
import { Request, Response } from 'express';
import faker from '@faker-js/faker';
import Mock = jest.Mock;

describe('HelloController', () => {
  let helloService: HelloService;
  let helloController: HelloController;

  beforeEach(() => {
    helloService = {} as HelloService;
    helloController = new HelloController({ helloService });
  });

  describe('sayHello()', () => {
    let req: Request;
    let res: Response;

    beforeEach(() => {
      req = {
        params: {},
      } as Request;

      res = {} as Response;
      res.send = jest.fn();
      res.status = jest.fn().mockReturnValueOnce({ send: res.send });

      helloService.sayHello = jest.fn();
    });

    it('greets a guest', async () => {
      await helloController.sayHello(req, res);

      expect(res.status).toHaveBeenCalledTimes(1);
      expect(res.status).toHaveBeenNthCalledWith(1, 200);

      expect(helloService.sayHello).toHaveBeenCalledTimes(1);
      expect(helloService.sayHello).toHaveBeenNthCalledWith(1,
          'guest');
    });

    it('greets a user', async () => {
      const helloServiceSayHello = faker.random.words();
      const who = faker.name.firstName();

      req.params = { who };

      (helloService.sayHello as Mock).mockReturnValueOnce(helloServiceSayHello);

      await helloController.sayHello(req, res);

      expect(helloService.sayHello).toHaveBeenCalledTimes(1);
      expect(helloService.sayHello).toHaveBeenNthCalledWith(1,
          who);

      expect(res.status).toHaveBeenCalledTimes(1);
      expect(res.status).toHaveBeenNthCalledWith(1, 200);

      expect(res.send).toHaveBeenCalledTimes(1);
      expect(res.send).toHaveBeenNthCalledWith(1,
          helloServiceSayHello);
    });
  });
});
