const Sequelize = require("sequelize");
const { Model } = require("sequelize");

class Modelo_anos extends Model {
  static init(sequelize) {
    super.init(
      {
        id: { type: Sequelize.BIGINT, primaryKey: true },
        tipo: Sequelize.BIGINT,
        id_marca: Sequelize.BIGINT,
        id_modelo: Sequelize.BIGINT,
        id_modelo_ano: Sequelize.STRING(64),
        name: Sequelize.STRING(256)
      },
      {
        sequelize
      }
    );
  }
}

module.exports = Modelo_anos;
