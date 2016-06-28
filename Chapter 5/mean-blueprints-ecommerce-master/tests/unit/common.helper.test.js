'use strict';

process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const commonHelper = require('../../app/helpers/common');

describe('Common Helper', () => {
  describe('#createSlug() - create a slug from a title', () => {
    it('should generate a URL friendly slug from a string', done => {
      let slug = commonHelper.createSlug('Awesome title here');
      slug.should.equal('awesome-title-here');
      done();
    });
  });

  describe('#generateExpirationTime() - generate a datetime object', () => {
    it('should add the specified time in seconds to the current time', done => {
      let seconds = 120;
      let exdate = commonHelper.generateExpirationTime(seconds);

      // assert var
      var now = new Date();
      now.setTime(now.getTime() + (seconds*1000));

      exdate.toString().should.equal(now.toString());
      done();
    });
  });
});
