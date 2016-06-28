'use strict';

const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports.init = initPassport;

function initPassport(app) {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, done);
  });

  // load strategies
  require('./strategies/basic').init();
  require('./strategies/bearer').init();
}
