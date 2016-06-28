'use strict';

module.exports = {
  port: 3000,
  hostname: '127.0.0.1',
  baseUrl: 'http://localhost:3000',
  mongodb: {
    uri: 'mongodb://localhost/cm_dev_db'
  },
  app: {
    name: 'Contact manager'
  },
  serveStatic: true,
  session: {
    type: 'mongo',                          // store type, default `memory`
    secret: 'someVeRyN1c3S#cr3tHer34U',
    resave: false,                          // save automatically to session store
    saveUninitialized: true                 // saved new sessions
  }
};
