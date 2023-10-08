const express = require("express");
const routes = express.Router();
const userRoutes = require("./userRoutes"); //memanggil file userRoutes
const path = require("path");
const UserControllers = require("../controllers/userControllers");

routes.get("/", UserControllers.helloWorld);

routes.get("/greeting", UserControllers.greeting);

routes.get("/data_produk", UserControllers.viewProduct);

routes.get("/data_artikel", UserControllers.viewArtikel);

routes.get("../public/Sayuran.png", (req, res) => {
  res.sendFile(path.join(__dirname, "Sayuran.png"));
});

routes.use("/user", userRoutes); //memanggil variabel userRoutes dgn menambahkan /user untuk link

module.exports = routes; //untuk mengeksport objek router
