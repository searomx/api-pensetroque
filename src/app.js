const express = require("express");
const routes = require("./routes");

require("./database/dbSqlServer");
require("./database/dbMySql");

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;
