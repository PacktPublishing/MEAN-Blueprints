'use strict';

module.exports.createSlug = createSlug;
module.exports.generateExpirationTime = generateExpirationTime;

/**
 *  Creates a slug from a text
 *  also removes special characters
 *
 *  example:
 *    'some text here' -> 'some-text-here'
 *
 *  @param {String} value
 *  @return {String} slug
 */
function createSlug(value) {
   return value
   .toLowerCase()
   .replace(/[^\w\s]+/g,'')
   .trim()
   .replace(/[\s]+/g,'-');
}

/**
 *  Generates an expiration datetime
 *
 *  @param {Number} seconds - added to current datetime
 *  @return {Date} exdate - expiration datetime
 */
function generateExpirationTime(seconds) {
  let exdate = new Date();
  exdate.setTime(exdate.getTime() + (seconds*1000));

  return exdate;
}
