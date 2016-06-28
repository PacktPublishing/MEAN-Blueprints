'use strict';

const express = require('express');
const router = express.Router();
const authCtrl = require('../controllers/authentication');
const auth = require('../middlewares/authentication');

router.post('/basic', authCtrl.basic);
router.get('/info', auth.bearer(), authCtrl.getAuthUser);

module.exports = router;
