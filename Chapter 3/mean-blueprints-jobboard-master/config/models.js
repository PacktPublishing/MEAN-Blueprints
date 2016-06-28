'use strict';

module.exports.init = initModels;

function initModels(app) {
  const modelsPath = app.get('root') + '/app/models/';

  ['profile-block', 'user', 'company', 'job', 'application'].forEach(function(model) {
    require(modelsPath + model);
  });
};
