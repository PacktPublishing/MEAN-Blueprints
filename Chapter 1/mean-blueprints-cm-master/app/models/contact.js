'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ContactSchema = new Schema({
  email:  {
    type: String
  },
  name: {
    type: String
  },
  city: {
    type: String
  },
  phoneNumber: {
    type: String
  },
  company: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// compile and export the Contact model
module.exports = mongoose.model('Contact', ContactSchema);
