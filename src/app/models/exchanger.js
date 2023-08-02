const Sequelize = require ('sequelize');
const { Model } = require ('sequelize');

class exchanger extends Model {
  static init(sequelize) {
    super.init(
      {
      exchanger_name: Sequelize.STRING,
      exchanger_register_ext: Sequelize.STRING,
      exchanger_email: Sequelize.STRING,
      exchanger_phone: Sequelize.STRING,
      exchanger_password: Sequelize.STRING,
      exchanger_birthday: Sequelize.STRING,
      time_contact_begin: Sequelize.STRING,
      time_contact_end: Sequelize.STRING,
      },
      {
      sequelize,
      }
    )
  }
}

module.exports = exchanger;