const express = require("express");
const routes = express.Router();
const userRoutes = require("./userRoutes"); //memanggil file userRoutes
const path = require("path");
const posts = require("../db/dataProduk.json");
const UserControllers = require("../controllers/userControllers");
const fs = require("fs"); //memanggil fs

routes.get("/", UserControllers.helloWorld);

routes.get("/greeting", UserControllers.greeting);

routes.get("/data_produk", UserControllers.viewProduct);

routes.get("/data_artikel", UserControllers.viewArtikel);
/////////////////////////////////////////////
routes.put("/data_produk/:id", (req, res) => {
  let post = posts.find((i) => i.id == req.params.id);
  console.log(post, "sebelum");

  const params = {
    nama_produk: req.body.nama_produk,
    harga_produk: req.body.harga_produk,
  };

  let updateDataProduk = { ...post, ...params };
  let checkId = posts.findIndex((i) => i.id == req.params.id);
  console.log(checkId, "line26");
  posts.splice(checkId, 1, updateDataProduk);
  console.log(posts, "line 28");
  let manipulData = JSON.stringify(posts);
  fs.writeFileSync("./db/dataProduk.json", manipulData);
  res.status(200).json(post);
});
//////////////////////////////
routes.get("../public/Sayuran.png", (req, res) => {
  res.sendFile(path.join(__dirname, "Sayuran.png"));
});

routes.use("/user", userRoutes); //memanggil variabel userRoutes dgn menambahkan /user untuk link

module.exports = routes; //untuk mengeksport objek router
