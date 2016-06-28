'use strict';

const MAX_LIMIT = 50;

/**
 *  Module dependencies
 */
const _ = require('lodash');
const mongoose = require('mongoose');
const Company = mongoose.model('Company');
const ObjectId = mongoose.Types.ObjectId;

/**
 *  Module exports
 */
module.exports.create = createCompany;
module.exports.checkUserCompany = checkUserCompany;
module.exports.findById = findCompanyById;
module.exports.getAll = getAllCompanies;
module.exports.update = updateCompany;
module.exports.addMember = addCompanyMember;
module.exports.removeMember = removeCompanyMember;

function createCompany(req, res, next) {
  let data = _.pick(req.body, ['name', 'country', 'address']);
  data.owner = req.user._id;
  data.members = [req.user._id];

  Company.create(data, (err, company) => {
    if (err) {
      return next(err);
    }

    res.status(201).json(company);
  });
}

function checkUserCompany(req, res, next) {
  Company.findOne({ owner: req.user._id }, (err, company) => {
    if (err) {
      return next(err);
    }

    if (company) {
      return res.status(409).json({
        message: 'You already are the owner of ' + company.name,
        type: 'user_has_company'
      });
    }

    next();
  })
}

function findCompanyById(req, res, next) {
  if (!ObjectId.isValid(req.params.companyId)) {
    return res.status(404).send({ message: 'Not found.'});
  }

  Company.findById(req.params.companyId, (err, company) => {
    if (err) {
      return next(err);
    }

    req.resources.company = company;
    next();
  });
}

function getAllCompanies(req, res, next) {
  const limit = +req.query.limit || MAX_LIMIT;
  const skip = +req.query.skip || 0;
  let query = _.pick(req.query, ['country']);

  Company
  .find(query)
  .limit(limit)
  .skip(skip)
  .exec((err, companies) => {
    if (err) {
      return next(err);
    }

    req.resources.companies = companies;
    next();
  });
}

function updateCompany(req, res, next) {
  var data = _.pick(req.body, ['name', 'country', 'address']);
  _.assign(req.resources.company, req.body);

  req.resources.company.save((err, updatedCompany) => {
    if (err) {
      return next(err);
    }

    req.resources.company = updatedCompany;
    next();
  });
}

function addCompanyMember(req, res, next) {
  var includes = _.includes(req.resources.company.members, req.body.member);

  if (includes) {
    return res.status(409).json({
      message: 'User is already a member of your company',
      type: 'already_member'
    });
  }

  req.resources.company.members.push(req.body.member);
  req.resources.company.save((err, updatedCompany) => {
    if (err) {
      return next(err);
    }

    req.resources.company = updatedCompany;
    next();
  });
}

function removeCompanyMember(req, res, next) {
  var includes = _.includes(req.resources.company.members, req.body.member);

  if (!includes) {
    return res.status(409).json({
      message: 'User is not a member of your company',
      type: 'not_member'
    });
  }

  _.pull(req.resources.company.members, req.body.member);
  req.resources.company.save((err, updatedCompany) => {
    if (err) {
      return next(err);
    }

    req.resources.company = updatedCompany;
    next();
  });
}
