'use strict';

/**
 * Important! Set the environment to test
 */
process.env.NODE_ENV = 'test';

var chai = require('chai');
var should = chai.should();
var config = require('../../config/environments/test');
var mongoose = require('../../config/mongoose').init();
var User = require('../../app/models/user');
var userFixture = require('../fixtures/user');

describe('User Model Integration', function() {
  before(function(done) {
    User.create(userFixture, function(err, user) {
      if (err) throw err;

      done();
    });
  });

  after(function(done) {
    mongoose.connection.db.dropDatabase(function(err) {
      if (err) throw err;
      setTimeout(done, 200);
    });
  });


  describe('#authenticate()', function() {
    it('should return the user if the credentials are valid', function(done) {
      User.authenticate(userFixture.email, 'P@ssw0rd!', function(err, user) {
        if (err) throw err;

        should.exist(user);
        should.not.exist(user.password);
        should.not.exist(user.passwordSalt);
        user.email.should.equal(userFixture.email);
        done();
      });
    });

    it('should return nothing if the credential of the user are invalid', function(done) {
      User.authenticate(userFixture.email, 'notuserpassowrd', function(err, user) {
        if (err) throw err;

        should.not.exist(user);
        done();
      });
    });
  });

  describe('#register()', function() {
    var newUserData = {
      email: 'register_user@test.com',
      password: 'user_password',
      name: 'New Test User'
    };
    var newAdminData = {
      email: 'register_admin@test.com',
      password: 'admin_password',
      name: 'New Test Admin',
      roles: ['user', 'admin']
    };

    it('should create a new user', function(done) {
      User.register(newUserData, function(err, user) {
        if (err) throw err;

        should.exist(user);
        user.email.should.equal(newUserData.email);
        should.not.exist(user.password);
        should.not.exist(user.passwordSalt);
        should.exist(user.createdAt);
        should.exist(user.roles);
        user.roles.should.contain('user');
        user.roles.should.not.contain('admin');
        done();
      });
    });

    it('should create an admin user', function(done) {
      User.register(newAdminData, function(err, admin) {
        if (err) throw err;

        should.exist(admin);
        admin.email.should.equal(newAdminData.email);
        should.not.exist(admin.password);
        should.not.exist(admin.passwordSalt);
        should.exist(admin.createdAt);
        should.exist(admin.roles);
        admin.roles.should.contain('user');
        admin.roles.should.contain('admin');
        done();
      });
    });
  });

});
