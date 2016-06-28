'use strict';

/**
 *  Module dependencies
 */
const passport = require('passport');
const mongoose = require('mongoose');

/**
 *  Module exports
 */
module.exports.signin = signinUser;
module.exports.signout = signoutUser;

/**
 *  Uses Passport's local strategy to sign in a user
 */
function signinUser(req, res, next) {
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

function signoutUser(req, res, next) {
  req.logout();
  res.redirect('/');
}
