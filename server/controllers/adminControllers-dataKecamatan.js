const db = require("../db.js");

class DataKecamatanControllers {
  static async viewDataKecamatan(req, res) {
    try {
      const dataKecamatan = await db("data_kecamatan").select("*");
      res.status(200).json(dataKecamatan);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async viewDataKecamatanId(req, res) {
    try {
      const dataKecamatan = await db("data_kecamatan").select("*");
      let idParams = req.params.id_kecamatan;
      let result;

      for (let i = 0; i < dataKecamatan.length; i++) {
        let dataById = dataKecamatan[i].id_kecamatan;

        if (dataById == idParams) {
          result = dataKecamatan[i];
        }
      }
      res.status(200).json(result);
      console.log(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async postDataKecamatan(req, res) {
    const { nama_kecamatan, ongkos_kirim } = req.body;
    let tamptData = {
      nama_kecamatan,
      ongkos_kirim,
    };
    try {
      const dataProdId = await db("data_kecamatan")
        .insert(tamptData)
        .returning("id_kecamatan");
      res.status(201).json(dataProdId);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async putDataKecamatan(req, res) {
    const { id_kecamatan } = req.params;
    const { nama_kecamatan, ongkos_kirim } = req.body;
    try {
      const dataProdId = await db("data_kecamatan")
        .where("id_kecamatan", "=", id_kecamatan)
        .update({
          nama_kecamatan: nama_kecamatan,
          ongkos_kirim: ongkos_kirim,
        });
      res.status(200).json(dataProdId);
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Terjadi kesalahan saat mengubah data produk!",
      });
    }
  }

  static async deleteDataKecamatan(req, res) {
    const id_input = req.params.id_kecamatan;
    try {
      const deleteData = await db("data_kecamatan")
        .where({ id_kecamatan: id_input })
        .del();
      res.status(200).json(deleteData);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = DataKecamatanControllers;
