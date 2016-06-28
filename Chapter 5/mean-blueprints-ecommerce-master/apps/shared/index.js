'use strict';

const path = require('path');
const serveStatic = require('serve-static');

class Shared {
  constructor(config, core, app) {
    this.app = app;
    this.root = app.get('root');
    this.rootUrl = '/';
    this.serverStaticFiles();
  }

  serverStaticFiles() {
    let folderPath = path.resolve(this.root, __dirname, './public');
    this.app.use(this.rootUrl, serveStatic(folderPath));
  }
}

module.exports = Shared;
