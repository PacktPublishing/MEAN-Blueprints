'use strict';

const crypto = require('crypto');
const len = 512;
const iterations = 18000;
const digest = 'sha256';

module.exports.hash = hashPassword;
module.exports.verify = verify;

/**
 * Creates a hash based on a salt from a given password
 * if there is no salt a new salt will be generated
 *
 * @param {String} password
 * @param {String} salt - optional
 * @param {Function} callback
 */
function hashPassword(password, salt, callback) {
  if (3 === arguments.length) {
    crypto.pbkdf2(password, salt, iterations, len, digest, (err, derivedKey) => {
      if (err) {
        return callback(err);
      }

      return callback(null, derivedKey.toString('base64'));
    });
  } else {
    callback = salt;
    crypto.randomBytes(len, (err, salt) => {
      if (err) {
        return callback(err);
      }

      salt = salt.toString('base64');
      crypto.pbkdf2(password, salt, iterations, len, digest, (err, derivedKey) => {
        if (err) {
          return callback(err);
        }

        callback(null, derivedKey.toString('base64'), salt);
      });
    });
  }
}

/**
 * Verifies if a password matches a hash by hashing the password
 * with a given salt
 *
 * @param {String} password
 * @param {String} hash
 * @param {String} salt
 * @param {Function} callback
 */
function verify(password, hash, salt, callback) {
  hashPassword(password, salt, (err, hashedPassword) => {
    if (err) {
      return callback(err);
    }

    if (hashedPassword === hash) {
      callback(null, true);
    } else {
      callback(null, false);
    }
  });
}
