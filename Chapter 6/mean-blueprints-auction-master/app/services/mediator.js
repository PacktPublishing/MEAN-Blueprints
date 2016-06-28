'use strict';

const EventEmitter = require('events');
let instance;

class Mediator extends EventEmitter {
  constructor() {
    super();
  }
}

module.exports = function singleton() {
  if (!instance) {
    instance = new Mediator();
  }

  return instance;
}
