const db = require("../db.js");
class RegisterAccountUser {
  static async postDataAccountUser(req, res) {
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
      role: "customer",
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
}

module.exports = RegisterAccountUser;
