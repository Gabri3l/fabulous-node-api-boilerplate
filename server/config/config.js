const config = {
  dev: 'development',
  test: 'testing',
  prod: 'production',
  port: process.env.PORT || 8080
};

process.env.NODE_ENV = process.env.NODE_ENV || config.dev;
config.env = process.env.NODE_ENV;

// dynamically requiring the config based on environment
let envConfig = require(`./${config.env}`);

module.exports = Object.assign(config, envConfig);
