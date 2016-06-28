'use strict';

/**
 *  Module dependencies
 */
const _ = require('lodash');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Company = mongoose.model('Company');
const ProfileBlock = mongoose.model('ProfileBlock');
const ObjectId = mongoose.Types.ObjectId;

/**
 *  Module exports
 */
module.exports.findById = findUserById;
module.exports.getAll = getAllUsers;
module.exports.update = updateUser;
module.exports.delete = deleteUser;
module.exports.getProfile = getUserProfile;
module.exports.updateProfile = updateUserProfile;
module.exports.createProfileBlock = createUserProfileBlock;
module.exports.getUserCompanies = getUserCompanies;
module.exports.getAuthUser = getAuthUser;

function findUserById(req, res, next) {
  if (!ObjectId.isValid(req.params.userId)) {
    return res.status(404).json({ message: '404 not found.'});
  }

  User.findById(req.params.userId, (err, user) => {
    if (err) {
      next(err);
    } else if (user) {
      req.resources.user = user;
      next();
    } else {
      next(new Error('failed to find user'));
    }
  });
};

function getAllUsers(req, res, next) {
  User.find((err, users) => {
    if (err) {
      return next(err);
    }

    req.resources.users = users;
    next();
  });
};

function updateUser(req, res, next) {
  var user = req.resources.user;
  _.assign(user, req.body);

  user.save((err, updatedUser) => {
    if (err) {
      return next(err);
    }

    res.resources.user = updatedUser;
    next();
  });
};

function deleteUser(req, res, next) {
  req.resources.user.remove((err) => {
    if (err) {
      return next(err);
    }

    res.status(204).json();
  });
}

function getUserProfile(req, res, next) {
  User
  .findOne(req.params.userId)
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

function getUserCompanies(req, res, next) {
  Company.find({ owner: req.user._id }, (err, companies) => {
    if (err) {
      return next(err);
    }

    req.resources.companies = companies;
  });
}

function getAuthUser(req, res, next) {
  console.log(req.user.roles);
  console.log(req.user.roles.indexOf('owner'));
  console.log(req.user.roles.indexOf('member'));

  if (req.user.roles.indexOf('owner') !== -1 || req.user.roles.indexOf('member') !== -1) {
    return Company.findOne({ members: req.user._id }, (err, company) => {
      console.log(company);
      if (err) {
        return next(err);
      }

      var user = req.user.toObject();
      user.company = company;
      res.json(user);
    });
  }

  res.json(req.user);
}
