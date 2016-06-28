'use strict';

const Inventory = require('../models/inventory');
// const NotEnoughStock = {
//   message: 'Stock lever is lower then the desired quantity.'
//   type: 'not_enough_stock_units'
// }
//
// class NotEnoughStock extends Error {
//   constructor(type, message) {
//     super(this);
//
//   }
// }

class InventoryManager {
  constructor(opts, InventoryModel) {
    this.opts = opts || {};
    this.Inventory = InventoryModel || Inventory;
  }

  create(data, callback) {
    data.carted = [];
    this.Inventory.create(data, callback);
  }

  increase(sku, quantity, callback) {
    this._modifyQuantity(sku, quantity, false, callback);
  }

  decrease(sku, quantity, callback) {
    this._modifyQuantity(sku, quantity, true, callback);
  }

  reserve(sku, orderId, quantity, callback) {
    let query = {
      sku: sku,
      qty: { $gte: quantity }
    };

    let update = {
      $inc: { qty: -quantity },
      $push: {
        carted: {
          qty: quantity,
          order: orderId
        }
      }
    };

    this.Inventory.update(query, update, (err, result) => {
      if (err) {
        return callback(err);
      }

      if (result.nModified === 0) {
        let err = new Error('Stock lever is lower then the desired quantity.');
        err.type = 'not_enough_stock_units';
        err.status = 409;
        return callback(err);
      }

      callback(null, {
        sku: sku,
        order: orderId,
        qty: quantity
      });
    });
  }

  _modifyQuantity(sku, qty, reduce, callback) {
    qty = (reduce) ? qty * -1 : qty;

    this.Inventory.update({
      sku: sku
    }, {
      $inc: { qty: qty }
    }, (err, result) => {
      if (err) {
        return callback(err);
      }

      if (result.nModified === 0) {
        let err = new Error('Nothing modified.');
        err.type = 'nothing_modified';
        err.status = 400;
        return callback(err);
      }

      this.Inventory.findOne({ sku: sku }, callback);
    });
  }
}

module.exports = InventoryManager;
