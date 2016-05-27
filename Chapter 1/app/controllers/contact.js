'use strict';

var mongoose = require('mongoose');
var _ = require('lodash');
var Contact = mongoose.model('Contact');
var ObjectId = mongoose.Types.ObjectId;

module.exports.createContact = function(req, res, next) {
  console.log(req.body);
  Contact.create(req.body, function(err, contact) {
    if (err) {
      return next(err);
    }

    res.status(201).json(contact);
  });
};

module.exports.findById = function(req, res, next, id) {
  if (!ObjectId.isValid(id)) {
    res.status(404).send({ message: 'Not found.'});
  }

  Contact.findById(id, function(err, contact) {
    if (err) {
      next(err);
    } else if (contact) {
      req.contact = contact;
      next();
    } else {
      next(new Error('failed to find contact'));
    }
  });
};

module.exports.getContact = function(req, res, next) {
  if (!req.contact) {
    return next(err);
  }

  res.json(req.contact);
};

module.exports.getContacts = function(req, res, next) {
  var limit = +req.query.limit || 10;
  var offset = +req.query.offset || 0;
  Contact.find({}).skip(offset).limit(limit).sort({createdAt: 'desc'}).exec(function(err, contacts) {
    if (err) {
      return next(err);
    }

    res.json(contacts);
  });
};

module.exports.updateContact = function(req, res, next) {
  console.log(req.body);
  var contact = req.contact;
  console.log(contact);
  _.assign(contact, req.body);
  console.log(contact);
  contact.save(function(err, updatedContact) {
    if (err) {
      return next(err);
    }

    res.json(updatedContact);
  });
};

module.exports.deleteContact = function(req, res, next) {
  req.contact.remove(function(err) {
    if (err) {
      return next(err);
    }

    res.status(204).json();
  });
};
