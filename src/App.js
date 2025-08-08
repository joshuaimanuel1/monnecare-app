import React, { useState } from "react";
import { HomePage } from "./components/HomePage";
import { CategoryPage } from "./components/CategoryPage";
import { ProductDetailPage } from "./components/ProductDetailPage";
import { SearchPage } from "./components/SearchPage";
import { LoginPage } from "./components/LoginPage";
import { RegisterPage } from "./components/RegisterPage";
import { AIAssistantPage } from "./components/AIAssistantPage";
import { ShoppingCart } from "./components/ShoppingCart";
import { productDatabase } from "./data/products.js";
import "./index.css";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [currentCategory, setCurrentCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [user, setUser] = useState(null);

  // --- FUNGSI-FUNGSI (Tidak berubah) ---
  const addToCart = (product) => {
    setCartItems((prev) => {
      const exist = prev.find((x) => x.id === product.id);
      if (exist) {
        return prev.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : x
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
    setIsCartOpen(true);
  };
  const updateQuantity = (productId, quantity) => {
    if (quantity === 0) {
      removeFromCart(productId);
    } else {
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };
  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };
  const calculateTotal = () => {
    const total = cartItems.reduce(
      (sum, item) =>
        sum + parseFloat(item.price.replace(/[^0-9]/g, "")) * item.quantity,
      0
    );
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(total);
  };
  const handleSearch = (query) => {
    if (!query.trim()) return;
    setSearchQuery(query);
    const allProducts = Object.values(productDatabase).flat();
    const results = allProducts.filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
    setCurrentPage("search");
    window.scrollTo(0, 0);
  };
  const handleLogin = (userData) => {
    setUser(userData);
    navigateToHome();
  };
  const handleRegister = (userData) => {
    setUser(userData);
    navigateToHome();
  };
  const handleLogout = () => {
    setUser(null);
    navigateToHome();
  };

  // --- LOGIKA NAVIGASI ---
  const navigateToCategory = (categoryId) => {
    setCurrentCategory(categoryId);
    setCurrentPage("category");
    window.scrollTo(0, 0);
  };
  const navigateToHome = () => {
    setCurrentPage("home");
    window.scrollTo(0, 0);
  };
  const navigateToProductDetail = (product) => {
    setSelectedProduct(product);
    setCurrentPage("productDetail");
    window.scrollTo(0, 0);
  };
  const navigateBackToCategory = () => {
    setSelectedProduct(null);
    setCurrentPage("category");
    window.scrollTo(0, 0);
  };
  const navigateToLogin = () => {
    setCurrentPage("login");
    window.scrollTo(0, 0);
  };
  const navigateToRegister = () => {
    setCurrentPage("register");
    window.scrollTo(0, 0);
  };
  const navigateToAIAssistant = () => {
    setCurrentPage("aiAssistant");
    window.scrollTo(0, 0);
  };

  // --- RENDER HALAMAN ---
  const renderPage = () => {
    const commonProps = {
      user,
      onLogout: handleLogout,
      cartItemCount: cartItems.reduce((sum, item) => sum + item.quantity, 0),
      onCartIconClick: () => setIsCartOpen(true),
      addToCart: addToCart,
      handleSearch: handleSearch,
      onProductClick: navigateToProductDetail,
      navigateToLogin,
      navigateToRegister,
      navigateToHome,
      navigateToAIAssistant,
    };

    switch (currentPage) {
      case "login":
        return <LoginPage {...commonProps} onLogin={handleLogin} />;
      case "register":
        return <RegisterPage {...commonProps} onRegister={handleRegister} />;
      case "category":
        return <CategoryPage {...commonProps} categoryId={currentCategory} />;
      case "productDetail":
        return (
          <ProductDetailPage
            {...commonProps}
            product={selectedProduct}
            onBack={navigateBackToCategory}
          />
        );
      case "search":
        return (
          <SearchPage
            {...commonProps}
            searchQuery={searchQuery}
            searchResults={searchResults}
          />
        );
      case "aiAssistant":
        return <AIAssistantPage {...commonProps} />;
      default:
        return (
          <HomePage {...commonProps} navigateToCategory={navigateToCategory} />
        );
    }
  };

  return (
    <>
      {renderPage()}
      <ShoppingCart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        calculateTotal={calculateTotal}
      />
    </>
  );
}
