'use strict';

// Get process environment or set default environment to development
const ENV = process.env.NODE_ENV || 'development';
const DEFAULT_PORT = 3000;
const DEFAULT_HOSTNAME = 'localhost';

const http = require('http');
const express = require('express');
const config = require('./config');
const app = express();
let server;

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

app.use((err, req, res, next) => {
  res.status(500).json(err);
});

/**
 * Start the app if not loaded by another module
 */
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
