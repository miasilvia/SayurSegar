const express = require("express");
const routes = express.Router();
const path = require("path");
const DataProductControllers = require("../controllers/adminControllers");
const multer = require("multer"); //untuk mengunggah file
//////////////////method GET by ID////////////////////////////
//runing di postman params http://localhost:3000/data_product/get/:id_produk lalu isi id valuenya di path variabel
routes.get("/data_allProduk", DataProductControllers.vieDataAllProduct);
routes.get(
  "/data_product/get/:id_produk",
  DataProductControllers.viewDataProduct
);
routes.post(
  "/data_product/post",
  multer({ storage: multer.diskStorage({}) }).single("foto_produk"),
  DataProductControllers.postDataProduct
);
routes.put(
  "/data_product/:id_produk",
  multer({ storage: multer.diskStorage({}) }).single("foto_produk"),
  DataProductControllers.putDataProduct
);
routes.delete(
  "/data_product/:id_produk",
  DataProductControllers.deleteDataProduct
);

routes.get("../public/Sayuran.png", (req, res) => {
  res.sendFile(path.join(__dirname, "Sayuran.png"));
});

module.exports = routes; //untuk mengeksport objek router
