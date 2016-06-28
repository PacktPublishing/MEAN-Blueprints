'use strict';

const CURRENCY = 'USD';
const SCALE_FACTOR = 1000;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ExpenseSchema = new Schema({
  name: {
    type: String
  },
  amount: {
    type: Number,
    default: 0
  },
  currency: {
    type: String,
    default: CURRENCY
  },
  scaleFactor: {
    type: Number,
    default: SCALE_FACTOR
  },
  user: {
    type: ObjectId,
    ref: 'User',
    required: true
  },
  category: {
    type: ObjectId,
    ref: 'Category',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  toObject: {
    virtuals: true
  },
  toJSON: {
    virtuals: true
  }
});

ExpenseSchema.statics.getBalance = getExpensesBalance;

ExpenseSchema.virtual('value')
.set(function(value) {
  if (value) {
    this.set('amount', value * this.scaleFactor);
  }
})
.get(function() {
  return this.amount / this.scaleFactor;
});

/*
ExpenseSchema.pre('save', function(next) {
  if (this.amount !== 0) {
    this.amount = this.value * this.scaleFactor;
  }
  next();
});
*/

/**
 * Gets the balance for a given category, or if not specified for all categories,
 * between a timeframe.
 *
 */
function getExpensesBalance(opts, callback) {
  const query = {};

  // set the current user
  query.user = opts.user;

  if (opts.category || opts.category === null) {
    query.category = new mongoose.Types.ObjectId(opts.category);
  }

  if (opts.startDate && opts.endDate) {
    query.createdAt = {
      $gte: new Date(opts.startDate),
      $lte: new Date(opts.endDate)
    };
  }

  this.model('Expense').aggregate([
    { $match: query },
    { $group: { _id: null, balance: { $sum: '$amount' }, count: { $sum: 1 } } }
  ], (err, result) => {

    // result is an array with a single item, we can just return that
    const final = result[0];
    final.balance = final.balance / SCALE_FACTOR;

    callback(err, final);
  });
}

// compile Expense model
module.exports = mongoose.model('Expense', ExpenseSchema);
