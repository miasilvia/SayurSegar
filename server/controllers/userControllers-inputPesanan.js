const db = require("../db.js");

const dotenv = require("dotenv");
dotenv.config();
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
class InputToOrder {
  static async postDataOrder2(req, res) {
    if (!req.session.user) {
      return res.status(401).json({ message: "Please login first" });
    }
    try {
      const result = await cloudinary.uploader.upload(req.file.path);
      console.log(result.secure_url);
      const id_user = req.session.user.id_user; //id_user yg sedang login

      if (!req.file) {
        return res.status(400).send("Tidak ada file yang diunggah.");
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

      const existingOrder = await db("data_pesanan")
        .where({ kode_transaksi: orderItems[0].kode_transaksi })
        .first();

      if (existingOrder) {
        return res.status(400).json({ message: "Order sudah ada" });
      }

      let tamptData = {
        id_transaksi: orderItems[0].id_transaksi,
        kode_transaksi: orderItems[0].kode_transaksi,
        bukti_transfer: result.secure_url,
        status_pesanan: "belum dikirim",
        tanggal_pesanan: new Date(),
      };

      const dataProdId = await db("data_pesanan")
        .insert(tamptData)
        .returning("id_pesanan");

      for (let i = 0; i < orderItems.length; i++) {
        await db("data_transaksi")
          .where({ id_transaksi: orderItems[i].id_transaksi })
          .update({ status_transaksi: true });
      }

      res.redirect("/user/data-pesananUser");
    } catch (err) {
      console.log(err);
    }
  }
  static async renderTransactionPage(req, res) {
    if (!req.session.user) {
      return res.status(401).json({ message: "Please login first" });
    }
    try {
      const id_user = req.session.user.id_user; //id_user yg sedang login
      const dataTransaksi = await db("data_transaksi")
        .join(
          "data_keranjang",
          "data_transaksi.id_keranjang",
          "=",
          "data_keranjang.id_keranjang"
        )
        .where({ status_transaksi: false, "data_keranjang.id_user": id_user })
        .select("data_transaksi.*", "data_keranjang.*");
      res.render("user-transaction", {
        id_user: id_user,
        dataTransaksi: dataTransaksi,
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = InputToOrder;
