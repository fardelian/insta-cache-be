import { HelloRouter } from '../../src/routers';
import { HelloController } from '../../src/controllers';
import express, { Router } from 'express';
import { wrapExpressController } from '../../src/lib';
import { faker } from '@faker-js/faker';
import Mock = jest.Mock;

jest.mock('express');
jest.mock('../../src/lib');

describe('HelloRouter', () => {
  let helloRouter: HelloRouter;
  let helloController: HelloController;
  let router: Router;

  beforeEach(() => {
    router = {} as Router;
    router.get = jest.fn();
    (express.Router as Mock).mockReturnValueOnce(router);

    helloController = {} as HelloController;
    helloController.sayHello = jest.fn();

    helloRouter = new HelloRouter({ helloController, wrapExpressController });
  });

  describe('getRoutes()', () => {
    it('sets up the /hello routes', () => {
      const controller = () => faker.random.words();
      (wrapExpressController as Mock).mockReturnValueOnce(controller);

      const response = helloRouter.mount(router);

      expect(response).toBe(router);
      expect(router.get).toHaveBeenCalledTimes(1);
      expect(router.get).toHaveBeenNthCalledWith(1,
          '/hello/:who?',
          controller,
      );
    });
  });
});
