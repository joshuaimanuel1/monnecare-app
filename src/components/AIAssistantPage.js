import React, { useState, useEffect, useRef } from "react";
import { Header } from "./Header";
import { productDatabase } from "../data/products.js";

export const AIAssistantPage = (props) => {
  const [messages, setMessages] = useState([
    {
      role: "model",
      parts: [
        {
          text: "Halo! Saya Asisten Apoteker AI MonneCare. Ada yang bisa saya bantu? Anda bisa bertanya tentang gejala ringan, informasi obat, atau rekomendasi produk.",
        },
      ],
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", parts: [{ text: input }] };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    const productListForAI = Object.values(productDatabase)
      .flat()
      .map((p) => `- ${p.name} (Harga: ${p.price})`)
      .join("\n");

    // --- STRUKTUR PAYLOAD DAN PROMPT YANG DIPERBAIKI ---
    const systemInstruction = {
      parts: [
        {
          text: `
                Anda adalah "Asisten Apoteker MonneCare", seorang AI yang sangat ahli, ramah, dan profesional.
                PERATURAN UTAMA:
                1.  PERAN: Anda adalah apoteker virtual. Jangan keluar dari peran ini.
                2.  JAWABAN: Jawab pertanyaan pengguna secara langsung dan relevan. Jika pengguna bertanya tentang gejala, berikan rekomendasi produk dari daftar yang tersedia.
                3.  REKOMENDASI PRODUK: Gunakan daftar produk di bawah ini sebagai SATU-SATUNYA sumber referensi Anda. Jangan merekomendasikan produk lain.
                4.  FORMAT: Gunakan format yang jelas (poin atau nomor).
                5.  DISCLAIMER: WAJIB akhiri SETIAP jawaban dengan disclaimer: "Penting: Informasi ini tidak menggantikan nasihat medis dari dokter. Untuk kondisi serius, segera hubungi dokter."
                
                DAFTAR PRODUK TERSEDIA:
                ${productListForAI}
            `,
        },
      ],
    };

    // Mengirim histori percakapan TANPA instruksi sistem
    const conversationHistory = newMessages.map(({ role, parts }) => ({
      role,
      parts,
    }));

    try {
      // Menempatkan systemInstruction di luar 'contents' sesuai aturan API
      const payload = {
        contents: conversationHistory,
        systemInstruction: systemInstruction,
      };
      const apiKey = "";
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorBody = await response.text();
        console.error("API Error Body:", errorBody);
        throw new Error(`API error: ${response.statusText}`);
      }

      const result = await response.json();

      if (
        result.candidates &&
        result.candidates.length > 0 &&
        result.candidates[0].content &&
        result.candidates[0].content.parts
      ) {
        const aiResponse = result.candidates[0].content;
        setMessages((prev) => [...prev, aiResponse]);
      } else {
        console.error("Invalid AI response structure:", result);
        throw new Error("No valid response from AI.");
      }
    } catch (error) {
      console.error("Error fetching AI response:", error);
      const errorMessage = {
        role: "model",
        parts: [
          {
            text: "Maaf, terjadi sedikit gangguan pada sistem AI kami. Silakan coba beberapa saat lagi.",
          },
        ],
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-slate-50">
      <Header {...props} />
      <div className="flex-grow container mx-auto p-4 flex flex-col">
        <div className="bg-white flex-grow rounded-2xl shadow-lg border border-slate-200 flex flex-col">
          <div className="p-4 border-b border-slate-200">
            <h1 className="text-xl font-bold text-slate-800 text-center">
              Konsultasi dengan Asisten AI
            </h1>
          </div>
          <div className="p-3 bg-yellow-50 border-b border-yellow-200 text-center text-sm text-yellow-800">
            <strong>Penting:</strong> Asisten AI ini hanya untuk tujuan
            informasi dan tidak menggantikan nasihat medis profesional.
          </div>
          <div className="flex-grow p-6 space-y-4 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-lg px-4 py-3 rounded-2xl whitespace-pre-wrap ${
                    msg.role === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 text-slate-800"
                  }`}
                >
                  {msg.parts[0].text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-100 text-slate-800 px-4 py-3 rounded-2xl">
                  <span className="animate-pulse">Mengetik...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-4 border-t border-slate-200 bg-white rounded-b-2xl">
            <div className="flex items-center space-x-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) =>
                  e.key === "Enter" && !isLoading && handleSend()
                }
                placeholder="Ketik pertanyaan Anda di sini..."
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 disabled:bg-blue-300"
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
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
