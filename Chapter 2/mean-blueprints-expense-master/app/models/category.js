'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String
  },
  owner: {
    type: ObjectId,
    ref: 'User',
    required: true
  },
  collaborators: {
    type: [
      {
        type: ObjectId,
        ref: 'User'
      }
    ]
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// compile Category model
module.exports = mongoose.model('Category', CategorySchema);
