/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("data_user", (table) => {
    table.increments("id_user").primary();
    table.string("nama_user");
    table.string("username");
    table.string("password");
    table.string("no_hp");
    table.string("email_user");
    table.string("alamat_lengkap");
    table.integer("id_kecamatan").unsigned();
    table.foreign("id_kecamatan").references("data_kecamatan.id_kecamatan");
    table.integer("id_desa").unsigned();
    table.foreign("id_desa").references("data_desa.id_desa");
    table.integer("kode_pos");
    table.string("role");
    table.timestamp("tanggal_upload");
    table.timestamp("tanggal_update");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("data_user");
};
