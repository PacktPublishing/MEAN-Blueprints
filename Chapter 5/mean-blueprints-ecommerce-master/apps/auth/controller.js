'use strict';

const _ = require('lodash');
const passport = require('passport');
const mongoose = require('mongoose');
let User;
let Token;

class AuthController {
  constructor(core) {
    this.core = core;
    User = mongoose.model('User');
    Token = mongoose.model('Token');
  }

  signin(req, res, next) {
    passport.authenticate('local', (err, user, info) => {
      if (err || !user) {
        return res.status(400).json(info);
      }

      req.logIn(user, function(err) {
        if (err) {
          return next(err);
        }

        res.status(200).json(user);
      });
    })(req, res, next);
  }

  signout(req, res, next) {
    req.logout();
    res.redirect('/');
  }

  basic(req, res, next) {
    passport.authenticate('basic', (err, user, info) => {
      if (err) {
        return next(err);
      }

      if (!user) {
        return res.status(400).json({ message: 'Invalid email or password.' });
      }

      Token.generate({ user: user.id }, (err, token) => {
        if (err) {
          return next(err);
        }

        if (!token) {
          return res.status(400).json({ message: 'Invalid email or password.' });
        }

        const result = user.toJSON();
        result.token = _.pick(token, ['hash', 'expiresAt']);

        res.json(result);
      });

    })(req, res, next);
  }

  register(req, res, next) {
    const userData = _.pick(req.body, 'name', 'email', 'password');

    User.register(userData, (err, user) => {
      if (err && (11000 === err.code || 11001 === err.code)) {
        return res.status(400).json({ message: 'E-mail is already in use.' });
      }

      if (err) {
        return next(err);
      }

      // just in case :)
      delete user.password;
      delete user.passwordSalt;

      res.json(user);
    });
  }
}

module.exports = AuthController;
