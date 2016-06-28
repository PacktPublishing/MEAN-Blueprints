'use strict';

module.exports.init = initModels;

function initModels(app) {
  let modelsPath = app.get('root') + '/app/models/';

  ['user', 'contact'].forEach(function(model) {
    require(modelsPath + model);
  });
};
