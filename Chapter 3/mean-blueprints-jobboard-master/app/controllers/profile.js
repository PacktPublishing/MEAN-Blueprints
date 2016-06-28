'use strict';

const _ = require('lodash');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const ProfileBlock = mongoose.model('ProfileBlock');
const ObjectId = mongoose.Types.ObjectId;

module.exports.getProfile = getUserProfile;
module.exports.createProfileBlock = createUserProfileBlock;
module.exports.updateProfile = updateUserProfile;

function getUserProfile(req, res, next) {
  User
  .findById(req.user._id)
  .select('+profile')
  .exec((err, user) => {
    if (err) {
      return next(err);
    }

    req.resources.user = user;
    next();
  });
}

function createUserProfileBlock(req, res, next) {
  if (!req.body.title) {
    return res.status(400).json({ message: 'Block title is required' });
  }

  var block = new ProfileBlock(req.body);
  //block.data = block.data || [];
  req.resources.user.profile.push(block);

  req.resources.user.save((err, updatedProfile) => {
    if (err) {
      return next(err);
    }

    req.resources.block = block;
    next();
  });
}

function updateUserProfile(req, res, next) {
  // same as calling user.profile.id(blockId)
  // var block = req.resources.user.profile.find(function(b) {
  //   return b._id.toString() === req.params.blockId;
  // });

  let block = req.resources.user.profile.id(req.params.blockId);

  if (!block) {
    return res.status(404).json({ message: '404 not found.'});
  }

  if (!block.title) {
    return res.status(400).json({ message: 'Block title is required' });
  }

  let data = _.pick(req.body, ['title', 'data']);
  _.assign(block, data);

  req.resources.user.save((err, updatedProfile) => {
    if (err) {
      return next(err);
    }

    req.resources.block = block;
    next();
  });
}
