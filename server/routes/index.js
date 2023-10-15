const express = require("express");
const routes = express.Router();
const userRoutes = require("./userRoutes"); //memanggil file userRoutes
const adminRoutes = require("../admin/routes/allProductRoutes");
const path = require("path");
const UserControllers = require("../controllers/userControllers");
const fs = require("fs"); //memanggil fs

routes.get("/", UserControllers.viewProduct);

routes.get("/greeting", UserControllers.greeting);

routes.get("/data_produk", UserControllers.viewProduct);

routes.get("/data_artikel", UserControllers.viewArtikel);

////////////////////gambar/////////////////////////
routes.get("../public/Sayuran.png", (req, res) => {
  res.sendFile(path.join(__dirname, "Sayuran.png"));
});

routes.use("/user", userRoutes); //memanggil variabel userRoutes dgn menambahkan /user untuk link
routes.use("/admin", adminRoutes);
module.exports = routes; //untuk mengeksport objek router
