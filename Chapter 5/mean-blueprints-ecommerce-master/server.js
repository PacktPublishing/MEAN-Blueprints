'use strict';

// Get process environment or set default environment to development
const ENV = process.env.NODE_ENV || 'development';

const http = require('http');
const express = require('express');
const config = require('./config');
const app = express();
const logger = require('./config/winston').init(app);
const Core = require('./core');
const Auth = require('./apps/auth');
const Shared = require('./apps/shared');
const Api = require('./apps/api');
const Admin = require('./apps/admin');
const Frontstore = require('./apps/frontstore');

let server;

/**
 * Set express (app) variables
 */
app.set('config', config);
app.set('root', __dirname);
app.set('env', ENV);

require('./config/mongoose').init(app);
let core = new Core();

require('./config/passport').init(app);
require('./config/express').init(app);

let auth = new Auth(config, core, app);
let shared = new Shared(config, core, app);
let api = new Api(config, core, app);
let admin = new Admin(config, core, app);
let frontstore = new Frontstore(config, core, app);

app.use((err, req, res, next) => {
  logger.error(err);
  res.status(500).json(err);
});

/**
 * Start the app if not loaded by another module
 */
if (!module.parent) {
  server = http.createServer(app);
  server.listen(config.port || 3000, config.hostname, () => {
    let addr = server.address();
    logger.info('Server is running', {
      app: config.app.name,
      hostname: addr.address,
      port: addr.port,
      environment: ENV.toLowerCase(),
      url: config.baseUrl
    });
  });
}

module.exports = app;
