export class HelloService {
  constructor() {
  }

  public async sayHello(target: string): Promise<string> {
    return `Hello, ${target}!`;
  }
}
