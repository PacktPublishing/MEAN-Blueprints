'use strict';

const passport = require('passport');
const BearerStrategy = require('passport-http-bearer').Strategy;
const mongoose = require('mongoose');
const Token = mongoose.model('Token');

module.exports = buildBearerStrategy;

function buildBearerStrategy() {
  const bearer = new BearerStrategy((token, done) => {
    Token
    .findOne({ hash: token })
    .populate('user')
    .exec((err, result) => {
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
