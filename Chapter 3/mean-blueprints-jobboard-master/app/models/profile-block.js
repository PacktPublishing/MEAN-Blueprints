'use strict';

const mongoose = require('mongoose');
const commonHelper = require('../helpers/common');
const Schema = mongoose.Schema;

let ProfileBlock = new Schema({
  title: {
    type: String,
    required: true
  },
  slug: String,
  data: []
});

ProfileBlock.pre('save', function(next) {
  this.slug = commonHelper.createSlug(this.title);
  next();
});

module.exports = mongoose.model('ProfileBlock', ProfileBlock);
