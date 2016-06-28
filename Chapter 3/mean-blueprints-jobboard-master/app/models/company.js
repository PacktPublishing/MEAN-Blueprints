'use strict';

const mongoose = require('mongoose');
const commonHelper = require('../helpers/common');
const Countries = require('../../config/variables/countries');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const cntEnum = Countries.map(item => item.code);

let CompanySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  slug: {
    type: String
  },
  owner: {
    type: ObjectId,
    required: true,
    ref: 'User'
  },
  members: {
    type: Array,
    default: []
  },
  summary: {
    type: String
  },
  country: {
    type: String,
    required: true,
    enum: cntEnum
  },
  address: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

CompanySchema.pre('save', function(next) {
  this.slug = commonHelper.createSlug(this.name);
  next();
});

// compile Company model
module.exports = mongoose.model('Company', CompanySchema);
