const express = require("express");
const routes = express.Router();
const schedule = require("node-schedule"); //untuk membuat scedule untuk menjalankan fungsi setiap hari pada tengah malam
const DataOrderControllers = require("../controllers/adminControllers-dataPesanan.js");

routes.get("/data-order", DataOrderControllers.viewDataOrder);
routes.get("/data-order/:id_pesanan", DataOrderControllers.viewDataOrderId);
routes.put("/data-order/:id_pesanan", DataOrderControllers.putDataOrder);
routes.delete("/data-order/:id_pesanan", DataOrderControllers.deleteDataOrder);
//// Jalankan job setiap hari pada pukul 00:00
const job = schedule.scheduleJob(
  "0 0 * * *",
  DataOrderControllers.updateOrders
);
module.exports = routes; //untuk mengeksport objek router
