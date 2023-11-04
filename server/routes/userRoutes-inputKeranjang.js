const express = require("express");
const routes = express.Router();
const InputToCart = require("../controllers/userControllers-inputKeranjang.js");

routes.post("/data-cart", InputToCart.postDataCart);
routes.delete("/data-cart/:id_keranjang", InputToCart.deleteDataCart);

module.exports = routes; //untuk mengeksport objek router
