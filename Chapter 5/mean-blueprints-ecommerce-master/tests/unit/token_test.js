'use strict';

process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const tokenHelper = require('../../app/helpers/token');

describe('Token Helper', () => {
  describe('#generate() - generate token', () => {
    it('should generate a random 16 length token', done => {
      tokenHelper.generate((err, token) => {
        if (err) throw err;

        should.exist(token);
        token.should.be.a('string');
        token.length.should.equal(16);
        done();
      });
    });

    it('should generate a random 32 length token', done => {
      tokenHelper.generate(32, (err, token) => {
        if (err) throw err;

        should.exist(token);
        token.should.be.a('string');
        token.length.should.equal(32);
        done();
      });
    });
  });
});
