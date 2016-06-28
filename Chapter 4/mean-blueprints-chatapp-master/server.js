'use strict';

// Get process environment or set default environment to development
const ENV = process.env.NODE_ENV || 'development';
const http = require('http');
const express = require('express');
const config = require('./config');
const app = express();

let server = http.Server(app);

/**
 * Set express (app) variables
 */
app.set('config', config);
app.set('root', __dirname);
app.set('env', ENV);

require('./config/mongoose').init(app);
require('./config/models').init(app);
require('./config/passport').init(app);
require('./config/express').init(app);
require('./config/routes').init(app);

/**
 *  Init chat service
 */
require('./app/services/chat')(app, server);


// Set global error handler
app.use(function(err, req, res, next) {
  console.log(err);
  res.status(500).json(err);
});

// Start the app if not loaded by another module
if (!module.parent) {
  server = http.createServer(app);
  server.listen(
    config.port || DEFAULT_PORT,
    config.hostname || DEFAULT_HOSTNAME,
    () => {
      console.log(`${config.app.name} is running`);
      console.log(`   listening on port: ${config.port}`);
      console.log(`   environment: ${ENV.toLowerCase()}`);
    }
  );
}

module.exports = app;
