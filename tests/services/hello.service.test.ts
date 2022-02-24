import { HelloService } from '../../src/services';
import faker from '@faker-js/faker';

describe('HelloService', () => {
  let helloService: HelloService;

  beforeEach(() => {
    helloService = new HelloService();
  });

  describe('sayHello()', () => {
    it('says "hello, ..."', async () => {
      const target = faker.name.firstName();

      const greeting = await helloService.sayHello(target);

      expect(greeting).toEqual(`Hello, ${target}!`);
    });
  });
});
