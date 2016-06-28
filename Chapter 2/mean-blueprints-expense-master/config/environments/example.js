'use strict';

module.exports = {
  port: 3000,
  hostname: 'localhost',
  baseUrl: 'http://localhost:3000',
  mongodb: {
    uri: 'mongodb://localhost/expense_dev_db'
  },
  app: {
    name: 'Expense tracker'
  },
  serveStatic: true,
  session: {
    type: 'mongo',                          // store type, default `memory`
    secret: 'someVeRyN1c3S#cr3tHer34U',
    resave: false,                          // save automatically to session store
    saveUninitialized: true                 // saved new sessions
  }
};
