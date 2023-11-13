/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("data_kecamatan", (table) => {
    table.increments("id_kecamatan").primary();
    table.string("nama_kecamatan");
    table.integer("ongkos_kirim");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("data_kecamatan");
};
