import React, { useState } from "react";

export const LoginPage = ({ onLogin, navigateToRegister, navigateToHome }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulasi login: di aplikasi nyata, ini akan memanggil API
    if (email && password) {
      onLogin({ name: email.split("@")[0] }); // Ambil nama dari email
    } else {
      alert("Silakan isi email dan kata sandi.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md">
        <button
          onClick={navigateToHome}
          className="text-2xl font-bold text-blue-600 flex items-center justify-center mb-8"
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
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-2">
            Selamat Datang Kembali
          </h2>
          <p className="text-center text-slate-500 mb-6">
            Silakan masuk ke akun Anda.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-slate-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="contoh@email.com"
              />
            </div>
            <div className="mb-6">
              <label className="block text-slate-700 font-semibold mb-2">
                Kata Sandi
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Masuk
            </button>
          </form>
          <p className="text-center text-slate-500 mt-6">
            Belum punya akun?{" "}
            <button
              onClick={navigateToRegister}
              className="font-semibold text-blue-600 hover:underline"
            >
              Daftar di sini
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};
