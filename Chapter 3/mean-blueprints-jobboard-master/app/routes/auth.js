'use strict';

const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authentication');
const authCtrl = require('../controllers/authentication');
const userCtrl = require('../controllers/user');
const accountCtrl = require('../controllers/account');

router.post('/signin', authCtrl.signin);
router.get('/signout', authCtrl.signout);

router.post('/register', accountCtrl.register);
router.get('/info', auth.ensured, userCtrl.getAuthUser);

module.exports = router;
