'use strict';

const mongoose = require('mongoose');
const Money = require('./money').schema;
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const Mixed = Schema.Types.Mixed;

const OrderSchema = new Schema({
  identifier:   { type: String },
  user:         { type: ObjectId, ref: 'User' },
  type:         { type: String, default: 'cart' },
  //  order status: `active`, `pending`, `completed`, `processing`, `failed`
  //  cart status: `active`, `pending`, `completed`, `expiring`, `expired`
  status:       { type: String, default: 'active' },
  total:        { type: Money },
  details:      { type: Mixed },
  shipping:     { type: Mixed },
  items:        { type: [
    {
      sku:      { type: String },
      qty:      { type: Number, default: 1},
      title:    { type: String },
      price:    { type: Money },
      product:  { type: ObjectId, ref: 'Product' }
    }
  ]},
  expiresAt:    { type: Date, default: null },
  updatedAt:    { type: Date, default: Date.now },
  createdAt:    { type: Date, default: Date.now }
},  {
  toObject:     { virtuals: true },
  toJSON:       { virtuals: true }
});

module.exports = mongoose.model('Order', OrderSchema);
