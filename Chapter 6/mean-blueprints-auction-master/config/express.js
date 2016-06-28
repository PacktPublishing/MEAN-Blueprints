'use strict';

const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const expressValidator = require('express-validator');
const session = require('express-session');
const serveStatic = require('serve-static');
const passport = require('passport');
const MongoStore = require('connect-mongo')(session);
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const config = require('./index');
const Logger = require('./winston');
const logger = Logger.logger();

module.exports.init = initExpress;

function initExpress(app) {
  logger.debug('Initializing %s configs', 'Express');

  let env = app.get('env');
  let root = app.get('root');
  let sessionOpts = {
    secret: config.session.secret,
    key: 'skey.sid',
    resave: config.session.resave,
    saveUninitialized: config.session.saveUninitialized
  };

  if (config.proxy.trust) {
    app.enable('trust proxy');
  }

  app.set('view engine', 'html');
  app.engine('html', nunjucks.render);

  app.use(expressValidator());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(methodOverride());

  if (config.logRequests) {
    app.use(morgan('combined', { stream: Logger.stream() }));
  }
  
  app.disable('x-powered-by');

  if (config.session.type === 'mongo') {
    sessionOpts.store = new MongoStore({
      url: config.mongodb.uri
    });
  }

  let sessionMiddleware = session(sessionOpts);
  app.set('sessionMiddleware', sessionMiddleware);

  app.use(sessionMiddleware);
  app.use(passport.initialize());
  app.use(passport.session());

  app.use(function(req, res, next) {
    // a simple object that holds resources for each request
    req.resources = req.resources || {};

    next();
  });

  if (config.serveStatic) {
    app.use(serveStatic(path.join(root, 'public')));
  }
};
