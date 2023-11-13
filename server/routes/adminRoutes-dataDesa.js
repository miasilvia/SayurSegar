const express = require("express");
const routes = express.Router();
const path = require("path");
const DataDesaControllers = require("../controllers/adminControllers-dataDesa.js");

routes.get("/data_desa", DataDesaControllers.viewDataDesa);
routes.get("/data_desa/:id_desa", DataDesaControllers.viewDataDesaId);
routes.post("/data_desa", DataDesaControllers.postDataDesa);
routes.put("/data_desa/:id_desa", DataDesaControllers.putDataDesa);
routes.delete("/data_desa/:id_desa", DataDesaControllers.deleteDataDesa);

module.exports = routes; //untuk mengeksport objek router
