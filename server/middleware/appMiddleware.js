import bodyParser from 'body-parser';

// setup global middleware here
module.exports = (app) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
};
