module.exports = {
  dialect: "mssql",
  host: "localhost",
  username: "sa",
  port: 1401,
  password: "PenseTroque19@#",
  database: "master",
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
    freezeTableName: true
  }
};
