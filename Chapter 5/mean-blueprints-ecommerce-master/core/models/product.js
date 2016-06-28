'use strict';

const mongoose = require('mongoose');
const Money = require('./money').schema;
const commonHelper = require('../helpers/common');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const Mixed = Schema.Types.Mixed;

const ProductSchema = new Schema({
  sku:          { type: String, required: true },
  category:     { type: String },
  title:        { type: String, required: true },
  summary:      { type: String },
  description:  { type: String },
  slug:         { type: String },
  images:       { type: [
    {
      caption:  { type: String },
      filename: { type: String }
    }
  ] },
  price:        { type: Money },
  details:      { type: Mixed },
  active:       { type: Boolean, default: false }
});

ProductSchema.pre('save', function(next) {
  this.slug = commonHelper.createSlug(this.title);
  next();
});

ProductSchema.statics.findBySKU = function findBySKU(sku, callback) {
  this.findOne({ sku: sku }, callback);
}

ProductSchema.statics.findBySlug = function findBySlug(sku, callback) {
  this.findOne({ slug: slug }, callback);
}

// ProductSchema
// .virtual('price.display')
// .set(function(value) {
//   if (value) {
//     this.set('price.amount', value * this.price.factor);
//   }
// })
// .get(function() {
//   return this.price.amount / this.price.factor;
// });

module.exports = mongoose.model('Product', ProductSchema);
