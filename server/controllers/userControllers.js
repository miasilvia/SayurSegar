class UserControllers {
  static helloWorld(req, res) {
    res.render("helloWorld"); //memanggil file helloWorld.ejs di file views
  }

  static greeting(req, res) {
    res.render("greeting", { fullname: "Miaaaasa" });
  }

  static viewProduct(req, res){
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

  }
}

module.exports = UserControllers;
