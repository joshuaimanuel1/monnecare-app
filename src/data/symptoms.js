// src/data/symptoms.js
// File ini berisi data untuk filter dan detail halaman kategori.

// Database semua filter (gejala/kebutuhan) untuk setiap kategori
export const allSymptomsData = {
  "batuk-dan-flu": [
    "Batuk Kering",
    "Batuk Berdahak",
    "Hidung Tersumbat",
    "Demam",
    "Sakit Kepala",
    "Nyeri Tenggorokan",
  ],
  vitamin: [
    "Daya Tahan Tubuh",
    "Kesehatan Tulang",
    "Energi & Stamina",
    "Kesehatan Jantung & Otak",
    "Antioksidan",
  ],
  p3k: ["Luka Gores", "Luka Bakar", "Pembalut Luka", "Desinfektan"],
  "ibu-dan-anak": [
    "Vitamin Ibu Hamil",
    "Susu Formula",
    "Perlengkapan Bayi",
    "ASI Booster",
  ],
  "perawatan-diri": [
    "Perawatan Wajah",
    "Perawatan Rambut",
    "Kesehatan Gigi",
    "Sabun & Antiseptik",
  ],
};

// Detail untuk setiap halaman kategori (judul, deskripsi, dll.)
export const categoryDetails = {
  "batuk-dan-flu": {
    title: "Batuk & Flu",
    filterTitle: "Pengecek Gejala Cerdas",
    filterDescription: "Klik pada satu atau lebih gejala di bawah ini.",
  },
  vitamin: {
    title: "Vitamin",
    filterTitle: "Pencari Kebutuhan Vitamin",
    filterDescription: "Pilih manfaat yang Anda butuhkan.",
  },
  p3k: {
    title: "P3K",
    filterTitle: "Asisten Pertolongan Pertama",
    filterDescription: "Pilih jenis kebutuhan darurat Anda.",
  },
  "ibu-dan-anak": {
    title: "Ibu & Anak",
    filterTitle: "Asisten Ibu & Anak",
    filterDescription: "Pilih kebutuhan untuk ibu atau si kecil.",
  },
  "perawatan-diri": {
    title: "Perawatan Diri",
    filterTitle: "Pencari Produk Perawatan",
    filterDescription: "Pilih jenis perawatan yang Anda cari.",
  },
};
