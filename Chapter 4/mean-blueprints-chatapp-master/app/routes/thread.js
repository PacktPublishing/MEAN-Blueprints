'use strict';

const express = require('express');
const router = express.Router();
const threadCtrl = require('../controllers/thread');
const messageCtrl = require('../controllers/message');
const auth = require('../middlewares/authentication');
const authorize = require('../middlewares/authorization');
const response = require('../helpers/response');

//  Get all users threads
router.get(
  '/threads',
  auth.ensured,
  threadCtrl.allByUser,
  response.toJSON('threads')
);

//  Open a thread
router.post(
  '/thread/open',
  auth.ensured,
  threadCtrl.find,
  threadCtrl.open,
  response.toJSON('thread')
);

//  Get thread by id and check if user is participant
router.get(
  '/threads/:threadId',
  auth.ensured,
  threadCtrl.findById,
  authorize.onlyParticipants('thread'),
  response.toJSON('thread')
)

//  Get all messages for a thread
router.get(
  '/threads/:threadId/messages',
  auth.ensured,
  threadCtrl.findById,
  authorize.onlyParticipants('thread'),
  messageCtrl.findByThread,
  response.toJSON('messages')
);

module.exports = router;
