const express = require("express");
const db = require("../db.js");
const routes = express.Router();
const InputToOrder = require("../controllers/userControllers-inputPesanan.js");
const dotenv = require("dotenv");
dotenv.config();
const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
const upload = multer({
  storage: multer.diskStorage({}),
});
routes.post("/upload", upload.single("bukti_transfer"), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    console.log(result.secure_url);
    // const id_user = req.session.user.id_user; //id_user yg sedang login
    const { id_user } = req.body;

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
      bukti_transfer: result.secure_url,
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
  } catch (err) {
    console.log(err);
  }
});
routes.post("/order", InputToOrder.postDataOrder);
module.exports = routes; //untuk mengeksport objek router
