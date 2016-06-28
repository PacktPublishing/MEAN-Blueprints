'use strict';

const mongoose = require('mongoose');
const Money = require('./money').schema;
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const Mixed = Schema.Types.Mixed;

var BidderSchema = new Schema({
  profileId:      { type: String },
  additionalData: { type: Mixed },
  auctions: [{
    auction:      { type: ObjectId, ref: 'Auction' },
    status:       { type: String, default: 'active'},
    joinedAt:     { type: Date, default: Date.now }
  }],
  createdAt:      { type: Date, default: Date.now }
});

module.exports = mongoose.model('Bidder', BidderSchema);
