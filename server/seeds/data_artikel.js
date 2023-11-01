/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const currentDate = new Date();
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("data_artikel").del();
  await knex("data_artikel").insert([
    {
      judul_artikel: "8 Manfaat Makan Buah dan Sayur bagi Siswa",
      deskripsi_artikel: "Deskripsi: manfaat buah dan sayur adalah..",
      gambar_artikel: "artikel1.jpg",
      sumber_artikel:
        "https://edukasi.kompas.com/read/2023/10/01/134700571/8-manfaat-makan-buah-dan-sayur-bagi-siswa",
      tanggal_upload: currentDate,
      tanggal_update: currentDate,
    },
    {
      judul_artikel:
        "Manfaat Wortel bagi Tubuh Manusia Selain untuk Kesehatan Mata",
      deskripsi_artikel:
        "Deskripsi : Wortel menjadi salah satu jenis sayuran yang populer di Indonesia. Beragam kreasi olahan masakan dengan bahan wortel banyak ditemukan.",
      gambar_artikel: "artikel2.jpg",
      sumber_artikel:
        "https://www.liputan6.com/regional/read/5319798/manfaat-wortel-bagi-tubuh-manusia-selain-untuk-kesehatan-mata",
      tanggal_upload: currentDate,
      tanggal_update: currentDate,
    },
  ]);
};
