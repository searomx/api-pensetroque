const Sequelize = require("sequelize");
const { Model } = require("sequelize");

class SubCategory extends Model {
  static init(sequelize) {
    super.init(
      {
        subcategory_id: {
          type: Sequelize.BIGINT,
          primaryKey: true,
          autoIncrement: true
        },
        subcategory_desc: Sequelize.STRING,
        category_id: Sequelize.BIGINT,
        attributes: Sequelize.TEXT,
        type_id: Sequelize.BIGINT
      },
      {
        sequelize,
        modelName: "subcategory"
      }
    );
  }
}

module.exports = SubCategory;
