import express, { Router } from 'express';
import { HelloRouter } from './routers';
import { HelloController } from './controllers';
import { HelloService } from './services';
import logger from './lib/logger';
import { config, wrapExpressController } from './lib';
import helmet from 'helmet';

const helloService = new HelloService();
const helloController = new HelloController({ helloService });
const helloRouter = new HelloRouter({ helloController, wrapExpressController: wrapExpressController });

const app = express();

app.use(helmet());
app.use(helloRouter.mount(Router()));

app.listen(config.PORT, () => logger.info(`Listening on :${config.PORT}`));
