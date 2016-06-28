'use strict';

/**
 * Important! Set the environment to test
 */
process.env.NODE_ENV = 'test';

var chai = require('chai');
var should = chai.should();
var config = require('../../config/environments/test');
var mongoose = require('../../config/mongoose').init();
var Token = require('../../app/models/token');

describe('Token Model Integration', function() {
  after(function(done) {
    mongoose.connection.db.dropDatabase(function(err) {
      if (err) throw err;

      setTimeout(done, 200);
    });
  });

  describe('#generate() - Token class method', function() {
    var _userId = new mongoose.Types.ObjectId();

    it('should generate a new token for a user', function(done) {
      Token.generate({
        user: _userId
      }, function(err, token) {
        if (err) throw err;

        should.exist(token);
        should.exist(token.id);
        token.value.length.should.equal(32);
        token.user.toString().should.equal(_userId.toString());
        done();
      });
    });
  });

});
