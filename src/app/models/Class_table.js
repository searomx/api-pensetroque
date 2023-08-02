const Sequelize = require("sequelize");
const { Model } = require("sequelize");

class Class_table extends Model {
  static init(sequelize) {
    super.init(
      {
        class_id: {
          type: Sequelize.BIGINT,
          primaryKey: true,
          autoIncrement: true
        },
        class_desc: Sequelize.STRING(60),
        subcategory_id: Sequelize.BIGINT,
        attributes: Sequelize.TEXT,
        class_id_ext: Sequelize.BIGINT,
        type_id: Sequelize.BIGINT
      },
      {
        sequelize,
        modelName: "class_table"
      }
    );
  }
}

module.exports = Class_table;
