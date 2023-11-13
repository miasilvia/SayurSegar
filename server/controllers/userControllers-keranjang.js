const db = require("../db.js");

class ProccessToCart {
  static async viewDataCartUser(req, res) {
    if (!req.session.user) {
      return res.status(401).json({ message: "Please login first" });
    }
    try {
      const id_user = req.session.user.id_user; //id_user yg sedang login
      const dataKeranjang = await db("data_keranjang")
        .join(
          "data_produk",
          "data_keranjang.id_produk",
          "=",
          "data_produk.id_produk"
        )
        .where({
          "data_keranjang.id_user": id_user,
          "data_keranjang.status_keranjang": false,
        })
        .select(
          "data_keranjang.*",
          "data_produk.nama_produk",
          "data_produk.harga_produk",
          "data_produk.diskon_produk"
        );
      res.render("user-dataKeranjang", { dataKeranjang: dataKeranjang });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async postDataCart(req, res) {
    if (!req.session.user) {
      return res.status(401).json({ message: "Please login first" });
    }
    const { id_produk, quantity } = req.body;
    const id_user = req.session.user.id_user; //id_user yg sedang login
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
      if (produk.stok_produk < totalQuantity) {
        return res.status(400).json({ error: "Stok tidak cukup" });
      }
      const dataProdId = await db("data_keranjang")
        .insert(tamptData)
        .returning("id_keranjang");
      // res.status(201).json(dataProdId);
      res.redirect("/user/data-cart");
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async deleteDataCart(req, res) {
    if (!req.session.user) {
      return res.status(401).json({ message: "Please login first" });
    }
    const id_input = req.params.id_keranjang;
    try {
      const deleteData = await db("data_keranjang")
        .where({ id_keranjang: id_input })
        .del();
      res.redirect("/user/data-cart");
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = ProccessToCart;
