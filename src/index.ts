import express, { Router } from 'express';
import { HelloRouter } from './routers';
import { HelloController } from './controllers';
import { HelloService } from './services';
import logger from './lib/logger';
import { config } from './lib';

const app = express();

const helloService = new HelloService();
const helloController = new HelloController({ helloService });
const helloRouter = new HelloRouter({ Router, helloController });

app.use(helloRouter.getRoutes());

app.listen(config.PORT, () => logger.info(`Listening on :${config.PORT}`));
