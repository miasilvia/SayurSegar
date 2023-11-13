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

      return res.status(201).json({ message: "Anda berhasil daftar" });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async viewDataDesaByKecamatan(req, res) {
    try {
      const id_kecamatan = req.query.id_kecamatan;
      const dataDesa = await db("data_desa").select("*");
      const dataKecamatan = await db("data_kecamatan").select("*");

      res.render("register-user", { dataKecamatan, dataDesa });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = RegisterAccountUser;
