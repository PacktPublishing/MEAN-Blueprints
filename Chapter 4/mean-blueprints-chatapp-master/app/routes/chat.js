'use strict';

var express = require('express');
var router = express.Router();
var threadCtrl = require('../controllers/thread');
var auth = require('../middlewares/authentication');
var authorize = require('../middlewares/authorization');
var response = require('../helpers/response');

router.post(
  '/chat/start',
  auth.ensured,
  threadCtrl.allByUser,
  function(req, res, next) {
    var payload = {};

    payload.self = req.user._id;
    payload.threads = req.resources.threads || [];
    payload.online = req.resources.online || [];
    payload.url = '';

    req.resources.payload = payload;
    next();
  },
  response.toJSON('payload')
);
//router.post('/thread/open', auth.ensured, threadCtrl.find, threadCtrl.open, response.toJSON('thread'));

module.exports = router;
