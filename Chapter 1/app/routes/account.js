'use strict';

var express = require('express');
var router = express.Router();
var accountCtrl = require('../controllers/account');

router.post('/auth/signin', accountCtrl.signin);

module.exports = router;
