'use strict';

const _ = require('lodash');

let productCatalog;

class ProductsController {
  constructor(core) {
    this.core = core;
    productCatalog = new core.services.ProductCatalog();
  }

  create(req, res, next) {
    productCatalog.add(req.body, (err, product) => {
      if (err && err.name === 'ValidationError') {
        return res.status(400).json(err);
      }

      if (err) {
        return next(err);
      }

      res.status(201).json(product);
    });
  }

  getAll(req, res, next) {
    const limit = +req.query.limit || 10;
    const skip = +req.query.skip || 0;
    const query = {} // you cloud filter products

    productCatalog.list(query, limit, skip, (err, products) => {
      if (err) {
        return next(err);
      }

      res.json(products);
    });
  }

  getOne(req, res, next) {
    productCatalog.details(req.params.sku, (err, product) => {
      if (err) {
        return next(err);
      }

      res.json(product);
    });
  }
}

module.exports = ProductsController;
