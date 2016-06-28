'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const Mixed = Schema.Types.Mixed;

const InventorySchema = new Schema({
  sku:            { type: String },
  qty:            { type: Number, default: 0 },
  carted:         { type: [
    {
      qty:        { type: Number, default: 1 },
      order:      { type: ObjectId, ref: 'Order' },
      createdAt:  { type: Date, default: Date.now }
    }
  ]},
  createdAt:      { type: Date, default: Date.now }
});

module.exports = mongoose.model('Inventory', InventorySchema);
