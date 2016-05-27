'use strict';

var mongoose = require('mongoose');
var passwordHelper = require('../helpers/password');
var Schema = mongoose.Schema;
var _ = require('lodash');

var UserSchema = new Schema({
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
  roles: {
    type: [
      {
        type: String,
        enum: ['user', 'admin']
      }
    ],
    default: ['user']
  },
  phoneNumber: {
    type: String
  },
  active: {
    type: Boolean,
    default: false
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
  this.findOne({ email: email }).select('+password +passwordSalt').exec(function(err, user) {
    if (err) {
      return callback(err, null);
    }

    // no user found just return the empty user
    if (!user) {
      return callback(err, user);
    }

    // verify the password with the existing hash from the user
    passwordHelper.verify(password, user.password, user.passwordSalt, function(err, result) {
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
  var me = this;
  var data = _.cloneDeep(opts);

  //hash the password
  passwordHelper.hash(opts.password, function(err, hashedPassword, salt) {
    if (err) {
      return callback(err);
    }

    data.password = hashedPassword;
    data.passwordSalt = salt;

    //create the user
    me.model('User').create(data, function(err, user) {
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
  var me = this;

  me.model('User').findById(me.id).select('password password_salt').exec(function(err, user) {
    if (err) {
      return callback(err, null);
    }

    // no user found just return the empty user
    if (!user) {
      return callback(err, user);
    }

    passwordHelper.verify(password, user.password, user.passwordSalt, function(err, result) {
      if (err) {
        return callback(err, null);
      }

      // if password does not match don't return user
      if (result === false) {
        return callback(err, null);
      }

      // generate the new password and save the user
      passwordHelper.hash(newPassword, function(err, hashedPassword, salt) {
        me.password = hashedPassword;
        me.password_salt = salt;

        me.save(function(err, saved) {
          if (err) {
            return callback(err, null);
          }

          if (callback) {
            return callback(err, saved);
          }
        });
      });
    });
  });
};

// compile User model
module.exports = mongoose.model('User', UserSchema);
