'use strict';

const mongoose = require('mongoose');
const Thread = mongoose.model('Thread');

module.exports.findById = findThreadById;
module.exports.allByUser = allThreadsByUser;
module.exports.findDirect = findDirectThread;

module.exports.find = findThread;
module.exports.open = openThread;

function findThread(req, res, next) {
  var query = {};

  // if (req.body.participants) {
  //   query = {};
  //   query.$and = [
  //     { participants: { $all: req.body.participants } },
  //     { participants: { $size: req.body.participants.length } }
  //   ];
  // }

  // if (req.body.user) {
  //   query = {};
  //   query.$and = [
  //     { participants: { $all: [req.user._id, req.body.user] } },
  //     { participants: { $size: 2 } }
  //   ];
  // }

  if (req.body.userId) {
    query = {};
    query.$and = [
      { participants: req.body.userId },
      { participants: req.user._id.toString() }
    ];
  }

  if (req.body.participants) {
    query = {};
    query.$and = req.body.participants.map(participant => {
      return { participants: participant };
    });
  }

  Thread
  .findOne(query)
  .populate('participants')
  .exec((err, thread) => {
    if (err) {
      return next(err);
    }

    req.resources.thread = thread;
    next();
  });
  // Thread
  // .findOne(query)
  // .populate('participants')
  // .exec(function(err, thread) {
  //   if (err) {
  //     return next(err);
  //   }
  //
  //   req.resources.thread = thread;
  //   next();
  // });
}

function findThreadById(req, res, next) {
  Thread
  .findById(req.params.threadId, (err, thread) => {
    if (err) {
      return next(err);
    }

    req.resources.thread = thread;
    next();
  });
}

function findDirectThread(req, res, next) {
  Thread
  .findOne({
    $and: [
      { participants: req.user._id },
      { participants: req.body.user },
      { participants: { $size: 2 } }
    ]
  }, (err, thread) => {
    if (err) {
      return next(err);
    }

    req.resources.thread = thread;
    next();
  });
}

function allThreadsByUser(req, res, next) {
  Thread
  .find({
    participants: req.user._id
  })
  .populate('participants')
  .exec((err, threads) => {
    if (err) {
      return next(err);
    }

    req.resources.threads = threads;
    next();
  });
}

function openThread(req, res, next) {
  var data = {};

  //  If we have already found the thread
  //  we don't need to create a new one
  if (req.resources.thread) {
    return next();
  }

  data.participants = req.body.participants || [req.user._id, req.body.user];

  Thread
  .create(data, (err, thread) => {
    if (err) {
      return next(err);
    }

    thread.populate('participants', (err, popThread) => {
      if (err) {
        return next(err);
      }

      req.resources.thread = popThread;
      next();
    });
  });
}
