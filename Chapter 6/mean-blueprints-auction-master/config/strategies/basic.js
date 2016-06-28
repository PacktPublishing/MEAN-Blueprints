'use strict';

var passport = require('passport');
var BasicStrategy = require('passport-http').BasicStrategy;
var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = buildBasicStrategy;

function buildBasicStrategy() {
  var basic = new BasicStrategy(function(username, password, done) {
    User.authenticate(username, password, function(err, user) {
      if (err) {
        return done(err);
      }

      if (!user) {
        return done(null, false);
      }

      return done(null, user);
    });
  });

  passport.use('basic', basic);
};
