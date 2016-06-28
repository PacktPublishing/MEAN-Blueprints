'use strict';

const express = require('express');
const router = express.Router();
const profileCtrl = require('../controllers/profile');
const auth = require('../middlewares/authentication');
const authorize = require('../middlewares/authorization');
const response = require('../helpers/response');

router.get(
  '/profile',
  auth.ensured,
  profileCtrl.getProfile,
  response.toJSON('user')
);

router.post(
  '/profile/blocks',
  auth.ensured,
  profileCtrl.getProfile,
  profileCtrl.createProfileBlock,
  response.toJSON('block')
);

router.put(
  '/profile/blocks/:blockId',
  auth.ensured,
  profileCtrl.getProfile,
  profileCtrl.updateProfile,
  response.toJSON('block')
);

module.exports = router;
