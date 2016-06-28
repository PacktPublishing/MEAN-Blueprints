'use strict';

const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
const mainCtrl = require('../controllers/main');
const auth = require('../middlewares/authentication');
const authorize = require('../middlewares/authorization');
const response = require('../helpers/response');

router.get(
  '/users',
  auth.ensured,
  userCtrl.getAll,
  mainCtrl.toJSON('users')
);

router.get(
  '/users/:userId',
  auth.ensured,
  userCtrl.findById,
  mainCtrl.toJSON('user')
);

router.put(
  '/users/:userId',
  auth.ensured,
  userCtrl.findById,
  authorize.onlySelf,
  userCtrl.update,
  mainCtrl.toJSON('user')
);

router.delete(
  '/users/:userId',
  auth.ensured,
  userCtrl.delete
);

router.get(
  '/users/:userId/profile',
  auth.ensured,
  userCtrl.getProfile,
  response.toJSON('user')
);

router.post(
  '/users/:userId/profile/blocks',
  auth.ensured,
  userCtrl.getProfile,
  authorize.onlySelf,
  userCtrl.createProfileBlock,
  response.toJSON('block')
);

router.put(
  '/users/:userId/profile/blocks/:blockId',
  auth.ensured,
  userCtrl.getProfile,
  authorize.onlySelf,
  userCtrl.updateProfile,
  response.toJSON('block')
);

router.get(
  '/users/:userId/companies',
  auth.ensured,
  userCtrl.getUserCompanies,
  response.toJSON('companies')
);

module.exports = router;
