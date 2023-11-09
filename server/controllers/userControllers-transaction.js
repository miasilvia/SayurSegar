const db = require("../db.js");
class InputToTransaction {
  static async postDataTransaction(req, res) {
    try {
      // Dapatkan data keranjang berdasarkan id_user
      const { id_user } = req.body;
      const cartItems = await db("data_keranjang")
        .where({ id_user, status_keranjang: false })
        .select("*");

      // Buat array untuk menyimpan semua promise
      let promises = [];

      // Buat kode transaksi unik
      const uniqueCode = Math.floor(Math.random() * 1000000);

      for (let i = 0; i < cartItems.length; i++) {
        console.log(cartItems[i].id_keranjang);
        let tamptData = {
          id_keranjang: cartItems[i].id_keranjang,
          kode_transaksi: uniqueCode,
          total: 200000,
          status_transaksi: false,
          tanggal_upload: new Date(),
          tanggal_update: new Date(),
        };

        // Tambahkan promise ke array
        promises.push(
          db("data_transaksi").insert(tamptData).returning("id_transaksi")
        );

        // Ubah status keranjang menjadi true
        await db("data_keranjang")
          .where({ id_keranjang: cartItems[i].id_keranjang })
          .update({ status_keranjang: true });
      }

      // Tunggu semua promise selesai
      const dataProdId = await Promise.all(promises);

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

module.exports = InputToTransaction;
