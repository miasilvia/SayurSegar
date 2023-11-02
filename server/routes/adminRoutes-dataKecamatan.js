const express = require("express");
const routes = express.Router();
const path = require("path");
const DataKecamatanControllers = require("../controllers/adminControllers-dataKecamatan.js");

routes.get("/data_kecamatan", DataKecamatanControllers.viewDataKecamatan);
routes.get(
  "/data_kecamatan/:id_kecamatan",
  DataKecamatanControllers.viewDataKecamatanId
);
routes.post("/data_kecamatan", DataKecamatanControllers.postDataKecamatan);
routes.put(
  "/data_kecamatan/:id_kecamatan",
  DataKecamatanControllers.putDataKecamatan
);
routes.delete(
  "/data_kecamatan/:id_kecamatan",
  DataKecamatanControllers.deleteDataKecamatan
);

module.exports = routes; //untuk mengeksport objek router
