const db = require("../db.js");
class InputToOrder {
  static async postDataOrder(req, res) {
    try {
      // data transaksi berdasarkan id_user
      const { id_user, bukti_transfer } = req.body;
      if (!id_user || !bukti_transfer) {
        return res.status(400).json({ message: "Data tidak lengkap" });
      }
      const orderItems = await db("data_transaksi")
        .join(
          "data_keranjang",
          "data_transaksi.id_keranjang",
          "=",
          "data_keranjang.id_keranjang"
        )
        .where({
          "data_keranjang.id_user": id_user,
          "data_transaksi.status_transaksi": false,
        })
        .select("*");

      // Cek kode_transaksi sudah ada di data_pesanan belum
      const existingOrder = await db("data_pesanan")
        .where({ kode_transaksi: orderItems[0].kode_transaksi })
        .first();

      // Jika sudah ada, lewati proses ini
      if (existingOrder) {
        return res.status(400).json({ message: "Order sudah ada" });
      }

      let tamptData = {
        id_transaksi: orderItems[0].id_transaksi,
        kode_transaksi: orderItems[0].kode_transaksi,
        bukti_transfer: bukti_transfer,
        status_pesanan: "belum dikirim",
        tanggal_pesanan: new Date(),
      };

      // Masukkan data ke data_pesanan
      const dataProdId = await db("data_pesanan")
        .insert(tamptData)
        .returning("id_pesanan");

      // Ubah status transaksi menjadi true untuk semua id_transaksi
      for (let i = 0; i < orderItems.length; i++) {
        await db("data_transaksi")
          .where({ id_transaksi: orderItems[i].id_transaksi })
          .update({ status_transaksi: true });
      }

      // Kirim respons
      res.status(201).json(dataProdId);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Terjadi kesalahan saat checkout", error: error });
      console.log(error);
    }
  }
}

module.exports = InputToOrder;
