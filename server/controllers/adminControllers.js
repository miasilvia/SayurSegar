const db = require("../db.js");
//konfigurasi claudinary
const dotenv = require("dotenv");
dotenv.config();
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
class DataProductControllers {
  static async vieDataAllProduct(req, res) {
    try {
      const dataProduk = await db("data_produk").select("*");
      res.status(200).json(dataProduk);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async viewDataProduct(req, res) {
    try {
      const dataProduk = await db("data_produk").select("*");
      let idParams = req.params.id_produk;
      let result;

      for (let i = 0; i < dataProduk.length; i++) {
        let dataById = dataProduk[i].id_produk;

        if (dataById == idParams) {
          result = dataProduk[i];
        }
      }
      res.status(200).json(result);
      console.log(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async postDataProduct(req, res) {
    const result = await cloudinary.uploader.upload(req.file.path);
    console.log(result.secure_url);

    if (!req.file) {
      return res.status(400).send("Tidak ada file yang diunggah.");
    }
    const {
      nama_produk,
      harga_produk,
      stok_produk,
      satuan_produk,
      deskripsi_produk,
      diskon_produk,
    } = req.body;
    let tamptData = {
      nama_produk,
      harga_produk,
      stok_produk,
      satuan_produk,
      foto_produk: result.secure_url,
      deskripsi_produk,
      diskon_produk,
      tanggal_upload: new Date(),
      tanggal_update: new Date(),
    };
    try {
      const dataProdId = await db("data_produk")
        .insert(tamptData)
        .returning("id_produk");
      res.status(201).json(dataProdId);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async putDataProduct(req, res) {
    const result = await cloudinary.uploader.upload(req.file.path);
    console.log(result.secure_url);

    if (!req.file) {
      return res.status(400).send("Tidak ada file yang diunggah.");
    }
    const { id_produk } = req.params;
    const {
      nama_produk,
      harga_produk,
      stok_produk,
      satuan_produk,
      deskripsi_produk,
      diskon_produk,
    } = req.body;
    try {
      const dataProdId = await db("data_produk")
        .where("id_produk", "=", id_produk)
        .update({
          nama_produk: nama_produk,
          harga_produk: harga_produk,
          stok_produk: stok_produk,
          satuan_produk: satuan_produk,
          foto_produk: result.secure_url,
          deskripsi_produk: deskripsi_produk,
          diskon_produk: diskon_produk,
          tanggal_update: new Date(),
        });

      res.status(200).json(dataProdId);
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Terjadi kesalahan saat mengubah data produk!",
      });
    }
  }

  static async deleteDataProduct(req, res) {
    const id_input = req.params.id_produk;
    try {
      const deleteData = await db("data_produk")
        .where({ id_produk: id_input })
        .del();
      res.status(200).json(deleteData);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = DataProductControllers;
