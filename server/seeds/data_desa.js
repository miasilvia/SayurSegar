/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const currentDate = new Date();
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("data_desa").del();
  await knex("data_desa").insert([
    { nama_desa: "Anjatan Baru", id_kecamatan: 1 },
    { nama_desa: "Anjatan Utara", id_kecamatan: 2 },
  ]);
};
