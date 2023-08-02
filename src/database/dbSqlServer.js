const Sequelize = require("sequelize");

const Category = require("../app/models/Category");
const Class_table = require("../app/models/Class_table");
const SubCategory = require("../app/models/SubCategory");
const Subclass = require("../app/models/Subclass");
const databaseConfig = require("../config/dbSqlServer");

const models = [Category, Class_table, SubCategory, Subclass];

class DbSqlServer {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map(model => model.init(this.connection));
  }
}

module.exports = new DbSqlServer();
