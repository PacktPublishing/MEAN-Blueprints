'use strict';

const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const serveStatic = require('serve-static');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const passport = require('passport');
const config = require('./index');

module.exports.init = initExpress;

function initExpress(app) {
  const env = app.get('env');
  const root = app.get('root');
  const sessionOpts = {
    secret: config.session.secret,
    key: 'skey.sid',
    resave: config.session.resave,
    saveUninitialized: config.session.saveUninitialized
  };

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.disable('x-powered-by');

  if (config.session.type === 'mongo') {
    sessionOpts.store = new MongoStore({
      url: config.mongodb.uri
    });
  }

  app.use(session(sessionOpts));
  app.use(passport.initialize());
  app.use(passport.session());

  if (config.serveStatic) {
    app.use(serveStatic(path.join(root, 'public')));
  }
}
