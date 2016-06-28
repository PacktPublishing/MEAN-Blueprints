'use strict';

const _ = require('lodash');
const passport = require('passport');
const mongoose = require('mongoose');
const Token = mongoose.model('Token');

module.exports.basic = basicAuthentication;
module.exports.getAuthUser = getAuthUser;

function basicAuthentication(req, res, next) {
  passport.authenticate('basic', (err, user, info) => {
    if (err || !user) {
      return res.status(400).send({ message: 'Invalid email or password.' });
    }

    Token.generate({
      user: user.id
    }, (err, token) => {
      if (err || !token) {
        return res.status(400).send({ message: 'Invalid email or password.' });
      }

      var result = user.toJSON();
      result.token = _.pick(token, ['hash', 'expiresAt']);

      res.json(result);
    });

  })(req, res, next);
}

function getAuthUser(req, res, next) {
  if (!req.user) {
    res.status(401).json({ message: 'Unauthorized.' });
  }

  res.json(req.user);
}
