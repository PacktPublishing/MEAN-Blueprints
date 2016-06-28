'use strict';

const MAX_PRODUCT_SHOWN = 50;
const _ = require('lodash');
const Product = require('../models/product');

class ProductCatalog {
  constructor(opts, ProductModel) {
    opts = opts || {};
    this.maxProductsShown = opts.maxProductsShown || MAX_PRODUCT_SHOWN;
    this.Product = ProductModel || Product;
  }

  add(data, callback) {
    this.Product.create(data, callback);
  }

  edit(sku, data, callback) {
    //  remove sku; this should not change,
    //  add a new product if it needs to change
    delete data.sku;

    this.Product.findBySKU(sku, (err, product) => {
      if (err) {
        return callback(err);
      }

      _.assign(product, data);
      //  tell mongoose to increment the doc version `__v`
      product.increment();
      product.save(callback);
    });
  }

  list(query, limit, skip, callback) {
    if (typeof query === 'funciton') {
      callback = limit;
      limit = this.maxProductsShown;
      skip = 0;
    }

    // make sure we only allow retriving 100 products from the catalog
    if (+limit > this.maxProductsShown) {
      limit = this.maxProductsShown;
    }

    this.Product.find(query).limit(limit).skip(skip).exec(callback);
  }

  details(sku, callback) {
    this.Product.findBySKU(sku, callback);
  }

  detailsBySlug(slug, callback) {
    this.Product.findBySlug(slug, callback);
  }

  remove(sku, callback) {
    this.Product.findBySKU(sku, (err, product) => {
      if (err) {
        return callback(err);
      }

      product.remove(callback);
    });
  }
}

module.exports = ProductCatalog;
