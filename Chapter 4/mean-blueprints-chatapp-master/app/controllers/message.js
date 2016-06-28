'use strict';

const MAX_LIMIT = 50;

const mongoose = require('mongoose');
const Thread = mongoose.model('Thread');
const Message = mongoose.model('Message');
const ObjectId = mongoose.Types.ObjectId;

module.exports.findByThread = findMessagesByThread;

function findMessagesByThread(req, res, next) {
  const limit = +req.query.limit || MAX_LIMIT;
  const skip = +req.query.skip || 0;

  let query = {
    thread: req.resources.thread._id
  };

  if (req.query.beforeId) {
    query._id = { $lt: new ObjectId(req.query.sinceId) };
  }

  Message
  .find(query)
  .limit(limit)
  .skip(skip)
  .sort({ createdAt: 'asc' })
  .populate('sender')
  .exec((err, messages) => {
    if (err) {
      return next(err);
    }

    req.resources.messages = messages;
    next();
  });
}
