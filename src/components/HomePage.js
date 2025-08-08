import React, { useEffect } from "react";
import { Header } from "./Header";

export const HomePage = (props) => {
  const { navigateToCategory, navigateToAIAssistant } = props;

  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  }, []);

  return (
    <>
      <Header {...props} />

      <main>
        {/* Hero Section */}
        <section
          className="py-20 md:py-32"
          style={{
            background:
              "linear-gradient(135deg, rgba(239, 246, 255, 0.7) 0%, rgba(255, 255, 255, 1) 100%)",
          }}
        >
          <div className="container mx-auto px-6 text-center">
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Apotek Digital Terpercaya Anda
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
              Solusi Kesehatan Anda,
              <br className="hidden md:block" /> Langsung ke Rumah
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-slate-600 mb-10">
              Beli obat, konsultasi dengan apoteker, dan atur pengingat resep
              rutin. Semua dalam satu platform yang mudah dan aman.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href="#toko"
                className="w-full sm:w-auto flex items-center justify-center bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-700 transition-all shadow-lg"
              >
                <i data-lucide="search" className="w-5 h-5 mr-2"></i>Cari Obat
                Sekarang
              </a>
              <button
                onClick={navigateToAIAssistant}
                className="w-full sm:w-auto flex items-center justify-center bg-white text-slate-700 font-semibold px-8 py-4 rounded-xl hover:bg-slate-100 transition-all border border-slate-300"
              >
                <i
                  data-lucide="message-square-heart"
                  className="w-5 h-5 mr-2"
                ></i>
                Konsultasi AI Gratis
              </button>
            </div>
          </div>
        </section>

        {/* Fitur Unggulan Section */}
        <section id="fitur" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Kenapa Memilih MonneCare?
              </h2>
              <p className="max-w-xl mx-auto mt-4 text-slate-500">
                Kami hadir untuk memberikan kemudahan dan ketenangan dalam
                urusan kesehatan Anda.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div
                onClick={navigateToAIAssistant}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:shadow-xl hover:-translate-y-2 transition-all cursor-pointer"
              >
                <div className="bg-blue-100 text-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-5">
                  <i data-lucide="user-round-check" className="w-8 h-8"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Konsultasi Apoteker AI
                </h3>
                <p className="text-slate-600">
                  Tanya jawab langsung dengan asisten AI kami.
                </p>
              </div>
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:shadow-xl hover:-translate-y-2 transition-all">
                <div className="bg-green-100 text-green-600 w-14 h-14 rounded-xl flex items-center justify-center mb-5">
                  <i data-lucide="truck" className="w-8 h-8"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Pengiriman Cepat 24/7
                </h3>
                <p className="text-slate-600">
                  Obat diantar langsung ke depan pintu Anda.
                </p>
              </div>
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:shadow-xl hover:-translate-y-2 transition-all">
                <div className="bg-purple-100 text-purple-600 w-14 h-14 rounded-xl flex items-center justify-center mb-5">
                  <i data-lucide="calendar-clock" className="w-8 h-8"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Langganan & Pengingat
                </h3>
                <p className="text-slate-600">
                  Atur langganan dan kami yang akan ingatkan.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Toko Obat (Kategori) Section */}
        <section id="toko" className="py-20 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Jelajahi Kategori Populer
              </h2>
              <p className="max-w-xl mx-auto mt-4 text-slate-500">
                Temukan produk kesehatan yang Anda butuhkan dengan mudah.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <div
                onClick={() => navigateToCategory("batuk-dan-flu")}
                className="group block bg-white p-4 rounded-2xl border border-slate-200 text-center hover:shadow-xl hover:-translate-y-2 transition-all cursor-pointer"
              >
                <img
                  src="/batuk.png"
                  alt="Batuk & Flu"
                  className="w-full h-[120px] object-contain rounded-xl mb-4"
                />
                <h4 className="font-semibold text-slate-800 group-hover:text-blue-700 mt-2">
                  Batuk & Flu
                </h4>
              </div>
              <div
                onClick={() => navigateToCategory("vitamin")}
                className="group block bg-white p-4 rounded-2xl border border-slate-200 text-center hover:shadow-xl hover:-translate-y-2 transition-all cursor-pointer"
              >
                <img
                  src="/vitamin.jpeg"
                  alt="Vitamin"
                  className="w-full h-[120px] object-contain rounded-xl mb-4"
                />
                <h4 className="font-semibold text-slate-800 group-hover:text-blue-700 mt-2">
                  Vitamin
                </h4>
              </div>
              <div
                onClick={() => navigateToCategory("p3k")}
                className="group block bg-white p-4 rounded-2xl border border-slate-200 text-center hover:shadow-xl hover:-translate-y-2 transition-all cursor-pointer"
              >
                <img
                  src="/p3k.png"
                  alt="P3K"
                  className="w-full h-[120px] object-contain rounded-xl mb-4"
                />
                <h4 className="font-semibold text-slate-800 group-hover:text-blue-700 mt-2">
                  P3K
                </h4>
              </div>
              <div
                onClick={() => navigateToCategory("ibu-dan-anak")}
                className="group block bg-white p-4 rounded-2xl border border-slate-200 text-center hover:shadow-xl hover:-translate-y-2 transition-all cursor-pointer"
              >
                <img
                  src="/obat-ibu-anak.png"
                  alt="Ibu & Anak"
                  className="w-full h-[120px] object-contain rounded-xl mb-4"
                />
                <h4 className="font-semibold text-slate-800 group-hover:text-blue-700 mt-2">
                  Ibu & Anak
                </h4>
              </div>
              <div
                onClick={() => navigateToCategory("perawatan-diri")}
                className="group block bg-white p-4 rounded-2xl border border-slate-200 text-center hover:shadow-xl hover:-translate-y-2 transition-all cursor-pointer"
              >
                <img
                  src="/perawatan-diri.jpg"
                  alt="Perawatan Diri"
                  className="w-full h-[120px] object-contain rounded-xl mb-4"
                />
                <h4 className="font-semibold text-slate-800 group-hover:text-blue-700 mt-2">
                  Perawatan Diri
                </h4>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-4 md:col-span-1">
              <h3 className="text-2xl font-bold flex items-center mb-4">
                <i data-lucide="heart-pulse" className="mr-2"></i>MonneCare
              </h3>
              <p className="text-slate-400">
                Platform kesehatan digital yang berkomitmen untuk memberikan
                akses mudah, cepat, dan terpercaya.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Navigasi</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-slate-400 hover:text-white">
                    Tentang Kami
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white">
                    Artikel
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Layanan</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#toko" className="text-slate-400 hover:text-white">
                    Toko Obat
                  </a>
                </li>
                <li>
                  <button
                    onClick={navigateToAIAssistant}
                    className="text-slate-400 hover:text-white text-left"
                  >
                    Konsultasi
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">
                Dapatkan Aplikasinya
              </h4>
              <p className="text-slate-400 mb-4">
                Nikmati kemudahan lebih dengan aplikasi mobile.
              </p>
              <div className="flex space-x-2">
                <a href="#">
                  <img
                    src="https://placehold.co/120x40/4B5563/FFFFFF?text=Google+Play"
                    alt="Google Play"
                    className="rounded"
                  />
                </a>
                <a href="#">
                  <img
                    src="https://placehold.co/120x40/4B5563/FFFFFF?text=App+Store"
                    alt="App Store"
                    className="rounded"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-slate-700 text-center text-slate-500 text-sm">
            &copy; <span id="year"></span> MonneCare. Semua Hak Cipta
            Dilindungi.
          </div>
        </div>
      </footer>
    </>
  );
};
