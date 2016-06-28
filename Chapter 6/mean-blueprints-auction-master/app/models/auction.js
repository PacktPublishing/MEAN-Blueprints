'use strict';

const mongoose = require('mongoose');
const Money = require('./money').schema;
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const Mixed = Schema.Types.Mixed;

var AuctionSchema = new Schema({
  item:           { type: Mixed },
  startingPrice:  { type: Money },
  currentPrice:   { type: Money },
  endPrice:       { type: Money },
  minAmount:      { type: Money },
  bids: [{
    bidder:       { type: ObjectId, ref: 'Bidder' },
    amount:       { type: Number, default: 0 },
    createdAt:    { type: Date, default: Date.now }
  }],
  status:         { type: String, default: 'active' },
  startsAt:       { type: Date },
  endsAt:         { type: Date },
  createdAt:      { type: Date, default: Date.now }
});

module.exports = mongoose.model('Auction', AuctionSchema);
