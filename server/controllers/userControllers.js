const fs = require("fs"); //memanggil fs

class UserControllers {
  static helloWorld(req, res) {
    res.render("helloWorld"); //memanggil file helloWorld.ejs di file views
  }

  static greeting(req, res) {
    res.render("greeting", { fullname: "Miaaaasa" });
  }

  static viewProduct(req, res) {
    // let dateNow = new Date();
    let readDataProduk = fs.readFileSync("./db/dataProduk.json", "utf-8");
    let dataProd = JSON.parse(readDataProduk); //json.parse() digunakan untuk mengurai data JSON menjadi objek
    let dataProduk = {
      // timestamp: dateNow,
      listProduk: dataProd,
    };
    res.render("dataProduk", { dataProduk });
  }

  static loginFormUser(req, res) {
    res.render("loginForm"); ////memanggil file greeting.ejs di file views
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
}

module.exports = UserControllers;
