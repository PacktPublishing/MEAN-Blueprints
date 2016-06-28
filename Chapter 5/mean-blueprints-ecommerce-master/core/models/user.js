'use strict';

const _ = require('lodash');
const mongoose = require('mongoose');
const passwordHelper = require('../helpers/password');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email:  {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  passwordSalt: {
    type: String,
    required: true,
    select: false
  },
  active: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

/**
 * Find a user by it's email and checks the password againts the stored hash
 *
 * @param {String} email
 * @param {String password
 * @param {Function} callback
 */
UserSchema.statics.authenticate = function(email, password, callback) {
  this.findOne({ email: email }).select('+password +passwordSalt').exec((err, user) => {
    if (err) {
      return callback(err, null);
    }

    // no user found just return the empty user
    if (!user) {
      return callback(err, user);
    }

    // verify the password with the existing hash from the user
    passwordHelper.verify(password, user.password, user.passwordSalt, (err, result) => {
      if (err) {
        return callback(err, null);
      }

      // if password does not match don't return user
      if (result === false) {
        return callback(err, null);
      }

      // remove password and salt from the result
      user.password = undefined;
      user.passwordSalt = undefined;
      // return user if everything is ok
      callback(err, user);
    });
  });
};

/**
 * Create a new user with the specified properties
 *
 * @param {Object} opts - user data
 * @param {Function} callback
 */
UserSchema.statics.register = function(opts, callback) {
  // var self = this;
  let data = _.cloneDeep(opts);

  //hash the password
  passwordHelper.hash(opts.password, (err, hashedPassword, salt) => {
    if (err) {
      return callback(err);
    }

    data.password = hashedPassword;
    data.passwordSalt = salt;

    //create the user
    this.model('User').create(data, function(err, user) {
      if (err) {
        return callback(err, null);
      }

      // remove password and salt from the result
      user.password = undefined;
      user.passwordSalt = undefined;
      // return user if everything is ok
      callback(err, user);
    });
  });
};

/**
 * Create an instance method to change password
 *
 */
UserSchema.methods.changePassword = function(oldPassword, newPassword, callback) {
  // var self = this;

  // get the user from db with password and salt
  this.model('User').findById(this.id).select('+password +passwordSalt').exec((err, user) => {
    if (err) {
      return callback(err, null);
    }

    // no user found just return the empty user
    if (!user) {
      return callback(err, user);
    }

    passwordHelper.verify(oldPassword, user.password, user.passwordSalt, (err, result) => {
      if (err) {
        return callback(err, null);
      }

      // if password does not match don't return user
      if (result === false) {
        let PassNoMatchError = new Error('Old password does not match.');
        PassNoMatchError.type = 'old_password_does_not_match';
        return callback(PassNoMatchError, null);
      }

      // generate the new password and save the changes
      passwordHelper.hash(newPassword, (err, hashedPassword, salt) => {
        this.password = hashedPassword;
        this.passwordSalt = salt;

        this.save(function(err, saved) {
          if (err) {
            return callback(err, null);
          }

          if (callback) {
            return callback(err, {
              success: true,
              message: 'Password changed successfully.',
              type: 'password_change_success'
            });
          }
        });
      });
    });
  });
};

// compile User model
module.exports = mongoose.model('User', UserSchema);
