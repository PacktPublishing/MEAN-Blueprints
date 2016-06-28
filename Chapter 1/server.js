'use strict';

// Get environment or set default environment to development
var ENV = process.env.NODE_ENV || 'development';

var http = require('http');
var express = require('express');
var config = require('./config');
var app = express();
var server;

// Set express variables
app.set('config', config);
app.set('root', __dirname);
app.set('env', ENV);

require('./config/mongoose').init(app);

['user', 'contact'].forEach(function(model) {
  require('./app/models/' + model);
});

require('./config/passport').init(app);

// Initialize every config
require('./config/express').init(app);

// Start the app if not loaded by another module
if (!module.parent) {
  server = http.createServer(app);
  server.listen(config.port || 3000);
  console.log('%s is running, listening on port: %s, environment: %s', config.app.name, config.port, ENV.toLowerCase());
}

module.exports = app;
