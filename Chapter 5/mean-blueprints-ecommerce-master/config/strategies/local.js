'use strict';

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = buildLocalStrategy;

function buildLocalStrategy() {
  var local = new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  }, function(email, password, done) {
    User.authenticate(email, password, (err, user) => {
      if (err) {
        return done(err);
      }

      if (!user) {
        return done(null, false, { message: 'Invalid email or password.' });
      }

      return done(null, user);
    });
  });

  passport.use('local', local);
};
