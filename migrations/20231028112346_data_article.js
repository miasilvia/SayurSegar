/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  knex.schema.createTable("data_artikel", (table) => {
    table.increments("id_artikel").primary();
    table.string("judul_artikel");
    table.string("deskripsi_artikel");
    table.string("gambar_artikel");
    table.string("sumber_artikel");
    table.timestamp("tanggal_buat");
    table.timestamps("tanggal_update");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("data_artikel");
};
