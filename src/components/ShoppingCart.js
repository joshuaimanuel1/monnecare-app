import React from "react";

// Komponen untuk Sidebar Keranjang Belanja
export const ShoppingCart = ({
  isOpen,
  cartItems,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
  calculateTotal,
}) => {
  if (!isOpen) return null;

  return (
    // Lapisan overlay gelap di belakang sidebar
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50"
      onClick={onClose}
    >
      {/* Kontainer sidebar */}
      <div
        className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out"
        onClick={(e) => e.stopPropagation()} // Mencegah penutupan saat mengklik di dalam sidebar
      >
        {/* Header Sidebar */}
        <div className="flex justify-between items-center p-6 border-b border-slate-200">
          <h2 className="text-2xl font-bold text-slate-800">Keranjang Anda</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100"
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
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Daftar Item di Keranjang */}
        <div className="flex-grow p-6 overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="text-center text-slate-500 h-full flex flex-col justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mb-4 text-slate-400"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              <p>Keranjang Anda masih kosong.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-contain rounded-lg border border-slate-200"
                  />
                  <div className="flex-grow">
                    <h3 className="font-semibold text-slate-800">
                      {item.name}
                    </h3>
                    <p className="text-sm text-blue-600 font-bold">
                      {item.price}
                    </p>
                    {/* Kontrol Kuantitas */}
                    <div className="flex items-center mt-2">
                      <button
                        onClick={() =>
                          onUpdateQuantity(item.id, item.quantity - 1)
                        }
                        className="w-7 h-7 border rounded-md hover:bg-slate-100"
                      >
                        -
                      </button>
                      <span className="px-4 font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          onUpdateQuantity(item.id, item.quantity + 1)
                        }
                        className="w-7 h-7 border rounded-md hover:bg-slate-100"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="p-2 text-slate-400 hover:text-red-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Sidebar (Total & Checkout) */}
        {cartItems.length > 0 && (
          <div className="p-6 border-t border-slate-200">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold text-slate-700">
                Total
              </span>
              <span className="text-xl font-bold text-slate-900">
                {calculateTotal()}
              </span>
            </div>
            <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Lanjut ke Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
