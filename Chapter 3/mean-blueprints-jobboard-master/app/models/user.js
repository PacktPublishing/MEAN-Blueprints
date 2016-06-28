'use strict';

const mongoose = require('mongoose');
const passwordHelper = require('../helpers/password');
const Schema = mongoose.Schema;
const _ = require('lodash');
const ProfileBlockSchema = mongoose.model('ProfileBlock').schema;

let UserSchema = new Schema({
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
  profile: {
    type: [ProfileBlockSchema],
    select: false
  },
  roles: {
    type: [
      {
        type: String,
        enum: ['user', 'candidate', 'member', 'owner']
      }
    ],
    default: ['user']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

UserSchema.statics.authenticate = authenticateUser;
UserSchema.statics.register = registerUser;
UserSchema.methods.changePassword = changeUserPassword;

/**
 * Find a user by it's email and checks the password againts the stored hash
 *
 * @param {String} email
 * @param {String password
 * @param {Function} callback
 */
function authenticateUser(email, password, callback) {
  this
  .findOne({ email: email })
  .select('+password +passwordSalt')
  .exec((err, user) => {
    if (err) {
      return callback(err, null);
    }

    // no user found just return the empty user
    if (!user) {
      return callback(err, user);
    }

    // verify the password with the existing hash from the user
    passwordHelper.verify(
      password,
      user.password,
      user.passwordSalt,
      (err, result) => {
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
      }
    );
  });
}

/**
 * Create a new user with the specified properties
 *
 * @param {Object} opts - user data
 * @param {Function} callback
 */
 function registerUser(opts, callback) {
   let data = _.cloneDeep(opts);

   //hash the password
   passwordHelper.hash(opts.password, (err, hashedPassword, salt) => {
     if (err) {
       return callback(err);
     }

     data.password = hashedPassword;
     data.passwordSalt = salt;

     //create the user
     this.model('User').create(data, (err, user) => {
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
 }

/**
 * Create an instance method to change password
 *
 */
 function changeUserPassword(oldPassword, newPassword, callback) {
   this
   .model('User')
   .findById(this.id)
   .select('+password +passwordSalt')
   .exec((err, user) => {
     if (err) {
       return callback(err, null);
     }

     // no user found just return the empty user
     if (!user) {
       return callback(err, user);
     }

     passwordHelper.verify(
       oldPassword,
       user.password,
       user.passwordSalt,
       (err, result) => {
         if (err) {
           return callback(err, null);
         }

         // if password does not match don't return user
         if (result === false) {
           let PassNoMatchError = new Error('Old password does not match.');
           PassNoMatchError.type = 'old_password_does_not_match';
           return callback(PassNoMatchError, null);
         }

         // generate the new password and save the user
         passwordHelper.hash(newPassword, (err, hashedPassword, salt) => {
           this.password = hashedPassword;
           this.passwordSalt = salt;

           this.save((err, saved) => {
             if (err) {
               return callback(err, null);
             }

             if (callback) {
               return callback(null, {
                 success: true,
                 message: 'Password changed successfully.',
                 type: 'password_change_success'
               });
             }
           });
         });
       }
     );
   });
 }

// compile User model
module.exports = mongoose.model('User', UserSchema);
