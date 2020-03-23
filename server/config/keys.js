const isDev = process.env.NODE_ENV !== 'production';

if (isDev) {
  // when we are in development mode
  module.exports = require('./dev');
} else {
  // return the prod keys
  module.exports = require('./prod');
}
