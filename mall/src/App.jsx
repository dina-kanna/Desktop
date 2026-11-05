
import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Routes, Route } from 'react-router-dom'

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import AuthModal from "./components/AuthModal";
import CartDrawer from "./components/CartDrawer";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Stores from "./pages/Stores";
import Offers from "./pages/Offers";
import Contact from "./pages/Contact";

export default function App() {
  const location = useLocation();

  // Loading only when website initially opens at Home
  const [loading, setLoading] = useState(
    () => window.location.pathname === "/"
  );

  const [cartOpen, setCartOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (!loading) return;

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, [loading]);

  // Add to cart
  const addToCart = (product) => {
    setCart((previous) => {
      const existing = previous.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return previous.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...previous, { ...product, quantity: 1 }];
    });

    setCartOpen(true);
  };

  // Increase quantity
  const increaseQuantity = (id) => {
    setCart((previous) =>
      previous.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    setCart((previous) =>
      previous
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove item
  const removeItem = (id) => {
    setCart((previous) =>
      previous.filter((item) => item.id !== id)
    );
  };

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Initial Home loading screen only
  if (loading && location.pathname === "/") {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-white">

      <Navbar
        cartCount={cartCount}
        onCartOpen={() => setCartOpen(true)}
        onAuthOpen={() => setAuthOpen(true)}
      />

      <main>
        <Routes>
          <Route
            path="/"
            element={<Home onAddToCart={addToCart} />}
          />

          <Route
            path="/shop"
            element={<Shop onAddToCart={addToCart} />}
          />

          <Route
            path="/stores"
            element={<Stores />}
          />

          <Route
            path="/offers"
            element={<Offers />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="*"
            element={
              <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
                <h1 className="text-8xl font-black text-amber-600">
                  404
                </h1>
                <h2 className="mt-5 text-3xl font-bold">
                  Page Not Found
                </h2>
                <a
                  href="/"
                  className="mt-8 rounded-xl bg-black px-8 py-4 font-bold text-white hover:bg-amber-600"
                >
                  Back To Home
                </a>
              </div>
            }
          />
        </Routes>
      </main>

      <Footer />

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        onIncrease={increaseQuantity}
        onDecrease={decreaseQuantity}
        onRemove={removeItem}
      />

      <AuthModal
        open={authOpen}
        onClose={() => setAuthOpen(false)}
      />

    </div>
  );
}
