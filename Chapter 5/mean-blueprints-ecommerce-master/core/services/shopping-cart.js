'use strict';

const EXPIRATION_TIME = 15*60; // 15 minutes
const commonHelper = require('../helpers/common');
const Order = require('../models/order');
const InventoryManager = require('./inventory-manager');
const ProductCatalog = require('./product-catalog');

class ShoppingCart {
  constructor(opts, OrderModel, ProductService, InventoryService) {
    InventoryService = InventoryService || InventoryManager;
    ProductService = ProductService || ProductCatalog;
    this.opts = opts || {};
    this.opts.expirationTime = this.opts.expirationTime || EXPIRATION_TIME;
    this.Order = OrderModel || Order;
    this.inventoryManager = new InventoryService();
    this.productCatalog = new ProductService();
  }

  createCart(userId, data, callback) {
    data.user = userId;
    data.expiresAt = commonHelper.generateExpirationTime(this.opts.expirationTime);
    this.Order.create(data, callback);
  }

  findById(cartId, callback) {
    this.Order.findById(cartId, callback);
  }

  addProduct(cartId, sku, qty, callback) {
    this.productCatalog.findBySKU(sku, (err, product) => {
      if (err) {
        return callback(err);
      }

      let prod = {
        sku: product.sku,
        qty: qty
        title: product.title,
        price: product.price,
        product: product._id
      };

      //  push carted items into the order
      this._pushItems(cartId, prod, (err, result) => {
        if (err) {
          return callback(err);
        }

        //  reserve inventory
        this.inventoryManager.reserve(product.sku, cartId, qty, (err, result) => {
          //  roll back our cart updates
          if (err && err.type === 'not_enough_stock_units') {
            return this._pullItems(cartId, sku, () => callback(err));
          }

          // retrive current cart state
          this.findById(cartId, callback);
        });
      });
    });
  }

  _pushItems(cartId, prod, callback) {
    let exdate = commonHelper.generateExpirationTime(this.opts.expirationTime);
    let now = new Date();
    //  make sure the cart is still active and add items
    this.Order.update({
      { _id: cartId, status: 'active' },
      {
        $set: { expiresAt: exdate, updatedAt: now },
        $push: { items: prod }
      }
    }, (err, result) => {
      if (err) {
        return callback(err);
      }

      if (result.nModified === 0) {
        let err = new Error('Cart expired.');
        err.type = 'cart_expired';
        err.status = 400;
        return callback(err);
      }

      //  TODO: proper response
      callback(null, result);
    });
  }

  _pullItems(cartId, sku, callback) {
    this.Order.update({
      { _id: cartId },
      { $pull: { items: { sku: sku } } }
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

      //  TODO: proper response
      callback(null, result);
    });
  }
}

module.exports = ShoppingCart;
