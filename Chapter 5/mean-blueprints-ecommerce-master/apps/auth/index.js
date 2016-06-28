'use strict'

const express = require('express');
const router = express.Router();
const Controller = require('./controller');

class Auth {
  constructor(config, core, app) {
    this.core = core;
    this.controller = new Controller(core);
    this.app = app;
    this.router = router;
    this.rootUrl = '/auth';
    this.regiterRoutes();
    this.app.use(this.rootUrl, this.router);
  }

  regiterRoutes() {
    this.router.post('/register', this.controller.register);

    /**
     *  Stateful authentication
     */
    this.router.post('/signin', this.controller.signin);
    this.router.get('/signout', this.controller.signout);

    /**
     *  Stateless authentication
     */
    this.router.post('/basic', this.controller.basic);
  }
}

module.exports = Auth;
