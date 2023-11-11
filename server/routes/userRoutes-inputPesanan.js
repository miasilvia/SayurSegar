const express = require("express");
const routes = express.Router();
const InputToOrder = require("../controllers/userControllers-inputPesanan.js");
const multer = require("multer");
routes.post(
  "/user-transaction",
  multer({ storage: multer.diskStorage({}) }).single("bukti_transfer"),
  InputToOrder.postDataOrder2
);
routes.get("/user-transaction", InputToOrder.renderTransactionPage);
module.exports = routes; //untuk mengeksport objek router
