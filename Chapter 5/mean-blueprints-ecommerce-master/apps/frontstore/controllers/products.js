'use strict';

let productCatalog;

class ProductsController {
  constructor(core) {
    this.core = core;
    productCatalog = new core.services.ProductCatalog();
  }

  home(req, res, next) {
    productCatalog.list({}, 10, 0, (err, products) => {
      if (err) {
        next(err);
      }

      res.render('home', { products: products });
    });
  }
}

module.exports = ProductsController;
