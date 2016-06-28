'use strict';

var express = require('express');
var router = express.Router();
var authCtrl = require('../controllers/authentication');

router.post('/signin', authCtrl.signin);
router.post('/register', authCtrl.register);

module.exports = router;
