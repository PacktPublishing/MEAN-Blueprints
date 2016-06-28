'use strict';

const DEFAULT_URL = 'http://localhost:3000/api';
const CONTENT_HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
};

const request = require('request');

class RequestOptions {
  constructor(opts) {
    let headers = Object.assign({}, CONTENT_HEADERS, opts.headers);

    this.method = opts.method || 'GET';
    this.url = opts.url;
    this.json = !!opts.json;
    this.headers = headers;
    this.body = opts.body;
  }

  addHeader(key, value) {
    this.headers[key] = value;
  }
}

class EcommerceClient {
  constructor(opts) {
    this.request = request;
    this.url = opts.url || DEFAULT_URL;
  }

  getProducts(opts, callback) {
    let req = new RequestOptions({
      url: `${this.url}/api/products`
    });
    req.addHeader('Authorization', `Bearer ${opts.token}`);

    this.request(req, function(err, res, body) => {
      callback(err, body);
    })
  }

  authenticate(email, password, callback) {
    let req = new RequestOptions({
      method: 'POST',
      url: `${this.url}/auth/basic`
    });
    let basic = btoa(`${email}:${password}`);

    req.addHeader('Authorization', `Basic ${basic}`);

    this.request(req, function(err, res, body) => {
      callback(err, body);
    })
  }
}
