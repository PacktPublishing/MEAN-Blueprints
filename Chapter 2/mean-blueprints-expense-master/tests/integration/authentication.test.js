'use strict';

/**
 * Important! Set the environment to test
 */
process.env.NODE_ENV = 'test';

var http = require('http');
var request = require('request');
var chai = require('chai');
var mongoose = require('mongoose');

var app = require('../../server');
var userFixture = require('../fixtures/user');

var should = chai.should();
var config = app.get('config');
var baseUrl = config.baseUrl + '/api';
var User = mongoose.model('User');
var Token = mongoose.model('Token');
var appServer;

describe('Authentication', function() {
  var _user;

  before(function(done) {
    appServer = http.createServer(app);

    appServer.on('listening', function() {
      User.create(userFixture, function(err, user) {
        if (err) throw err;

        _user = user;
        done();
      });
    });

    appServer.listen(config.port);
  });

  after(function(done) {
    appServer.on('close', function() {
      done();
    });

    mongoose.connection.db.dropDatabase(function(err) {
      if (err) throw err;

      appServer.close();
    });
  });

  describe('Basic authentication', function() {
    it('should authenticate a user and return a new token', function(done) {
      request({
        method: 'POST',
        url: baseUrl + '/auth',
        auth: {
          username: userFixture.email,
          password: 'P@ssw0rd!'
        },
        json:true
      }, function(err, res, body) {
        if (err) throw err;

        res.statusCode.should.equal(200);
        body.email.should.equal(_user.email);
        should.not.exist(body.password);
        should.not.exist(body.passwordSalt);
        should.exist(body.token);
        should.exist(body.token.value);
        should.exist(body.token.expiresAt);
        done();
      });
    });

    it('should not authenticate a user with invalid credentials', function(done) {
      request({
        method: 'POST',
        url: baseUrl + '/auth',
        auth: {
          username: userFixture.email,
          password: 'incorrectpassword'
        },
        json:true
      }, function(err, res, body) {
        if (err) throw err;

        res.statusCode.should.equal(400);
        body.message.should.equal('Invalid email or password.');
        done();
      });
    });
  });

  describe('Bearer authentication', function() {
    var _token;

    before(function() {
      Token.generate({
        user: _user.id
      }, function(err, token) {
        if (err) throw err;

        _token = token;
        done();
      });
    });

    it('should authenticate a user using an access token', function(done) {
      request({
        method: 'GET',
        url: baseUrl + '/auth',
        auth: {
          bearer: _token.value
        },
        json:true
      }, function(err, res, body) {
        if (err) throw err;

        res.statusCode.should.equal(200);
        body.email.should.equal(userFixture.email);
        should.not.exist(body.password);
        should.not.exist(body.passwordSalt);
        done();
      });
    });

    it('should not authenticate a user with an invalid access token', function(done) {
      request({
        method: 'GET',
        url: baseUrl + '/auth',
        auth: {
          bearer: _token.value + 'a1e'
        },
        json:true
      }, function(err, res, body) {
        if (err) throw err;

        res.statusCode.should.equal(401);
        body.should.equal('Unauthorized');
        done();
      });
    });
  });

});
