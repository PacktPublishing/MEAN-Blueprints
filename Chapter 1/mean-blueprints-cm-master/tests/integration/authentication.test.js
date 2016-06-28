'use strict';

/**
 * Important! Set the environment to test
 */
process.env.NODE_ENV = 'test';

const http = require('http');
const request = require('request');
const chai = require('chai');
const userFixture = require('../fixtures/user');
const should = chai.should();

let app;
let appServer;
let mongoose;
let User;
let config;
let baseUrl;

describe('Authentication test', () => {

  before((done) => {
    app = require('../../server');
    config = app.get('config');
    baseUrl = config.baseUrl;
    appServer = http.createServer(app);

    appServer.on('listening', () => {
      mongoose = app.get('mongoose');
      User = mongoose.model('User');
      User.create(userFixture, (err, user) => {
        if (err) throw err;

        done();
      });
    });

    appServer.listen(config.port);
  });

  after(function(done) {
    appServer.on('close', () => {
      setTimeout(() => done(), 2000);
    });

    User.remove({}).exec((err) => {
      if (err) throw err;

      mongoose.connection.close(() => {
        appServer.close();
      });
    });
  });

  describe('Sign in user', () => {
    it('should sign in a user with valid credentials', (done) => {
      request({
        method: 'POST',
        url: baseUrl + '/auth/signin',
        form: {
          'email': userFixture.email,
          'password': 'P@ssw0rd!'
        },
        json:true
      }, (err, res, body) => {
        if (err) throw err;

        res.statusCode.should.equal(200);
        body.email.should.equal(userFixture.email);
        should.not.exist(body.password);
        should.not.exist(body.passwordSalt);
        done();
      });
    });

    it('should not sign in a user with invalid credentials', (done) => {
      request({
        method: 'POST',
        url: baseUrl + '/auth/signin',
        form: {
          'email': userFixture.email,
          'password': 'incorrectpassword'
        },
        json:true
      }, (err, res, body) => {
        if (err) throw err;

        res.statusCode.should.equal(400);
        body.message.should.equal('Invalid email or password.');
        done();
      });
    });
  });

});
