/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("data_artikel", (table) => {
    table.increments("id_artikel").primary();
    table.string("judul_artikel");
    table.string("deskripsi_artikel");
    table.string("gambar_artikel");
    table.string("sumber_artikel");
    table.timestamp("tanggal_upload");
    table.timestamp("tanggal_update");
    // table.foreign('id_produk').references('data_produk.id_produk') //ini untuk FK dari tabel data_produk
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("data_artikel");
};
