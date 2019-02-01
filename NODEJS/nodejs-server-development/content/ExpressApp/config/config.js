const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'expressapp'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/expressapp-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'expressapp'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/expressapp-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'expressapp'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/expressapp-production'
  }
};

module.exports = config[env];
