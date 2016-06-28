'use strict';

const path = require('path');
const serveStatic = require('serve-static');

class Admin {
  constructor(config, core, app) {
    this.app = app;
    this.root = app.get('root');
    this.rootUrl = '/admin';
    this.serverStaticFiles();
  }

  serverStaticFiles() {
    let folderPath = path.resolve(this.root, __dirname, './public');
    this.app.use(this.rootUrl, serveStatic(folderPath));
  }
}

module.exports = Admin;
