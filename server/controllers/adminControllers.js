const fs = require("fs");
const dataProducts = require("../../db/dataProduk.json");
class DataProductControllers {
  static viewDataProduct(req, res) {
    try {
      let idParams = req.params.id_produk;
      let result;

      for (let i = 0; i < dataProducts.length; i++) {
        let dataById = dataProducts[i].id_produk;

        if (dataById == idParams) {
          result = dataProducts[i];
        }
      }
      res.status(200).json(result);
      console.log(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static postDataProduct(req, res) {
    try {
      let idDinamic = dataProducts[dataProducts.length - 1].id_produk + 1; //untuk menampilkan id terakhir, lalu ditambahkan 1
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
      dataProducts.push(tamptData);
      let manipulDataTampData = JSON.stringify(dataProducts);
      fs.writeFileSync("./db/dataProduk.json", manipulDataTampData);
      console.log(manipulDataTampData);
      console.log("data yang anda masukkan", tamptData);
      res.status(201).json(dataProducts);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static putDataProduct(req, res) {
    let post = dataProducts.find((i) => i.id_produk == req.params.id_produk);
    console.log(post, "sebelum");

    const params = {
      nama_produk: req.body.nama_produk,
      harga_produk: req.body.harga_produk,
      stok_produk: req.body.stok_produk,
      satuan_produk: req.body.satuan_produk,
      foto_produk: req.body.foto_produk,
      eskripsi_produk: req.body.deskripsi_produk,
      diskon_produk: req.body.diskon_produk,
    };

    let updateDataProduct = { ...post, ...params };
    let checkId = dataProducts.findIndex(
      (i) => i.id_produk == req.params.id_produk
    );
    console.log(checkId, "line26");
    dataProducts.splice(checkId, 1, updateDataProduct);
    console.log(dataProducts, "line 28");
    let manipulData = JSON.stringify(dataProducts);
    fs.writeFileSync("./db/dataProduk.json", manipulData);
    res.status(200).json(post);
  }
  static deleteDataProduct(req, res) {
    const idToDelete = parseInt(req.params.id_produk);
    const existingDataIndex = dataProducts.findIndex(
      (item) => item.id_produk === idToDelete
    );
    const deleteData = dataProducts.splice(existingDataIndex, 1);

    let manipulData = JSON.stringify(dataProducts);

    console.log(dataProducts);
    res.json(deleteData[0]);
    fs.writeFileSync("./db/dataProduk.json", manipulData);
    dataProducts.push(deleteData);
  }
}

module.exports = DataProductControllers;
