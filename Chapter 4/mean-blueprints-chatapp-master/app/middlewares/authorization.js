'use strict';

module.exports.onlySelf = authorizeOnlySelf;
module.exports.onlyParticipants = authorizeOnlyParticipants;

function authorizeOnlySelf(resource) {
  return function authorizeOnlySelfPolicy(req, res, next) {
    var isSelf = req.resources[resource].user.toString() === req.user._id.toString();

    if (!isSelf) {
      return unauthorized(req, res, next);
    }

    next();
  };
}

function authorizeOnlyParticipants(resource) {
  return function authorizeOnlyParticipantsPolicy(req, res, next) {
    const found = req.resources[resource].participants.find(function(participant) {
      if (participant._id) {
        return participant._id.toString() === req.user._id.toString();
      }

      return participant.toString() === req.user._id.toString();
    });

    if (!found) {
      return unauthorized(req, res, next);
    }

    next();
  }
}

function unauthorized(req, res, next) {
  res.format({
    html: function() {
      res.status(403).send('Forbidden');
    },
    // just in case :)
    text: function() {
      res.status(403).send('Forbidden');
    },
    json: function() {
      res.status(403).json({ message: 'Forbidden' });
    }
  });
}
