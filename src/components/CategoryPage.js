import React, { useState, useEffect } from "react";
import { productDatabase } from "../data/products.js";
import { allSymptomsData, categoryDetails } from "../data/symptoms.js";

export const CategoryPage = ({
  categoryId,
  navigateToHome,
  onProductClick,
  addToCart,
  cartItemCount,
  onCartIconClick,
  handleSearch,
}) => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const products = productDatabase[categoryId] || [];
  const filters = allSymptomsData[categoryId] || [];
  const details = categoryDetails[categoryId] || { title: "Kategori" };

  useEffect(() => {
    setFilteredProducts(products);
    setSelectedFilters([]);
  }, [categoryId, products]);

  useEffect(() => {
    if (selectedFilters.length === 0) {
      setFilteredProducts(products);
      return;
    }
    const newFilteredProducts = products.filter((product) =>
      selectedFilters.some((filter) =>
        product.tags.includes(filter.toLowerCase())
      )
    );
    setFilteredProducts(newFilteredProducts);
  }, [selectedFilters, products]);

  const handleFilterToggle = (filter) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  const ProductCard = ({ product }) => (
    <div
      onClick={() => onProductClick(product)}
      className="bg-white border border-slate-200 rounded-2xl p-4 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
    >
      <div className="flex-grow">
        <img
          src={`${process.env.PUBLIC_URL}/${product.image}`} // Diperbaiki
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
          className="bg-blue-50 text-blue-600 font-semibold px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors"
        >
          Beli
        </button>
      </div>
    </div>
  );

  const FilterButton = ({ filter, isSelected, onToggle }) => (
    <button
      onClick={() => onToggle(filter)}
      className={`px-4 py-2 rounded-full border-2 transition-all duration-200 text-sm font-semibold ${
        isSelected
          ? "bg-blue-600 border-blue-600 text-white shadow-md"
          : "bg-white border-slate-300 text-slate-700 hover:border-blue-500 hover:text-blue-600"
      }`}
    >
      {filter}
    </button>
  );

  return (
    <div className="bg-slate-50 min-h-screen">
      <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-40 border-b border-slate-200">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <button
            onClick={navigateToHome}
            className="text-xl font-bold text-slate-800 hover:text-blue-600"
          >
            MonneCare
          </button>
          <button
            onClick={onCartIconClick}
            className="relative p-2 rounded-full hover:bg-slate-100"
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
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            {cartItemCount > 0 && (
              <span className="absolute top-0 right-0 block h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </header>
      <div className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl font-extrabold text-slate-900">
            Kategori: {details.title}
          </h1>
          <p className="mt-2 text-lg text-slate-600">
            {details.description || "Temukan produk yang tepat untuk Anda."}
          </p>
        </div>
      </div>
      <div className="container mx-auto px-6 py-10">
        {filters.length > 0 && (
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mb-10">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              {details.filterTitle}
            </h2>
            <p className="text-slate-500 mb-6">{details.filterDescription}</p>
            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => (
                <FilterButton
                  key={filter}
                  filter={filter}
                  isSelected={selectedFilters.includes(filter)}
                  onToggle={handleFilterToggle}
                />
              ))}
            </div>
          </div>
        )}
        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            {selectedFilters.length > 0
              ? "Rekomendasi Produk Untuk Anda"
              : `Semua Produk ${details.title}`}
          </h2>
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <h3 className="text-xl font-bold text-slate-700">
                Produk Tidak Ditemukan
              </h3>
              <p className="text-slate-500 mt-2">
                Coba ubah filter atau kembali ke beranda.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
