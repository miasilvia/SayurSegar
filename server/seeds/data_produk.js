/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const currentDate = new Date();
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("data_produk").del();
  await knex("data_produk").insert([
    {
      nama_produk: "Sawi Putih",
      harga_produk: 12000,
      stok_produk: 30,
      satuan_produk: 250,
      foto_produk: "sawiputih.jpg",
      deskripsi_produk: "ini sawi putih",
      diskon_produk: 2,
      tanggal_upload: currentDate,
      tanggal_update: currentDate,
    },
    {
      nama_produk: "Tomat",
      harga_produk: 15000,
      stok_produk: 30,
      satuan_produk: 500,
      foto_produk: "tomat.jpg",
      deskripsi_produk: "ini tomat",
      diskon_produk: 0,
      tanggal_upload: currentDate,
      tanggal_update: currentDate,
    },
  ]);
};
