'use strict';

module.exports.init = initModels;

function initModels(app) {
  const modelsPath = app.get('root') + '/app/models/';

  ['user', 'token', 'category', 'expense'].forEach((model) => {
    require(modelsPath + model);
  });
}
