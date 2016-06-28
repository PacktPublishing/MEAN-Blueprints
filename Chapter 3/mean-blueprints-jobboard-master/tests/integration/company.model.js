'use strict';

/**
 * Important! Set the environment to test
 */
process.env.NODE_ENV = 'test';

var chai = require('chai');
var should = chai.should();
var config = require('../../config/environments/test');

describe('Company model', function() {
  var mongoose;
  var Company;
  var _company;
  var newCompanyData = {
    name: 'Test company'
  };

  before(function(done) {
    mongoose = require('../../config/mongoose').init();
    Company = require('../../app/models/company');
    newCompanyData.owner = mongoose.Types.ObjectId();
    newCompanyData.members = [mongoose.Types.ObjectId()];

    done();
  });

  after(function(done) {
    Company.remove({}).exec(function(err) {
      if (err) throw err;

      mongoose.connection.close(function() {
        setTimeout(function() { done(); }, 1000);
      });
    });
  });

  it('should create a new company', function(done) {
    Company.create(newCompanyData, function(err, company) {
      if (err) throw err;

      should.exist(company);
      should.exist(company.createdAt);
      company.name.should.equal(newCompanyData.name);
      company.members[0].toString().should.equal(newCompanyData.members[0].toString());
      company.owner.toString().should.equal(newCompanyData.owner.toString());
      company.slug.should.equal('test-company');

      _company = company;
      done();
    });
  });

  it('should update an existing company', function(done) {
    Company.findOne({ _id: _company._id }, function(err, company) {
      if (err) throw err;

      company.name = 'New company name';
      company.save(function(err) {
        if (err) throw err;

        should.exist(company);
        should.exist(company.createdAt);
        company.name.should.equal('New company name');
        company.members[0].toString().should.equal(newCompanyData.members[0].toString());
        company.owner.toString().should.equal(newCompanyData.owner.toString());
        company.slug.should.equal('new-company-name');

        done();
      });
    });
  });
});
