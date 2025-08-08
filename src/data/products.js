// src/data/products.js
// Database produk FINAL dengan detail lengkap untuk semua item.

export const productDatabase = {
  "batuk-dan-flu": [
    {
      id: 1,
      name: "OBH Combi Batuk Berdahak",
      price: "Rp 18.500",
      image: "/obh-combi.jpeg",
      tags: ["batuk berdahak"],
      details: {
        description:
          "OBH Combi Batuk Berdahak adalah obat batuk hitam yang digunakan untuk meredakan batuk yang disertai dahak kental.",
        composition:
          "Tiap 5 ml sirup mengandung: Succus Liquiritiae Extract 167 mg, Ammonium Chloride 50 mg, dll.",
        dosage:
          "Dewasa: 3 kali sehari 15 ml. Anak-anak (6-12 tahun): 3 kali sehari 5 ml.",
        warning: "Tidak dianjurkan untuk anak di bawah 6 tahun.",
      },
    },
    {
      id: 2,
      name: "Vicks Formula 44 DT",
      price: "Rp 21.000",
      image: "/vicks-f44.jpeg",
      tags: ["batuk kering"],
      details: {
        description:
          "Vicks Formula 44 DT adalah obat batuk kering yang bekerja menekan pusat batuk di otak.",
        composition:
          "Setiap 5 ml mengandung Dextromethorphan HBr 5 mg dan Doxylamine Succinate 2 mg.",
        dosage:
          "Gunakan setiap 4-6 jam sesuai kebutuhan. Dewasa: 10 ml. Anak 6-12 tahun: 5 ml.",
        warning:
          "Dapat menyebabkan kantuk. Jangan mengemudi setelah mengonsumsi obat ini.",
      },
    },
    {
      id: 3,
      name: "Panadol Biru",
      price: "Rp 12.000",
      image: "/panadol-biru.jpeg",
      tags: ["sakit kepala", "demam"],
      details: {
        description:
          "Panadol Tablet (biru) mengandung Paracetamol untuk meredakan sakit kepala dan menurunkan demam.",
        composition: "Setiap tablet mengandung Paracetamol 500 mg.",
        dosage: "Dewasa: 1-2 kaplet, 3-4 kali sehari.",
        warning: "Hati-hati penggunaan pada penderita gangguan fungsi hati.",
      },
    },
    {
      id: 4,
      name: "Rhinos SR",
      price: "Rp 75.000",
      image: "/rhinos-sr.jpeg",
      tags: ["hidung tersumbat"],
      details: {
        description:
          "Rhinos SR adalah obat untuk meredakan gejala rinitis alergi seperti hidung tersumbat dan bersin-bersin.",
        composition:
          "Setiap kapsul mengandung Loratadine 5 mg, Pseudoephedrine HCl 60 mg.",
        dosage: "Dewasa dan anak >12 tahun: 1 kapsul, 2 kali sehari.",
        warning: "Tidak untuk penderita penyakit jantung dan diabetes melitus.",
      },
    },
    {
      id: 5,
      name: "Strepsils Soothing",
      price: "Rp 19.800",
      image: "/strepsils.jpeg",
      tags: ["nyeri tenggorokan"],
      details: {
        description:
          "Strepsils Soothing Honey & Lemon adalah tablet hisap antiseptik untuk melegakan tenggorokan.",
        composition: "Amylmetacresol 0.6 mg, Dibenal 1.2 mg.",
        dosage: "Hisap satu tablet perlahan-lahan setiap 2-3 jam.",
        warning: "Tidak cocok untuk anak di bawah 6 tahun.",
      },
    },
    {
      id: 6,
      name: "Bodrex Flu & Batuk",
      price: "Rp 3.500",
      image: "/bodrex-flu-batuk.jpeg",
      tags: ["batuk kering", "demam", "sakit kepala", "hidung tersumbat"],
      details: {
        description:
          "Bodrex Flu & Batuk PE meringankan gejala flu seperti demam, sakit kepala, hidung tersumbat yang disertai batuk tidak berdahak.",
        composition:
          "Paracetamol 500 mg, Phenylephrine HCl 10 mg, Dextromethorphan HBr 12 mg.",
        dosage: "Dewasa: 1 kaplet 3 kali sehari.",
        warning: "Dapat menyebabkan kantuk.",
      },
    },
    {
      id: 7,
      name: "Decolgen",
      price: "Rp 4.000",
      image: "/decolgen.jpeg",
      tags: ["demam", "sakit kepala", "hidung tersumbat"],
      details: {
        description:
          "Decolgen adalah obat untuk meredakan gejala flu seperti sakit kepala, demam, bersin-bersin dan hidung tersumbat.",
        composition:
          "Paracetamol 400 mg, Phenylpropanolamine HCl 12.5 mg, Chlorpheniramine maleate 1 mg.",
        dosage: "Dewasa: 1 tablet, 3-4 kali sehari.",
        warning: "Dapat menyebabkan kantuk.",
      },
    },
    {
      id: 8,
      name: "Neozep Forte",
      price: "Rp 4.500",
      image: "/neozep-forte.jpeg",
      tags: ["demam", "sakit kepala", "hidung tersumbat"],
      details: {
        description:
          "Neozep Forte efektif untuk meringankan gejala flu seperti demam, sakit kepala, hidung tersumbat, dan bersin-bersin.",
        composition:
          "Fenilpropanolamina HCl 15 mg, Klorfeniramina Maleat 2 mg, Salisilamida 250 mg, Parasetamol 250 mg.",
        dosage: "Dewasa: 3-4 kali sehari 1 tablet.",
        warning:
          "Hati-hati penggunaan pada penderita dengan gangguan fungsi hati dan ginjal.",
      },
    },
  ],
  vitamin: [
    {
      id: 101,
      name: "Redoxon Vitamin C",
      price: "Rp 45.000",
      image: "/redoxon.jpeg",
      tags: ["daya tahan tubuh", "antioksidan"],
      details: {
        description:
          "Redoxon Double Action adalah suplemen makanan dengan kombinasi Vitamin C dan Zinc untuk membantu menjaga daya tahan tubuh.",
        composition:
          "Setiap tablet effervescent mengandung Vitamin C 1000 mg dan Zinc 10 mg.",
        dosage:
          "Satu tablet effervescent per hari, larutkan dalam segelas air.",
        warning: "Mengandung pemanis buatan aspartam.",
      },
    },
    {
      id: 102,
      name: "Enervon-C",
      price: "Rp 55.000",
      image: "/enervon-c.jpeg",
      tags: ["energi & stamina", "daya tahan tubuh"],
      details: {
        description:
          "Enervon-C adalah suplemen dengan kombinasi Vitamin C dan Vitamin B Kompleks yang membantu menjaga daya tahan tubuh dan memulihkan energi.",
        composition: "Vitamin C 500 mg, Niacinamide 50 mg, Vitamin B Kompleks.",
        dosage: "1 tablet sehari.",
        warning: "Simpan di bawah suhu 30°C.",
      },
    },
    {
      id: 103,
      name: "CDR (Calcium-D-Redoxon)",
      price: "Rp 52.000",
      image: "/cdr.jpeg",
      tags: ["kesehatan tulang"],
      details: {
        description:
          "CDR adalah suplemen kalsium dan vitamin penting lainnya yang membantu menjaga kesehatan tulang dan gigi.",
        composition:
          "Kalsium 250mg, Vitamin C 1000mg, Vitamin D 300 IU, Vitamin B6 15mg.",
        dosage: "1 tablet effervescent per hari.",
        warning: "Jauhkan dari jangkauan anak-anak.",
      },
    },
    {
      id: 104,
      name: "Blackmores Fish Oil",
      price: "Rp 250.000",
      image: "/blackmores-fish-oil.jpeg",
      tags: ["kesehatan jantung & otak"],
      details: {
        description:
          "Blackmores Odourless Fish Oil 1000 adalah sumber alami Omega-3 untuk mendukung kesehatan jantung, otak, dan mata.",
        composition:
          "Minyak Ikan (Alami) 1000 mg mengandung Omega-3 300 mg (EPA 180 mg, DHA 120 mg).",
        dosage: "Dewasa: 2 kapsul sehari setelah makan.",
        warning: "Tidak dianjurkan bagi yang alergi seafood.",
      },
    },
    {
      id: 105,
      name: "Imboost Force",
      price: "Rp 80.000",
      image: "/imboost-force.jpeg",
      tags: ["daya tahan tubuh"],
      details: {
        description:
          "IMBOOST Force Suplemen Daya Tahan Tubuh untuk membantu memelihara daya tahan tubuh.",
        composition:
          "Echinacea purpurea herb dry extract 250 mg, Black elderberry fruit dry extract 400 mg, Zn Picolinate 10 mg.",
        dosage: "Dewasa: 1 kaplet 3 kali sehari.",
        warning: "Hentikan pemakaian jika terjadi reaksi alergi.",
      },
    },
    {
      id: 106,
      name: "Scott’s Emulsion",
      price: "Rp 50.000",
      image: "/scotts-emulsion.jpeg",
      tags: ["vitamin anak"],
      details: {
        description:
          "Scott's Emulsion Vita mengandung minyak hati ikan kod, Vitamin A, Vitamin D, dan Kalsium untuk mendukung pertumbuhan anak.",
        composition:
          "Cod Liver Oil, Vitamin A, Vitamin D, Calcium Hypophosphite.",
        dosage: "Anak 1-6 tahun: 1 x 15ml sekali sehari.",
        warning: "Simpan di tempat sejuk.",
      },
    },
  ],
  p3k: [
    {
      id: 201,
      name: "Hansaplast Plester",
      price: "Rp 7.000",
      image: "/hansaplast.jpeg",
      tags: ["luka gores", "pembalut luka"],
      details: {
        description:
          "Hansaplast Kain Elastis adalah plester luka yang fleksibel dan dapat merekat kuat, cocok untuk menutup segala jenis luka kecil.",
        composition: "Kain elastis, bantalan luka, perekat.",
        dosage:
          "Bersihkan luka dan keringkan kulit di sekitarnya. Tempelkan plester tanpa diregangkan.",
        warning: "Hentikan penggunaan jika terjadi iritasi.",
      },
    },
    {
      id: 202,
      name: "Betadine Antiseptic",
      price: "Rp 30.000",
      image: "/betadine.jpeg",
      tags: ["luka gores", "desinfektan"],
      details: {
        description:
          "BETADINE Antiseptic Solution adalah antiseptik untuk membersihkan dan mencegah infeksi pada luka.",
        composition: "Povidone-Iodine 10%.",
        dosage: "Oleskan pada area luka 1-2 kali sehari.",
        warning: "Hanya untuk pemakaian luar.",
      },
    },
    {
      id: 203,
      name: "Bioplacenton Salep",
      price: "Rp 28.000",
      image: "/bioplacenton.jpeg",
      tags: ["luka bakar"],
      details: {
        description:
          "Bioplacenton adalah salep yang mengandung ekstrak plasenta dan antibiotik untuk membantu penyembuhan luka bakar.",
        composition: "Placenta extract 10%, Neomycin sulfate 0.5%.",
        dosage: "Oleskan tipis-tipis pada area luka bakar 2-4 kali sehari.",
        warning: "Diperlukan resep dokter.",
      },
    },
    {
      id: 204,
      name: "Kasa Steril",
      price: "Rp 5.000",
      image: "/kasa-steril.jpeg",
      tags: ["pembalut luka"],
      details: {
        description:
          "Kasa steril hidrofil adalah kain kasa pembalut luka yang steril dan memiliki daya serap tinggi.",
        composition: "100% katun.",
        dosage: "Gunakan untuk membalut luka yang sudah dibersihkan.",
        warning: "Ganti kasa setiap hari atau saat basah.",
      },
    },
    {
      id: 205,
      name: "Minyak Kayu Putih Cap Lang",
      price: "Rp 25.000",
      image: "/minyak-kayu-putih.jpeg",
      tags: ["minyak esensial"],
      details: {
        description:
          "Minyak Kayu Putih CAP LANG digunakan untuk membantu meredakan sakit perut, perut kembung, mual, dan gatal-gatal akibat gigitan serangga.",
        composition: "Minyak Kayu Putih 100%.",
        dosage: "Oleskan pada bagian tubuh yang membutuhkan.",
        warning: "Hanya untuk pemakaian luar.",
      },
    },
  ],
  "ibu-dan-anak": [
    {
      id: 301,
      name: "Blackmores Pregnancy",
      price: "Rp 350.000",
      image: "/blackmores-pregnancy.jpeg",
      tags: ["vitamin ibu hamil"],
      details: {
        description:
          "Blackmores Pregnancy & Breast-Feeding Gold adalah multivitamin lengkap untuk memenuhi kebutuhan nutrisi ibu hamil dan menyusui.",
        composition:
          "Asam folat, Iodium, Zat Besi, Kalsium, DHA, Vitamin B kompleks, dll.",
        dosage: "2 kapsul setiap hari setelah makan.",
        warning: "Mengandung produk laut.",
      },
    },
    {
      id: 302,
      name: "SGM Ananda 0-6 Bulan",
      price: "Rp 80.000",
      image: "/sgm-ananda.jpeg",
      tags: ["susu formula"],
      details: {
        description:
          "SGM Ananda 1 adalah susu formula untuk bayi usia 0-6 bulan sebagai pendamping ASI.",
        composition:
          "Protein whey, Minyak nabati, Laktosa, Vitamin, dan Mineral.",
        dosage: "Ikuti petunjuk penyiapan pada kemasan.",
        warning: "ASI adalah nutrisi terbaik untuk bayi.",
      },
    },
    {
      id: 303,
      name: "Folavit",
      price: "Rp 15.000",
      image: "/folavit.jpeg",
      tags: ["vitamin ibu hamil"],
      details: {
        description:
          "Folavit adalah suplemen yang mengandung asam folat, penting untuk pertumbuhan janin dan mencegah cacat lahir.",
        composition: "Asam Folat 400 mcg.",
        dosage: "1 tablet per hari.",
        warning: "Konsultasikan dengan dokter sebelum penggunaan.",
      },
    },
    {
      id: 304,
      name: "Zwitsal Baby Bath",
      price: "Rp 35.000",
      image: "/zwitsal.jpeg",
      tags: ["perlengkapan bayi"],
      details: {
        description:
          "Sabun mandi cair Zwitsal dengan formula pH seimbang untuk membersihkan kulit bayi dengan lembut.",
        composition: "Mengandung Aloe Vera dan Pro-Vitamin B5.",
        dosage:
          "Tuangkan pada spons atau tangan, usapkan pada kulit bayi, lalu bilas.",
        warning: "Hanya untuk pemakaian luar.",
      },
    },
  ],
  "perawatan-diri": [
    {
      id: 401,
      name: "Cetaphil Gentle Cleanser",
      price: "Rp 150.000",
      image: "/cetaphil.jpeg",
      tags: ["perawatan wajah"],
      details: {
        description:
          "Cetaphil Gentle Skin Cleanser adalah pembersih wajah yang lembut tanpa sabun, cocok untuk semua jenis kulit termasuk kulit sensitif.",
        composition:
          "Aqua, Cetyl Alcohol, Propylene Glycol, Sodium Lauryl Sulfate, Stearyl Alcohol.",
        dosage: "Usapkan pada wajah, pijat lembut, lalu bilas.",
        warning: "Hanya untuk pemakaian luar.",
      },
    },
    {
      id: 402,
      name: "Sensodyne Fresh Mint",
      price: "Rp 35.000",
      image: "/sensodyne.jpeg",
      tags: ["kesehatan gigi"],
      details: {
        description:
          "Sensodyne Fresh Mint adalah pasta gigi yang diformulasikan khusus untuk meredakan rasa ngilu pada gigi sensitif.",
        composition: "Potassium nitrate, Sodium fluoride.",
        dosage: "Gunakan dua kali sehari secara teratur.",
        warning: "Tidak untuk anak di bawah 12 tahun.",
      },
    },
    {
      id: 403,
      name: "Wardah UV Shield Sunscreen",
      price: "Rp 38.000",
      image: "/wardah-sunscreen.jpeg",
      tags: ["perawatan wajah"],
      details: {
        description:
          "Wardah UV Shield Essential Sunscreen Gel SPF 30 PA+++, sunscreen dengan Broad Spectrum Protection, 30x lebih optimal menjaga kulit dari sinar UV A/UV B.",
        composition:
          "Aqua, Ethylhexyl Methoxycinnamate, Butyl Methoxydibenzoylmethane, dll.",
        dosage:
          "Oleskan merata pada wajah dan leher 15 menit sebelum beraktivitas.",
        warning: "Jangan terlalu lama terpapar sinar matahari.",
      },
    },
    {
      id: 404,
      name: "Rexona Men Ice Cool",
      price: "Rp 22.000",
      image: "/rexona-men.jpeg",
      tags: ["deodoran"],
      details: {
        description:
          "Rexona Men Ice Cool Deodorant Roll On memberikan perlindungan terhadap keringat dan bau badan hingga 48 jam.",
        composition:
          "Aluminum Zirconium Tetrachlorohydrex GLY, Cyclopentasiloxane, dll.",
        dosage: "Oleskan 4-6 kali pada ketiak setiap habis mandi.",
        warning: "Jangan gunakan pada kulit luka.",
      },
    },
  ],
};
