const db = require("../db.js");

class DataAccountUserControllers {
  static async viewDataUserId(req, res) {
    if (!req.session.user) {
      return res.status(401).json({ message: "Please login first" });
    }
    try {
      const user = await db("data_user")
        .join("data_desa", "data_user.id_desa", "=", "data_desa.id_desa")
        .join(
          "data_kecamatan",
          "data_user.id_kecamatan",
          "=",
          "data_kecamatan.id_kecamatan"
        )
        .where("id_user", "=", req.session.user.id_user)
        .select(
          "data_user.*",
          "data_desa.nama_desa",
          "data_kecamatan.nama_kecamatan"
        );
      const kecamatan = await db("data_kecamatan").select("*");
      const desa = await db("data_desa").select("*");
      res.render("user-dataAccount", { user: user[0], kecamatan, desa });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Terjadi kesalahan saat mengambil data pengguna!",
      });
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
      res.status(200).json({ message: "Data Akun anda berhasil diubah" });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Terjadi kesalahan saat mengubah data produk!",
      });
    }
  }
}

module.exports = DataAccountUserControllers;
