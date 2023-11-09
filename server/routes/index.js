const express = require("express");
const session = require("express-session"); //untuk autentifikasi user login
const routes = express.Router();
routes.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // set to true if your using https
  })
);
const userRoutes = require("./userRoutes"); //memanggil file userRoutes
const userRegister = require("./userRoutes-registerAccount.js");
const userAddToCart = require("./userRoutes-inputKeranjang.js");
const userInputTransaction = require("./userRoutes-transaction.js");
const userInputOrder = require("./userRoutes-inputPesanan.js");
const userLogin = require("./userRoutes-login.js");

const adminRoutes = require("./adminRoutes");
const adminArticleRoutes = require("./adminRoutes-dataArtikel.js");
const adminKecamatanRoutes = require("./adminRoutes-dataKecamatan.js");
const adminDesaRoutes = require("./adminRoutes-dataDesa.js");
const adminDataUser = require("./adminRoutes-dataUser.js");
const adminDataOrder = require("./adminRoutes-dataPesanan.js");

const path = require("path");
const UserControllers = require("../controllers/userControllers");

// routes.use(express.static(__dirname + "/public"));
routes.get("/", UserControllers.viewProduct);

routes.get("/greeting", UserControllers.greeting);

routes.get("/data_artikel", UserControllers.viewArtikel);

////////////////////gambar/////////////////////////
routes.get("../public/Sayuran.png", (req, res) => {
  res.sendFile(path.join(__dirname, "Sayuran.png"));
});

routes.use(
  "/user",
  userRoutes,
  userRegister,
  userAddToCart,
  userInputTransaction,
  userInputOrder,
  userLogin
); //memanggil variabel userRoutes dgn menambahkan /user untuk link
routes.use(
  "/admin",
  adminRoutes,
  adminArticleRoutes,
  adminKecamatanRoutes,
  adminDesaRoutes,
  adminDataUser,
  adminDataOrder
);
module.exports = routes; //untuk mengeksport objek router
