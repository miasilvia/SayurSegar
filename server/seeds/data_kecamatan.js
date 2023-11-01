/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const currentDate = new Date();
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("data_kecamatan").del();
  await knex("data_kecamatan").insert([
    { nama_kecamatan: "Anjatan", ongkos_kirim: 20000 },
    { nama_kecamatan: "Arahan", ongkos_kirim: 20000 },
  ]);
};
