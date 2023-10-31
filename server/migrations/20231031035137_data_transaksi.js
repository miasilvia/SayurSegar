/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("data_transaksi", (table) => {
    table.increments("id_transaksi").primary();
    table.integer("id_keranjang").unsigned();
    table.foreign("id_keranjang").references("data_keranjang.id_keranjang");
    table.integer("kode_transaksi");
    table.integer("total");
    table.boolean("status_transaksi").notNullable().defaultTo(false);
    table.timestamp("tanggal_upload");
    table.timestamp("tanggal_update");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("data_transaksi");
};
