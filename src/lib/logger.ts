import log4js from 'log4js';
import { config } from './config';

const logger = log4js.getLogger();

logger.level = config.LOG_LEVEL;
logger.debug(`LOG_LEVEL=${config.LOG_LEVEL}`);

export default logger;
