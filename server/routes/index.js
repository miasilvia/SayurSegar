const express = require("express");
const routes = express.Router();
const userRoutes = require("./userRoutes"); //memanggil file userRoutes
const path = require("path");

routes.get("/", (req, res) => {
  // res.send("Hello World");
  res.render("helloWorld"); //memanggil file helloWorld.ejs di file views
});

routes.get("/greeting", (req, res) => {
  // res.send("Hello World");
  res.render("greeting", { fullname: "Miaaaaa" }); ////memanggil file greeting.ejs di file views
});

routes.get("/data_produk", (req, res) => {
  let dateNow = new Date();
  let dataProduk = {
    timestamp: dateNow,
    namaProduk: ["wortel", "buncis", "kubis"],
  };
  res.send(dataProduk);
});

routes.get("../public/Sayuran.png", (req, res) => {
  res.sendFile(path.join(__dirname, "Sayuran.png"));
});

routes.use("/user", userRoutes); //memanggil variabel userRoutes dgn menambahkan /user untuk link

module.exports = routes; //untuk mengeksport objek router
