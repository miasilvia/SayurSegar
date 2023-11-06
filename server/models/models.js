// Impor mongoose
const mongoose = require("mongoose");

// Definisikan skema Cart
const CartSchema = new mongoose.Schema({
  id_user: String,
  id_produk: String,
  total: Number,
});

// Buat model Cart
const Cart = mongoose.model("Cart", CartSchema);

// Definisikan skema Transaction
const TransactionSchema = new mongoose.Schema({
  id_user: String,
  id_produk: String,
  total: Number,
  status_transaksi: Boolean,
  tanggal_upload: Date,
  tanggal_update: Date,
});

// Buat model Transaction
const Transaction = mongoose.model("Transaction", TransactionSchema);

// Ekspor model Cart dan Transaction
module.exports = { Cart, Transaction };
