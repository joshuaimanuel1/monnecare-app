import React, { useState } from "react";

// Komponen untuk Halaman Detail Produk
export const ProductDetailPage = ({ product, onBack, addToCart }) => {
  const [activeTab, setActiveTab] = useState("description");

  if (!product || !product.details) {
    // Ditambahkan pengecekan untuk product.details
    return (
      <div className="text-center p-10">
        <p>Detail produk tidak ditemukan. Silakan kembali.</p>
        <button onClick={onBack} className="mt-4 text-blue-600 font-semibold">
          Kembali
        </button>
      </div>
    );
  }

  const TabButton = ({ id, title }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`px-6 py-3 font-semibold rounded-t-lg transition-colors ${
        activeTab === id
          ? "bg-white text-blue-600 border-b-2 border-blue-600"
          : "bg-transparent text-slate-500 hover:bg-slate-100"
      }`}
    >
      {title}
    </button>
  );

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6 py-10">
        <button
          onClick={onBack}
          className="text-sm font-semibold text-blue-600 hover:underline flex items-center mb-6"
        >
          &larr; Kembali ke Daftar Produk
        </button>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Kolom Gambar Produk */}
            <div className="flex justify-center items-center p-4">
              <img
                src={product.image}
                alt={product.name}
                className="max-w-full h-auto max-h-80 object-contain"
              />
            </div>

            {/* Kolom Info Produk */}
            <div>
              <h1 className="text-4xl font-extrabold text-slate-900">
                {product.name}
              </h1>
              <p className="text-3xl font-bold text-blue-600 mt-4">
                {product.price}
              </p>
              <button
                onClick={() => addToCart(product)}
                className="w-full mt-8 bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center text-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-3"
                >
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
                Tambah ke Keranjang
              </button>
            </div>
          </div>
        </div>

        {/* Bagian Detail dengan Tab */}
        <div className="mt-10">
          <div className="border-b border-slate-200">
            <nav className="flex -mb-px">
              <TabButton id="description" title="Deskripsi" />
              <TabButton id="dosage" title="Aturan Pakai" />
              <TabButton id="composition" title="Komposisi" />
              <TabButton id="warning" title="Peringatan" />
            </nav>
          </div>
          <div className="bg-white p-8 rounded-b-2xl">
            <div className={activeTab === "description" ? "block" : "hidden"}>
              <p className="text-slate-600 leading-relaxed">
                {product.details.description}
              </p>
            </div>
            <div className={activeTab === "dosage" ? "block" : "hidden"}>
              <p className="text-slate-600 leading-relaxed">
                {product.details.dosage}
              </p>
            </div>
            <div className={activeTab === "composition" ? "block" : "hidden"}>
              <p className="text-slate-600 leading-relaxed">
                {product.details.composition}
              </p>
            </div>
            <div className={activeTab === "warning" ? "block" : "hidden"}>
              <p className="text-slate-600 leading-relaxed">
                {product.details.warning}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
