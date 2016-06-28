'use strict';

const mongoose = require('mongoose');
const commonHelper = require('../helpers/common');
const Industries = require('../../config/variables/industries');
const Countries = require('../../config/variables/countries');
const Jobtypes = require('../../config/variables/jobtypes');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const indEnum = Industries.map(item => item.slug);
const cntEnum = Countries.map(item => item.code);
const jobEnum = Jobtypes.map(item => item.slug);

let JobSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  slug: {
    type: String
  },
  summary: {
    type: String,
    maxlength: 250
  },
  description: {
    type: String
  },
  type: {
    type: String,
    required: true,
    enum: jobEnum
  },
  company: {
    type: ObjectId,
    required: true,
    ref: 'Company'
  },
  industry: {
    type: String,
    required: true,
    enum: indEnum
  },
  country: {
    type: String,
    required: true,
    enum: cntEnum
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

JobSchema.pre('save', function(next) {
  this.slug = commonHelper.createSlug(this.title);
  next();
});

// compile Job model
module.exports = mongoose.model('Job', JobSchema);
