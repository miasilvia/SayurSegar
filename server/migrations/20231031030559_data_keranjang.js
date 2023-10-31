/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("data_keranjang", (table) => {
    table.increments("id_keranjang").primary();
    table.integer("id_user").unsigned();
    table.foreign("id_user").references("data_user.id_user");
    table.integer("id_produk").unsigned();
    table.foreign("id_produk").references("data_produk.id_produk");
    table.integer("quantity");
    table.boolean("status_kranjang").notNullable().defaultTo(false);
    table.string("status_keranjang");
    table.timestamp("tanggal_upload");
    table.timestamp("tanggal_update");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("data_keranjang");
};
