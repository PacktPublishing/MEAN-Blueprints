'use strict';

const express = require('express');
const nunjucks = require('nunjucks');
const router = express.Router();
const ProductController = require('./controllers/products');

class Storefront {
  constructor(config, core, app) {
    this.config = config;
    this.core = core;
    this.app = app;
    this.router = router;
    this.rootUrl = '/';
    this.productCtrl = new ProductController(core);
    this.configureViews();
    this.regiterRoutes();
    this.app.use(this.rootUrl, this.router);
  }

  configureViews() {
    let opts = {};

    if (!this.config.nunjucks.cache) {
      opts.noCache = true;
    }

    if (this.config.nunjucks.watch) {
      opts.watch = true;
    }

    let loader = new nunjucks.FileSystemLoader('apps/frontstore/views', opts);

    this.nunjucksEnv = new nunjucks.Environment(loader);
    this.nunjucksEnv.express(this.app);
  }

  regiterRoutes() {
    this.router.get('/', this.productCtrl.home);
  }
}

module.exports = Storefront;
