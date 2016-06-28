'use strict';

const ProductsRoutes = require('./routes/products');
const ProductController = require('./controllers/product');

class Api {
  constructor(config, core, app) {
    let productController = new ProductController(core);
    let productRoutes = new ProductsRoutes(core, productController);

    this.config = config;
    this.core = core;
    this.app = app;
    this.root = app.get('root');
    this.rootUrl = '/api';

    this.app.get('/api/status', (req, res, next) => {
      res.json({ message: 'API is running.' });
    });

    this.app.use(this.rootUrl, productRoutes.router);
  }
}

module.exports = Api;
