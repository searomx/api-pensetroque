const Sequelize = require("sequelize");
const { Model } = require("sequelize");

class Subclass extends Model {
  static init(sequelize) {
    super.init(
      {
        subclass_id: {
          type: Sequelize.BIGINT,
          primaryKey: true,
          autoIncrement: true
        },
        class_id: Sequelize.BIGINT,
        subclass_desc: Sequelize.STRING(60),
        attributes: Sequelize.TEXT,
        subclass_id_ext: Sequelize.BIGINT
      },
      {
        sequelize,
        modelName: "subclass"
      }
    );
  }
}
module.exports = Subclass;
