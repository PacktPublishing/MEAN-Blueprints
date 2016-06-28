'use strict';

var passport = require('passport');

module.exports.bearer = function bearerAuthentication(req, res, next) {
  return passport.authenticate('bearer', { session: false });
};
