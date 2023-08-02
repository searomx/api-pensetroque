const Sequelize = require ('sequelize');
const { Model } = require ('sequelize');

class Cod_ref extends Model {
  static init(sequelize) {
    super.init(
      {
         codRef    : Sequelize.BIGINT,     
         vigencia  : Sequelize.DATEONLY,
         carregada : Sequelize.STRING 
      },
      {
      sequelize, modelName: "cod_ref"
      }
    )
  }
}

module.exports = Cod_ref;



