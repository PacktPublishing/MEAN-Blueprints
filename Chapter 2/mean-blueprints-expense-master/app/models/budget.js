'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BudgetSchema = new Schema({
  name: {
    type: String
  },
  value: {
    type: Number,
    default: 0
  },
  currency: {
    type: String,
    default: 'EUR'
  },
  description: {
    type: String
  },
  owner: {
    type: ObjectId,
    ref: 'User',
    required: true
  },
  category: {
    type: ObjectId,
    ref: 'Category'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// compile Budget model
module.exports = mongoose.model('Budget', BudgetSchema);
