'use strict';

const express = require('express');
const router = express.Router();
const companyCtrl = require('../controllers/company');
const auth = require('../middlewares/authentication');
const authorize = require('../middlewares/authorization');
const response = require('../helpers/response');

router.post(
  '/companies',
  auth.ensured,
  companyCtrl.checkUserCompany,
  companyCtrl.create
);

router.get(
  '/companies',
  companyCtrl.getAll,
  response.toJSON('companies')
);

router.get(
  '/companies/:companyId',
  companyCtrl.findById,
  response.toJSON('company')
);

router.put(
  '/companies/:companyId',
  auth.ensured,
  companyCtrl.findById,
  authorize.onlyOwner,
  companyCtrl.update,
  response.toJSON('company')
);

router.post(
  '/companies/:companyId/members',
  auth.ensured,
  companyCtrl.findById,
  authorize.onlyOwner,
  companyCtrl.addMember,
  response.toJSON('company')
);

router.delete(
  '/companies/:companyId/members',
  auth.ensured,
  companyCtrl.findById,
  authorize.onlyOwner,
  companyCtrl.removeMember,
  response.toJSON('company')
);

module.exports = router;
