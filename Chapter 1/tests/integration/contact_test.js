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
var baseUrl = config.baseUrl;
var User = mongoose.model('User');
var Contact = mongoose.model('Contact');
var appServer;

describe('Contact', function() {

  before(function(done) {
    appServer = http.createServer(app);

    appServer.on('listening', function() {
      User.create(userFixture, function(err, user) {
        if (err) throw err;

        // authenticate the user
        request({
          method: 'POST',
          url: baseUrl + '/auth/signin',
          form: {
            'email': userFixture.email,
            'password': 'P@ssw0rd!'
          },
          json:true
        }, function(err, res, body) {
          if (err) throw err;

          res.statusCode.should.equal(200);
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

  afterEach(function(done){
    Contact.remove({}, function(err) {
      if (err) throw err;

      done();
    });
  });

  describe('Save contact', function() {
    it('should save a new contact', function(done) {
      request({
        method: 'POST',
        url: baseUrl + '/contacts',
        form: {
          'email': 'jane.doe@test.com',
          'name': 'Jane Doe'
        },
        json:true
      }, function(err, res, body) {
        if (err) throw err;

        res.statusCode.should.equal(201);
        body.email.should.equal('jane.doe@test.com');
        body.name.should.equal('Jane Doe');
        done();
      });
    });
  });

  describe('Get contacts', function() {
    before(function(done) {
      Contact.collection.insert([
        { email: 'jane.doe@test.com' },
        { email: 'john.doe@test.com' }
      ], function(err, contacts) {
        if (err) throw err;

        done();
      });
    });

    it('should get a list of contacts', function(done) {
      request({
        method: 'GET',
        url: baseUrl + '/contacts',
        json:true
      }, function(err, res, body) {
        if (err) throw err;

        res.statusCode.should.equal(200);
        body.should.be.instanceof(Array);
        body.length.should.equal(2);
        done();
      });
    });
  });

  describe('Get contact', function() {
    var _contact;

    before(function(done) {
      Contact.create({
        email: 'john.doe@test.com'
      }, function(err, contact) {
        if (err) throw err;

        _contact = contact;
        done();
      });
    });

    it('should get a single contact by id', function(done) {
      request({
        method: 'GET',
        url: baseUrl + '/contacts/' + _contact.id,
        json:true
      }, function(err, res, body) {
        if (err) throw err;

        res.statusCode.should.equal(200);
        body.email.should.equal(_contact.email);
        done();
      });
    });

    it('should not get a contact if the id is not 24 characters', function(done) {
      request({
        method: 'GET',
        url: baseUrl + '/contacts/' + _contact.id + '1',
        json:true
      }, function(err, res, body) {
        if (err) throw err;

        res.statusCode.should.equal(404);
        done();
      });
    });
  });

  describe('Update contact', function() {
    var _contact;

    before(function(done) {
      Contact.create({
        email: 'jane.doe@test.com'
      }, function(err, contact) {
        if (err) throw err;

        _contact = contact;
        done();
      });
    });

    it('should update an existing contact', function(done) {
      request({
        method: 'PUT',
        url: baseUrl + '/contacts/' + _contact.id,
        form: {
          'name': 'Jane Doe'
        },
        json:true
      }, function(err, res, body) {
        if (err) throw err;

        res.statusCode.should.equal(200);
        body.email.should.equal(_contact.email);
        body.name.should.equal('Jane Doe');
        done();
      });
    });
  });

  describe('Delete contact', function() {
    var _contact;

    before(function(done) {
      Contact.create({
        email: 'jane.doe@test.com'
      }, function(err, contact) {
        if (err) throw err;

        _contact = contact;
        done();
      });
    });

    it('should update an existing contact', function(done) {
      request({
        method: 'DELETE',
        url: baseUrl + '/contacts/' + _contact.id,
        json:true
      }, function(err, res, body) {
        if (err) throw err;

        res.statusCode.should.equal(204);
        should.not.exist(body);
        done();
      });
    });
  });
});
