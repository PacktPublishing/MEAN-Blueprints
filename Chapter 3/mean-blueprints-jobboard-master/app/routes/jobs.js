'use strict';

const express = require('express');
const router = express.Router();
const companyCtrl = require('../controllers/company');
const jobCtrl = require('../controllers/job');
const auth = require('../middlewares/authentication');
const authorize = require('../middlewares/authorization');
const response = require('../helpers/response');

router.get(
  '/jobs',
  jobCtrl.getAll,
  response.toJSON('jobs')
);

router.get(
  '/jobs/:jobId',
  jobCtrl.findById,
  response.toJSON('job')
);

router.get(
  '/companies/:companyId/jobs',
  jobCtrl.getAll,
  response.toJSON('jobs')
);

router.post(
  '/companies/:companyId/jobs',
  auth.ensured,
  companyCtrl.findById,
  authorize.onlyMembers,
  jobCtrl.create
);

router.put(
  '/companies/:companyId/jobs/:jobId',
  auth.ensured,
  companyCtrl.findById,
  authorize.onlyMembers,
  jobCtrl.findById,
  jobCtrl.update
);

router.delete(
  '/companies/:companyId/jobs/:jobId',
  auth.ensured,
  companyCtrl.findById,
  authorize.onlyMembers,
  jobCtrl.findById,
  jobCtrl.remove
);

module.exports = router;
