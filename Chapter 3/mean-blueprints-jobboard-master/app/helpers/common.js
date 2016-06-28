'use strict';

module.exports.createSlug = createSlug;

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
