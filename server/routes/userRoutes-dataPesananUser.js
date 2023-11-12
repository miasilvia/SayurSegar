const express = require("express");
const routes = express.Router();
const DataPesananUser = require("../controllers/userControllers-dataPesananUser.js");
const methodOverride = require("method-override");

// gunakan methodOverride dengan header X-HTTP-Method-Override
routes.use(methodOverride("_method"));
routes.get("/data-pesananUser", DataPesananUser.viewDataPesananUser);
routes.put("/data-pesananUser/:id_pesanan", DataPesananUser.putStatusPesanan);

module.exports = routes; //untuk mengeksport objek router
