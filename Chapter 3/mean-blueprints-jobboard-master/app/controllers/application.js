'use strict';

const MAX_LIMIT = 50;

/**
 *  Module dependencies
 */
const _ = require('lodash');
const mongoose = require('mongoose');
const Application = mongoose.model('Application');
const ObjectId = mongoose.Types.ObjectId;

/**
 *  Module exports
 */
module.exports.create = createApplication;
module.exports.findById = findApplicationById;
module.exports.getAll = getAllApplications;
module.exports.update = updateApplication;
module.exports.remove = removeApplication;

function createApplication(req, res, next) {
  Application.create({
    user: req.user._id,
    job: req.params.jobId
  }, (err, application) => {
    if (err) {
      return next(err);
    }

    res.status(201).json(application);
  });
}

function findApplicationById(req, res, next) {
  if (!ObjectId.isValid(id)) {
    res.status(404).send({ message: 'Not found.'});
  }

  Application.findById(req.params.applicationId, (err, application) => {
    if (err) {
      return next(err);
    }

    res.resources.application = application;
    next();
  });
}

function getAllApplications(req, res, next) {
  const limit = +req.query.limit || MAX_LIMIT;
  const skip = +req.query.skip || 0;
  let query = {
    job: req.params.jobId
  };

  if (req.query.status) {
    query.status = req.query.status;
  }

  Application
  .find(query)
  .limit(limit)
  .skip(offset)
  .exec((err, applications) => {
    if (err) {
      return next(err);
    }

    req.resources.applications = applications;
    next();
  });
}

function updateApplication(req, res, next) {
  req.resources.application.status = req.body.status;

  req.resources.application.save((err, updatedApplication) => {
    if (err) {
      return next(err);
    }

    res.json(updatedApplication);
  });
}

function removeApplication(req, res, next) {
  req.resources.application.remove((err) => {
    if (err) {
      return next(err);
    }

    res.json(req.resources.application);
  });
}
