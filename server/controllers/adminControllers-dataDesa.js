const db = require("../db.js");

class DataDesaControllers {
  static async viewDataDesa(req, res) {
    try {
      const dataDesa = await db("data_desa").select("*");
      res.status(200).json(dataDesa);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async viewDataDesaId(req, res) {
    try {
      const dataDesa = await db("data_desa").select("*");
      let idParams = req.params.id_desa;
      let result;

      for (let i = 0; i < dataDesa.length; i++) {
        let dataById = dataDesa[i].id_desa;

        if (dataById == idParams) {
          result = dataDesa[i];
        }
      }
      res.status(200).json(result);
      console.log(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async postDataDesa(req, res) {
    const { nama_desa, id_kecamatan } = req.body;
    let tamptData = {
      nama_desa,
      id_kecamatan,
    };
    try {
      const dataProdId = await db("data_desa")
        .insert(tamptData)
        .returning("id_desa");
      res.status(201).json(dataProdId);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async putDataDesa(req, res) {
    const { id_desa } = req.params;
    const { nama_desa, id_kecamatan } = req.body;
    try {
      const dataProdId = await db("data_desa")
        .where("id_desa", "=", id_desa)
        .update({
          nama_desa: nama_desa,
          id_kecamatan: id_kecamatan,
        });
      res.status(200).json(dataProdId);
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Terjadi kesalahan saat mengubah data produk!",
      });
    }
  }

  static async deleteDataDesa(req, res) {
    const id_input = req.params.id_desa;
    try {
      const deleteData = await db("data_desa")
        .where({ id_desa: id_input })
        .del();
      res.status(200).json(deleteData);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = DataDesaControllers;
