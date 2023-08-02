const Sequelize = require("sequelize");
const db = require("../../config/dbSqlServer");
const sequelize = new Sequelize(db);

class QueryExemplo {
  async query(req, res, next) {
    try {
      const dbquery = await sequelize.query(
        "select class_id, class_desc from class ",
        { type: sequelize.QueryTypes.SELECT }
      );
      return res.json(dbquery);
    } catch (e) {
      return res.status(400).json("bad request   " + e);
    }
  }

  async proc(req, res, next) {
    try {
      const param1 = "A";
      const dbproc = await sequelize.query(`testeExemplo :param1;`, {
        replacements: {
          param1: param1
        },
        type: sequelize.QueryTypes.SELECT
      });

      return res.json(dbproc);
    } catch (e) {
      return res.status(400).json("bad request   " + e);
    }
  }
}

module.exports = new QueryExemplo();
