const Sequelize = require("sequelize");
const { Model } = require("sequelize");

class Marcas extends Model {
  static init(sequelize) {
    super.init(
      {
        id: { type: Sequelize.BIGINT, primaryKey: true },
        tipo: Sequelize.BIGINT,
        name: Sequelize.STRING(256)
      },
      {
        sequelize,
        modelName: "marcas"
      }
    );
  }
}

module.exports = Marcas;
