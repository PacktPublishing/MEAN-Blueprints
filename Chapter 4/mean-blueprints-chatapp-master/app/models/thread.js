'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ThreadSchema = new Schema({
  participants: {
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

module.exports = mongoose.model('Thread', ThreadSchema);
