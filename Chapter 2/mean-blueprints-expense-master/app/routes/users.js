'use strict';

const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');

router.post('/users', userCtrl.register);

module.exports = router;
