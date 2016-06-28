'use strict';

const MODELS_PATH = './models';
const MODELS = ['user', 'token', 'money', 'product', 'order', 'inventory'];
const SERVICES_PATH = './services';
const SERVICES = ['product-catalog'];
const HELPERS_PATH = './helpers';
const HELPERS = ['common', 'password', 'token', 'response'];

const authentication = require('./middlewares/authentication');
// const authorization = require('./middlewares/authorization');

class Core {
  constructor() {
    this.models = {};
    this.helpers = {};
    this.services = {};
    this.loadHelpers();
    this.loadModels();
    this.loadServices();
    this.authentication = authentication;
    // this.authorization = authorization;
  }

  loadModels(callback) {
    MODELS.forEach(model => {
      require(`${MODELS_PATH}/${model}`);
    });

    if (callback) callback();
  }

  loadServices(callback) {
    SERVICES.forEach(service => {
      let C = require(`${SERVICES_PATH}/${service}`);
      //  Get the Class name
      this.services[C.name] = C;
    });

    if (callback) callback();
  }

  loadHelpers(callback) {
    HELPERS.forEach(helper => {
      this.helpers[helper] = require(`${HELPERS_PATH}/${helper}`);
    });

    if (callback) callback();
  }
}

module.exports = Core;
