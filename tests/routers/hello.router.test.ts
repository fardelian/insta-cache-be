import { HelloRouter } from '../../src/routers';
import { HelloController } from '../../src/controllers';
import express, { Router } from 'express';

jest.mock('express');

describe('HelloRouter', () => {
  let helloRouter: HelloRouter;
  let helloController: HelloController;
  let router: Router;

  beforeEach(() => {
    router = {
      get: jest.fn(),
    } as any;
    express.Router = jest.fn(() => router) as any;

    helloController = {} as HelloController;
    helloController.sayHello = jest.fn();

    helloRouter = new HelloRouter({ helloController, Router: express.Router });
  });

  describe('getRoutes()', () => {
    it('sets up the Hello routes', () => {
      helloRouter.getRoutes();

      expect(router.get).toHaveBeenCalledTimes(1);
      expect(router.get).toHaveBeenNthCalledWith(1, '/hello/:who?', expect.any(Function)); // ¯\_(ツ)_/¯
    });
  });
});
