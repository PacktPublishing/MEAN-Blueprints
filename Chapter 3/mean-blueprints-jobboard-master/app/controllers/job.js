'use strict';

const MAX_LIMIT = 50;
const JOB_FIELDS = ['title', 'summary', 'description', 'type', 'industry', 'country'];

/**
 *  Module dependencies
 */
const _ = require('lodash');
const mongoose = require('mongoose');
const Job = mongoose.model('Job');
const ObjectId = mongoose.Types.ObjectId;

/**
 *  Module exports
 */
module.exports.create = createJob;
module.exports.findById = findJobById;
module.exports.getAll = getAllJobs;
module.exports.update = updateJob;
module.exports.remove = removeJob;

function createJob(req, res, next) {
  let data = _.pick(req.body, JOB_FIELDS);
  data.company = req.resources.company._id;

  Job.create(data, (err, job) => {
    if (err) {
      return next(err);
    }

    res.status(201).json(job);
  });
}

function findJobById(req, res, next) {
  if (!ObjectId.isValid(req.params.jobId)) {
    res.status(404).send({ message: 'Not found.'});
  }

  Job.findById(req.params.jobId, (err, job) => {
    if (err) {
      return next(err);
    }

    req.resources.job = job;
    next();
  });
}

function getAllJobs(req, res, next) {
  const limit = +req.query.limit || MAX_LIMIT;
  const skip = +req.query.skip || 0;
  let query = _.pick(req.query, ['type', 'country', 'industry', 'company']);

  if (req.params.companyId) {
    query.company = req.params.companyId;
  }

  Job
  .find(query)
  .limit(limit)
  .skip(skip)
  .populate('company')
  .exec((err, jobs) => {
    if (err) {
      return next(err);
    }

    req.resources.jobs = jobs;
    next();
  });
}

function updateJob(req, res, next) {
  let data = _.pick(req.body, ['title', 'summary', 'description', 'type', 'industry', 'country']);
  _.assign(req.resources.job, data);

  req.resources.job.save((err, updatedJob) => {
    if (err) {
      return next(err);
    }

    res.json(job);
  });
}

function removeJob(req, res, next) {
  req.resources.job.remove((err) => {
    if (err) {
      return next(err);
    }

    res.json(req.resources.job);
  });
}
