'use strict';

var passport = require('passport');
var BearerStrategy = require('passport-http-bearer').Strategy;
var mongoose = require('mongoose');
var Token = mongoose.model('Token');

module.exports = buildBearerStrategy;

function buildBearerStrategy() {
  var bearer = new BearerStrategy(function(token, done) {
    Token
    .findOne({ value: token })
    .populate('user')
    .exec(function(err, result) {
      if (err) {
        return done(err);
      }

      if (!result) {
        return done(null, false, { message: 'Unauthorized.' });
      }

      if (!result.user) {
        return done(null, false, { message: 'Unauthorized.' });
      }

      return done(null, result.user);
    });
  });

  passport.use('bearer', bearer);
};
