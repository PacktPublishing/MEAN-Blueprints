'use strict';

/**
 * Important! Set the environment to test
 */
process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const config = require('../../config');

let mongoose;
let User;
let _user;
let newUserData = {
  email: 'register_user@test.com',
  password: 'user_password',
  name: 'New Test User'
};

describe('User model test', function() {

  before(function(done) {
    mongoose = require('../../config/mongoose').init();
    User = require('../../app/models/user');
    done();
  });

  after(function(done) {
    User.remove({}).exec(err => {
      if (err) throw err;

      mongoose.connection.close(() => {
        setTimeout(function() { done(); }, 1000);
      });
    });
  });

  it('should register a user', done => {
    User.register(newUserData, (err, user) => {
      if (err) throw err;

      should.exist(user);
      user.email.should.equal(newUserData.email);
      should.not.exist(user.password);
      should.not.exist(user.passwordSalt);
      should.exist(user.createdAt);
      user.active.should.equal(true);

      _user = user;
      done();
    });
  });

  it('should not register a user if already exists', done => {
    User.register(newUserData, (err, user) => {
      should.exist(err);
      err.code.should.equal(11000); // duplicate key error
      should.not.exist(user);
      done();
    });
  });

  it('should authenticate a user with valid credentials', done => {
    User.authenticate(newUserData.email, newUserData.password, (err, user) => {
      if (err) throw err;

      should.exist(user);
      should.not.exist(user.password);
      should.not.exist(user.passwordSalt);
      user.email.should.equal(newUserData.email);
      done();
    });
  });

  it('should not authenticate user with invalid credentials', done => {
    User.authenticate(newUserData.email, 'notuserpassowrd', (err, user) => {
      if (err) throw err;

      should.not.exist(user);
      done();
    });
  });

  it('should change the password of a user', done => {
    _user.changePassword('user_password', 'new_user_password', (err, result) => {
      if (err) throw err;

      should.exist(result);
      result.success.should.equal(true);
      result.message.should.equal('Password changed successfully.');
      result.type.should.equal('password_change_success');

      // run a check credential with the new password
      User.authenticate(_user.email, 'new_user_password', (err, user) => {
        if (err) throw err;

        should.exist(user);
        user.email.should.equal(_user.email);
        done();
      });
    });
  });

  it('should not change password if old password does not match', done => {
    _user.changePassword('not_good', 'new_user_password', (err, result) => {
      should.not.exist(result);
      should.exist(err);
      err.type.should.equal('old_password_does_not_match');

      // run a check credential with the old password
      User.authenticate(_user.email, 'new_user_password', (err, user) => {
        if (err) throw err;

        should.exist(user);
        user.email.should.equal(_user.email);
        done();
      });
    });
  });
});
