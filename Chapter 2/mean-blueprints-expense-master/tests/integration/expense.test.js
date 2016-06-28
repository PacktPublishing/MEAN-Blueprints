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
var Expense = mongoose.model('Expense');
var appServer;

chai.use(require('chai-things'));

describe('Expense', function() {
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
          url: baseUrl + '/auth',
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
    var _category = new mongoose.Types.ObjectId();

    after(function(done) {
      Expense.remove({}, function(err) {
        if (err) throw err;

        done();
      });
    });

    it('should save an expense', function(done) {
      request({
        method: 'POST',
        url: baseUrl + '/expenses',
        auth: {
          bearer: _token.value
        },
        form: {
          value: 14.99,
          category: _category.toString()
        },
        json:true
      }, function(err, res, body) {
        if (err) throw err;

        res.statusCode.should.equal(201);
        body.amount.should.equal(14990);
        body.scaleFactor.should.equal(1000);
        body.value.should.equal(14.99);
        body.category.should.equal(_category.toString());
        done();
      });
    });

    it('should not save an expense for an invalid access token', function(done) {
      request({
        method: 'POST',
        url: baseUrl + '/expenses',
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

  describe('Get expenses', function() {
    var _categoryOne = new mongoose.Types.ObjectId();
    var _categoryTwo = new mongoose.Types.ObjectId();

    before(function(done) {
      Expense.collection.insert([
        { amount: 10.10 * 1000, user: _user.id, category: _categoryOne, createdAt: new Date('01/01/2015') },
        { amount: 11.11 * 1000, user: _user.id, category: _categoryOne, createdAt: new Date('02/02/2015') },
        { amount: 12.12 * 1000, user: _user.id, category: _categoryOne, createdAt: new Date('03/03/2015') },
        { amount: 13.13 * 1000, user: _user.id, category: _categoryTwo, createdAt: new Date('03/11/2015') },
        { amount: 14.14 * 1000, user: _user.id, category: _categoryTwo, createdAt: new Date('06/18/2015') },
        { amount: 15.15 * 1000, user: _user.id, category: _categoryTwo, createdAt: new Date('08/18/2015') }
      ], function(err, result) {
        if (err) throw err;

        done();
      });
    });

    after(function(done) {
      Expense.remove({}, function(err) {
        if (err) throw err;

        done();
      });
    });

    it('should get all expenses of the token owner', function(done) {
      request({
        method: 'GET',
        url: baseUrl + '/expenses',
        auth: {
          bearer: _token.value
        },
        json:true
      }, function(err, res, body) {
        if (err) throw err;

        done();
      });
    });

    it('should get all expenses of the token owner for a category', function(done) {
      request({
        method: 'GET',
        url: baseUrl + '/category/' + _categoryTwo.toString() + '/expenses',
        auth: {
          bearer: _token.value
        },
        json:true
      }, function(err, res, body) {
        if (err) throw err;

        res.statusCode.should.equal(200);
        body.length.should.equal(3);
        should.include.something.that.deep.equals({ a: 'cat' })
        should.include.something.that.deep.equals({ a: 'cat' })
        should.include.something.that.deep.equals({ a: 'cat' })
        done();
      });
    });

    it('should not get all expenses for an invalid access token', function(done) {
      request({
        method: 'GET',
        url: baseUrl + '/expenses',
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

  describe('Expenses balance', function() {
    var _categoryOne = new mongoose.Types.ObjectId();
    var _categoryTwo = new mongoose.Types.ObjectId();

    before(function(done) {
      Expense.collection.insert([
        { amount: 10.10 * 1000, user: _user.id, category: _categoryOne, createdAt: new Date('06/18/2015') },
        { amount: 11.11 * 1000, user: _user.id, category: _categoryOne, createdAt: new Date('07/11/2015') },
        { amount: 12.12 * 1000, user: _user.id, category: _categoryTwo, createdAt: new Date('07/18/2015') }
      ], function(err, result) {
        if (err) throw err;

        done();
      });
    });

    after(function(done) {
      Expense.remove({}, function(err) {
        if (err) throw err;

        done();
      });
    });

    it('should get balance for all expenses', function(done) {
      request({
        method: 'GET',
        url: baseUrl + '/expenses/balance',
        auth: {
          bearer: _token.value
        },
        json:true
      }, function(err, res, body) {
        if (err) throw err;

        res.statusCode.should.equal(200);
        should.exist(body);
        body.balance.should.equal(33.33);
        body.count.should.equal(3);
        done();
      });
    });

    it('should get expenses balance only for a category', function(done) {
      request({
        method: 'GET',
        url: baseUrl + '/expenses/balance?category=' + _categoryOne.toString(),
        auth: {
          bearer: _token.value
        },
        json:true
      }, function(err, res, body) {
        if (err) throw err;

        res.statusCode.should.equal(200);
        should.exist(body);
        body.balance.should.equal(21.21);
        body.count.should.equal(2);
        done();
      });
    });

    it('should get expenses balance between a given date', function(done) {
      var start = new Date('07/01/2015').toString();
      var end = new Date('08/01/2015').toString();

      request({
        method: 'GET',
        url: baseUrl + '/expenses/balance?start=' + start + '&end=' + end,
        auth: {
          bearer: _token.value
        },
        json:true
      }, function(err, res, body) {
        if (err) throw err;

        res.statusCode.should.equal(200);
        should.exist(body);
        body.balance.should.equal(23.23);
        body.count.should.equal(2);
        done();
      });
    });

    it('should get expenses balance between a given date only for a category', function(done) {
      var start = new Date('06/01/2015').toString();
      var end = new Date('08/01/2015').toString();

      request({
        method: 'GET',
        url: baseUrl + '/expenses/balance?start=' + start + '&end=' + end +'&category=' + _categoryTwo.toString(),
        auth: {
          bearer: _token.value
        },
        json:true
      }, function(err, res, body) {
        if (err) throw err;

        res.statusCode.should.equal(200);
        should.exist(body);
        body.balance.should.equal(12.12);
        body.count.should.equal(1);
        done();
      });
    });
  });

});
