'use strict';

// Get process environment or set default environment to development
const ENV = process.env.NODE_ENV || 'development';

const http = require('http');
const express = require('express');
const config = require('./config');
const app = express();
const logger = require('./config/winston').init(app);
const server = http.Server(app);
// var server;

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

let Auctioneer = require('./app/services/auctioneer');
let auctioneer = new Auctioneer(app, server);

app.get('/api/status', (req, res, next) => {
  res.json({ message: 'API is running.' });
});

app.use((err, req, res, next) => {
  logger.error(err);
  res.status(500).json(err);
});

/**
 * Start the app if not loaded by another module
 */
if (!module.parent) {
  // server = http.createServer(app);
  server.listen(config.port || 3000, config.hostname, () => {
    let addr = server.address();
    // console.info('---');
    // console.info('%s is running.', config.app.name);
    // console.info('Hostname: %s', addr.address);
    // console.info('Port: %s', addr.port);
    // console.info('Environment: %s', ENV.toLowerCase());
    // console.info('Access: %s', config.baseUrl);
    //console.info('---');
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
