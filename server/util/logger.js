import 'colors';
import config from '../config/config';

// create a noop empy function to disable logger
const noop = () => {};
const consoleLog = config.logging ? console.log.bind(console) : noop;

const logger = {
  log: (...params) => {
    const args = params.map((arg) => {
        if (typeof arg === 'object') {
          const string = JSON.stringify(arg, 2);
          return string.magenta;
        }
        // coerce to string to color
        const strArg = `${arg}`;
        return strArg.magenta;
      }
    );
    consoleLog.apply(console, args);
  },

  error: (...params) => {
    consoleLog.apply(console, params);
  }
};

module.exports = logger;
