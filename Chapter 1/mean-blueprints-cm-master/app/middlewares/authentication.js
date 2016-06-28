'use strict';

module.exports.ensured = ensureAuthenticated;

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.status(401).json({
    message: 'Please authenticate.'
  });
}
