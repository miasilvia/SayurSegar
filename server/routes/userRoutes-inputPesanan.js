const express = require("express");
const routes = express.Router();
const InputToOrder = require("../controllers/userControllers-inputPesanan.js");

routes.post("/order", InputToOrder.postDataOrder);

module.exports = routes; //untuk mengeksport objek router
