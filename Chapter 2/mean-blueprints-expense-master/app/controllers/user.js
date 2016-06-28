'use strict';

const _ = require('lodash');
const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports.register = function registerUser(req, res, next) {
  var data = _.pick(req.body, ['email', 'password', 'name']);
  User.register(data, function(err, user) {
    if (err) {
      return next(err);
    }

    res.json(user);
  });
};
