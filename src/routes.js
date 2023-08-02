const { Router } = require("express");

const CargaFipeController = require("./app/controllers/CargaFipeController");
// const QueryExemplo = require("./app/controllers/QueryExemplo");


const routes = new Router();

routes.put("/carga-fipe", CargaFipeController.carga);

// routes.get("/query", QueryExemplo.query);
// routes.put("/proc", QueryExemplo.proc);

module.exports = routes;
