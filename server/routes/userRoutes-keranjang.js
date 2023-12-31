const express = require("express");
const routes = express.Router();
const ProccessToCart = require("../controllers/userControllers-keranjang.js");
const methodOverride = require('method-override');

// gunakan methodOverride dengan header X-HTTP-Method-Override
routes.use(methodOverride('_method'));
routes.get("/data-cart", ProccessToCart.viewDataCartUser);
routes.post("/data-cart", ProccessToCart.postDataCart);
routes.delete("/data-cart/:id_keranjang", ProccessToCart.deleteDataCart);

module.exports = routes; //untuk mengeksport objek router
