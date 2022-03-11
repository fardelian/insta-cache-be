import dotenv from 'dotenv';

dotenv.config();

const config = {
  PORT: process.env.PORT!,
  LOG_LEVEL: process.env.LOG_LEVEL!,
};

const missingConfig = Object.keys(config)
    // @ts-ignore
    .filter((configName) => config[configName] === undefined);

if (missingConfig.length) {
  throw new Error(`Thw following environment variables are missing:\n\n${missingConfig.join('\n')}`);
}

export { config };
