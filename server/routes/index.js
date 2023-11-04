const express = require("express");
const routes = express.Router();
const userRoutes = require("./userRoutes"); //memanggil file userRoutes
const userRegister = require("./userRoutes-registerAccount.js");
const userAddToCart = require("./userRoutes-inputKeranjang.js");
const adminRoutes = require("./adminRoutes");
const adminArticleRoutes = require("./adminRoutes-dataArtikel.js");
const adminKecamatanRoutes = require("./adminRoutes-dataKecamatan.js");
const adminDesaRoutes = require("./adminRoutes-dataDesa.js");
const path = require("path");
const UserControllers = require("../controllers/userControllers");

routes.get("/", UserControllers.viewProduct);

routes.get("/greeting", UserControllers.greeting);

routes.get("/data_produk", UserControllers.viewProduct);

routes.get("/data_artikel", UserControllers.viewArtikel);

////////////////////gambar/////////////////////////
routes.get("../public/Sayuran.png", (req, res) => {
  res.sendFile(path.join(__dirname, "Sayuran.png"));
});

routes.use("/user", userRoutes, userRegister, userAddToCart); //memanggil variabel userRoutes dgn menambahkan /user untuk link
routes.use(
  "/admin",
  adminRoutes,
  adminArticleRoutes,
  adminKecamatanRoutes,
  adminDesaRoutes
);
module.exports = routes; //untuk mengeksport objek router
