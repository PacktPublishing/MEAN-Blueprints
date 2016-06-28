'use strict';

module.exports = {
  port: 3000,
  hostname: "127.0.0.1",
  baseUrl: 'http://localhost:3000',
  mongodb: {
    uri: "mongodb://localhost/es_dev_db"
  },
  app: {
    name: "express starter"
  },
  serveStatic: true,
  session: {
    secret: 'On#MustNotGiv3S#cretsAwAy!2any1',
    type: 'mongodb',                          // store type, default `memory`
    resave: false,                            // save automatically to session store
    saveUninitialized: true                   // save new sessions
  },
  proxy: {
    trust: true
  },
  swig: {
    cache: false
  },
};
