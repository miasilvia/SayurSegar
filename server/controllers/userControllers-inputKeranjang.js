const db = require("../db.js");
class InputToCart {
  static async postDataCart(req, res) {
    const { id_user, id_produk, quantity } = req.body;
    let tamptData = {
      id_user,
      id_produk,
      quantity,
      status_keranjang: false,
      tanggal_upload: new Date(),
      tanggal_update: new Date(),
    };
    try {
      const produk = await db("data_produk")
        .where("id_produk", id_produk)
        .first();
      // Cek jumlah produk di keranjang
      const jumlahDiKeranjang = await db("data_keranjang")
        .where({ id_produk, id_user, status_keranjang: false })
        .sum("quantity as total")
        .first();
      const totalQuantity =
        (parseInt(jumlahDiKeranjang.total) || 0) + parseInt(quantity);
      console.log(jumlahDiKeranjang.total, "ini total jml keranjang");
      console.log(totalQuantity, "ini total quantity");
      if (produk.stok_produk < totalQuantity) {
        return res.status(400).json({ error: "Stok tidak cukup" });
      }
      const dataProdId = await db("data_keranjang")
        .insert(tamptData)
        .returning("id_keranjang");
      res.status(201).json(dataProdId);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async deleteDataCart(req, res) {
    const id_input = req.params.id_keranjang;
    try {
      const deleteData = await db("data_keranjang")
        .where({ id_keranjang: id_input })
        .del();
      res.status(200).json(deleteData);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = InputToCart;
