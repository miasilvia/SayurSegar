const express = require("express");
const routes = express.Router();
const userRoutes = require("./userRoutes"); //memanggil file userRoutes

routes.get("/", (req, res) => res.send("Hello World"));

routes.get("/data_produk", (req, res) => {
  let dateNow = new Date();
  let dataProduk = {
    timestamp: dateNow,
    namaProduk: ["wortel", "buncis", "kubis"],
  };
  res.send(dataProduk);
});

routes.use("/user", userRoutes); //memanggil variabel userRoutes dgn menambahkan /user untuk link

module.exports = routes; //untuk mengeksport objek router
