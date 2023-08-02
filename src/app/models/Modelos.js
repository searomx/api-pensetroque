const Sequelize = require("sequelize");
const { Model } = require("sequelize");

class Modelos extends Model {
  static init(sequelize) {
    super.init(
      {
        id: { type: Sequelize.BIGINT, primaryKey: true },
        tipo: Sequelize.BIGINT,
        id_marca: Sequelize.BIGINT,
        id_marca_modelo: Sequelize.BIGINT,
        name: Sequelize.STRING(256)
      },
      {
        sequelize,
        modelName: "modelos"
      }
    );
  }
}
module.exports = Modelos;
