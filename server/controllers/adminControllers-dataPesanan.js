const db = require("../db.js");

class DataOrderControllers {
  static async viewDataOrder(req, res) {
    try {
      const dataOrder = await db("data_pesanan").select("*");
      res.status(200).json(dataOrder);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async viewDataOrderId(req, res) {
    try {
      const dataOrder = await db("data_pesanan").select("*");
      let idParams = req.params.id_pesanan;
      let result;

      for (let i = 0; i < dataOrder.length; i++) {
        let dataById = dataOrder[i].id_pesanan;

        if (dataById == idParams) {
          result = dataOrder[i];
        }
      }
      res.status(200).json(result);
      console.log(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async putDataOrder(req, res) {
    const { id_pesanan } = req.params;
    const { status_pesanan } = req.body;
    try {
      const dataProdId = await db("data_pesanan")
        .where("id_pesanan", "=", id_pesanan)
        .update({
          status_pesanan,
          tanggal_kirim: new Date(),
        });
      res.status(200).json(dataProdId);
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Terjadi kesalahan saat mengubah data produk!",
      });
    }
  }
  //// Jalankan job setiap hari pada pukul 00:00
  static updateOrders = async () => {
    const date = new Date();
    date.setDate(date.getDate() - 1); // Dapatkan tanggal 5 hari yang lalu (sementara 1 har dlu)

    try {
      await db("data_pesanan")
        .where("tanggal_kirim", "<=", date)
        .andWhere("status_pesanan", "<>", "selesai")
        .update({
          status_pesanan: "selesai",
          tanggal_selesai: db.fn.now(),
        });
      console.log("Pesanan diperbarui");
    } catch (err) {
      console.log(err);
    }
  };
  ////////////////////////////////////////////
  static async deleteDataOrder(req, res) {
    const id_input = req.params.id_pesanan;
    try {
      const deleteData = await db("data_pesanan")
        .where({ id_pesanan: id_input })
        .del();
      res.status(200).json(deleteData);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = DataOrderControllers;
