'use strict';

const passport = require('passport');
const mongoose = require('mongoose');
const logger = require('./winston').logger();
const User = mongoose.model('User');

module.exports.init = initPassport;

function initPassport(app) {
  logger.debug('Initializing %s configs', 'Passport');

  passport.serializeUser((user, done) => {
    /**
     *  Serialize the whole user, only put non-sensitive user data
     */
    done(null, user);

    /**
     *  You could only save the user's `id`
     */
    //done(null, user.id);
  });

  passport.deserializeUser((user, done) => {
    /**
     *  If you stored only the user's `id` in the session,
     *  you need to fetch the user from the DB
     */
    //User.findById(id, done);

    done(null, user);
  });

  /**
   *  load strategies
   */
  require('./strategies/local')();
  require('./strategies/basic')();
  require('./strategies/bearer')();
};
