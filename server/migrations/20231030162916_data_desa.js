/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("data_desa", (table) => {
    table.increments("id_desa").primary();
    table.string("nama_desa");
    table.integer("id_kecamatan").unsigned();
    table.foreign("id_kecamatan").references("data_kecamatan.id_kecamatan");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("data_desa");
};
