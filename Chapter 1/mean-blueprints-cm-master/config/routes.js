'use strict';

module.exports.init = initRoutes;

function initRoutes(app) {
  let routesPath = app.get('root') + '/app/routes';

  app.use('/auth', require(routesPath + '/auth'));
  app.use('/api', require(routesPath + '/contacts'));
};
