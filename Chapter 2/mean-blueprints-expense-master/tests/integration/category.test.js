'use strict';

/**
 * Important! Set the environment to test
 */
process.env.NODE_ENV = 'test';

const http = require('http');
const request = require('request');
const chai = require('chai');
const mongoose = require('mongoose');

const app = require('../../server');
const userFixture = require('../fixtures/user');

const should = chai.should();
const config = app.get('config');
const baseUrl = config.baseUrl + '/api';
const User = mongoose.model('User');
const Category = mongoose.model('Category');
let appServer;

describe('Category', function() {
  var _user = {};
  var _token = {};

  before(function(done) {
    appServer = http.createServer(app);

    appServer.on('listening', function() {
      User.create(userFixture, function(err, user) {
        if (err) throw err;

        _user = user;

        request({
          method: 'POST',
          url: config.baseUrl + '/auth',
          auth: {
            username: userFixture.email,
            password: 'P@ssw0rd!'
          },
          json:true
        }, function(err, res, body) {
          if (err) throw err;

          _token = body.token;

          done();
        });
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

  describe('Create expense', function() {
    after(function(done) {
      Caterogy.remove({}, function(err) {
        if (err) throw err;

        done();
      });
    });

    it('should save a category', function(done) {
      request({
        method: 'POST',
        url: baseUrl + '/categories',
        auth: {
          bearer: _token.hash
        },
        form: {
          name: 'Account one',
          description: 'My test account.'
        },
        json:true
      }, function(err, res, body) {
        if (err) throw err;

        res.statusCode.should.equal(201);
        should.exist(body);
        body.name.should.equal('Account one');
        body.description.should.equal('My test account.');
        done();
      });
    });

    it('should not save a category for an invalid access token', function(done) {
      request({
        method: 'POST',
        url: baseUrl + '/categories',
        auth: {
          bearer: 'invalidtoken'
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

  describe('Get all categories', function() {
    before(function(done) {
      Caterogy.collection.insert([
        { name: 'Test 1', owner: _user.id },
        { name: 'Test 2', owner: _user.id },
        { name: 'Test 3', owner: _user.id }
      ], function(err) {
        if (err) throw err;

        done();
      });
    });

    after(function(done) {
      Caterogy.remove({}, function(err) {
        if (err) throw err;

        done();
      });
    });

    it('should get all categories for the token owner', function(done) {
      request({
        method: 'POST',
        url: baseUrl + '/categories',
        auth: {
          bearer: _token.hash
        },
        json:true
      }, function(err, res, body) {
        if (err) throw err;

        res.statusCode.should.equal(200);
        should.exist(body);
        body.length.should.equal(3);
        done();
      });
    });

    it('should not save a category for an invalid access token', function(done) {
      request({
        method: 'POST',
        url: baseUrl + '/categories',
        auth: {
          bearer: 'invalidtoken'
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
