const db = require("../db.js");
class InputToTransaction {
  static async postDataTransaction(req, res) {
    try {
      const id_user = req.session.user.id_user; //id_user yg sedang login
      const cartItems = await db("data_keranjang")
        .where({ id_user, status_keranjang: false })
        .select("*");

      let promises = [];
      const uniqueCode = Math.floor(Math.random() * 1000000);
      let grandTotal = 0;

      for (let i = 0; i < cartItems.length; i++) {
        const produk = await db("data_produk")
          .where("id_produk", cartItems[i].id_produk)
          .first();
        const total = produk.harga_produk * cartItems[i].quantity;

        // Hitung diskon
        const diskon = total * (produk.diskon_produk / 100);
        const totalAfterDiskon = total - diskon;

        // Tambahkan totalAfterDiskon ke grandTotal
        grandTotal += totalAfterDiskon;
      }

      // Setelah semua perhitungan selesai, masukkan grandTotal ke database
      for (let i = 0; i < cartItems.length; i++) {
        let tamptData = {
          id_keranjang: cartItems[i].id_keranjang,
          kode_transaksi: uniqueCode,
          total: grandTotal, // grandTotal dari hasil perhitungan diatas
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
      // res.status(201).json({ dataProdId, grandTotal });
      res.redirect("/user/user-transaction");
    } catch (error) {
      res
        .status(500)
        .json({ message: "Terjadi kesalahan saat checkout", error: error });
      console.log(error);
    }
  }
}

module.exports = InputToTransaction;
