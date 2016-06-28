'use strict';

const express = require('express');
const router = express.Router();

class ProductsRoutes {
  constructor(core, controller) {
    this.core = core;
    this.controller = controller;
    this.router = router;
    this.authBearer = this.core.authentication.bearer;
    this.regiterRoutes();
  }

  regiterRoutes() {
    this.router.post(
      '/products',
      this.authBearer(),
      this.controller.create
    );

    this.router.get(
      '/products',
      this.authBearer(),
      this.controller.getAll
    );

    this.router.get(
      '/products/:sku',
      this.authBearer(),
      this.controller.getOne
    );
  }
}

module.exports = ProductsRoutes;
