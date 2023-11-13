const db = require("../db.js");
const dotenv = require("dotenv");
dotenv.config();
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
class DataArtikelControllers {
  static async viewDataArticle(req, res) {
    try {
      const dataArtikel = await db("data_artikel").select("*");
      res.status(200).json(dataArtikel);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async viewDataArticleId(req, res) {
    try {
      const dataArtikel = await db("data_artikel").select("*");
      let idParams = req.params.id_artikel;
      let result;

      for (let i = 0; i < dataArtikel.length; i++) {
        let dataById = dataArtikel[i].id_artikel;

        if (dataById == idParams) {
          result = dataArtikel[i];
        }
      }
      res.status(200).json(result);
      console.log(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async postDataArticle(req, res) {
    const result = await cloudinary.uploader.upload(req.file.path);
    console.log(result.secure_url);

    if (!req.file) {
      return res.status(400).send("Tidak ada file yang diunggah.");
    }
    const { judul_artikel, deskripsi_artikel, sumber_artikel } = req.body;
    let tamptData = {
      judul_artikel,
      deskripsi_artikel,
      gambar_artikel: result.secure_url,
      sumber_artikel,
      tanggal_upload: new Date(),
      tanggal_update: new Date(),
    };
    try {
      const dataProdId = await db("data_artikel")
        .insert(tamptData)
        .returning("id_artikel");
      res.status(201).json(dataProdId);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async putDataArticle(req, res) {
    const result = await cloudinary.uploader.upload(req.file.path);
    console.log(result.secure_url);

    if (!req.file) {
      return res.status(400).send("Tidak ada file yang diunggah.");
    }
    const { id_artikel } = req.params;
    const { judul_artikel, deskripsi_artikel, sumber_artikel } = req.body;
    try {
      const dataProdId = await db("data_artikel")
        .where("id_artikel", "=", id_artikel)
        .update({
          judul_artikel: judul_artikel,
          deskripsi_artikel: deskripsi_artikel,
          gambar_artikel: result.secure_url,
          sumber_artikel: sumber_artikel,
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

  static async deleteDataArticle(req, res) {
    const id_input = req.params.id_artikel;
    try {
      const deleteData = await db("data_artikel")
        .where({ id_artikel: id_input })
        .del();
      res.status(200).json(deleteData);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = DataArtikelControllers;
