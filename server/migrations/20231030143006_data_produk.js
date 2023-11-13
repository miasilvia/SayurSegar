/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("data_produk", (table) => {
    table.increments("id_produk").primary();
    table.string("nama_produk");
    table.integer("harga_produk");
    table.integer("stok_produk");
    table.integer("satuan_produk");
    table.string("foto_produk");
    table.string("deskripsi_produk");
    table.integer("diskon_produk");
    table.timestamp("tanggal_upload");
    table.timestamp("tanggal_update");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("data_produk");
};
