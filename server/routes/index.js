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
  // let dateNow = new Date();
  let dataProduk = {
    // timestamp: dateNow,
    listProduk: [
      {
        nama_produk: "Wortel",
        harga_produk: 12000,
        stok_produk: 10,
        satuan_produk: "1 kg",
        foto_produk: "wortel.jpg",
        deskripsi_produk: "ini adalah wortel",
        diskon_produk: 2,
      },
      {
        nama_produk: "Tomat",
        harga_produk: 11000,
        stok_produk: 10,
        satuan_produk: "250 g",
        foto_produk: "tomat.jpg",
        deskripsi_produk: "ini adalah tomat",
        diskon_produk: 2,
      },
      {
        nama_produk: "Timun",
        harga_produk: 5000,
        stok_produk: 12,
        satuan_produk: "250 g",
        foto_produk: "timun.jpg",
        deskripsi_produk: "ini adalah timun",
        diskon_produk: 0,
      },
    ],
  };
  // res.send(dataProduk);

  res.render("dataProduk", { dataProduk });
});

routes.get("../public/Sayuran.png", (req, res) => {
  res.sendFile(path.join(__dirname, "Sayuran.png"));
});

routes.use("/user", userRoutes); //memanggil variabel userRoutes dgn menambahkan /user untuk link

module.exports = routes; //untuk mengeksport objek router
