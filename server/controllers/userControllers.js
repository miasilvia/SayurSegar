const fs = require("fs"); //memanggil fs
const db = require("../db.js");

class UserControllers {
  static helloWorld(req, res) {
    res.render("helloWorld"); //memanggil file helloWorld.ejs di file views
  }

  static greeting(req, res) {
    res.render("greeting", { fullname: "Miaaaasa" });
  }

  static async viewProduct(req, res) {
    try {
      const dataProduks = await db("data_produk").select("*");
      let dataProduk = {
        listProduk: dataProduks,
      };

      res.render("index", { dataProduk });
      console.log(dataProduk);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static loginFormUser(req, res) {
    res.render("loginForm"); ////memanggil file greeting.ejs di file views
  }
  static registerFormUser2(req, res) {
    res.render("register-user"); ////memanggil file greeting.ejs di file views
  }
  static loginUserResult(req, res) {
    const { username, password } = req.body;
    console.log(`${username} dan ${password}`);
    res.status(200).json({
      message: `Anda berhasil login dengan username ${username} dan password ${password}`,
    });
  }

  static registerFormUser(req, res) {
    const { username, password } = req.body;
    console.log(`${username} dan ${password}`);
    res.status(201).json({
      message: `username anda ${username} dan password anda ${password} berhasil ditambahkan`,
    });
  }

  static viewArtikel(req, res) {
    let dataArtikel = {
      listArtikel: [
        {
          id_artikel: "ATL0001",
          judul_artikel: "8 Manfaat Makan Buah dan Sayur bagi Siswa",
          deskripsi_artikel: "ini deskripsi artikel",
          tanggal_update: "12/12/2023",
          gambar_artikel: "artikel1.jpg",
          sumber_artikel: "compas.com",
        },
        {
          id_artikel: "ATL0002",
          judul_artikel: "8 Manfaat Buah Pisang",
          deskripsi_artikel: "ini deskripsi artikel 2",
          tanggal_update: "12/12/2023",
          gambar_artikel: "artikel2.jpg",
          sumber_artikel: "compas.com",
        },
        {
          id_artikel: "ATL0003",
          judul_artikel: "5 sayuran yang dapat menurunkan berat badan",
          deskripsi_artikel: "ini deskripsi artikel 3",
          tanggal_update: "12/12/2023",
          gambar_artikel: "artikel3.jpg",
          sumber_artikel: "compas.com",
        },
      ],
    };
    res.render("dataArtikel", { dataArtikel });
  }
  static viewDataProductbyId(req, res) {
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
  }
}

module.exports = UserControllers;
