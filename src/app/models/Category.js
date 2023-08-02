const Sequelize = require ('sequelize');
const { Model } = require ('sequelize');

class Category extends Model {
  static init(sequelize) {
    super.init(
      {
        category_desc: Sequelize.STRING(60),
        attributes: Sequelize.TEXT
      },
      {
      sequelize, modelName: "category"
      }
    )
  }
}

module.exports = Category;


