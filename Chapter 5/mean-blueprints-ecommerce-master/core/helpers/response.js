'use strict';

module.exports.toJSON = sendJSONresponse;

/**
 *  Generate a JSON response function
 *
 *  @param {Object} prop - response object
 *  @param {Number} status - response status
 *  @return {Function} response callback - connect like middlaware function
 */
function sendJSONresponse(prop, status) {
  return function(req, res, next) {
    res.status(200 || status).json(req.resources[prop]);
  }
}
