'use strict';

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('mongoose').model('User');

module.exports.init = initLocalStrategy;

function initLocalStrategy() {
  passport.use('local', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  }, (email, password, done) => {
    User.authenticate(email, password, function(err, user) {
      if (err) {
        return done(err);
      }

      if (!user) {
        return done(null, false, { message: 'Invalid email or password.' });
      }

      return done(null, user);
    });
  }));
}
