'use strict';

const _ = require('lodash');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const Bidder = mongoose.model('Bidder');
const ObjectId = mongoose.Types.ObjectId;
const Users = [
  { _id: new ObjectId("56bf99687c9a8b283a53e68c"), name: 'Robert Onodi', email: 'robert.onodi@me.com', password: 'pass1234', createdAt: new Date() }
];

module.exports = buildLocalStrategy;

function buildLocalStrategy() {
  var local = new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  }, function(email, password, done) {
    _.find(Users, (user) => {
      if (user.email === email) {
        if (user.password !== password) {
          return done(null, false, { message: 'Invalid email or password.' });
        }
      } else {
        return done(null, false, { message: 'Invalid email or password.' });
      }

      let final = Object.assign({}, user);
      delete final.password;

      Bidder.findOne({ profileId: final._id }, (err, bidder) => {
        if (err) {
          return done(err);
        }

        if (bidder) {
          return done(null, bidder);
        }

        Bidder.create({
          profileId: final._id,
          additionalData: final
        }, (err, newBidder) => {
          if (err) {
            return done(err);
          }

          return done(null, newBidder);
        });
      });
    });
  });

  passport.use('local', local);
}
