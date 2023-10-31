/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("data_pesanan", (table) => {
    table.increments("id_pesanan").primary();
    table.integer("id_transaksi").unsigned();
    table.foreign("id_transaksi").references("data_transaksi.id_transaksi");
    table.integer("kode_transaksi");
    table.string("bukti_transfer");
    table.string("status_pesanan");
    table.timestamp("tanggal_pesanan");
    table.date("tanggal_kirim");
    table.date("tanggal_selesai");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("data_pesanan");
};
