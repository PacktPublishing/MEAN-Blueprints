'use strict';

const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const serveStatic = require('serve-static');
const session = require('express-session');
const passport = require('passport');
const MongoStore = require('connect-mongo')(session);
const config = require('./index');

module.exports.init = initExpress;

function initExpress(app) {
  const root = app.get('root');
  const sessionOpts = {
    secret: config.session.secret,
    key: 'skey.sid',
    resave: config.session.resave,
    saveUninitialized: config.session.saveUninitialized
  };

  //common express configs
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

  app.use(function(req, res, next) {
    res.locals.app = config.app;

    next();
  });

  // always load static files if dev env
  if (config.serveStatic) {
    app.use(serveStatic(path.join(root, 'public')));
  }
};
