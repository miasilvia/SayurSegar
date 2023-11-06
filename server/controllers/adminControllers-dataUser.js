const db = require("../db.js");

class DataUserControllers {
  static async viewDataUser(req, res) {
    try {
      const dataUser = await db("data_user").select("*");
      res.status(200).json(dataUser);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async viewDataUserId(req, res) {
    try {
      const dataUser = await db("data_user").select("*");
      let idParams = req.params.id_user;
      let result;

      for (let i = 0; i < dataUser.length; i++) {
        let dataById = dataUser[i].id_user;

        if (dataById == idParams) {
          result = dataUser[i];
        }
      }
      res.status(200).json(result);
      console.log(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async postDataUserAdmin(req, res) {
    const {
      nama_user,
      username,
      password,
      no_hp,
      email_user,
      alamat_lengkap,
      id_kecamatan,
      id_desa,
      kode_pos,
    } = req.body;
    let tamptData = {
      nama_user,
      username,
      password,
      no_hp,
      email_user,
      alamat_lengkap,
      id_kecamatan,
      id_desa,
      kode_pos,
      role: "admin",
      tanggal_upload: new Date(),
      tanggal_update: new Date(),
    };
    try {
      const dataProdId = await db("data_user")
        .insert(tamptData)
        .returning("id_user");
      res.status(201).json(dataProdId);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async putDataUser(req, res) {
    const { id_user } = req.params;
    const {
      nama_user,
      username,
      password,
      no_hp,
      email_user,
      alamat_lengkap,
      id_kecamatan,
      id_desa,
      kode_pos,
    } = req.body;
    try {
      const dataProdId = await db("data_user")
        .where("id_user", "=", id_user)
        .update({
          nama_user,
          username,
          password,
          no_hp,
          email_user,
          alamat_lengkap,
          id_kecamatan,
          id_desa,
          kode_pos,
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

  static async deleteDataUser(req, res) {
    const id_input = req.params.id_user;
    try {
      const deleteData = await db("data_user")
        .where({ id_user: id_input })
        .del();
      res.status(200).json(deleteData);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = DataUserControllers;
