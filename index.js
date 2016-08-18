import config from './server/config/config';
import app from './server/server';
import logger from './server/util/logger';

app.listen(config.port);
logger.log(`listening on http://localhost: ${config.port}`);
