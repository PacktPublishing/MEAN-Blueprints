'use strict';

const express = require('express');
const router = express.Router();
const authCtrl = require('../controllers/authentication');
// const accountCtrl = require('../controllers/account');

// router.post('/register', accountCtrl.register);

/**
 *  Stateful authentication
 */
router.post('/signin', authCtrl.signin);
router.get('/signout', authCtrl.signout);

module.exports = router;
