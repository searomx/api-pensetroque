const Sequelize = require("sequelize");

const Cod_ref = require("../app/models/Cod_ref");
const Marcas = require("../app/models/Marcas");
const Modelos = require("../app/models/Modelos");
const Modelo_anos = require("../app/models/Modelo_anos");

const databaseConfig = require("../config/dbMySql");

const models = [Cod_ref, Marcas, Modelos, Modelo_anos];

class dbMySql {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map(model => model.init(this.connection));
  }
}

module.exports = new dbMySql();
