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

//////////////////method GET by ID////////////////////////////
//runing di postman params http://localhost:3000/data_produk/posts/:id_produk lalu isi id valuenya di path variabel
routes.get("/data_produk/get/:id_produk", (req, res) => {
  let idParams = req.params.id_produk;
  let result;

  for (let i = 0; i < posts.length; i++) {
    let dataById = posts[i].id_produk;

    if (dataById == idParams) {
      result = posts[i];
    }
  }
  res.status(200).json(result);
  console.log(result);
});

////////////////////method post by id///////////////////////////////////////////////
routes.post("/data_produk/post", (req, res) => {
  let idDinamic = posts[posts.length - 1].id_produk + 1; //untuk menampilkan id terakhir, lalu ditambahkan 1
  const {
    nama_produk,
    harga_produk,
    stok_produk,
    satuan_produk,
    foto_produk,
    deskripsi_produk,
    diskon_produk,
  } = req.body;
  let tamptData = {
    id_produk: idDinamic,
    nama_produk,
    harga_produk,
    stok_produk,
    satuan_produk,
    foto_produk,
    deskripsi_produk,
    diskon_produk,
  };
  posts.push(tamptData);
  let manipulDataTampData = JSON.stringify(posts);
  fs.writeFileSync("./db/dataProduk.json", manipulDataTampData);
  console.log(manipulDataTampData);
  res.status(201).json(posts);
});

/////////////////////////////////////////////
routes.put("/data_produk/:id_produk", (req, res) => {
  let post = posts.find((i) => i.id_produk == req.params.id_produk);
  console.log(post, "sebelum");

  const params = {
    nama_produk: req.body.nama_produk,
    harga_produk: req.body.harga_produk,
  };

  let updateDataProduk = { ...post, ...params };
  let checkId = posts.findIndex((i) => i.id_produk == req.params.id_produk);
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
