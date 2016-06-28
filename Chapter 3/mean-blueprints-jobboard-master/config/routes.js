'use strict';

module.exports.init = initRoutes;

function initRoutes(app) {
  const routesPath = app.get('root') + '/app/routes';

  app.use('/', require(routesPath + '/main'));
  app.use('/auth', require(routesPath + '/auth'));
  app.use('/api', require(routesPath + '/users'));
  app.use('/api', require(routesPath + '/profile'));
  app.use('/api', require(routesPath + '/companies'));
  app.use('/api', require(routesPath + '/jobs'));
};
