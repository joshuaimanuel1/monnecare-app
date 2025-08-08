import React from "react";

// Komponen untuk Halaman Hasil Pencarian
export const SearchPage = ({
  searchQuery,
  searchResults,
  onProductClick,
  addToCart,
  navigateToHome,
}) => {
  // Kartu produk yang digunakan di halaman ini
  const ProductCard = ({ product }) => (
    <div
      onClick={() => onProductClick(product)}
      className="bg-white border border-slate-200 rounded-2xl p-4 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
    >
      <div className="flex-grow">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-contain rounded-lg mb-4"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://placehold.co/400x400/e2e8f0/475569?text=${product.name.replace(
              /\s/g,
              "+"
            )}`;
          }}
        />
        <h3 className="font-bold text-slate-800 text-base">{product.name}</h3>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <p className="font-extrabold text-blue-600 text-lg">{product.price}</p>
        <button
          onClick={(e) => {
            e.stopPropagation();
            addToCart(product);
          }}
          className="bg-blue-50 text-blue-600 font-semibold px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors flex items-center"
        >
          Beli
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 py-8">
          <button
            onClick={navigateToHome}
            className="text-sm font-semibold text-blue-600 hover:underline flex items-center mb-4"
          >
            &larr; Kembali ke Beranda
          </button>
          <h1 className="text-4xl font-extrabold text-slate-900">
            Hasil Pencarian
          </h1>
          <p className="mt-2 text-lg text-slate-600">
            Menampilkan hasil untuk:{" "}
            <span className="font-bold text-blue-600">"{searchQuery}"</span>
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-10">
        {searchResults.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {searchResults.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center bg-white p-10 rounded-2xl border border-slate-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-auto text-slate-400 mb-4"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <h3 className="text-xl font-bold text-slate-700">
              Produk Tidak Ditemukan
            </h3>
            <p className="text-slate-500 mt-2 max-w-md mx-auto">
              Maaf, kami tidak dapat menemukan produk yang cocok dengan kata
              kunci Anda. Coba gunakan kata kunci lain.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
