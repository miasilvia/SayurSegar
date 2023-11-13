const db = require("../db.js");

class DataPesananUser {
  static async viewDataPesananUser(req, res) {
    if (!req.session.user) {
      return res.status(401).json({ message: "Please login first" });
    }
    try {
      const id_user = req.session.user.id_user; //id_user yg sedang login
      const dataPesanan = await db("data_pesanan")
        .join(
          "data_transaksi",
          "data_pesanan.id_transaksi",
          "=",
          "data_transaksi.id_transaksi"
        )
        .join(
          "data_keranjang",
          "data_transaksi.id_keranjang",
          "=",
          "data_keranjang.id_keranjang"
        )
        .where("data_keranjang.id_user", "=", id_user)
        .select("data_pesanan.*", "data_transaksi.*", "data_keranjang.*");
      res.render("user-dataPesanan", { dataPesanan: dataPesanan });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async putStatusPesanan(req, res) {
    const { id_pesanan } = req.params;
    try {
      const dataProdId = await db("data_pesanan")
        .where("id_pesanan", "=", id_pesanan)
        .update({
          status_pesanan: "diterima",
          tanggal_selesai: new Date(),
        });
      res.redirect("/user/data-pesananUser");
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Terjadi kesalahan saat mengubah data produk!",
      });
    }
  }
}

module.exports = DataPesananUser;
