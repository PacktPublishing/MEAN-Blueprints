'use strict';

const express = require('express');
const router = express.Router();

class AuthRoutes {
  constructor(Core, Controller) {
    this.controller = Controller;
    this.router = router;
    this.regiterRoutes();
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

module.exports = AuthRoutes;
