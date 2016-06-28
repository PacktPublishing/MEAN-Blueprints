'use strict';

process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const passwordHelper = require('../../app/helpers/password');

describe('Password Helper', () => {
  describe('#hash() - password hashing', () => {
    it('should return a hash and a salt from a plain string', done => {
      passwordHelper.hash('P@ssw0rd!', (err, hash, salt) => {
        if (err) throw err;

        should.exist(hash);
        should.exist(salt);
        hash.should.be.a('string');
        salt.should.be.a('string');
        hash.should.not.equal('P@ssw0rd!');
        done();
      });
    });

    it('should return only a hash from a plain string if salt is given', done => {
      passwordHelper.hash('P@ssw0rd!', 'secret salt', (err, hash, salt) => {
        if (err) throw err;

        should.exist(hash);
        salt.should.equal('secret salt');
        hash.should.be.a('string');
        hash.should.not.equal('P@ssw0rd!');
        done();
      });
    });

    it('should return the same hash if the password and salt ar the same', done => {
      passwordHelper.hash('P@ssw0rd!', (err, hash, salt) => {
        if (err) throw err;

        passwordHelper.hash('P@ssw0rd!', salt, (err, hashWithSalt) => {
          if (err) throw err;

          should.exist(hash);
          hash.should.be.a('string');
          hash.should.not.equal('P@ssw0rd!');
          hash.should.equal(hashWithSalt);
          done();
        });
      });
    });
  });

  describe('#verify() - compare a password with a hash', () => {
    it('should return true if the password matches the hash', done => {
      passwordHelper.hash('P@ssw0rd!', (err, hash, salt) => {
        if (err) throw err;

        passwordHelper.verify('P@ssw0rd!', hash, salt, (err, result) => {
          if (err) throw err;

          should.exist(result);
          result.should.be.a('boolean');
          result.should.equal(true);
          done();
        });
      });
    });

    it('should return false if the password does not matches the hash', done => {
      passwordHelper.hash('P@ssw0rd!', (err, hash, salt) => {
        if (err) throw err;

        passwordHelper.verify('password!', hash, salt, (err, result) => {
          if (err) throw err;

          should.exist(result);
          result.should.be.a('boolean');
          result.should.equal(false);
          done();
        });
      });
    });
  });
});
