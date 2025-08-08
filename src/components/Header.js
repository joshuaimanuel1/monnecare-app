import React, { useState } from "react";

// Komponen Bar Pencarian
const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md hidden md:flex">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Cari nama obat atau vitamin..."
        className="w-full px-4 py-2 border border-slate-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 rounded-r-lg hover:bg-blue-700"
      >
        Cari
      </button>
    </form>
  );
};

// Komponen Header Terpusat
export const Header = ({
  user,
  onLogout,
  onCartIconClick,
  cartItemCount,
  handleSearch,
  navigateToLogin,
  navigateToRegister,
  navigateToHome,
}) => {
  return (
    <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-40 border-b border-slate-200">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center gap-4">
        <button
          onClick={navigateToHome}
          className="text-2xl font-bold text-blue-600 flex items-center flex-shrink-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            <path d="M3.22 12H9.5l.7-1.5L11.5 14l1.5-3 1.5 3h5.27" />
          </svg>
          MonneCare
        </button>

        <SearchBar onSearch={handleSearch} />

        <div className="flex items-center space-x-4 flex-shrink-0">
          {user ? (
            <>
              <span className="hidden sm:inline font-semibold text-slate-700">
                Halo, {user.name}
              </span>
              <button
                onClick={onLogout}
                className="bg-slate-100 text-slate-700 font-semibold px-4 py-2 rounded-lg hover:bg-slate-200"
              >
                Keluar
              </button>
            </>
          ) : (
            <>
              <button
                onClick={navigateToLogin}
                className="hidden sm:inline-block bg-blue-50 text-blue-600 font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-100 transition-all"
              >
                Masuk
              </button>
              <button
                onClick={navigateToRegister}
                className="bg-blue-600 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-all shadow-sm"
              >
                Daftar
              </button>
            </>
          )}
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
      </div>
    </header>
  );
};
