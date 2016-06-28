'use strict';

const _ = require('lodash');
const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');

/**
 *  Module exports
 */
module.exports.register = registerUser;
module.exports.signin = signin;

function signin(req, res, next) {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.status(400).send(info);
    }

    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }

      res.status(200).json(user);
    });
  })(req, res, next);
}

function registerUser(req, res, next) {
  let userData = _.pick(req.body, 'name', 'email', 'password');

  User.register(userData, (err, user) => {
    if (err && (11000 === err.code || 11001 === err.code)) {
      return res.status(400).json({ message: 'E-mail is already in use.' });
    }

    if (err) {
      return next(err);
    }

    // we are going to need a session after the user signs up
    req.logIn(user, err => {
      // just in case :)
      delete user.password;
      delete user.passwordSalt;

      res.json(user);
    });
  });
}
