import express from 'express';
import api from './api/api';
import config from './config/config';
import mongoose from 'mongoose';
import logger from './util/logger';

const app = express();

// db.url is different depending on NODE_ENV
mongoose.connect(config.db.url);
mongoose.Promise = global.Promise;

// setup the app middlware
require('./middleware/appMiddleware')(app);

// setup the api
app.use('/api', api);

// export the app for testing
module.exports = app;
